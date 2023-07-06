import { Container, Field } from "./style";



export function SimpleDate(setState){
    return(
        <Container>
            <div className="DateWrapper">
                <div className="FieldsWrapper">
                    <Field>
                        <label htmlFor="hours">Hour</label>
                        <input type="text" id="hours" onChange={e => {}} autoComplete="off"/>
                    </Field>

                    <Field>
                        <label htmlFor="minutes">Minute</label>
                        <input type="text" id="minutes" onChange={e => {}} autoComplete="off"/>
                    </Field>

                    <Field>
                        <label htmlFor="seconds">Second</label>
                        <input type="text" id="seconds" onChange={e => {}} autoComplete="off"/>
                    </Field>
                
                </div>


                <Field>
                    <label htmlFor="date">Date</label>
                    <input type="date" id="date" autoComplete="off"/>
                </Field>
            </div>
        </Container>
    )
}