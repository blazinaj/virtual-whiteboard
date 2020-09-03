import {api} from "./api";

/**
 * Performs a getQuery operation.
 * Returns the json object.
 * @param graphql
 * @param variables
 * @returns {Promise<>}
 */
export const get = async (graphql, variables) => {
  const {data} = await api(graphql, variables);

  if (!data) {
    throw Error("Error: No data retrieved from api operation")
  }

  return Object.entries(data)[0][1];
};