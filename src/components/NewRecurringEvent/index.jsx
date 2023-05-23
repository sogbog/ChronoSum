import { Container, Field } from "./style";
import {IoMdAddCircleOutline} from "react-icons/io"
import { useOptions } from "../../hooks/options"
import { useState } from "react";


export function NewRecurringEvent({}){

    const {setRecurringEvents} = useOptions()

    const [name, setName] = useState("")
    const [hour, setHour] = useState("")
    const [minute, setMinute] = useState("")
    const [second, setSecond] = useState("")
    const [date, setDate] = useState("")
    const [yearPeriod,setYearPeriod] = useState("")
    const [monthPeriod, setMonthPeriod] = useState("")
    const [dayPeriod, setDayPeriod] = useState("")
    const [hourPeriod, setHourPeriod] = useState("")
    const [minutePeriod, setMinutePeriod] = useState("")
    const [secondPeriod, setSecondPeriod] = useState("")

    function handleStates(value, caller){

        if(value >= 9007199254740991){
            return
        }

        switch (caller){

          case "yearPeriod":
                if(value != "" && !(isNaN(parseInt(value))) && parseInt(value) < 10001){
                    setYearPeriod(parseInt(value))
                }
            
                value == "" ? setYearPeriod(0) : ""
            break

          case "monthPeriod":
                if(value != "" && !(isNaN(parseInt(value))) && parseInt(value) < 12){
                    setMonthPeriod(parseInt(value))
                }
            
                value == "" ? setMonthPeriod(0) : ""
            break

          case "dayPeriod":
                if(value != "" && !(isNaN(parseInt(value))) && parseInt(value) < 31){
                    setDayPeriod(parseInt(value))
                }
            
                value == "" ? setDayPeriod(0) : ""
            break

          case 'hour': case 'hourPeriod':
            if(value != "" && !(isNaN(parseInt(value))) && parseInt(value) < 24){
                caller == "hour" ? setHour(parseInt(value)) : setHourPeriod(parseInt(value))
            }
            
            if(caller == "hour"){
                value == "" ? setHour(0) : ""
            } else{
                value == "" ? setHourPeriod(0) : ""
            }

            break
    
    
          case 'minute': case 'minutePeriod':
            if(value != "" && !(isNaN(parseInt(value))) && parseInt(value) < 60){
                caller == "minute" ? setMinute(parseInt(value)) : setMinutePeriod(parseInt(value))
            }         

            if(caller == "minute"){
                value == "" ? setMinute(0) : ""
            } else{
                value == "" ? setMinutePeriod(0) : ""
            }

            break
    
    
          case 'second': case 'secondPeriod':
            if(value != "" && !(isNaN(parseInt(value))) && parseInt(value) < 60){
                caller == "second" ? setSecond(parseInt(value)) : setSecondPeriod(parseInt(value))
            }

            if(caller == "second"){
                value == "" ? setSecond(0) : ""
            } else{
                value == "" ? setSecondPeriod(0) : ""
            }

            break
        }
    }

    function addEvent(){
        const event={
            name: name, 
            hour: hour, 
            minute: minute, 
            second: second, 
            date: new Date(`${date}T00:00:00`), 
            yearPeriod: yearPeriod,
            monthPeriod: monthPeriod,
            dayPeriod: dayPeriod,
            hourPeriod: hourPeriod,
            minutePeriod: minutePeriod,
            secondPeriod: secondPeriod,
            id: Date.now()
        }

        if(event.yearPeriod == "" && event.monthPeriod == "" && event.dayPeriod == "" && 
        event.hourPeriod == "" && event.minutePeriod == "" && event.secondPeriod == ""){
            return
        }

        event.hour == "" ? event.hour = 0 : ""
        event.minute == "" ? event.minute = 0 : ""
        event.second == "" ? event.second = 0 : ""
        event.yearPeriod == "" ? event.yearPeriod = 0 : ""
        event.monthPeriod == "" ? event.monthPeriod = 0 : ""
        event.dayPeriod == "" ? event.dayPeriod = 0 : ""
        event.hourPeriod == "" ? event.hourPeriod = 0 : ""
        event.minutePeriod == "" ? event.minutePeriod = 0 : ""
        event.secondPeriod == "" ? event.secondPeriod = 0 : ""
        
        if(!date){
            const now = new Date()

            event.date = now
        }

        setRecurringEvents(prevState => [event, ...prevState])
        setName("")
        setHour("")
        setMinute("")
        setSecond("")
        setDate("")
        setYearPeriod("")
        setMonthPeriod("")
        setDayPeriod("")
        setHourPeriod("")
        setMinutePeriod("")
        setSecondPeriod("")
    }

    return(
        <Container>
            <div id="LeftSide">

                <button className="Add" onClick={() => addEvent()}><IoMdAddCircleOutline/></button>
                <div className="Name">
                    <label htmlFor="Name">New event name</label>
                    <input type="text" id="Name" value={name} onChange={e => setName(e.target.value)} autoComplete="off"></input>
                </div>
                
                <div className="DurationWrapper">
                    <span>Starting time:</span>
                    <div className="FieldsWrapper">
                        <Field>
                            <label htmlFor="hours">Hour</label>
                            <input type="text" id="hours" value={hour} onChange={e => handleStates(e.target.value, 'hour')} autoComplete="off"/>
                        </Field>

                        <Field>
                            <label htmlFor="minutes">Minute</label>
                            <input type="text" id="minutes" value={minute} onChange={e => handleStates(e.target.value, 'minute')} autoComplete="off"/>
                        </Field>

                        <Field>
                            <label htmlFor="seconds">Second</label>
                            <input type="text" id="seconds" value={second} onChange={e => handleStates(e.target.value, 'second')} autoComplete="off"/>
                        </Field>
                    
                    </div>

                    <div className="DateWrapper">
                        <Field>
                            <label htmlFor="date">Initial Date</label>
                            <input type="date" id="date" value={date} onChange={e => setDate(e.target.value)} autoComplete="off"/>
                        </Field>
                    </div>
                </div>

            </div>

            <div id="RightSide">

                <span>Frequency:</span>
                <div className="FieldsWrapper">
                    <Field>
                        <label htmlFor="yearPeriod">Years</label>
                        <input type="text" id="yearPeriod" value={yearPeriod} onChange={e => handleStates(e.target.value, 'yearPeriod')}/>
                    </Field>
                    
                    <Field>
                        <label htmlFor="monthPeriod">Months</label>
                        <input type="text" id="monthPeriod" value={monthPeriod} onChange={e => handleStates(e.target.value, 'monthPeriod')}/>
                    </Field>
                    
                    <Field>
                        <label htmlFor="dayPeriod">Days</label>
                        <input type="text" id="dayPeriod" value={dayPeriod} onChange={e => handleStates(e.target.value, 'dayPeriod')}/>
                    </Field>
                    
                    <Field>
                        <label htmlFor="hourPeriod">Hours</label>
                        <input type="text" id="hourPeriod" value={hourPeriod} onChange={e => handleStates(e.target.value, 'hourPeriod')}/>
                    </Field>

                    <Field>
                        <label htmlFor="minutePeriod">Minutes</label>
                        <input type="text" id="minutePeriod" value={minutePeriod} onChange={e => handleStates(e.target.value, 'minutePeriod')}/>
                    </Field>

                    <Field>
                        <label htmlFor="secondPeriod">Seconds</label>
                        <input type="text" id="secondPeriod" value={secondPeriod} onChange={e => handleStates(e.target.value, 'secondPeriod')}/>
                    </Field>   
                </div>

            </div>
        </Container>
    )
}