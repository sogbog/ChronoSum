import { SimpleDate } from "../../components/SimpleDate";
import { Title } from "../../components/Title";
import { App, Container, Date, Result } from "./style";
import { useState } from "react";

export function TimeBetween(){

    const [dateOne, setDateOne] = useState()
    const [dateTwo, setDateTwo] = useState()

    return(
        <Container>
            <Title/>
            <App>
                <div className="inputWrapper">
                    <Date>
                        <span>Date one</span>
                        <SimpleDate/>
                    </Date>


                    <Date>
                        <span>Date two</span>
                        <SimpleDate/>
                    </Date>
                </div>

                <Result>
                    <span id="Label">Time between</span>

                    <div className="resultsWrapper">
                        <div className="resultWrapper">
                            <label htmlFor="years">Years</label>
                            <span id="years">  </span>
                        </div>

                        <div className="resultWrapper">
                            <label htmlFor="months">Months</label>
                            <span id="months">  </span>
                        </div>

                        <div className="resultWrapper">
                            <label htmlFor="days">Days</label>
                            <span id="days">  </span>
                        </div>

                        <div className="resultWrapper">
                            <label htmlFor="hours">Hours</label>
                            <span id="hours">  </span>
                        </div>

                        <div className="resultWrapper">
                            <label htmlFor="minutes">Minutes</label>
                            <span id="minutes">  </span>
                        </div>

                        <div className="resultWrapper">
                            <label htmlFor="seconds">Seconds</label>
                            <span id="seconds">  </span>
                        </div>
                    </div>
                </Result>
            </App>
        </Container>
    )
}