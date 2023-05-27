import { createContext, useContext, useState, useEffect } from "react";

const OptionsContext = createContext({})

function ContextWrapper({children}){
    const [enabledFields, setEnabledFields] = useState(["Hours", "Minutes", "Minutes", "Seconds", "Miliseconds"])
    const [format, setFormat] = useState(false)
    const [events, setEvents] = useState([])
    const [recurringEvents, setRecurringEvents] = useState([])
    const [selectedDay, setSelectedDay] = useState()

    return(
        <OptionsContext.Provider value={{enabledFields, setEnabledFields, format, setFormat, 
        events, setEvents, recurringEvents, setRecurringEvents, selectedDay, setSelectedDay}}>
            {children}
        </OptionsContext.Provider>
    )
}

function useOptions(){
    const context = useContext(OptionsContext)

    return context
}

export {ContextWrapper, useOptions}