import { useRef, useState, useEffect } from "react";
import { Container, Year, Month, Week, Days } from "./style";
import {MdKeyboardArrowLeft, MdKeyboardArrowRight, MdKeyboardDoubleArrowLeft, MdKeyboardDoubleArrowRight} from "react-icons/md"
import { useOptions } from "../../hooks/options";

export function Calendar(){
    
    const fullDate = new Date()
    const calendarDefault = {
        year: fullDate.getFullYear(),
        month: fullDate.getMonth()
    }
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
    let constructorDays = []
    let currentMonthSecondsElapsed = 0
    let happenedThisMonth = false

    const { recurringEvents, setSelectedDay } = useOptions()
    const selected = useRef(null)

    const [calendarYear, setCalendarYear] = useState(calendarDefault.year)
    const [calendarMonth, setCalendarMonth] = useState(calendarDefault.month)
    const [days, setDays] = useState([])
    

    function calculateFirstDay(year){
        const rawDayOffset = year%7     //Calculates how many days passed since the last full week, starting on 0/0/0, ignoring leapYears
        let leapYearsSinceOne = Math.floor(year/4)      //Calculates how many leap years happened since 0/0/0
        if(year%4 == 0){
            leapYearsSinceOne--     //In case the current year is a leap year, subtracts one since the calculation is based on 01/01/year, so the year has not passed yet. this os checked again in the function that builds the days array, the renderCalendar() function
        }
        const leapYearsOffset = leapYearsSinceOne%7     //Calculates how many days are left from the full weeks that the leap years added since 0/0/0

        let startingDayID = (rawDayOffset + leapYearsOffset) - 1    

        if(startingDayID > 6){
            startingDayID -= 7 // In case the total offset is greater than a week, subrtract a full week to restart the offset
        }
        return startingDayID
    }


    function getMonthDays(){
        let monthDays = 0
        if(calendarMonth == 0 || calendarMonth == 2 
            || calendarMonth == 4 || calendarMonth == 6 
            || calendarMonth == 7 || calendarMonth == 9 
            || calendarMonth == 11){

            monthDays = 31

        } else if(calendarMonth == 1){

            if(calendarYear % 4 == 0){
                monthDays = 29 
            } else{
                monthDays = 28
            }

        } else{
            monthDays = 30
        }

        return monthDays
    }


    function handleChangeDate(quantity, target){
        if(target == "Year"){

            if((calendarYear + quantity) >= 1 & (calendarYear + quantity) <= 9999){
                setCalendarYear(prevState => prevState + quantity)
                renderCalendar()
            }

        } else if(target == "Month"){

            if (calendarMonth == 0 & quantity == -1 & calendarYear > 1){

                setCalendarMonth(11)
                setCalendarYear(prevState => prevState - 1)

            } else if (calendarMonth == 11 & quantity == 1 & calendarYear < 9999){

                setCalendarMonth(0)
                setCalendarYear(prevState => prevState + 1)

            } else if(!(calendarMonth == 0 & quantity == -1 & calendarYear == 1) & !(calendarMonth == 11 & quantity == 1 & calendarYear == 9999)){
                setCalendarMonth(prevState => prevState + quantity)
            }

        }
    } 


    function getSecondsSince0(parameter, event){
        if(parameter == "month"){
            let rawElapsed = ((calendarYear - 1)*31536000)
            
            switch(calendarMonth){
            case 0:
                
            break

            case 1:
                rawElapsed += (31*86400)
            break

            case 2:
                //59
                if(calendarYear % 4 == 0){
                    rawElapsed += (60*86400)
                } else{
                    rawElapsed += (59*86400)
                }
            break

            case 3:
                //90
                if(calendarYear % 4 == 0){
                    rawElapsed += (91*86400)
                } else{
                    rawElapsed += (90*86400)
                }
            break

            case 4:
                //120
                if(calendarYear % 4 == 0){
                    rawElapsed += (121*86400)
                } else{
                    rawElapsed += (120*86400)
                }
            break

            case 5:
                //151
                if(calendarYear % 4 == 0){
                    rawElapsed += (152*86400)
                } else{
                    rawElapsed += (151*86400)
                }
            break

            case 6:
                //181
                if(calendarYear % 4 == 0){
                    rawElapsed += (182*86400)
                } else{
                    rawElapsed += (181*86400)
                }
            break

            case 7:
                //212
                if(calendarYear % 4 == 0){
                    rawElapsed += (213*86400)
                } else{
                    rawElapsed += (212*86400)
                }
            break

            case 8:
                //243
                if(calendarYear % 4 == 0){
                    rawElapsed += (244*86400)
                } else{
                    rawElapsed += (243*86400)
                }
            break

            case 9:
                //273
                if(calendarYear % 4 == 0){
                    rawElapsed += (274*86400)
                } else{
                    rawElapsed += (273*86400)
                }
            break

            case 10:
                //304
                if(calendarYear % 4 == 0){
                    rawElapsed += (305*86400)
                } else{
                    rawElapsed += (304*86400)
                }
            break

            case 11:
                //334
                if(calendarYear % 4 == 0){
                    rawElapsed += (335*86400)
                } else{
                    rawElapsed += (334*86400)
                }
            break
            }

            let leapYearsSinceOne = Math.floor(calendarYear/4)
            if(calendarYear%4 == 0){
                leapYearsSinceOne--
            }

            const leapOffset = leapYearsSinceOne*86400

            currentMonthSecondsElapsed = rawElapsed + leapOffset

        }

        if(parameter == "event"){
            let rawElapsed = ((event.date.getFullYear() - 1)*31536000)

            switch(event.date.getMonth()){
            case 0:
                
            break

            case 1:
                rawElapsed += (31*86400)
            break

            case 2:
                //59
                if(event.date.getFullYear() % 4 == 0){
                    rawElapsed += (60*86400)
                } else{
                    rawElapsed += (59*86400)
                }
            break

            case 3:
                //90
                if(event.date.getFullYear() % 4 == 0){
                    rawElapsed += (91*86400)
                } else{
                    rawElapsed += (90*86400)
                }
            break

            case 4:
                //120
                if(event.date.getFullYear() % 4 == 0){
                    rawElapsed += (121*86400)
                } else{
                    rawElapsed += (120*86400)
                }
            break

            case 5:
                //151
                if(event.date.getFullYear() % 4 == 0){
                    rawElapsed += (152*86400)
                } else{
                    rawElapsed += (151*86400)
                }
            break

            case 6:
                //181
                if(event.date.getFullYear() % 4 == 0){
                    rawElapsed += (182*86400)
                } else{
                    rawElapsed += (181*86400)
                }
            break

            case 7:
                //212
                if(event.date.getFullYear() % 4 == 0){
                    rawElapsed += (213*86400)
                } else{
                    rawElapsed += (212*86400)
                }
            break

            case 8:
                //243
                if(event.date.getFullYear() % 4 == 0){
                    rawElapsed += (244*86400)
                } else{
                    rawElapsed += (243*86400)
                }
            break

            case 9:
                //273
                if(event.date.getFullYear() % 4 == 0){
                    rawElapsed += (274*86400)
                } else{
                    rawElapsed += (273*86400)
                }
            break

            case 10:
                //304
                if(event.date.getFullYear() % 4 == 0){
                    rawElapsed += (305*86400)
                } else{
                    rawElapsed += (304*86400)
                }
            break

            case 11:
                //334
                if(event.date.getFullYear() % 4 == 0){
                    rawElapsed += (335*86400)
                } else{
                    rawElapsed += (334*86400)
                }
            break
            }

            let leapYearsSinceOne = Math.floor(event.date.getFullYear()/4)
            if(event.date.getFullYear()%4 == 0){
                leapYearsSinceOne--
            }

            const leapOffset = leapYearsSinceOne*86400

            const eventElapsed = rawElapsed + leapOffset + event.second + (event.minute*60) + (event.hour*3600) + ((event.date.getDate() - 1)*86400)

            return eventElapsed
        }
    }


    function renderCalendar(){
        const monthDays = getMonthDays()
        constructorDays = []

        let monthStartingDay 
        const yearStartingDay = calculateFirstDay(calendarYear)

        switch(calendarMonth){
            case 0:
                monthStartingDay = yearStartingDay
            break

            case 1:
                monthStartingDay = yearStartingDay + 3
            break

            case 2:
                //59
                if(calendarYear % 4 == 0){
                    monthStartingDay = yearStartingDay + 4
                } else{
                    monthStartingDay = yearStartingDay + 3
                }
            break

            case 3:
                //90
                if(calendarYear % 4 == 0){
                    monthStartingDay = yearStartingDay
                } else{
                    monthStartingDay = yearStartingDay + 6
                }
            break

            case 4:
                //120
                if(calendarYear % 4 == 0){
                    monthStartingDay = yearStartingDay + 2
                } else{
                    monthStartingDay = yearStartingDay + 1
                }
            break

            case 5:
                //151
                if(calendarYear % 4 == 0){
                    monthStartingDay = yearStartingDay + 5
                } else{
                    monthStartingDay = yearStartingDay + 4
                }
            break

            case 6:
                //181
                if(calendarYear % 4 == 0){
                    monthStartingDay = yearStartingDay
                } else{
                    monthStartingDay = yearStartingDay + 6
                }
            break

            case 7:
                //212
                if(calendarYear % 4 == 0){
                    monthStartingDay = yearStartingDay + 3
                } else{
                    monthStartingDay = yearStartingDay + 2
                }
            break

            case 8:
                //243
                if(calendarYear % 4 == 0){
                    monthStartingDay = yearStartingDay + 6
                } else{
                    monthStartingDay = yearStartingDay + 5
                }
            break

            case 9:
                //273
                if(calendarYear % 4 == 0){
                    monthStartingDay = yearStartingDay + 1
                } else{
                    monthStartingDay = yearStartingDay
                }
            break

            case 10:
                //304
                if(calendarYear % 4 == 0){
                    monthStartingDay = yearStartingDay + 4
                } else{
                    monthStartingDay = yearStartingDay + 3
                }
            break

            case 11:
                //334
                if(calendarYear % 4 == 0){
                    monthStartingDay = yearStartingDay + 6
                } else{
                    monthStartingDay = yearStartingDay + 5
                }
            break
        }


        if(monthStartingDay > 6){
            monthStartingDay -= 7
        }

        for(let i=0; i < monthStartingDay; i++){
            constructorDays.push({events: [], id: "blank"})
        }
        for(let i=0; i < monthDays; i++){
            constructorDays.push({events: [], id: i+1})
        }
        renderEvents()
    }


    function renderEvents(){
        let daysWithEvents = constructorDays
        happenedThisMonth = false

        getSecondsSince0("month", null)

        recurringEvents && recurringEvents.map(event =>{
            if(!checkIfHappens(88, event)){
                setDays(constructorDays)
                return
            }
    
            daysWithEvents.map(day => {
                if(checkIfHappens(day, event)){
                    day.events.push(event)
                }
            })
        })

        setDays(daysWithEvents)
    }


    function checkIfHappens(day, event){
        if(day == 88){

            if((event.date.getFullYear() > calendarYear)){

                return false

            }else if(!(calendarYear > event.date.getFullYear()) && (event.date.getMonth() > calendarMonth)){

                return false

            }else{
                return true
            }
        }

        if (day.id == "blank"){
            return
        }
        

        const periodInSeconds = event.secondPeriod + (event.minutePeriod*60) + (event.hourPeriod*3600) + (event.dayPeriod*86400) + (event.monthPeriod*2592000) + (event.yearPeriod*31536000)        
        
        const eventSecondsElapsed = getSecondsSince0("event", event)
        const dayOffset = (day.id - 1)*86400
        const currentDaySecondsElapsed = currentMonthSecondsElapsed + dayOffset
        
        const elapsedOffset = getUnevenOffset(event)
        const secondsElapsedSinceFirst = currentDaySecondsElapsed - eventSecondsElapsed

        const secondsElapsedSinceLast = (secondsElapsedSinceFirst % periodInSeconds) + elapsedOffset
        const secondsToEvent = periodInSeconds - secondsElapsedSinceLast


        if (happenedThisMonth && (event.monthPeriod == 1 && periodInSeconds < 2622600 && day.id == 31)){
            return false
        }


        if(secondsElapsedSinceFirst < -86399){
            return false
        }


        if(secondsToEvent < 86400 || secondsElapsedSinceLast == 0 || secondsElapsedSinceFirst <= 0){
            happenedThisMonth = true
            return true
        }else{
            return false
        }
 
    }


    function getUnevenOffset(event){

        const initialYear = event.date.getFullYear()%4  
        const currentYear = (calendarYear - event.date.getFullYear()) + initialYear 
        const yearsPassed = currentYear - initialYear
        let leapYearsSinceFirst = Math.floor(currentYear/4) 
        if((event.monthPeriod > 0 && currentYear%4 == 0) || (currentYear%4 == 0 && calendarMonth < 2 && event.yearPeriod > 0)){
            leapYearsSinceFirst--
        }

        let yearOffset = 0
        if(event.yearPeriod > 0){
            yearOffset = leapYearsSinceFirst * -86400
        }

        let monthOffset = 0
        const offsetConstant = (((yearsPassed) * 5) * -86400) - (leapYearsSinceFirst * 86400)

        
        if (event.monthPeriod > 0){

            switch (calendarMonth) {
                case 0:
                    monthOffset = offsetConstant
                break;
    
                case 1:
                    monthOffset = offsetConstant -86400
                break;
    
    
                case 2:
                    if(calendarYear % 4 == 0){
                        monthOffset = offsetConstant
                    } else{
                        monthOffset = offsetConstant + 86400
                    }
                break;
    
                    
                case 3:
                    if(calendarYear % 4 == 0){
                        monthOffset = offsetConstant - 86400
                    } else{
                        monthOffset = offsetConstant
                    }
                break;
    
    
                case 4:
                    if(calendarYear % 4 == 0){
                        monthOffset = offsetConstant - 86400
                    } else{
                        monthOffset = offsetConstant
                    }
                break;
    
    
                case 5:
                    if(calendarYear % 4 == 0){
                        monthOffset = offsetConstant - 172800
                    } else{
                        monthOffset = offsetConstant - 86400
                    }
                break;
    
    
                case 6:
                    if(calendarYear % 4 == 0){
                        monthOffset = offsetConstant - 172800
                    } else{
                        monthOffset = offsetConstant - 86400
                    }
                break;
    
    
                case 7:
                    if(calendarYear % 4 == 0){
                        monthOffset = offsetConstant - 259200
                    } else{
                        monthOffset = offsetConstant - 172800
                    }
                break;
    
    
                case 8:
                    if(calendarYear % 4 == 0){
                        monthOffset = offsetConstant - 345600
                    } else{
                        monthOffset = offsetConstant - 259200
                    }
                break;
    
    
                case 9:
                    if(calendarYear % 4 == 0){
                        monthOffset = offsetConstant - 345600
                    } else{
                        monthOffset = offsetConstant - 259200
                    }
                break;
    
    
                case 10:
                    if(calendarYear % 4 == 0){
                        monthOffset = offsetConstant - 432000
                    } else{
                        monthOffset = offsetConstant - 345600
                    }
                break;
    
    
                case 11:
                    if(calendarYear % 4 == 0){
                        monthOffset = offsetConstant - 432000
                    } else{
                        monthOffset = offsetConstant - 345600
                    }
                break;

            }
        }

        const offset = yearOffset + monthOffset

        return offset
    }

    
    function handleDaySelect(day){
        
        if(selected.current){
            const currentElement = document.getElementById(selected.current.day)
            currentElement ? currentElement.classList.remove("selected") : ""
            
            if(selected.current.day == day.id && selected.current.month == calendarMonth && selected.current.year == calendarYear){
                selected.current = null
                setSelectedDay(null)
                return
            }
        }

        const dayElement = document.getElementById(day.id)
        dayElement.classList.add("selected")
        selected.current = {
            day: day.id,
            month: calendarMonth,
            year: calendarYear,
        }
        
        setSelectedDay({
            day: day.id,
            month: calendarMonth,
            year: calendarYear,
            events: day.events
        })
    }


    function createClasses(hasEvents, day){
        let classes = ""

        if(hasEvents){
            classes = classes + "hasEvents"
        }

        if(selected.current){
            if(day == selected.current.day && calendarMonth == selected.current.month && calendarYear == selected.current.year){
                classes = classes + " selected"
            }
        }

        return classes
    }


    useEffect(() => {
        renderCalendar()
    }, [calendarMonth, calendarYear, recurringEvents])


    return(
        <Container>
            <Year>
                <button onClick={() => handleChangeDate(-5, "Year")}><MdKeyboardDoubleArrowLeft/></button>
                <button onClick={() => handleChangeDate(-1, "Year")}><MdKeyboardArrowLeft/></button>
                
                <span>{calendarYear}</span>

                <button onClick={() => handleChangeDate(1, "Year")}><MdKeyboardArrowRight/></button>
                <button onClick={() => handleChangeDate(5, "Year")}><MdKeyboardDoubleArrowRight/></button>

            </Year>

            <Month>
                <button onClick={() => handleChangeDate(-1, "Month")}><MdKeyboardArrowLeft/></button>
                
                <span>{months[calendarMonth]}</span>

                <button onClick={() => handleChangeDate(1, "Month")}><MdKeyboardArrowRight/></button>
            </Month>

            <Week>
                <span>Sun</span>
                <span>Mon</span>
                <span>Tue</span>
                <span>Wed</span>
                <span>Thu</span>
                <span>Fri</span>
                <span>Sat</span>
            </Week>

            <Days>
                {days.map((day, i) => day.id != "blank" ? 
                <button key={i} className={createClasses(day.events[0], day.id)}  onClick={() => handleDaySelect(day)} id={day.id} selected={true}>{day.id}</button>
                :
                <button key={i} disabled></button>)}
            </Days>
        </Container>
    )
} 