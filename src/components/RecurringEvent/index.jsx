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
                            <input type="text" id="hours" disabled value={eventData.hour}/>
                        </Field>

                        <Field>
                            <label htmlFor="hours">Minutes</label>
                            <input type="text" id="hours" disabled value={eventData.minute}/>
                        </Field>

                        <Field>
                            <label htmlFor="hours">Seconds</label>
                            <input type="text" id="hours" disabled value={eventData.second}/>
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
                        <input type="text" id="yearPeriod" disabled value={eventData.yearPeriod}/>
                    </Field>
                    
                    <Field>
                        <label htmlFor="monthPeriod">Months</label>
                        <input type="text" id="monthPeriod" disabled value={eventData.monthPeriod}/>
                    </Field>
                    
                    <Field>
                        <label htmlFor="dayPeriod">Days</label>
                        <input type="text" id="dayPeriod" disabled value={eventData.dayPeriod}/>
                    </Field>
                    
                    <Field>
                        <label htmlFor="hourPeriod">Hours</label>
                        <input type="text" id="hourPeriod" disabled value={eventData.hourPeriod} />
                    </Field>

                    <Field>
                        <label htmlFor="minutePeriod">Minutes</label>
                        <input type="text" id="minutePeriod" disabled value={eventData.minutePeriod} />
                    </Field>

                    <Field>
                        <label htmlFor="secondPeriod">Seconds</label>
                        <input type="text" id="secondPeriod" disabled value={eventData.secondPeriod} />
                    </Field>   
                </div>

            </div>
        </Container>
    )
}