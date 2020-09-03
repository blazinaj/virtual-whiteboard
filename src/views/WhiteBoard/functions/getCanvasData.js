/**
 * Handles the parsing of canvas data.
 * Returns the data as a string?
 * @param canvasRef
 */
export const getCanvasData = (canvasRef) => {
  if (!canvasRef) {
    throw Error("Error getting canvas data. canvasRef cannot be null")
  }

  if (!canvasRef.current) {
    throw Error("Error getting canvas data. canvasRef.current cannot be null")
  }

  const data = canvasRef.current.getSaveData();
  const rawData = canvasRef.current.getSaveData();
  const parsedData = JSON.parse(data);
  const lineLength = parsedData.lines.length;

  return {
    rawData,
    parsedData,
    lineLength
  }
};