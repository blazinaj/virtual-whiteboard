import React, { useRef, useState, useEffect } from "react";

import CanvasDraw from "./RCD";
import uuid from 'uuid/v4'

import { API, graphqlOperation } from 'aws-amplify'
import { onUpdateCanvas } from './graphql/subscriptions'
import { updateCanvas, createCanvas } from './graphql/mutations'

const colors = [
  '#D50000',
  '#AA00FF',
  '#2962FF',
  '#18FFFF',
  '#00C853',
  '#FFD600',
  '#FF6D00',
  '#000000'
];

function rand() {
  return colors[~~(colors.length * Math.random())];
}

const Canvas = (props) => {

  const [brushColor, setBrushColor] = useState(rand());
  const [canvasHeight, setCanvasHeight] = useState(500);
  const [canvasWidth, setCanvasWidth] = useState(500);
  const [brushRadius, setBrushRadius] = useState(4);
  const [lazyRadius, setLazyRadius] = useState(8);

  const canvasRef = useRef(null);
  // const [canvasRef, setCanvasRef] = useState("");

  let lineLength = 0;
  const id = '123';
  const clientId = uuid();
  const canvasInfo = 'tempcanvas';

  useEffect(() => {
    const canvas = {
      id: id,
      clientId: clientId,
      data: {
        canvasHeight,
        canvasWidth,
        brushRadius,
        lazyRadius,
        lines: []
      }
    };

    // Create the canvas. If canvas is already created, retrieve the data & draw previous canvas
    API.graphql(graphqlOperation(createCanvas, { input: canvas }))
        .then(d => console.log('canvas created :', d))
        .catch(err => {
          if (err.errors[0].data.id === id) {
            const d = err.errors[0].data.data;
            canvasRef.current.loadSaveData(d)
          }
        });

    const handleDraw = (e) => {
      // If we are clicking on a button, do not update anything
      if (e.target.name === 'clearbutton') return;
      setBrushColor(rand());

      const data = canvasRef.current.getSaveData();
      const p = JSON.parse(data);
      const length = p.lines.length;
      lineLength = length;

      const canvas = {
        id: id,
        clientId: clientId,
        data
      };

      // Save updated canvas in the database
      API.graphql(graphqlOperation(updateCanvas, { input: canvas }))
          .then(c => {
            console.log('canvas updated!')
          })
          .catch(err => console.log('error creating: ', err))
    };

    window.addEventListener('mouseup', (e) => {
      handleDraw(e)
    });

    window.addEventListener('touchend', (e) => {
      handleDraw(e)
    });

    API.graphql(graphqlOperation(onUpdateCanvas))
        .subscribe({
          next: (d) => {
            const data = JSON.parse(d.value.data.onUpdateCanvas.data);
            const length = data.lines.length;
            if (length === 0) {
              // If there is no canvas data, clear the canvas
              const data = canvasRef.current.getSaveData();
              const parsedData = JSON.parse(data);
              const newData = {
                ...parsedData,
                lines: []
              };
              const newCanvas = JSON.stringify(newData);
              canvasRef.current.loadSaveData(newCanvas);
              return
            }
            if (lineLength === length || length === Number(0)) return;
            // Draw new lines to canvas
            const last = data.lines[length -1];
            canvasRef.current.simulateDrawingLines({ lines: [last] })
          }
        })
  }, []);

  const clear = () => {
    const data = canvasRef.current.getSaveData();
    const parsedData = JSON.parse(data);
    const newData = {
      ...parsedData,
      lines: []
    };
    const newCanvas = JSON.stringify(newData);
    canvasRef.current.loadSaveData(newCanvas);
    const canvas = {
      id: id,
      clientId: clientId,
      data: newCanvas
    };
    API.graphql(graphqlOperation(updateCanvas, { input: canvas }))
        .then(c => {
          console.log('canvas cleared!')
        })
        .catch(err => console.log('error creating: ', err))
  };

  return (
    <div>
      <button name='clearbutton' onClick={() => clear()}>Clear</button>
      <CanvasDraw
        canvasWidth={canvasWidth}
        canvasHeight={canvasHeight}
        brushRadius={brushRadius}
        lazyRadius={lazyRadius}
        brushColor={brushColor}
        ref={canvas => canvasRef.current = canvas}
      />
    </div>
  );
};

export default Canvas