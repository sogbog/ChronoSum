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
                        <label htmlFor="hours">Hours</label>
                        <input type="text" id="hours" disabled value={hours}/>
                    </Field>

                    <Field>
                        <label htmlFor="hours">Minutes</label>
                        <input type="text" id="hours" disabled value={minutes}/>
                    </Field>

                    <Field>
                        <label htmlFor="hours">Seconds</label>
                        <input type="text" id="hours" disabled value={seconds}/>
                    </Field>                    
                </div>
            </div>
        </Container>
    )
}