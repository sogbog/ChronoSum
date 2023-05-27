import { Calendar } from "../../components/Calendar";
import { Title } from "../../components/Title";
import { useOptions } from "../../hooks/options";
import { Container, Events, EventsToday, Today } from "./style";
import { RecurringEvent } from "../../components/RecurringEvent";
import { NewRecurringEvent } from "../../components/NewRecurringEvent";
import { DayEvents } from "../../components/DayEvents";


export function RecurrentEvents(){

    const {recurringEvents, selectedDay} = useOptions()

    return(
        <Container>
            <Title/>

            <div id="CalendarWrapper">
                <Calendar />

                <Today>
                    <span>Events of the day</span>

                    <EventsToday>
                        { selectedDay ? <DayEvents /> : <span>No day selected</span>}
                    </EventsToday>
                </Today>
            </div>


            <Events>
                <span>Recurring Events</span>

                <NewRecurringEvent/>
                
                {
                    recurringEvents.map((event, i)=> (<RecurringEvent eventData={event} key={i}/>))
                }
            </Events>


        </Container>
    )
}