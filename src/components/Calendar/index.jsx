import { useRef, useState, useEffect } from "react";
import { Container, Year, Month, Week, Days } from "./style";
import {MdKeyboardArrowLeft, MdKeyboardArrowRight, MdKeyboardDoubleArrowLeft, MdKeyboardDoubleArrowRight} from "react-icons/md"
import { useOptions } from "../../hooks/options";



/*
PROTO LOGICA DA RENDER DO CALENDARIO

vai ter um dia especifico que comecou o evento e uma certa hora e frequencia. Talvez transformar a hora inicial em segundos desde 00, e quantas horas faltam ate acabar o dia tambem.

Vai ter um array(estado pra poder atualizar a renderizacao e mudar com qualquer funcao) que contem os dias, e cada dia vai ser um objeto contendo o evento(se existir). A funcao de render do calendario vai cuidar da criacao dos objetos dias no array e a funcao de createEvents vai adicionar os eventos nos dias corretos com as infos corretas

So precisa contar a partir do primeiro dia do mes que esta sendo visto, entao um if para ver se o mes é antes ou depois do início, se for depois, renderiza os eventos, se não não

Em um determinado mês que estiver sendo visualizado calcular os segundo que passou desde o primeiro dia do evento e a partir dai ver em que hora de cada dia que cai, e assim vai.

Uma area do lado do calendario vai mostrar os detalhes de cada dia quando selecionado, quando clicar no botao ele vai chamar uma funcao de render dessa area e enviar os eventos do dia.

Para saber se vai acontecer, checar primeiro se acontece no ano, depois no mes depois em cada dia separado. Isso usando o periodo em segundos(menos o comeco talvez?). Dai transforma para cada unidade quando for checar.

Ver se acontece no ano, pegar o resto da divisao(%) do (ano do calendario - primeiro ano que aconteceu) pelo periodo em anos. Se for >1 , acontece nesse ano VER CERTINHO ISSO PQ COM ANO QUEBRADO NAO FUNCIONA DIREITO testar =>  (2023-2019)%1.5, eh pra dar que vai acontecer

talvez 1.5 - (2023-2019)%1.5

descobri(acho), verificar com (periodo - anos que se passaram desde o ultimo acontecimento), isso vai resultar em quantos anos faltam para acontecer denovo, depois de verificar o ano, verifica mes, dia...
*/


export function Calendar(){
    
    const fullDate = new Date()
    const calendarDefault = {
        year: fullDate.getFullYear(),
        month: fullDate.getMonth()
    }
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
    let constructorDays = []
    let currentMonthSecondsElapsed = 0

    const { recurringEvents } = useOptions()

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

    function renderEvents(){
        let daysWithEvents = constructorDays

        getSecondsSince0("month", null)

        const event = {
            date: new Date("2023-01-10T00:00:00"),
            dayPeriod: 0,
            hour: 0,
            hourPeriod: 48,
            id: 1684932959862,
            minute: 0,
            minutePeriod: 0,
            monthPeriod: 0,
            name: "Memes",
            second: 0,
            secondPeriod: 0,
            yearPeriod: 0
        }

        //------------DENTRO DO MAP DE EVENTS------------

        if(!checkIfHappens(88, event)){
            setDays(constructorDays)
            return
        }

        daysWithEvents.map(day => {
            //console.log(checkIfHappens(day, event))
            if(checkIfHappens(day, event)){
                day.events.push(event)
            }
        })

        //console.log(daysWithEvents)

        setDays(daysWithEvents)
    }



    function checkIfHappens(day, event){

        if(day == 88){

            if((event.date.getFullYear() > calendarYear)){
                // console.log("Ano do calendario menor que o primeiro do evento")
                return false
            }else if(!(calendarYear > event.date.getFullYear()) && (event.date.getMonth() > calendarMonth)){
                // console.log("Mes do calendario menor que o primeiro do evento")
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

        const secondsElapsedSinceEvent = currentDaySecondsElapsed - eventSecondsElapsed
        const secondsElapsedSinceLast = secondsElapsedSinceEvent % periodInSeconds
        const secondsToEvent = periodInSeconds - secondsElapsedSinceLast

        console.log(`
        ----------------------------------------------------------------
        Dia ${day.id}

        Segundos de 0 ate evento: ${eventSecondsElapsed}
        Segundos de 0 ate data: ${currentDaySecondsElapsed}
        Segundos entre evento e data: ${secondsElapsedSinceEvent}
        Intervalo em segundos: ${periodInSeconds}
        Segundos desde o ultimo evento: ${secondsElapsedSinceLast}
        Segundos ate o proximo evento: ${secondsToEvent}

        `)

        if(secondsElapsedSinceEvent < -86399){
            return false
        }

        if(secondsToEvent < 86400 || secondsElapsedSinceLast == 0 || secondsElapsedSinceEvent <= 0){
            return true
        }else{
            return false
        }
 
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
                {days.map((day, i) => day.id != "blank" ? <button key={i} className={day.events[0] ? "hasEvents" : ""}>{day.id}</button> : <button key={i} disabled></button>)}
            </Days>
        </Container>
    )
}