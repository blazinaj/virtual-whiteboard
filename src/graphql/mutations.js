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
      createdAt
      updatedAt
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
      createdAt
      updatedAt
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
      createdAt
      updatedAt
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
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
      messages {
        items {
          id
          content
          rating
          whiteBoardID
          createdAt
          updatedAt
        }
        nextToken
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
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
      messages {
        items {
          id
          content
          rating
          whiteBoardID
          createdAt
          updatedAt
        }
        nextToken
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
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
      messages {
        items {
          id
          content
          rating
          whiteBoardID
          createdAt
          updatedAt
        }
        nextToken
      }
    }
  }
`;
export const createMessage = /* GraphQL */ `
  mutation CreateMessage(
    $input: CreateMessageInput!
    $condition: ModelMessageConditionInput
  ) {
    createMessage(input: $input, condition: $condition) {
      id
      content
      rating
      whiteBoard {
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
        messages {
          nextToken
        }
      }
      whiteBoardID
      createdAt
      updatedAt
      author {
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
  }
`;
export const updateMessage = /* GraphQL */ `
  mutation UpdateMessage(
    $input: UpdateMessageInput!
    $condition: ModelMessageConditionInput
  ) {
    updateMessage(input: $input, condition: $condition) {
      id
      content
      rating
      whiteBoard {
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
        messages {
          nextToken
        }
      }
      whiteBoardID
      createdAt
      updatedAt
      author {
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
  }
`;
export const deleteMessage = /* GraphQL */ `
  mutation DeleteMessage(
    $input: DeleteMessageInput!
    $condition: ModelMessageConditionInput
  ) {
    deleteMessage(input: $input, condition: $condition) {
      id
      content
      rating
      whiteBoard {
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
        messages {
          nextToken
        }
      }
      whiteBoardID
      createdAt
      updatedAt
      author {
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
  }
`;
export const createUser = /* GraphQL */ `
  mutation CreateUser(
    $input: CreateUserInput!
    $condition: ModelUserConditionInput
  ) {
    createUser(input: $input, condition: $condition) {
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
export const updateUser = /* GraphQL */ `
  mutation UpdateUser(
    $input: UpdateUserInput!
    $condition: ModelUserConditionInput
  ) {
    updateUser(input: $input, condition: $condition) {
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
export const deleteUser = /* GraphQL */ `
  mutation DeleteUser(
    $input: DeleteUserInput!
    $condition: ModelUserConditionInput
  ) {
    deleteUser(input: $input, condition: $condition) {
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
