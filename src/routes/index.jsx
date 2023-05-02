import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "../pages/Home";
import { SimpleSum } from "../pages/SimpleSum"

export function AppRoutes(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/ChronoSum/" element={<Home/>}/>
                <Route path="/ChronoSum/SimpleSum" element={<SimpleSum/>}/>
            </Routes>
        </BrowserRouter>
    )
}