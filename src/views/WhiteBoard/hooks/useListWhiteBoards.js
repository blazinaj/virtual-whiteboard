import React from "react";
import useQuery from "../../../hooks/useQuery";
import {listCanvass, listWhiteBoards} from "../../../graphql/queries";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";

export const useListWhiteBoards = ({selectedId, setSelectedId}) => {

  const query = useQuery({query: listCanvass});

  const display =
    <>
      <List>
        {
          query.list &&
            query.list.map(({id}, index) =>
              <ListItem
                style={{backgroundColor: selectedId === id ? "lightBlue" : undefined}}
                key={index}
                button
                onClick={() => setSelectedId(id)}
              >
                {id}
              </ListItem>
            )
        }
      </List>
    </>;

  return {
    display,
    list: query.list,
    reset: query.reset
  }

};