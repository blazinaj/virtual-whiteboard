import {graphqlOperation} from "@aws-amplify/api";
import {API} from "aws-amplify";

/**
 * Performs an Amplify API Appsync graphql operation
 * @param graphql
 * @param variables
 * @returns {Promise<GraphQLResult> | Observable<object>}
 */
export const api = (graphql, variables) => {
  // Save updated canvas in the database
  return API.graphql(graphqlOperation(graphql, variables));
};