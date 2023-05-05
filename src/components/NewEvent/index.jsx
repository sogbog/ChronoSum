import { Container, Field } from "./style";
import {IoMdAddCircleOutline} from "react-icons/io"
import { useOptions } from "../../hooks/options"
import { useState } from "react";


export function NewEvent({}){

    const {setEvents} = useOptions()

    const [name, setName] = useState("")
    const [hour, setHour] = useState("")
    const [minute, setMinute] = useState("")
    const [second, setSecond] = useState("")

    function handleStates(value, caller){

        if(value >= 9007199254740991){
            return
        }

        switch (caller){
          case 'hour':
            if(value != "" & !(isNaN(parseInt(value)))){
                setHour(parseInt(value))
            }

            value == "" ? setHour(0) : ""

            break
    
    
          case 'minute':
            if(value != "" & !(isNaN(parseInt(value)))){
                setMinute(parseInt(value))
            }

            value == "" ? setMinute(0) : ""

            break
    
    
          case 'second':
            if(value != "" & !(isNaN(parseInt(value)))){
                setSecond(parseInt(value))
            }

            value == "" ? setSecond(0) : ""

            break
        }
    }

    function addEvent(){
        const event={name: name, hour: hour, minute: minute, second: second, id: Date.now()}

        event.hour == "" ? event.hour = 0 : ""
        event.minute == "" ? event.minute = 0 : ""
        event.second == "" ? event.second = 0 : ""

        setEvents(prevState => [event, ...prevState])
        setName("")
        setHour("")
        setMinute("")
        setSecond("")

        console.log(event)
    }

    return(
        <Container>
            <button className="Add" onClick={() => addEvent()}><IoMdAddCircleOutline/></button>
            <div className="Name">
                <label htmlFor="Name">New event name</label>
                <input type="text" id="Name" value={name} onChange={e => setName(e.target.value)}></input>
            </div>
            <div className="DurationWrapper">
                <span>Duration:</span>
                <div className="FieldsWrapper">
                    <Field>
                        <label htmlFor="hours">Hours</label>
                        <input type="text" id="hours" value={hour} onChange={e => handleStates(e.target.value, 'hour')}/>
                    </Field>

                    <Field>
                        <label htmlFor="hours">Minutes</label>
                        <input type="text" id="hours" value={minute} onChange={e => handleStates(e.target.value, 'minute')}/>
                    </Field>

                    <Field>
                        <label htmlFor="hours">Seconds</label>
                        <input type="text" id="hours" value={second} onChange={e => handleStates(e.target.value, 'second')}/>
                    </Field>                    
                </div>
            </div>
        </Container>
    )
}