import React, {useState, useEffect, useCallback, useContext} from "react";
import {API, graphqlOperation} from "aws-amplify";

const useQuery = (
  {
    query
  }
) => {

  const [nextToken, setNextToken] = useState(null);
  const [list, setList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [filters, setFilters] = useState(undefined);

  useEffect(() => {
    fetchOperation(filters);
  }, [nextToken]);

  const reset = (filters) => {
    setList([]);
    setNextToken(null);
    fetchOperation(filters);
  };

  const fetchOperation = (filters = undefined) => {
    setIsLoading(true);
    API.graphql(
      graphqlOperation(
        query,
        {
          limit: 50,
          nextToken: nextToken ? nextToken : undefined
        }
      )
    ).then((data) => {

      const typeName = Object.keys(data.data)[0];

      if (data && data.data && data.data[typeName] && data.data[typeName].nextToken) {
        setNextToken(data && data.data && data.data[typeName] && data.data[typeName].nextToken);
      } else {
        setIsLoading(false);
      }

      let listArray = data && data.data && data.data[typeName] && data.data[typeName].items;

      if (listArray) {
        setList(list => list.concat(listArray));
      }
    });
  };


  return {
    list,
    setList,
    nextToken,
    reset,
    setFilters,
    isLoading
  };
};

export default useQuery;