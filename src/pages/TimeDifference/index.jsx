import { Title } from "../../components/Title"
import { useRef, useState } from "react";
import { useLoadScript, StandaloneSearchBox } from "@react-google-maps/api";
import { Container, Location, Result } from "./styles";
import axios from "axios";

const libs = ["places"]

export function TimeDifference(){

    const weekDays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
    const ApiKey = import.meta.env.VITE_KEY
    

    const input1Ref = useRef()
    const input2Ref = useRef()
    const lat1 = useRef("")
    const lng1 = useRef("")
    const lat2 = useRef("")
    const lng2 = useRef("")
    const offset1 = useRef()
    const offset2 = useRef()
    const currentCounter1 = useRef()
    const currentCounter2 = useRef()

    const [address1, setAddress1] = useState("")
    const [address2, setAddress2] = useState("")
    const [date1, setDate1] = useState("Location 1 date and time")
    const [zone1, setZone1] = useState("Location 1 time zone")
    const [date2, setDate2] = useState("Location 2 date and time")
    const [zone2, setZone2] = useState("Location 2 time zone")
    const [difference, setDifference] = useState("Difference")

    const {isLoaded} = useLoadScript({
        googleMapsApiKey: ApiKey,
        libraries: libs,
        language: "en"
    })

    async function handleChangePlace(caller){
        let place
        
        if(caller == 1){
            [place] = input1Ref.current.getPlaces()
        } else if(caller == 2){
            [place] = input2Ref.current.getPlaces()
        }

        const targetDate = new Date()
        const timestamp = targetDate.getTime()/1000 + targetDate.getTimezoneOffset()*60

        if(place){
            if(caller == 1){
                lat1.current = place.geometry.location.lat()
                lng1.current = place.geometry.location.lng()
                setAddress1(place.formatted_address)

                const latLng = `${lat1.current}, ${lng1.current}`

                const response = await axios.get('https://maps.googleapis.com/maps/api/timezone/json?location=' + latLng + '&timestamp=' + timestamp + '&key=' + ApiKey)

                displayTime(caller, response.data)

            } else if(caller == 2){
                lat2.current = place.geometry.location.lat()
                lng2.current = place.geometry.location.lng()
                setAddress2(place.formatted_address)

                const latLng = `${lat2.current}, ${lng2.current}`

                const response = await axios.get('https://maps.googleapis.com/maps/api/timezone/json?location=' + latLng + '&timestamp=' + timestamp + '&key=' + ApiKey)

                displayTime(caller, response.data)
            }
        }
    }

    function displayTime(caller, location){
        const offsets = location.dstOffset*1000 + location.rawOffset*1000
        const baseDate = new Date()
        const UTCMili = baseDate.getTime() + baseDate.getTimezoneOffset()*60000
        const localDate = new Date(UTCMili + offsets)

        if(caller == 1){

            clearInterval(currentCounter1.current);
            setDate1(`${localDate.getDate()}/${localDate.getMonth() + 1}/${localDate.getFullYear()} ${localDate.toLocaleTimeString()} ${weekDays[localDate.getDay()]}`)

            currentCounter1.current = setInterval(() => {
                localDate.setSeconds(localDate.getSeconds() + 1)
                setDate1(`${localDate.getDate()}/${localDate.getMonth() + 1}/${localDate.getFullYear()} ${localDate.toLocaleTimeString()} ${weekDays[localDate.getDay()]}`)
            }, 1000);

            setZone1(location.timeZoneName)
            offset1.current = offsets

        } else if(caller == 2){
            clearInterval(currentCounter2.current);
            setDate2(`${localDate.getDate()}/${localDate.getMonth() + 1}/${localDate.getFullYear()} ${localDate.toLocaleTimeString()} ${weekDays[localDate.getDay()]}`)

            currentCounter2.current = setInterval(() => {
                localDate.setSeconds(localDate.getSeconds() + 1)
                setDate2(`${localDate.getDate()}/${localDate.getMonth() + 1}/${localDate.getFullYear()} ${localDate.toLocaleTimeString()} ${weekDays[localDate.getDay()]}`)
            }, 1000);

            setZone2(location.timeZoneName)
            offset2.current = offsets
        }
        
        if(offset1.current != null & offset2.current != null){
            const timeDifference = (offset2.current - offset1.current)/3600000
            timeDifference >= 2 ? setDifference(`${timeDifference} hours`) : setDifference(`${timeDifference} hour`)
        }
    }

    return(
        <Container>
            <Title/>

            {isLoaded && <div id="LocationsWrapper">
                <Location id="Location_1">
                    <label htmlFor="Location_1">Location 1</label>
                    <StandaloneSearchBox onLoad={ref => (input1Ref.current = ref)} onPlacesChanged={() => handleChangePlace(1)}>          
                        <input type="text" placeholder="Type a place"/>
                    </StandaloneSearchBox>
                </Location>

                <Location id="Location_2">
                    <label htmlFor="Location_2">Location 2</label>
                    <StandaloneSearchBox onLoad={ref => (input2Ref.current = ref)} onPlacesChanged={() => handleChangePlace(2)}>
                        <input type="text" placeholder="Type a place"/>
                    </StandaloneSearchBox>
                </Location>
            </div>}

            <Result>
                <span id="Label">Difference</span>
                <div id="Result_1">
                    <span>{address1 != "" ? address1 : "Location 1"}</span>
                    <span>{date1}</span>
                    <span>{zone1}</span>
                </div>

                <div id="Difference">
                    <span>{difference}</span>
                </div>

                <div id="Result_2">
                    <span>{address2 != "" ? address2 : "Location 2"}</span>
                    <span>{date2}</span>
                    <span>{zone2}</span>
                </div>
            </Result>
        </Container>
    )
}