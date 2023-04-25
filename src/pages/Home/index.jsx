import {Container, MainFunctions} from "./style"
import { TimeInput } from "../../components/TimeInput"
import { BigTimeInput } from "../../components/BigTimeInput"
import { TimeResult } from "../../components/TimeResult"
import { CheckBox } from "../../components/CheckBox"
import roman_clock from "../../assets/clock_face_roman.svg"
import { useState, useEffect } from "react"
import { useOptions } from "../../hooks/options"

let time = {
  initialHours: 0,
  initialMinutes: 0,
  initialSeconds: 0,
  initialMiliseconds: 0,
  hoursToAdd: 0,
  minutesToAdd: 0,
  secondsToAdd: 0,
  milisecondsToAdd: 0,
}

export function Home(){
  const { enabledFields } = useOptions()
  const [initialHours, setInitialHours] = useState("")
  const [initialMinutes, setInitialMinutes] = useState("")
  const [initialSeconds, setInitialSeconds] = useState("")
  const [initialMiliseconds, setInitialMiliseconds] = useState("")
  const [hoursToAdd, setHoursToAdd] = useState("")
  const [minutesToAdd, setMinutesToAdd] = useState("")
  const [secondsToAdd, setSecondsToAdd] = useState("")
  const [milisecondsToAdd, setMilisecondsToAdd] = useState("")
  const [hoursResult, setHoursResult] = useState("")
  const [minutesResult, setMinutesResult] = useState("")
  const [secondsResult, setSecondsResult] = useState("")
  const [milisecondsResult, setMilisecondsResult] = useState("")

  function clearInputs(){
    setInitialHours("")
    setInitialMinutes("")
    setInitialSeconds("")
    setInitialMiliseconds("")
    setHoursToAdd("")
    setMinutesToAdd("")
    setSecondsToAdd("")
    setMilisecondsToAdd("")
    setHoursResult("")
    setMinutesResult("")
    setSecondsResult("")
    setMilisecondsResult("")

    time.initialHours = 0
    time.initialMinutes = 0
    time.initialSeconds = 0
    time.initialMiliseconds = 0
    time.hoursToAdd = 0
    time.minutesToAdd = 0
    time.secondsToAdd = 0
    time.milisecondsToAdd = 0
  }

  function handleStates(value, caller){

    switch (caller){
      case 'initialHours':
        if(value > 23 || value < 0){
          flashWarning("#InitialHourWarning", "Hour must be a value between 0 and 23")
          return
        }

        if(value != 0 & isNaN(parseInt(value))){
          flashWarning("#InitialHourWarning", "Only numbers are allowed")
          return
        }

        if(value != ""){
          setInitialHours(parseInt(value))
          time.initialHours = parseInt(value)
        }else{
          setInitialHours("")
          time.initialHours = 0
        }
        
        break


      case 'initialMinutes':
        if(value > 59 || value < 0){
          flashWarning("#InitialMinuteWarning", "Minute must be a value between 0 and 59")
          return
        }

        if(value != 0 & isNaN(parseInt(value))){
          flashWarning("#InitialMinuteWarning", "Only numbers are allowed")
          return
        }

        if(value != ""){
          setInitialMinutes(parseInt(value))
          time.initialMinutes = parseInt(value)
        }else{
          setInitialMinutes("")
          time.initialMinutes = 0
        }
        break


      case 'initialSeconds':
        if(value > 59 || value < 0){
          flashWarning("#InitialSecondWarning", "Second must be a value between 0 and 59")
          return
        }

        if(value != 0 & isNaN(parseInt(value))){
          flashWarning("#InitialSecondWarning", "Only numbers are allowed")
          return
        }

        if(value != ""){
          setInitialSeconds(parseInt(value))
          time.initialSeconds = parseInt(value)
        }else{
          setInitialSeconds("")
          time.initialSeconds = 0
        }
        break


      case 'initialMiliseconds':
        if(value > 999 || value < 0){
          flashWarning("#InitialMilisecondWarning", "Milisecond must be a value between 0 and 999")
          return
        }

        if(value != 0 & isNaN(parseInt(value))){
          flashWarning("#InitialMilisecondWarning", "Only numbers are allowed")
          return
        }

        if(value != ""){
          setInitialMiliseconds(parseInt(value))
          time.initialMiliseconds = parseInt(value)
        }else{
          setInitialMiliseconds("")
          time.initialMiliseconds = 0
        }
        break


      case 'hoursToAdd':
        if(value != 0 & isNaN(parseInt(value)) & value != "-"){
          flashWarning("#HoursToAddWarning", "Only numbers are allowed")
          return
        }

        if(value != "" & value != "-"){
          setHoursToAdd(parseInt(value))
          time.hoursToAdd = parseInt(value)
        }else{
          value == "-" ? setHoursToAdd("-") : setHoursToAdd("")
          time.hoursToAdd = 0
        }
        break


      case 'minutesToAdd':
        if(value != 0 & isNaN(parseInt(value)) & value != "-"){
          flashWarning("#MinutesToAddWarning", "Only numbers are allowed")
          return
        }

        if(value != "" & value != "-"){
          setMinutesToAdd(parseInt(value))
          time.minutesToAdd = parseInt(value)
        }else{
          value == "-" ? setMinutesToAdd("-") : setMinutesToAdd("")
          time.minutesToAdd = 0
        }
        break


      case 'secondsToAdd':
        if(value != 0 & isNaN(parseInt(value)) & value != "-"){
          flashWarning("#SecondsToAddWarning", "Only numbers are allowed")
          return
        }

        if(value != "" & value != "-"){
          setSecondsToAdd(parseInt(value))
          time.secondsToAdd = parseInt(value)
        }else{
          value == "-" ? setSecondsToAdd("-") : setSecondsToAdd("")
          time.secondsToAdd = 0
        }
        break


      case 'milisecondsToAdd':
        if(value != 0 & isNaN(parseInt(value)) & value != "-"){
          flashWarning("#MilisecondsToAddWarning", "Only numbers are allowed")
          return
        }

        if(value != "" & value != "-"){
          setMilisecondsToAdd(parseInt(value))
          time.milisecondsToAdd = parseInt(value)
        }else{
          value == "-" ? setMilisecondsToAdd("-") : setMilisecondsToAdd("")
          time.milisecondsToAdd = 0
        }

        break
    }

    calculateTime()
  }

  function calculateTime(){
    let years = 0, months = 0, days = 0, hours, minutes, seconds, miliseconds
      hours = time.initialHours + time.hoursToAdd
      minutes = time.initialMinutes + time.minutesToAdd
      seconds = time.initialSeconds + time.secondsToAdd
      miliseconds = time.initialMiliseconds + time.milisecondsToAdd

      if (miliseconds > 999){
        const wholeSeconds = Math.floor(miliseconds/1000)
        const extraMiliseconds = miliseconds % 1000
        miliseconds = extraMiliseconds
        seconds += wholeSeconds
      }else if(miliseconds < 0){
        const wholeSeconds = Math.floor(miliseconds/1000)
        seconds += wholeSeconds
        miliseconds -= wholeSeconds*1000
      }
      
      if (seconds > 59){
        const wholeMinutes = Math.floor(seconds/60)
        const extraSeconds = seconds % 60
        seconds = extraSeconds
        minutes += wholeMinutes
      }else if(seconds < 0){
        const wholeMinutes = Math.floor(seconds/60)
        minutes += wholeMinutes
        seconds -= wholeMinutes*60
      }

      if (minutes > 59){
        const wholeHours = Math.floor(minutes/60)
        const extraMinutes = minutes % 60
        minutes = extraMinutes
        hours += wholeHours
      }else if(minutes < 0){
        const wholeHours = Math.floor(minutes/60)
        hours += wholeHours
        minutes -= wholeHours*60
      }

    if(hours != 0) {
      setHoursResult(hours)
    }else if(time.hoursToAdd != ""|| time.initialHours != "" ||
     time.milisecondsToAdd < -999 || time.milisecondsToAdd > 999 ||
     time.milisecondsToAdd < -999 || time.milisecondsToAdd > 999){
      setHoursResult("0")
    }else{
      setHoursResult("")
    }

    if(minutes != 0) {
      setMinutesResult(minutes)
    }else if(time.minutesToAdd != "" || time.initialMinutes != "" ||
    time.secondsToAdd < -60 || time.secondsToAdd > 60 ||
    time.milisecondsToAdd < -999 || time.milisecondsToAdd > 999){
      setMinutesResult("0")
    }else{
      setMinutesResult("")
    }

    if(seconds !=0) {
      setSecondsResult(seconds)
    }else if(time.secondsToAdd != ""|| time.initialSeconds != "" ||
    time.milisecondsToAdd < -999 || time.milisecondsToAdd > 999){
      setSecondsResult("0")
    }else{
      setSecondsResult("")
    }

    if(miliseconds !=0) {
      setMilisecondsResult(miliseconds)
    }else if(time.milisecondsToAdd != ""|| time.initialMiliseconds != ""){
      setMilisecondsResult("0")
    }else{
      setMilisecondsResult("")
    }
  }

  function flashWarning(selector, message){
    const warning = document.querySelector(selector)

    warning.textContent = message
    warning.classList.add("active")
    warning.style.opacity = 1
    setTimeout(() => warning.classList.remove("active"), 1)
    setTimeout(() => warning.style.opacity = 0, 500)
  }

  return (
    <Container>
      <header>
        <div id="title">
          <h1>Chrono Sum</h1>
          <span>time operations!</span>
        </div>

        <div id="options">
          <CheckBox name="Hours"/>
          
          <CheckBox name="Minutes"/>
          
          <CheckBox name="Seconds"/>
          
          <CheckBox name="Miliseconds"/>

          <button type="button" id="ClearAll" onClick={() => clearInputs()}>Clear Inputs</button>
        </div>
      </header>

      <img src={roman_clock} id="ClockBackground" />

      <div id="App">
        <div id="InitialTime">
          <label htmlFor="InitialTime" id="InitialTimeSideLabel">Initial Time</label>
          <BigTimeInput name="Hour" state={initialHours} onChange={e => handleStates(e.target.value, 'initialHours')}/>

          <BigTimeInput name="Minute" state={initialMinutes} onChange={e =>  handleStates(e.target.value, 'initialMinutes')}/>

          <BigTimeInput name="Second" state={initialSeconds} onChange={e =>  handleStates(e.target.value, 'initialSeconds')}/>

          <BigTimeInput name="Milisecond" state={initialMiliseconds} onChange={e =>  handleStates(e.target.value, 'initialMiliseconds')}/>
        </div>

        <MainFunctions>
          {enabledFields.includes("Hours") && <TimeInput name="Hours" state={hoursToAdd} onChange={e =>  handleStates(e.target.value, 'hoursToAdd')}/>}

          {enabledFields.includes("Minutes") && <TimeInput name="Minutes" state={minutesToAdd} onChange={e =>  handleStates(e.target.value, 'minutesToAdd')}/>}

          {enabledFields.includes("Seconds") && <TimeInput name="Seconds" state={secondsToAdd} onChange={e =>  handleStates(e.target.value, 'secondsToAdd')}/>}

          {enabledFields.includes("Miliseconds") && <TimeInput name="Miliseconds" state={milisecondsToAdd} onChange={e =>  handleStates(e.target.value, 'milisecondsToAdd')}/>}
        </MainFunctions>

        <div id="ResultingTime">
          <label htmlFor="ResultingTime" id="ResultingTimeSideLabel">Resulting Time</label>
          <TimeResult name="Hour" state={hoursResult}/>
          <TimeResult name="Minute" state={minutesResult}/>
          <TimeResult name="Second" state={secondsResult}/>
          <TimeResult name="Milisecond" state={milisecondsResult}/>
        </div>
      </div>
    </Container>
  )
}