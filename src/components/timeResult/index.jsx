import { Container } from "./style";

export function TimeResult({name}){
    return(
        <Container>
            <label htmlFor="name">{name}</label>
            <input type="text" id={name} disabled/>
        </Container>
    )
}