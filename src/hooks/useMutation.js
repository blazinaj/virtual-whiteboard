import {API, graphqlOperation} from "aws-amplify";

export const useMutation = ({mutation}) => {

  const CreateMutation = async (input) => {

    return await API.graphql(graphqlOperation(mutation, {input: input})).then(({data}) => {
      return (data && data[Object.keys(data)[0]]);
    }).catch((err) => {
      console.log(err);
    });
  };

  const UpdateMutation = async (input) => {
    return await API.graphql(graphqlOperation(mutation, {input: input})).then(({data}) => {
      return (data && data[Object.keys(data)[0]]);
    }).catch((err) => console.log("Error: Mutation " + JSON.stringify(err)));
  };

  const DeleteMutation = async (input) => {
    return API.graphql(graphqlOperation(mutation, {input: input})).then(({data}) => {
      return (data && data[Object.keys(data)[0]]);
    }).catch((err) => console.log("Error: Mutation " + JSON.stringify(err)));
  };

  return {
    editItem: UpdateMutation,
    deleteItem: DeleteMutation,
    createItem: CreateMutation,
  }
};