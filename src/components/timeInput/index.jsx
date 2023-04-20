import { Container } from "./style";

export function TimeInput({name}){
    return(
        <Container>
            <label htmlFor="name">{name}</label>
            <input type="text" id={name}/>
        </Container>
    )
}