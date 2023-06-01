import { Container } from "./style";
import { Link } from "react-router-dom";
import { RiArrowGoBackLine } from "react-icons/ri"


export function Title(){
    return(
        <Container>
            <div id="titleWrapper">
                <Link to={"/ChronoSum"}>Chrono Sum</Link>
                <span>time operations!</span>
            </div>

            <div id="buttonWrapper">
                <Link to={"/ChronoSum"}>
                    <RiArrowGoBackLine/>
                </Link>
            </div>

        </Container>
    )
}