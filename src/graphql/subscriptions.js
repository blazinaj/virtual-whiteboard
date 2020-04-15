/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateCanvas = /* GraphQL */ `
  subscription OnCreateCanvas {
    onCreateCanvas {
      id
      clientId
      data
    }
  }
`;
export const onUpdateCanvas = /* GraphQL */ `
  subscription OnUpdateCanvas {
    onUpdateCanvas {
      id
      clientId
      data
    }
  }
`;
export const onDeleteCanvas = /* GraphQL */ `
  subscription OnDeleteCanvas {
    onDeleteCanvas {
      id
      clientId
      data
    }
  }
`;
export const onCreateWhiteBoard = /* GraphQL */ `
  subscription OnCreateWhiteBoard {
    onCreateWhiteBoard {
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
export const onUpdateWhiteBoard = /* GraphQL */ `
  subscription OnUpdateWhiteBoard {
    onUpdateWhiteBoard {
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
export const onDeleteWhiteBoard = /* GraphQL */ `
  subscription OnDeleteWhiteBoard {
    onDeleteWhiteBoard {
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
