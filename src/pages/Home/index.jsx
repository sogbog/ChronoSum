import {Container, MainFunctions} from "./style"
import { TimeInput } from "../../components/timeInput"
import { BigTimeInput } from "../../components/bigTimeInput"
import { TimeResult } from "../../components/timeResult"
import { CheckBox } from "../../components/checkBox"
import roman_clock from "../../assets/clock_face_roman.svg"
import { useState } from "react"
import { useOptions } from "../../hooks/options"

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


  function clearInputs(){
    setInitialHours("")
    setInitialMinutes("")
    setInitialSeconds("")
    setInitialMiliseconds("")
    setHoursToAdd("")
    setMinutesToAdd("")
    setSecondsToAdd("")
    setMilisecondsToAdd("")
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

        value == "" ? setInitialHours("") : setInitialHours(parseInt(value))
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

        value == "" ? setInitialMinutes("") : setInitialMinutes(parseInt(value))
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

        value == "" ? setInitialSeconds("") : setInitialSeconds(parseInt(value))
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

        value == "" ? setInitialMiliseconds("") : setInitialMiliseconds(parseInt(value))
        break

      case 'hoursToAdd':
        if(value != 0 & isNaN(parseInt(value)) & value != "-"){
          flashWarning("#HoursToAddWarning", "Only numbers are allowed")
          return
        }

        if(value == ""){
          setHoursToAdd("")
        }else if(value == "-"){
          setHoursToAdd("-")
        }else{
          setHoursToAdd(parseInt(value))
        }
        break

      case 'minutesToAdd':
        if(value != 0 & isNaN(parseInt(value)) & value != "-"){
          flashWarning("#MinutesToAddWarning", "Only numbers are allowed")
          return
        }

        if(value == ""){
          setMinutesToAdd("")
        }else if(value == "-"){
          setMinutesToAdd("-")
        }else{
          setMinutesToAdd(parseInt(value))
        }
        break

      case 'secondsToAdd':
        if(value != 0 & isNaN(parseInt(value)) & value != "-"){
          flashWarning("#SecondsToAddWarning", "Only numbers are allowed")
          return
        }

        if(value == ""){
          setSecondsToAdd("")
        }else if(value == "-"){
          setSecondsToAdd("-")
        }else{
          setSecondsToAdd(parseInt(value))
        }
        break

      case 'milisecondsToAdd':
        if(value != 0 & isNaN(parseInt(value)) & value != "-"){
          flashWarning("#MilisecondsToAddWarning", "Only numbers are allowed")
          return
        }

        if(value == ""){
          setMilisecondsToAdd("")
        }else if(value == "-"){
          setMilisecondsToAdd("-")
        }else{
          setMilisecondsToAdd(parseInt(value))
        }
        break
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

        <div id="FinalTime">
          <label htmlFor="InitialTime" id="FinalTimeSideLabel">Final Time</label>
          <TimeResult name="Hour"/>
          <TimeResult name="Minute"/>
          <TimeResult name="Second"/>
          <TimeResult name="Milisecond"/>
        </div>
      </div>
    </Container>
  )
}