import { useRef } from "react";
import { Container, Field } from "./style";
import { useState } from "react";


export function SimpleDate({setState, ID}){
    
    const initialDate = new Date()
    initialDate.setHours(0)
    initialDate.setMinutes(0)
    initialDate.setSeconds(0)

    const [baseDate, setBaseDate] = useState(initialDate)

    const [hour, setHour] = useState(0)
    const [minute, setMinute] = useState(0)
    const [second, setSecond] = useState(0)
    const [date, setDate] = useState("")

    function handleDateChange(value, caller){
        
        const dateCopy = baseDate

        if(value >= 9007199254740991){
            return
        }

        switch (caller){

          case 'hour':
            if(caller == "hour"){
                if((parseInt(value) < 24 && value != "") && !(isNaN(parseInt(value)))){
                    setHour(parseInt(value))
                    dateCopy.setHours(parseInt(value))
                } else {
                    value == "" ? setHour(0) : ""
                    value == "" ? dateCopy.setHours(0) : ""
                }
            }

            break
    
    
          case 'minute':
            if(parseInt(value) < 60 && value != "" && !(isNaN(parseInt(value)))){
                    setMinute(parseInt(value))
                    dateCopy.setMinutes(parseInt(value))
                } else {
                    value == "" ? setMinute(0) : ""
                    value == "" ? dateCopy.setMinutes(0) : ""
                }

            break
    
    
          case 'second':
            if(parseInt(value) < 60 && value != "" && !(isNaN(parseInt(value)))){
                setSecond(parseInt(value))
                dateCopy.setSeconds(parseInt(value))
            } else {
                value == "" ? setSecond(0) : ""
                value == "" ? dateCopy.setSeconds(0) : ""
            }

            break

           case 'date':
            setDate(value)
            const dateHolder = new Date(`${value}T00:00:00`)
            dateCopy.setDate(dateHolder.getDate())
            dateCopy.setMonth(dateHolder.getMonth())
            dateCopy.setFullYear(dateHolder.getFullYear())
            break
        }

        setBaseDate(dateCopy)
        setState(ID, dateCopy)
    }


    return(
        <Container>
            <div className="DateWrapper">
                <div className="FieldsWrapper">
                    <Field>
                        <label htmlFor="hours">Hour</label>
                        <input type="text" id="hours" value={hour} onChange={e => handleDateChange(e.target.value, "hour")} autoComplete="off"/>
                    </Field>

                    <Field>
                        <label htmlFor="minutes">Minute</label>
                        <input type="text" id="minutes" value={minute} onChange={e =>  handleDateChange(e.target.value, "minute") } autoComplete="off"/>
                    </Field>

                    <Field>
                        <label htmlFor="seconds">Second</label>
                        <input type="text" id="seconds" value={second} onChange={e =>  handleDateChange(e.target.value, "second")} autoComplete="off"/>
                    </Field>
                </div>


                <Field>
                    <label htmlFor="date">Date</label>
                    <input type="date" id="date" value={date} onChange={e =>  handleDateChange(e.target.value, "date")} autoComplete="off"/>
                </Field>
            </div>
        </Container>
    )
}