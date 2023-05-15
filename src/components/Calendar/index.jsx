import { useRef, useState } from "react";
import { Container, Year, Month, Week, Days } from "./style";
import {MdKeyboardArrowLeft, MdKeyboardArrowRight, MdKeyboardDoubleArrowLeft, MdKeyboardDoubleArrowRight} from "react-icons/md"


export function Calendar(){

    const [calendarYear, setCalendarYear] = useState(2023)
    const [calendarMonth, setCalendarMonth] = useState(0)
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
    
    function handleChangeDate(quantity, target){
        if(target == "Year"){

            if((calendarYear + quantity) >= 1 & (calendarYear + quantity) <= 9999){
                setCalendarYear(prevState => prevState + quantity)
                const yearToCalculate = calendarYear + quantity
                renderCalendar(yearToCalculate, calendarMonth)
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
        let days
        if(calendarMonth == 0 || calendarMonth == 2 || calendarMonth == 4 || calendarMonth == 6 || calendarMonth == 7 || calendarMonth == 9 || calendarMonth == 11){
            days = 31
        } else if(calendarMonth == 1){
            if(calendarYear % 4 == 0){
                days = 29 
            } else{
                days = 28
            }
        } else{
            days = 30
        }

        const toRender = []
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
                59
                if(calendarYear % 4 == 0){
                    monthStartingDay = yearStartingDay + 4
                } else{
                    monthStartingDay = yearStartingDay + 3
                }
            break

            case 3:
                90
                if(calendarYear % 4 == 0){
                    monthStartingDay = yearStartingDay
                } else{
                    monthStartingDay = yearStartingDay + 6
                }
            break

            case 4:
                120
                if(calendarYear % 4 == 0){
                    monthStartingDay = yearStartingDay + 2
                } else{
                    monthStartingDay = yearStartingDay + 1
                }
            break

            case 5:
                151
                if(calendarYear % 4 == 0){
                    monthStartingDay = yearStartingDay + 5
                } else{
                    monthStartingDay = yearStartingDay + 4
                }
            break

            case 6:
                181
                if(calendarYear % 4 == 0){
                    monthStartingDay = yearStartingDay
                } else{
                    monthStartingDay = yearStartingDay + 6
                }
            break

            case 7:
                212
                if(calendarYear % 4 == 0){
                    monthStartingDay = yearStartingDay + 3
                } else{
                    monthStartingDay = yearStartingDay + 2
                }
            break

            case 8:
                243
                if(calendarYear % 4 == 0){
                    monthStartingDay = yearStartingDay + 6
                } else{
                    monthStartingDay = yearStartingDay + 5
                }
            break

            case 9:
                273
                if(calendarYear % 4 == 0){
                    monthStartingDay = yearStartingDay + 1
                } else{
                    monthStartingDay = yearStartingDay
                }
            break

            case 10:
                304
                if(calendarYear % 4 == 0){
                    monthStartingDay = yearStartingDay + 4
                } else{
                    monthStartingDay = yearStartingDay + 3
                }
            break

            case 11:
                334
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
            toRender.push("")
        }
        for(let i=0; i < days; i++){
            toRender.push((i+1).toString())
        }
        return toRender
        
    }

    function calculateFirstDay(year){
        const rawDayOffset = year%7
        let leapYearsSinceOne = Math.floor(year/4)
        if(year%4 == 0){
            leapYearsSinceOne--
        }
        const leapYearsOffset = leapYearsSinceOne%7

        let startingDayID = (rawDayOffset + leapYearsOffset) - 1

        if(startingDayID > 6){
            startingDayID -= 7
        }
        return startingDayID
    }

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
                {renderCalendar().map((day, i) => day != "" ? <button key={i} >{day}</button> : <button key={i} disabled></button>)}
            </Days>
        </Container>
    )
}