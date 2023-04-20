import { ThemeProvider } from 'styled-components'
import themes from './theme'
import GlobalStyle from './global'
import { AppRoutes } from "../routes"
import { useState } from 'react'
import { ThemeButton } from './ThemeSwitcher.style'
import {MdOutlineDarkMode, MdOutlineLightMode} from "react-icons/md"
import { ContextWrapper } from '../hooks/options'

export function ThemeSwitcher(){

    const [currentTheme, setCurrentTheme] = useState(themes.dark)

    function handleTheme(){
        currentTheme == themes.dark ? setCurrentTheme(themes.light) : setCurrentTheme(themes.dark)
    }

    return(
        <ThemeProvider theme={currentTheme}>
            <GlobalStyle/>
            <ThemeButton onClick={() => handleTheme()}>
                {currentTheme == themes.dark ? <MdOutlineDarkMode/> : <MdOutlineLightMode/>}
            </ThemeButton>
            <ContextWrapper>
                <AppRoutes/>
            </ContextWrapper>
        </ThemeProvider> 
    )
}