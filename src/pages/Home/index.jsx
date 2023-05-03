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
        <div id="menuTitle">
          <h2>Tools</h2>
          <span>{"(Click on the site name to return to this page)"}</span>
        </div>

        <Tools>
          <li>
            <Link to={"/ChronoSum/SimpleSum"}>Common Sum</Link>
            <span>Add to, or, subtract from a given time</span>
          </li>
        </Tools>

      </Menu>
    </Container>
  )
}