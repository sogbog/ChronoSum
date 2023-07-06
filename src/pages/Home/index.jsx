import {Container, Menu, Tools} from "./style"
import { Title } from "../../components/Title"
import { Link } from "react-router-dom"

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
            <Link to={"/ChronoSum/TimeBetween"}>Time Between</Link>
            <span>Get the time elapsed between two dates</span>
          </li>

          <li>
            <Link to={"/ChronoSum/TimeDifference"}>Time Zone Difference</Link>
            <span>Get the current time and the difference between two location's time zones</span>
          </li>

          <li>
            <Link to={"/ChronoSum/RecurrentEvents"}>Recurrent Events</Link>
            <span>Know when a recurrent event is going to happen given a starting date and period</span>
          </li>
        </Tools>
        <span>Don't forget to check out the github repo<Link to={"https://github.com/sogbog/ChronoSum"} target="_blank"> here </Link>for more info on how to use</span>
      </Menu>
    </Container>
  )
}