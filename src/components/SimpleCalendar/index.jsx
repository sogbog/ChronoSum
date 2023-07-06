import { useRef, useState, useEffect } from "react";
import { Container, Year, Month, Week, Days } from "./style";
import {MdKeyboardArrowLeft, MdKeyboardArrowRight, MdKeyboardDoubleArrowLeft, MdKeyboardDoubleArrowRight} from "react-icons/md"

export function SimpleCalendar({setState}){
    
    const fullDate = new Date()
    const calendarDefault = {
        year: fullDate.getFullYear(),
        month: fullDate.getMonth()
    }
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
    let constructorDays = []
    const [days, setDays] = useState([])

    const selected = useRef(null)

    const [calendarYear, setCalendarYear] = useState(calendarDefault.year)
    const [calendarMonth, setCalendarMonth] = useState(calendarDefault.month)
    

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
            constructorDays.push({id: "blank"})
        }
        for(let i=0; i < monthDays; i++){
            constructorDays.push({id: i+1})
        }
        setDays(constructorDays)
        //handleSelectedDayRendering()
    }

    function handleDaySelect(day){
        seState({
            day: day.id,
            month: calendarMonth,
            year: calendarYear,
        })
    }

    useEffect(() => {
        renderCalendar()
    }, [calendarMonth, calendarYear])


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
                <button key={i} onClick={() => handleDaySelect(day)} id={day.id} selected={true}>{day.id}</button>
                :
                <button key={i} disabled></button>)}
            </Days>
        </Container>
    )
} 