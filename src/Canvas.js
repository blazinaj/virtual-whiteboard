import React, { useRef, useState, useEffect } from "react";

import CanvasDraw from "./RCD";
import uuid from 'uuid/v4'

import { API, graphqlOperation } from 'aws-amplify'
import { onUpdateCanvas } from './graphql/subscriptions'
import { updateCanvas, createCanvas } from './graphql/mutations'
import ToolbarDrawer from "./views/Toolbar/components/ToolbarDrawer";
import Drawer from "@material-ui/core/Drawer";
import Fab from "@material-ui/core/Fab";
import {Cancel, Delete, List, Save} from "@material-ui/icons";
import Button from "@material-ui/core/Button";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import clsx from "clsx";
import {getCanvasData} from "./views/WhiteBoard/functions/getCanvasData";
import {colors, getRandomColor} from "./views/WhiteBoard/functions/getRandomColor";
import {api} from "./functions/api";
import {get} from "./functions/get";
import {saveCanvas} from "./views/WhiteBoard/functions/saveCanvas";
import {getCanvas} from "./graphql/queries";
import {createCanvasData} from "./views/WhiteBoard/functions/createCanvasData";

const Canvas = (props) => {

  const [brushColor, setBrushColor] = useState(getRandomColor());
  const [canvasHeight, setCanvasHeight] = useState(500);
  const [canvasWidth, setCanvasWidth] = useState(1000);
  const [brushRadius, setBrushRadius] = useState(4);
  const [lazyRadius, setLazyRadius] = useState(8);

  const [hideGrid, setHideGrid] = useState(false);

  const canvasRef = useRef(null);

  const [selectedId, setSelectedId] = useState("123");

  let lineLength = 0;
  const clientId = uuid();
  const canvasInfo = 'tempcanvas';

  useEffect(() => {
    const canvas = {
      id: selectedId,
      clientId: clientId,
      data: {
        canvasHeight,
        canvasWidth,
        brushRadius,
        lazyRadius,
        lines: []
      }
    };

    /**
     * After an input, save the canvas state to the database
     * @param inputEvent
     */
    const handleDraw = (inputEvent) => {
      // If we are clicking on a button, do not update anything
      if (inputEvent.target.name === 'clearbutton') return;

      // Get data from the canvasRef
      let {rawData, lineLength} = getCanvasData(canvasRef);

      // Create the canvas object to be saved in the database
      const canvas = {
        id: selectedId,
        clientId: clientId,
        data: rawData
      };

      // Save updated canvas in the database
      saveCanvas(canvas);
    };

    // Event Listener for mouse clicks
    window.addEventListener('mouseup', (e) => {
      handleDraw(e)
    });

    // window.addEventListener('touchend', (e) => {
    //   handleDraw(e)
    // });
    //
    // window.addEventListener('pointerup', (e) => {
    //   handleDraw(e)
    // });

    API.graphql(graphqlOperation(onUpdateCanvas))
      .subscribe({
        next: (d) => {
          console.log("Retrieved subscription data: ", {data: d});
          const data = JSON.parse(d.value.data.onUpdateCanvas.data);
          const length = data.lines.length;
          if (length === 0) {
            // If there is no canvas data, clear the canvas
            console.log("No canvas data found in subscription, clearing canvas.");
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

          // If there are no new lines, return
          if (lineLength === length || length === Number(0)) return;

          // Draw new lines to canvas
          console.log("Drawing new lines to canvas");
          const last = data.lines[length -1];
          canvasRef.current.simulateDrawingLines({ lines: [last] })
        }
      })
  }, [selectedId]);

  useEffect(() => {
    get(getCanvas, {id: selectedId}).then((canvas) => {
      createCanvasData(canvas.data, canvasRef)
    })
  }, []);

  const clear = () => {
    console.log("Clearing Canvas..");
    const data = canvasRef.current.getSaveData();
    const parsedData = JSON.parse(data);
    const newData = {
      ...parsedData,
      lines: []
    };
    const newCanvas = JSON.stringify(newData);
    canvasRef.current.loadSaveData(newCanvas);
    const canvas = {
      id: selectedId,
      clientId: clientId,
      data: newCanvas
    };
    API.graphql(graphqlOperation(updateCanvas, { input: canvas }))
      .then(c => {
        console.log('canvas cleared!')
      })
      .catch(err => console.log('error creating: ', err))
  };

  const toolBarProps = {
    colors,
    selectedColor: brushColor,
    setSelectedColor: setBrushColor,
    clear,
    hideGrid,
    setHideGrid,
    brushRadius,
    setBrushRadius,
    selectedId,
    setSelectedId,
    canvas: {
      id: selectedId,
      clientId: clientId,
      data: {
        canvasHeight,
        canvasWidth,
        brushRadius,
        lazyRadius,
        lines: []
      }
    }
  };

  return (
    <div>
      <ToolbarDrawer
        {...toolBarProps}
        body={
          <>
            <CanvasDraw
              hideGrid={hideGrid}
              canvasWidth={canvasWidth}
              canvasHeight={canvasHeight}
              brushRadius={brushRadius}
              lazyRadius={lazyRadius}
              brushColor={brushColor}
              ref={canvas => canvasRef.current = canvas}
            />
          </>
        }
      />
    </div>
  );
};

export default Canvas