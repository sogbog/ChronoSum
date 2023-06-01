import { Container, Field } from "./style";
import {TiDeleteOutline} from "react-icons/ti"
import { useOptions } from "../../hooks/options";

export function Event({name, hours, minutes, seconds, id}){
    
    const {setEvents} = useOptions()

    function handleDelete(){
        setEvents(prevState => prevState.filter(event => event.id != id))
    }
    
    return(
        <Container>
            <button className="Delete" onClick={() => handleDelete()}><TiDeleteOutline/></button>
            <span className="Name">{name}</span>
            <div className="DurationWrapper">
                <span>Duration:</span>
                <div className="FieldsWrapper">
                    <Field>
                        <label>Hours</label>
                        <span>{hours}</span>
                    </Field>

                    <Field>
                        <label>Minutes</label>
                        <span>{minutes}</span>
                    </Field>

                    <Field>
                        <label>Seconds</label>
                        <span>{seconds}</span>
                    </Field>                    
                </div>
            </div>
        </Container>
    )
}