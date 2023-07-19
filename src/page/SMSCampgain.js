import { useNavigate } from "react-router";
import Header from "../components/general/Header";
import SMSMenu from "../components/create-campaign/SMSMenu";
import { useState } from "react";
import { Edit } from "../components/general/Icons";
import Button from "../components/general/Button";
import Message from '../components/general/Message'
import DonePopup from "../components/general/DonePopup";
import useData from "../hooks/useData";

const SMSCampgain = () => {
    const navigate = useNavigate()
    const { addNewCampaign } = useData()
    const [campaign, setCampaign] = useState({})
    const [errorMessage, setErrorMesssage] = useState('')
    const [isError, setIsError] = useState(false)
    const [isDone, setIsDone] = useState(false)

    const threwError = (message) => {
        setErrorMesssage(message)
        setIsError(true)
    }

    const save = () => {
        if (!campaign.name) return threwError('Campaign Name Field Is Empty')
        if (!campaign.description) return threwError('Campaign Description Field Is Empty')
        if (!campaign.targetCustomers.length > 0) return threwError('No Customers Targeted')
        if (campaign.promotion) {
            if (!campaign.promotion.value) return threwError('It contains promotion but has no value')
            if (campaign.promotion.services.length > 0) return threwError('It contains promotion but has no selected services')
            if (campaign.promotion.duration.start > campaign.promotion.duration.end) return threwError('Promotion duration end should be after the start value')
        }

        addNewCampaign(campaign)

        setIsDone(true)
        setTimeout(() => {
            setIsDone(false)
            navigate('/')
        }, 1200)
    }

    return (
        <div className="relative">
            {isDone && <DonePopup action={'New Campaign Created'} />}
            <Message message={errorMessage} state={isError} setState={setIsError} />
            <div className="relative h-[100vh] mx-4 text-color2">
                <div className="p-3"><Header title={'SMS Campaign'} action={() => navigate('/')} /></div>
                <main className="absolute flex gap-4 w-full top-14 bottom-4">
                    <div className="w-[300px] p-3 bg-secondary rounded-md overflow-auto">
                        <SMSMenu save={save} campaign={campaign} setCampaign={setCampaign} process={'create'} />
                    </div>
                    <div className="flex flex-col grow bg-secondary rounded-md">
                        <div className="w-full p-2 border-b-2 border-b-color2 text-center">TOAT</div>
                        <div className="flex items-end grow gap-2 p-3">
                            <div className="w-12 p-2 bg-green rounded-full"><Edit /></div>
                            <div className="grow">
                                <div className="w-full text-center text-color8 text-sm p-2">{new Date().toLocaleDateString('en', { weekday: 'long' }) + ', ' + new Date().toLocaleTimeString('en', { hour12: true, hour: '2-digit', minute: '2-digit' })}</div>
                                <div className="w-full min-h-[250px] flex items-center bg-primary rounded-md">
                                    <div className="grow text-center font-bold text-base"><p className="w-[90%] m-auto overflow-hidden">{campaign.description}</p></div>
                                </div>
                            </div>
                        </div>
                        <div><Button action={save} name={'Save'} color={'bg-color4'} /></div>
                    </div>
                </main>
            </div>
        </div>
    )
};
export default SMSCampgain;