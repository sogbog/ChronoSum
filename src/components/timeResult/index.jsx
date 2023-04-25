import { Container } from "./style";

export function TimeResult({name, state}){
    return(
        <Container>
            <label htmlFor={"Resulting" + name}>{name}</label>
            <span id={"Resulting" + name}>{state}</span>
        </Container>
    )
}