import {Container, Menu, Tools} from "./style"
import { Title } from "../../components/Title"
import { Link } from "react-router-dom"
import roman_clock from "../../assets/clock_face_roman.svg"

export function Home(){
  return (
    <Container>
      <header>
        <Title/>
      </header>

      <Menu>
        <h2>Tools</h2>

        <Tools>
          <li>
            <Link to={"/ChronoSum/SimpleSum"}>Simple sum</Link>
            <span>Add to, or, subtract from a given time</span>
          </li>

          <li>
            <Link to={"/ChronoSum/DurationSum"}>Duration sum</Link>
            <span>Get the total duration of a series of events</span>
          </li>

          <li>
            <Link to={"/ChronoSum/TimeDifference"}>Time Zone Difference</Link>
            <span>Get the current time and the difference between two location's time zones</span>
          </li>
        </Tools>
        <span>{"(Click on the page title to return to this page)"}</span>
      </Menu>
    </Container>
  )
}