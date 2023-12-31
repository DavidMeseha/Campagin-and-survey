import { useLocation, useNavigate, useParams } from "react-router";
import Header from "../components/general/Header";
import SMSMenu from "../components/create-campaign/SMSMenu";
import { useEffect, useState } from "react";
import { User } from "../components/general/Icons";
import Button from "../components/general/Button";
import useData from "../hooks/useData";
import { cloneDeep } from "lodash";
import templates from "../constants/campaign-templates";

const SMSCampgain = () => {
    const navigate = useNavigate()
    const location = useLocation()
    const { id, template } = useParams()
    const { campaigns } = useData()
    const [campaign, setCampaign] = useState({})
    const [selectedCampaign, setSelectedCampaign] = useState({})
    const isEdit = location.pathname !== `/create-campaign/sms/${template}`
    const [isView, setIsView] = useState(true)

    useEffect(() => {
        if (isEdit && id) {
            let foundCampaign = {}
            for (let campaign of campaigns) {
                if (campaign.id === id) {
                    foundCampaign = cloneDeep(campaign)
                    break
                }
            }

            setCampaign(foundCampaign)
            setSelectedCampaign(foundCampaign)
        }

        if (template && template !== 'custom') {
            setCampaign(templates[template].sms)
            setSelectedCampaign(templates[template].sms)
        }
    }, [campaigns])

    return (
        <div className="relative">
            <div className="relative h-[100vh] mx-4 text-color2">
                <div className="flex justify-between items-center p-3">
                    <Header title={'SMS Campaign'} action={() => navigate(`${isEdit ? '/' : '/create-campaign'}`)} />
                    <div className="w-16 md:hidden"><Button name={isView ? 'Edit' : 'View'} action={() => setIsView(!isView)} color={'bg-color4'} /></div>
                </div>
                <main className={`absolute flex w-full gap-3 top-14 bottom-16 md:bottom-4`}>
                    <div className={`md:w-[320px] w-full p-3 bg-secondary rounded-md overflow-auto md:block ${isView ? 'hidden' : 'block'}`}>
                        <SMSMenu campaign={campaign} selectedCampaign={selectedCampaign} setCampaign={setCampaign} isEdit={isEdit} />
                    </div>
                    <div className={`flex flex-col grow md:calc-view-width w-full bg-secondary rounded-md md:flex ${isView ? 'flex' : 'hidden'}`}>
                        <div className="w-full p-2 border-b-2 border-b-color2 text-center">TOAT</div>
                        <div className="flex items-end grow gap-2 p-3">
                            <div className="w-12 p-2 bg-green rounded-full"><User /></div>
                            <div className="calc-sms-message-width">
                                <div className="w-full text-center text-color8 text-sm p-2">{new Date().toLocaleDateString('en', { weekday: 'long' }) + ', ' + new Date().toLocaleTimeString('en', { hour12: true, hour: '2-digit', minute: '2-digit' })}</div>
                                <div className="p-4 w-full min-h-[50px] bg-primary rounded-[30px]">
                                    <div className="text-base">
                                        <p className="overflow-hidden">{campaign.description ? campaign.description : 'Edit Description For Message Content'}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </main>
            </div>
        </div>
    )
};
export default SMSCampgain;