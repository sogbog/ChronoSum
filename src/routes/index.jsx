import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "../pages/Home";
import { SimpleSum } from "../pages/SimpleSum"
import { DurationSum } from "../pages/DurationSum";
import { TimeDifference } from "../pages/TimeDifference";

export function AppRoutes(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/ChronoSum/" element={<Home/>}/>
                <Route path="/ChronoSum/SimpleSum" element={<SimpleSum/>}/>
                <Route path="/ChronoSum/DurationSum" element={<DurationSum/>}/>
                <Route path="/ChronoSum/TimeDifference" element={<TimeDifference/>}/>
            </Routes>
        </BrowserRouter>
    )
}