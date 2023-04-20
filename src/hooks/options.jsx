import { createContext, useContext, useState, useEffect } from "react";

const OptionsContext = createContext({})

function ContextWrapper({children}){
    const [enabledFields, setEnabledFields] = useState(["Hours", "Minutes", "Minutes", "Seconds", "Miliseconds"])

    return(
        <OptionsContext.Provider value={{enabledFields, setEnabledFields}}>
            {children}
        </OptionsContext.Provider>
    )
}

function useOptions(){
    const context = useContext(OptionsContext)

    return context
}

export {ContextWrapper, useOptions}