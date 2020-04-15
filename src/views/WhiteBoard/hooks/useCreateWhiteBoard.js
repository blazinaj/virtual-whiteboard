import React, { useState, useEffect } from "react";
import {createWhiteBoard} from "../../../graphql/mutations";
import {useMutation} from "../../../hooks/useMutation";
import {Button, Input, InputGroup, InputGroupAddon} from "reactstrap";

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
            <InputGroup>
                <Input value={name} onChange={(e) => setName(e.target.value)}/>
                <InputGroupAddon addonType="append">
                    <Button onClick={() => submit()}>
                        Submit
                    </Button>
                </InputGroupAddon>
            </InputGroup>
        </>;

    return {
        display
    }

};