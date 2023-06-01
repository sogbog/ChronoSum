import { Container, Events, Result } from "./style";
import { Title } from "../../components/Title";
import { Event } from "../../components/Event";
import { NewEvent } from "../../components/NewEvent";
import { useOptions } from "../../hooks/options";
import { useState, useEffect } from "react";

export function DurationSum(){

    const {events} = useOptions()
    const [hours, setHours] = useState("")
    const [minutes, setMinutes] = useState("")
    const [seconds, setSeconds] = useState("")

    useEffect(() => {        
        function calculateTotal(){
            let hour = 0, minute = 0, second = 0
    
            events.map(event => hour += parseInt(event.hour))
    
            events.map(event => minute += parseInt(event.minute))
    
            events.map(event => second += parseInt(event.second))
            
            if(second > 59){
                const wholeMinutes = Math.floor(second/60)
                const extraSeconds = second % 60
                second = extraSeconds
                minute += wholeMinutes
            }
          
            if(minute > 59){
                const wholeHours = Math.floor(minute/60)
                const extraMinutes = minute % 60
                minute = extraMinutes
                hour += wholeHours
            }

            if(hour >= 9007199254740991){
                alert("Max result value reached, exclude one or more events to recalculate")
                return
            }

            setHours(hour)
            setMinutes(minute)
            setSeconds(second)

            isNaN(hour) ? setHours(0) : ""
            isNaN(minute) ? setMinutes(0) : ""
            isNaN(second) ? setSeconds(0) : ""
        }

        calculateTotal()
    }, [events])

    
    return(
        <Container>
            <header> <Title/> </header>

            <Events>
                <span>Events</span>

                <NewEvent/>
                
                {
                    events.map((event, i)=> (<Event name={event.name} hours={event.hour} minutes={event.minute} seconds={event.second} id={event.id} key={i}/>))
                }
            </Events>

            <Result>
                <h2>Result</h2>

                <div id="resultsWrapper">
                    <div className="resultWrapper">
                        <label htmlFor="hours">Hours</label>
                        <span id="hours"> {hours} </span>
                    </div>

                    <div className="resultWrapper">
                        <label htmlFor="minutes">Minutes</label>
                        <span id="minutes"> {minutes} </span>
                    </div>

                    <div className="resultWrapper">
                        <label htmlFor="seconds">Seconds</label>
                        <span id="seconds"> {seconds} </span>
                    </div>
                </div>
            </Result>

        </Container>
    )
}