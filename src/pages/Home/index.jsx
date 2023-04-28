import {Container, MainFunctions, Date} from "./style"
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
  const [daysResult, setDaysResult] = useState("")
  const [monthsResult, setMonthsResult] = useState("")
  const [yearsResult, setYearsResult] = useState("")
  const [resultComplement, setResultComplement] = useState("")

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

    calculateTime()
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

        if(value >= 9007199254740991){
          flashWarning("#HoursToAddWarning", "Max value reached!")
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

        if(value >= 9007199254740991){
          flashWarning("#MinutesToAddWarning", "Max value reached!")
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

        if(value >= 9007199254740991){
          flashWarning("#SecondsToAddWarning", "Max value reached!")
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

        if(value >= 9007199254740991){
          flashWarning("#MilisecondsToAddWarning", "Max value reached!")
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

  function calculateTime(checked, caller){
    let years = 0, months = 0, days = 0, hours = 0, minutes = 0, seconds = 0, miliseconds = 0, complement = ""
      
    if(caller){
      switch (caller) {
        case "Hours":
          checked ? hours = time.initialHours + time.hoursToAdd : hours = 0
        break;

        case "Minutes":
          checked ? minutes = time.initialMinutes + time.minutesToAdd : minutes = 0
        break;

        case "Seconds":
          checked ? seconds = time.initialSeconds + time.secondsToAdd : seconds = 0
        break;

        case "Miliseconds":
          checked ? miliseconds = time.initialMiliseconds + time.milisecondsToAdd : miliseconds = 0
        break;
      
      }

      if(caller != "Hours" & enabledFields.includes("Hours")){
        hours = time.initialHours + time.hoursToAdd
      }
      if(caller != "Minutes" & enabledFields.includes("Minutes")){
        minutes = time.initialMinutes + time.minutesToAdd
      }
      if(caller != "Seconds" & enabledFields.includes("Seconds")){
        seconds = time.initialSeconds + time.secondsToAdd
      }
      if(caller != "Miliseconds" & enabledFields.includes("Miliseconds")){
        miliseconds = time.initialMiliseconds + time.milisecondsToAdd
      }

    } else{
      enabledFields.includes("Hours") ? hours = time.initialHours + time.hoursToAdd : ""
      enabledFields.includes("Minutes") ? minutes = time.initialMinutes + time.minutesToAdd : ""
      enabledFields.includes("Seconds") ? seconds = time.initialSeconds + time.secondsToAdd : ""
      enabledFields.includes("Miliseconds") ? miliseconds = time.initialMiliseconds + time.milisecondsToAdd : ""
    }


    if(miliseconds > 999){
      const wholeSeconds = Math.floor(miliseconds/1000)
      const extraMiliseconds = miliseconds % 1000
      miliseconds = extraMiliseconds
      seconds += wholeSeconds
    }else if(miliseconds < 0){
      const wholeSeconds = Math.floor(miliseconds/1000)
      seconds += wholeSeconds
      miliseconds -= wholeSeconds*1000
    }
    
    if(seconds > 59){
      const wholeMinutes = Math.floor(seconds/60)
      const extraSeconds = seconds % 60
      seconds = extraSeconds
      minutes += wholeMinutes
    }else if(seconds < 0){
      const wholeMinutes = Math.floor(seconds/60)
      minutes += wholeMinutes
      seconds -= wholeMinutes*60
    }

    if(minutes > 59){
      const wholeHours = Math.floor(minutes/60)
      const extraMinutes = minutes % 60
      minutes = extraMinutes
      hours += wholeHours
    }else if(minutes < 0){
      const wholeHours = Math.floor(minutes/60)
      hours += wholeHours
      minutes -= wholeHours*60
    }

    if(hours > 23){
      const wholeDays = Math.floor(hours/24)
      const extraHours = hours % 24
      hours = extraHours
      days = wholeDays
      complement = "after"
    }else if(hours < 0){
      const wholeDays = Math.floor(hours/24)
      days -= wholeDays
      hours -= wholeDays*24
      complement = "before"
    }

    if(days > 29){
      const wholeMonths = Math.floor(days/30)
      const extraDays = days % 30
      days = extraDays
      months = wholeMonths
    }else if(days < 0){
      const wholeMonths = Math.floor(days/30)
      months -= wholeMonths
      days -= wholeMonths*30
    }

    if(months > 11){
      const wholeYears = Math.floor(months/12)
      const extraMonths = months % 12
      months = extraMonths
      years = wholeYears
    }else if(years < 0){
      const wholeYears = Math.floor(months/12)
      years -= wholeYears
      months -= wholeYears*12
    }

  if(hours != 0){
    setHoursResult(hours)
  }else if((time.hoursToAdd != ""|| time.initialHours != "") &
    (!caller || caller != "Hours" || (caller == "Hours" & checked))){
    setHoursResult("0")
  }else{
    setHoursResult("")
  }

  if(minutes != 0){
    setMinutesResult(minutes)
  }else if((time.minutesToAdd != "" || time.initialMinutes != "") &
  (!caller || caller != "Minutes" || (caller == "Minutes" & checked))){
    setMinutesResult("0")
  }else{
    setMinutesResult("")
  }

  if(seconds !=0){
    setSecondsResult(seconds)
  }else if((time.secondsToAdd != ""|| time.initialSeconds != "") &
  (!caller || caller != "Seconds" || (caller == "Seconds" & checked))){
    setSecondsResult("0")
  }else{
    setSecondsResult("")
  }

  if(miliseconds !=0){
    setMilisecondsResult(miliseconds)
  }else if((time.milisecondsToAdd != ""|| time.initialMiliseconds != "") &
  (!caller || caller != "Miliseconds" || (caller == "Miliseconds" & checked))){
    setMilisecondsResult("0")
  }else{
    setMilisecondsResult("")
  }

  if(days != 0){
    Math.sqrt(Math.pow(days, 2)) == 1 ? setDaysResult(`The day`): setDaysResult(`${days} days`)
  } else if(months != 0 || years != 0){
    setDaysResult("0 days")
  }else{
    setDaysResult("")
  }

  if(months != 0){
    months > 1 ? setMonthsResult(`${months} months`) : setMonthsResult(`${months} month`)
  } else if(years != 0){
    setMonthsResult("0 months")
  }else{
    setMonthsResult("")
  }

  if(years != 0){
    years > 1 ? setYearsResult(`${years} years`) : setYearsResult(`${years} year`)
  } else{
    setYearsResult("")
  }


  if(days != 0 || months != 0 || years != 0){
    setResultComplement(complement)    
  }else{
    setResultComplement("")
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
          <CheckBox name="Hours" calculate={calculateTime}/>
          
          <CheckBox name="Minutes" calculate={calculateTime}/>
          
          <CheckBox name="Seconds" calculate={calculateTime}/>
          
          <CheckBox name="Miliseconds" calculate={calculateTime}/>

          <button type="button" id="ClearAllDesktop" onClick={() => clearInputs()}>Clear Inputs</button>
        </div>
      </header>

      <img src={roman_clock} id="ClockBackgroundDesktop" />

      <div id="App">
        <div id="InitialTime">
          <label htmlFor="InitialTime" id="InitialTimeSideLabel">Initial Time</label>
          <BigTimeInput name="Hour" state={initialHours} onChange={e => handleStates(e.target.value, 'initialHours')} />

          <BigTimeInput name="Minute" state={initialMinutes} onChange={e =>  handleStates(e.target.value, 'initialMinutes')}/>

          <BigTimeInput name="Second" state={initialSeconds} onChange={e =>  handleStates(e.target.value, 'initialSeconds')}/>

          <BigTimeInput name="Milisecond" state={initialMiliseconds} onChange={e =>  handleStates(e.target.value, 'initialMiliseconds')}/>
        </div>

        <button type="button" id="ClearAllMobile" onClick={() => clearInputs()}>Clear Inputs</button>

        <MainFunctions>
          {enabledFields.includes("Hours") && <TimeInput name="Hours" state={hoursToAdd} onChange={e =>  handleStates(e.target.value, 'hoursToAdd')}/>}

          {enabledFields.includes("Minutes") && <TimeInput name="Minutes" state={minutesToAdd} onChange={e =>  handleStates(e.target.value, 'minutesToAdd')}/>}

          {enabledFields.includes("Seconds") && <TimeInput name="Seconds" state={secondsToAdd} onChange={e =>  handleStates(e.target.value, 'secondsToAdd')}/>}

          {enabledFields.includes("Miliseconds") && <TimeInput name="Miliseconds" state={milisecondsToAdd} onChange={e =>  handleStates(e.target.value, 'milisecondsToAdd')}/>}
        </MainFunctions>

        <img src={roman_clock} id="ClockBackgroundMobile" />
        
        <Date id="date">
          {daysResult && <p id="Days">{daysResult}</p>}
          {monthsResult && <p id="Months">{monthsResult}</p>}
          {yearsResult && <p id="Years">{yearsResult}</p>}
          {resultComplement && <span>{resultComplement}</span>}
        </Date>

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