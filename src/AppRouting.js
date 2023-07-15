import { Route, Routes } from "react-router";
import Campaigns from "./page/Campaigns";
import { BrowserRouter } from "react-router-dom";
import CreateCampaign from "./page/CreateCampaign";


const AppRouting = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Campaigns />} />
                <Route path='/create-campaign' element={<CreateCampaign />} />
            </Routes>
        </BrowserRouter>
    )
};
export default AppRouting;