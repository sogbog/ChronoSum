import { Container } from "./style";
import { Link } from "react-router-dom";

export function Title(){
    return(
        <Container>
            <Link to={"/ChronoSum"}>Chrono Sum</Link>
            <span>time operations!</span>
        </Container>
    )
}