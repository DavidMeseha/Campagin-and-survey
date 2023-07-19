import { Route, Routes } from "react-router";
import Campaigns from "./page/Campaigns";
import { BrowserRouter } from "react-router-dom";
import CreateCampaign from "./page/CreateCampaign";
import SMSCampgain from "./page/SMSCampgain";
import EmailCampaign from "./page/EmailCampaign";


const AppRouting = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Campaigns />} />
                <Route path='/create-campaign' element={<CreateCampaign />} />
                <Route path='/create-campaign/sms' element={<SMSCampgain />} />
                <Route path='/create-campaign/email' element={<EmailCampaign />} />
            </Routes>
        </BrowserRouter>
    )
};
export default AppRouting;