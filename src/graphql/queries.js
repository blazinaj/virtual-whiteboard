/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getCanvas = /* GraphQL */ `
  query GetCanvas($id: ID!) {
    getCanvas(id: $id) {
      id
      clientId
      data
      createdAt
      updatedAt
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
        createdAt
        updatedAt
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
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
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
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getUser = /* GraphQL */ `
  query GetUser($id: ID!) {
    getUser(id: $id) {
      id
      firstName
      lastName
      nickName
      email
      createdAt
      updatedAt
      owner
    }
  }
`;
export const listUsers = /* GraphQL */ `
  query ListUsers(
    $filter: ModelUserFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        firstName
        lastName
        nickName
        email
        createdAt
        updatedAt
        owner
      }
      nextToken
    }
  }
`;
