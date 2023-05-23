import { Calendar } from "../../components/Calendar";
import { Title } from "../../components/Title";
import { useOptions } from "../../hooks/options";
import { Container, Events } from "./style";
import { RecurringEvent } from "../../components/RecurringEvent";
import { NewRecurringEvent } from "../../components/NewRecurringEvent";

/*
Um estado no contexto q armazena os recurring events
Um useEffect com recurring events de depoendencia que quando carrega/atualiza, renderiza os dias que tem algum evento(nao sei se vai precisar)
Filtro que filtra por eventos selecionados
*/



export function RecurrentEvents(){

    const {recurringEvents} = useOptions()

    return(
        <Container>
            <Title/>

            <Calendar/>

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