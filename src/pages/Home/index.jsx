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
  const [initialMinutes, setinitialMinutes] = useState("")
  const [initialSeconds, setInitialSeconds] = useState("")
  const [initialMiliseconds, setInitialMiliseconds] = useState("")
  const [hoursToAdd, setHoursToAdd] = useState("")
  const [minutesToAdd, setMinutesToAdd] = useState("")
  const [secondsToAdd, setSecondsToAdd] = useState("")
  const [milisecondsToAdd, setMilisecondsToAdd] = useState("")

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
        </div>
      </header>

      <img src={roman_clock} id="ClockBackground" />

      <div id="App">
        <div id="InitialTime">
          <label htmlFor="InitialTime" id="InitialTimeSideLabel">Initial Time</label>
          <BigTimeInput name="Hour" state={initialHours} onChange={e => setInitialHours(e.target.value)}/>
          <BigTimeInput name="Minute" state={initialMinutes} onChange={e => setinitialMinutes(e.target.value)}/>
          <BigTimeInput name="Second" state={initialSeconds} onChange={e => setInitialSeconds(e.target.value)}/>
          <BigTimeInput name="Milisecond" state={initialMiliseconds} onChange={e => setInitialMiliseconds(e.target.value)}/>
        </div>

        <MainFunctions>
          {enabledFields.includes("Hours") && <TimeInput name="Hours"/>}
          {enabledFields.includes("Minutes") && <TimeInput name="Minutes"/>}
          {enabledFields.includes("Seconds") && <TimeInput name="Seconds"/>}
          {enabledFields.includes("Miliseconds") && <TimeInput name="Miliseconds"/>}
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