/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateCanvas = /* GraphQL */ `
  subscription OnCreateCanvas {
    onCreateCanvas {
      id
      clientId
      data
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateCanvas = /* GraphQL */ `
  subscription OnUpdateCanvas {
    onUpdateCanvas {
      id
      clientId
      data
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteCanvas = /* GraphQL */ `
  subscription OnDeleteCanvas {
    onDeleteCanvas {
      id
      clientId
      data
      createdAt
      updatedAt
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
export const onUpdateWhiteBoard = /* GraphQL */ `
  subscription OnUpdateWhiteBoard {
    onUpdateWhiteBoard {
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
export const onDeleteWhiteBoard = /* GraphQL */ `
  subscription OnDeleteWhiteBoard {
    onDeleteWhiteBoard {
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
export const onCreateMessage = /* GraphQL */ `
  subscription OnCreateMessage {
    onCreateMessage {
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
export const onUpdateMessage = /* GraphQL */ `
  subscription OnUpdateMessage {
    onUpdateMessage {
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
export const onDeleteMessage = /* GraphQL */ `
  subscription OnDeleteMessage {
    onDeleteMessage {
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
export const onCreateUser = /* GraphQL */ `
  subscription OnCreateUser($owner: String!) {
    onCreateUser(owner: $owner) {
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
export const onUpdateUser = /* GraphQL */ `
  subscription OnUpdateUser($owner: String!) {
    onUpdateUser(owner: $owner) {
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
export const onDeleteUser = /* GraphQL */ `
  subscription OnDeleteUser($owner: String!) {
    onDeleteUser(owner: $owner) {
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
