export const createCanvasData = (data, canvasRef) => {
  canvasRef.current.simulateDrawingLines(JSON.parse(data))
};