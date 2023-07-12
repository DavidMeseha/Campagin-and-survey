import { Route, Routes } from "react-router";
import Campaigns from "./page/Campaigns";
import { BrowserRouter } from "react-router-dom";


const AppRouting = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Campaigns />} />
            </Routes>
        </BrowserRouter>
    )
};
export default AppRouting;