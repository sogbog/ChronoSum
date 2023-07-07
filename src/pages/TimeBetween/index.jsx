import { SimpleDate } from "../../components/SimpleDate";
import { Title } from "../../components/Title";
import { App, Container, DateInput, Result } from "./style";
import { useEffect, useState } from "react";

export function TimeBetween(){
    
    const baseDate = new Date()
    baseDate.setHours(0)
    baseDate.setMinutes(0)
    baseDate.setSeconds(0)

    const [dateOne, setDateOne] = useState(baseDate)
    const [dateTwo, setDateTwo] = useState(baseDate)
    const [year, setYear] = useState()
    const [month, setMonth] = useState()
    const [day, setDay] = useState()
    const [hour, setHour] = useState()
    const [minute, setMinute] = useState()
    const [second, setSecond] = useState()

    function handleState(dateID, value){
        if (dateID == 1){
            setDateOne(new Date(value))
        } else {
            setDateTwo(new Date(value))
        }
    }

    function getSecondsBetween(){

        let rawElapsedOne = ((dateOne.getFullYear() - 1)*31536000)
        let rawElapsedTwo = ((dateTwo.getFullYear() - 1)*31536000)


        switch(dateOne.getMonth()){

            case 1:
                rawElapsedOne += (31*86400)
            break

            case 2:
                //59
                if(dateOne.getFullYear() % 4 == 0){
                    rawElapsedOne += (60*86400)
                } else{
                    rawElapsedOne += (59*86400)
                }
            break

            case 3:
                //90
                if(dateOne.getFullYear() % 4 == 0){
                    rawElapsedOne += (91*86400)
                } else{
                    rawElapsedOne += (90*86400)
                }
            break

            case 4:
                //120
                if(dateOne.getFullYear() % 4 == 0){
                    rawElapsedOne += (121*86400)
                } else{
                    rawElapsedOne += (120*86400)
                }
            break

            case 5:
                //151
                if(dateOne.getFullYear() % 4 == 0){
                    rawElapsedOne += (152*86400)
                } else{
                    rawElapsedOne += (151*86400)
                }
            break

            case 6:
                //181
                if(dateOne.getFullYear() % 4 == 0){
                    rawElapsedOne += (182*86400)
                } else{
                    rawElapsedOne += (181*86400)
                }
            break

            case 7:
                //212
                if(dateOne.getFullYear() % 4 == 0){
                    rawElapsedOne += (213*86400)
                } else{
                    rawElapsedOne += (212*86400)
                }
            break

            case 8:
                //243
                if(dateOne.getFullYear() % 4 == 0){
                    rawElapsedOne += (244*86400)
                } else{
                    rawElapsedOne += (243*86400)
                }
            break

            case 9:
                //273
                if(dateOne.getFullYear() % 4 == 0){
                    rawElapsedOne += (274*86400)
                } else{
                    rawElapsedOne += (273*86400)
                }
            break

            case 10:
                //304
                if(dateOne.getFullYear() % 4 == 0){
                    rawElapsedOne += (305*86400)
                } else{
                    rawElapsedOne += (304*86400)
                }
            break

            case 11:
                //334
                if(dateOne.getFullYear() % 4 == 0){
                    rawElapsedOne += (335*86400)
                } else{
                    rawElapsedOne += (334*86400)
                }
            break
        }

        switch(dateTwo.getMonth()){

            case 1:
                rawElapsedTwo += (31*86400)
            break

            case 2:
                //59
                if(dateTwo.getFullYear() % 4 == 0){
                    rawElapsedTwo += (60*86400)
                } else{
                    rawElapsedTwo += (59*86400)
                }
            break

            case 3:
                //90
                if(dateTwo.getFullYear() % 4 == 0){
                    rawElapsedTwo += (91*86400)
                } else{
                    rawElapsedTwo += (90*86400)
                }
            break

            case 4:
                //120
                if(dateTwo.getFullYear() % 4 == 0){
                    rawElapsedTwo += (121*86400)
                } else{
                    rawElapsedTwo += (120*86400)
                }
            break

            case 5:
                //151
                if(dateTwo.getFullYear() % 4 == 0){
                    rawElapsedTwo += (152*86400)
                } else{
                    rawElapsedTwo += (151*86400)
                }
            break

            case 6:
                //181
                if(dateTwo.getFullYear() % 4 == 0){
                    rawElapsedTwo += (182*86400)
                } else{
                    rawElapsedTwo += (181*86400)
                }
            break

            case 7:
                //212
                if(dateTwo.getFullYear() % 4 == 0){
                    rawElapsedTwo += (213*86400)
                } else{
                    rawElapsedTwo += (212*86400)
                }
            break

            case 8:
                //243
                if(dateTwo.getFullYear() % 4 == 0){
                    rawElapsedTwo += (244*86400)
                } else{
                    rawElapsedTwo += (243*86400)
                }
            break

            case 9:
                //273
                if(dateTwo.getFullYear() % 4 == 0){
                    rawElapsedTwo += (274*86400)
                } else{
                    rawElapsedTwo += (273*86400)
                }
            break

            case 10:
                //304
                if(dateTwo.getFullYear() % 4 == 0){
                    rawElapsedTwo += (305*86400)
                } else{
                    rawElapsedTwo += (304*86400)
                }
            break

            case 11:
                //334
                if(dateTwo.getFullYear() % 4 == 0){
                    rawElapsedTwo += (335*86400)
                } else{
                    rawElapsedTwo += (334*86400)
                }
            break
        }

        let leapYearsSinceOne_One = Math.floor(dateOne.getFullYear()/4)
        let leapYearsSinceOne_Two = Math.floor(dateTwo.getFullYear()/4)
        if(dateOne.getFullYear()%4 == 0){
            leapYearsSinceOne_One--
        }
        if(dateTwo.getFullYear()%4 == 0){
            leapYearsSinceOne_Two--
        }

        const leapOffset_One = leapYearsSinceOne_One*86400
        const leapOffset_Two = leapYearsSinceOne_Two*86400

        const dateOneElapsed = rawElapsedOne + leapOffset_One + dateOne.getSeconds() + (dateOne.getMinutes()*60) + (dateOne.getHours()*3600) + ((dateOne.getDate() - 1)*86400)

        const dateTwoElapsed = rawElapsedTwo + leapOffset_Two + dateTwo.getSeconds() + (dateTwo.getMinutes()*60) + (dateTwo.getHours()*3600) + ((dateTwo.getDate() - 1)*86400)

        let secondsBetween = dateTwoElapsed - dateOneElapsed
        if(secondsBetween < 0){
            secondsBetween = secondsBetween * -1
        }

        return secondsBetween
    }

    function calculateTime(){

        const sBetween = getSecondsBetween()

        const seconds = sBetween % 60
        const minutes = (Math.floor(sBetween / 60) % 60)
        const hours = (Math.floor(sBetween / 3600) % 24)
        const days = (Math.floor(sBetween / 86400) % 30 )
        const months = (Math.floor(sBetween / 2592000) % 12)
        const years = (Math.floor(sBetween / 31536000))
        

        setSecond(seconds)
        setMinute(minutes)
        setHour(hours)
        setDay(days)
        setMonth(months)
        setYear(years)
    }

    useEffect(() => {

        calculateTime()

    },[dateOne, dateTwo])

    return(
        <Container>
            <Title/>
            <App>
                <div className="inputWrapper">
                    <DateInput>
                        <span>Date one</span>
                        <SimpleDate setState={handleState} ID={1}/>
                    </DateInput>


                    <DateInput>
                        <span>Date two</span>
                        <SimpleDate setState={handleState} ID={2}/>
                    </DateInput>
                </div>

                <Result>
                    <span id="Label">Time between</span>

                    <div className="resultsWrapper">
                        <div className="resultWrapper">
                            <label htmlFor="years">Years</label>
                            <span id="years"> {year} </span>
                        </div>

                        <div className="resultWrapper">
                            <label htmlFor="months">Months</label>
                            <span id="months"> {month} </span>
                        </div>

                        <div className="resultWrapper">
                            <label htmlFor="days">Days</label>
                            <span id="days"> {day} </span>
                        </div>

                        <div className="resultWrapper">
                            <label htmlFor="hours">Hours</label>
                            <span id="hours"> {hour} </span>
                        </div>

                        <div className="resultWrapper">
                            <label htmlFor="minutes">Minutes</label>
                            <span id="minutes"> {minute} </span>
                        </div>

                        <div className="resultWrapper">
                            <label htmlFor="seconds">Seconds</label>
                            <span id="seconds"> {second} </span>
                        </div>
                    </div>
                </Result>
            </App>
        </Container>
    )
}