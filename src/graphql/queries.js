/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getCanvas = /* GraphQL */ `
  query GetCanvas($id: ID!) {
    getCanvas(id: $id) {
      id
      clientId
      data
    }
  }
`;
export const listCanvass = /* GraphQL */ `
  query ListCanvass(
    $filter: ModelCanvasFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listCanvass(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        clientId
        data
      }
      nextToken
    }
  }
`;
export const getWhiteBoard = /* GraphQL */ `
  query GetWhiteBoard($id: ID!) {
    getWhiteBoard(id: $id) {
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
export const listWhiteBoards = /* GraphQL */ `
  query ListWhiteBoards(
    $filter: ModelWhiteBoardFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listWhiteBoards(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        canvas {
          id
          clientId
          data
        }
      }
      nextToken
    }
  }
`;
