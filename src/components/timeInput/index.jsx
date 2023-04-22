import { Container } from "./style";

export function TimeInput({name, state, onChange}){
    return(
        <Container>
            <label htmlFor="name">{name}</label>
            <input type="text" id={name}
            onChange={onChange}
            value={state}/>
            <span id={name + "ToAddWarning"} className="Warning"></span>
        </Container>
    )
}