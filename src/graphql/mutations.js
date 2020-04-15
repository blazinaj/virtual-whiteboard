/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createCanvas = /* GraphQL */ `
  mutation CreateCanvas(
    $input: CreateCanvasInput!
    $condition: ModelCanvasConditionInput
  ) {
    createCanvas(input: $input, condition: $condition) {
      id
      clientId
      data
    }
  }
`;
export const updateCanvas = /* GraphQL */ `
  mutation UpdateCanvas(
    $input: UpdateCanvasInput!
    $condition: ModelCanvasConditionInput
  ) {
    updateCanvas(input: $input, condition: $condition) {
      id
      clientId
      data
    }
  }
`;
export const deleteCanvas = /* GraphQL */ `
  mutation DeleteCanvas(
    $input: DeleteCanvasInput!
    $condition: ModelCanvasConditionInput
  ) {
    deleteCanvas(input: $input, condition: $condition) {
      id
      clientId
      data
    }
  }
`;
export const createWhiteBoard = /* GraphQL */ `
  mutation CreateWhiteBoard(
    $input: CreateWhiteBoardInput!
    $condition: ModelWhiteBoardConditionInput
  ) {
    createWhiteBoard(input: $input, condition: $condition) {
      id
      name
      canvas {
        id
        clientId
        data
      }
    }
  }
`;
export const updateWhiteBoard = /* GraphQL */ `
  mutation UpdateWhiteBoard(
    $input: UpdateWhiteBoardInput!
    $condition: ModelWhiteBoardConditionInput
  ) {
    updateWhiteBoard(input: $input, condition: $condition) {
      id
      name
      canvas {
        id
        clientId
        data
      }
    }
  }
`;
export const deleteWhiteBoard = /* GraphQL */ `
  mutation DeleteWhiteBoard(
    $input: DeleteWhiteBoardInput!
    $condition: ModelWhiteBoardConditionInput
  ) {
    deleteWhiteBoard(input: $input, condition: $condition) {
      id
      name
      canvas {
        id
        clientId
        data
      }
    }
  }
`;
