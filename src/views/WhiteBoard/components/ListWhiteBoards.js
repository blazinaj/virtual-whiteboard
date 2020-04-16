import React from "react";
import {useListWhiteBoards} from "../hooks/useListWhiteBoards";

const ListWhiteBoards = ({selectedId, setSelectedId}) => {
  const listWhiteBoards = useListWhiteBoards({selectedId, setSelectedId});
  return listWhiteBoards.display;
};

export default ListWhiteBoards;