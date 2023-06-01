import { Container, Field } from "./style";
import {TiDeleteOutline} from "react-icons/ti"
import { useOptions } from "../../hooks/options";

export function RecurringEvent({eventData}){
    
    const {setRecurringEvents} = useOptions()

    function handleDelete(){
        setRecurringEvents(prevState => prevState.filter(event => event.id != eventData.id))
    }
    
    return(
        <Container>
            <div className="LeftSide">

                <button className="Delete" onClick={() => handleDelete()}><TiDeleteOutline/></button>
                <span className="Name">{eventData.name}</span>
                <div className="DurationWrapper">
                    <span>Starting time:</span>
                    <div className="FieldsWrapper">
                        <Field>
                            <label htmlFor="hours">Hours</label>
                            <span id="hours">{eventData.hour}</span>
                        </Field>

                        <Field>
                            <label htmlFor="hours">Minutes</label>
                            <span id="minutes">{eventData.minute}</span>
                        </Field>

                        <Field>
                            <label htmlFor="hours">Seconds</label>
                            <span id="seconds">{eventData.second}</span>
                        </Field>                    
                    </div>

                    <div className="DateWrapper">
                        <Field>
                            <label>Initial Date</label>
                            <span>{eventData.date.toLocaleDateString()}</span>
                        </Field>
                    </div>
                </div>

            </div>



            <div className="RightSide">

                <span>Frequency:</span>
                <div className="FieldsWrapper">
                    <Field>
                        <label htmlFor="yearPeriod">Years</label>
                        <span id="yearPeriod">{eventData.yearPeriod}</span>
                    </Field>
                    
                    <Field>
                        <label htmlFor="monthPeriod">Months</label>
                        <span id="monthPeriod">{eventData.monthPeriod}</span>
                    </Field>
                    
                    <Field>
                        <label htmlFor="dayPeriod">Days</label>
                        <span id="dayPeriod">{eventData.dayPeriod}</span>
                    </Field>
                    
                    <Field>
                        <label htmlFor="hourPeriod">Hours</label>
                        <span id="hourPeriod">{eventData.hourPeriod}</span>
                    </Field>

                    <Field>
                        <label htmlFor="minutePeriod">Minutes</label>
                        <span id="minutePeriod">{eventData.minutePeriod}</span>
                    </Field>

                    <Field>
                        <label htmlFor="secondPeriod">Seconds</label>
                        <span id="secondPeriod">{eventData.secondPeriod}</span>
                    </Field>   
                </div>

            </div>
        </Container>
    )
}