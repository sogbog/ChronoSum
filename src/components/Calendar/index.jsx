import { Container, Year, Month, Week, Days } from "./style";
import {MdKeyboardArrowLeft, MdKeyboardArrowRight, MdKeyboardDoubleArrowLeft, MdKeyboardDoubleArrowRight} from "react-icons/md"


export function Calendar(){

    function renderCalendar(region){
        switch (region){
            case "Year":
                return "2023"

            case "Month":
                return "May"

            case "Week":
                return ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]
            
            case "Days":
                let days = 31
                const toRender = []
                for(let i=0; i < days; i++){
                    toRender.push((i+1).toString())
                }
                toRender.unshift("")
                toRender.push("", "", "")
                return toRender
        }
    }

    return(
        <Container>
            <Year>
                <button><MdKeyboardDoubleArrowLeft/></button>
                <button><MdKeyboardArrowLeft/></button>
                
                <span>{renderCalendar("Year")}</span>

                <button><MdKeyboardArrowRight/></button>
                <button><MdKeyboardDoubleArrowRight/></button>

            </Year>

            <Month>
                <button><MdKeyboardArrowLeft/></button>
                
                <span>{renderCalendar("Month")}</span>

                <button><MdKeyboardArrowRight/></button>
            </Month>

            <Week>
                {renderCalendar("Week").map((day, i) => <span key={i}>{day}</span>)}
            </Week>

            <Days>
                {renderCalendar("Days").map((day, i) => day != "" ? <button key={i} >{day}</button> : <button key={i} disabled></button>)}
            </Days>
        </Container>
    )
}