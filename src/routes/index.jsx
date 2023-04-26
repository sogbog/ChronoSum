import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "../pages/Home";

export function AppRoutes(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/ChronoSum" element={<Home/>}/>
            </Routes>
        </BrowserRouter>
    )
}