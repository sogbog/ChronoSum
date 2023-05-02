import { Container } from "./styles";
import { useOptions } from "../../hooks/options";
import { TbArrowLeftCircle } from "react-icons/tb"

export function SliderButton({name, opt1, opt2, onChange}){

    return(
        <Container>
            <label htmlFor="FormatSlider">{name}</label>
            <div className="InputWrapper">
                <span>{opt1}</span>
                <label htmlFor="FormatSlider" className="SliderBox">
                    <input type="checkbox" id="FormatSlider" onChange={onChange}/>
                    <span className="Slider"><TbArrowLeftCircle/></span>
                </label>
                <span>{opt2}</span>
            </div>
        </Container>
    )
}