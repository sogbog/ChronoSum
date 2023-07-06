import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "../pages/Home";
import { SimpleSum } from "../pages/SimpleSum"
import { DurationSum } from "../pages/DurationSum";
import { TimeDifference } from "../pages/TimeDifference";
import { RecurrentEvents } from "../pages/RecurrentEvents";
import { TimeBetween } from "../pages/TimeBetween";

export function AppRoutes(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/ChronoSum/" element={<Home/>}/>
                <Route path="/ChronoSum/SimpleSum" element={<SimpleSum/>}/>
                <Route path="/ChronoSum/DurationSum" element={<DurationSum/>}/>
                <Route path="/ChronoSum/TimeDifference" element={<TimeDifference/>}/>
                <Route path="/ChronoSum/RecurrentEvents" element={<RecurrentEvents/>}/>
                <Route path="/ChronoSum/TimeBetween" element={<TimeBetween/>}/>
            </Routes>
        </BrowserRouter>
    )
}