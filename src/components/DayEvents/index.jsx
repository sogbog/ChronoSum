import { useEffect, useState } from "react";
import { Container, Event } from "./style";
import { useOptions } from "../../hooks/options";


export function DayEvents(){

    const { selectedDay, recurringEvents } = useOptions()
    const [sortedInstances, setSortedInstances] = useState([])

    function getSecondsSince0(parameter, event){

        if(parameter == "month"){
            let rawElapsed = ((selectedDay.year - 1)*31536000)

            switch(selectedDay.month){
            case 0:
                
            break

            case 1:
                rawElapsed += (31*86400)
            break

            case 2:
                //59
                if(selectedDay.year % 4 == 0){
                    rawElapsed += (60*86400)
                } else{
                    rawElapsed += (59*86400)
                }
            break

            case 3:
                //90
                if(selectedDay.year % 4 == 0){
                    rawElapsed += (91*86400)
                } else{
                    rawElapsed += (90*86400)
                }
            break

            case 4:
                //120
                if(selectedDay.year % 4 == 0){
                    rawElapsed += (121*86400)
                } else{
                    rawElapsed += (120*86400)
                }
            break

            case 5:
                //151
                if(selectedDay.year % 4 == 0){
                    rawElapsed += (152*86400)
                } else{
                    rawElapsed += (151*86400)
                }
            break

            case 6:
                //181
                if(selectedDay.year % 4 == 0){
                    rawElapsed += (182*86400)
                } else{
                    rawElapsed += (181*86400)
                }
            break

            case 7:
                //212
                if(selectedDay.year % 4 == 0){
                    rawElapsed += (213*86400)
                } else{
                    rawElapsed += (212*86400)
                }
            break

            case 8:
                //243
                if(selectedDay.year % 4 == 0){
                    rawElapsed += (244*86400)
                } else{
                    rawElapsed += (243*86400)
                }
            break

            case 9:
                //273
                if(selectedDay.year % 4 == 0){
                    rawElapsed += (274*86400)
                } else{
                    rawElapsed += (273*86400)
                }
            break

            case 10:
                //304
                if(selectedDay.year % 4 == 0){
                    rawElapsed += (305*86400)
                } else{
                    rawElapsed += (304*86400)
                }
            break

            case 11:
                //334
                if(selectedDay.year % 4 == 0){
                    rawElapsed += (335*86400)
                } else{
                    rawElapsed += (334*86400)
                }
            break
            }

            let leapYearsSinceOne = Math.floor(selectedDay.year/4)
            
            if(selectedDay.year%4 == 0){
                leapYearsSinceOne--
            }

            const leapOffset = leapYearsSinceOne*86400

            const MonthSecondsElapsed = rawElapsed + leapOffset

            return MonthSecondsElapsed

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


    function getEventOcurrences(event, instances){
        const eventInstances = []
        

        const periodInSeconds = event.secondPeriod + (event.minutePeriod*60) + (event.hourPeriod*3600) + (event.dayPeriod*86400) + (event.monthPeriod*2592000) + (event.yearPeriod*31536000)

        const eventSecondsElapsed = getSecondsSince0("event",event)
        const dayOffset = (selectedDay.day - 1)*86400
        const MonthSecondsElapsed = getSecondsSince0("month", null)
        const DaySecondsElapsed = MonthSecondsElapsed + dayOffset

        const secondsElapsedSinceEvent = DaySecondsElapsed - eventSecondsElapsed
        const secondsElapsedSinceLast = secondsElapsedSinceEvent % periodInSeconds
        const secondsToEvent = periodInSeconds - secondsElapsedSinceLast


        let instanceSecond = secondsToEvent


        if(secondsElapsedSinceLast == 0){
            instanceSecond = 0
        }

        if(secondsElapsedSinceLast < 0){
            instanceSecond = -secondsElapsedSinceLast
        }

        while (instanceSecond < 86400) {
            let second = (instanceSecond%60).toString()
            let fullMinutes = (Math.floor(instanceSecond/60)).toString()
            let minute = (fullMinutes%60).toString()
            let hour = (Math.floor(fullMinutes/60)).toString()

            second.length == 1 ? second = "0" + second : ""
            minute.length == 1 ? minute = "0" + minute : ""
            hour.length == 1 ? hour = "0" + hour : ""

            const instance = {name: event.name, hour: hour, minute: minute, second: second}
            eventInstances.push(instance)

            instanceSecond += periodInSeconds
        }

        instances.push(...eventInstances)
    }


    function createOcurrencesArray(){
        const instances = []
        selectedDay.events.map(event => getEventOcurrences(event, instances))

        instances.sort((a,b) => {
            const aHour = parseInt(a.hour)
            const bHour = parseInt(b.hour)
            const aMinute = parseInt(a.minute)
            const bMinute = parseInt(b.minute)
            const aSecond = parseInt(a.second)
            const bSecond = parseInt(b.second)

            if((bHour > aHour) || (bHour >= aHour && bMinute > aMinute) || (bHour >= aHour && bMinute >= aMinute && bSecond >= aSecond)){
                return -1
            }

            if((aHour > bHour) || (aHour >= bHour && aMinute > bMinute) || (aHour >= bHour && aMinute >= bMinute && aSecond >= bSecond)){
                return 1
            }

            return 0

        })

        setSortedInstances(instances)
    }


    useEffect(() => {
        createOcurrencesArray()
    },[selectedDay])


    return(
        <Container>

            {sortedInstances[0] ? sortedInstances.map((instace, i) => 

                <Event key={i}> {`${instace.name} at ${instace.hour}:${instace.minute}:${instace.second}`} </Event>

            ) : <span>No events on this day</span>}

        </Container>
    )
}