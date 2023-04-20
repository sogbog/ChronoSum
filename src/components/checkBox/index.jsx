import { Container } from "./style"
import { useState, useEffect } from "react"
import { BiCheckbox, BiCheckboxSquare } from "react-icons/bi"
import { useOptions } from "../../hooks/options"

export function CheckBox({name}){
    const {setEnabledFields} = useOptions()
    const [checked, setChecked] = useState(true)
   
    useEffect(() => {
        document.querySelector("#" + name).checked = true
    }, [])
    
    function handleCheck(){
        const checked = document.querySelector("#" + name).checked
        setChecked(checked)

        if(checked){
            setEnabledFields(prevState => [...prevState, name])
        }else{
            setEnabledFields(prevState => prevState.filter(field => field != name))
        }
    }

    return(
        <Container>
            <div id="checkboxDisplay">
            {checked ?  <BiCheckboxSquare/> : <BiCheckbox/>}
            </div>
            <input type="checkbox" id={name} onChange={() => handleCheck()}/>
            <label htmlFor={name}>{name}</label>            
        </Container>
    )
}