import React, { useState, useEffect } from "react";
import {createWhiteBoard} from "../../../graphql/mutations";
import {useMutation} from "../../../hooks/useMutation";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

export const useCreateWhiteBoard = () => {

  const [name, setName]  = useState("");

  const mutationHook = useMutation({mutation: createWhiteBoard});

  const submit = () => {
    mutationHook.createItem({
      name
    })
  };

  const display =
    <>
      <TextField
        id="outlined-basic"
        label="Outlined"
        variant="outlined"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <Button onClick={() => submit()}>
        Submit
      </Button>
    </>;

  return {
    display
  }

};