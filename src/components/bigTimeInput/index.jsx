import { Container } from "./style";
import { useOptions } from "../../hooks/options";
import { useState } from "react";

export function BigTimeInput({name, state, onChange}){
    const {enabledFields} = useOptions()

    return(
        <Container>
            <label htmlFor="name">{name}</label>
            <input type="text" id={name} 
            value={enabledFields.includes(name + "s") ? state : "--"}
            disabled={enabledFields.includes(name + "s") ? false : true}
            onChange={onChange}/>
        </Container>
    )
}