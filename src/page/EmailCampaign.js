import { useLocation, useNavigate, useParams } from "react-router";
import Header from "../components/general/Header";
import EmailMenu from "../components/create-campaign/EmailMenu";
import { useEffect, useState } from "react";
import { Edit, User } from "../components/general/Icons";
import Button from "../components/general/Button";
import Message from '../components/general/Message'
import DonePopup from "../components/general/DonePopup";
import useData from "../hooks/useData";
import { cloneDeep } from "lodash";

const EmailCampaign = () => {
    const navigate = useNavigate()
    const location = useLocation()
    const { id } = useParams()
    const { campaigns, editCampaign, addNewCampaign } = useData()
    const [campaign, setCampaign] = useState({})
    const [selectedCampaign, setSelectedCampaign] = useState({})
    const [errorMessage, setErrorMesssage] = useState('')
    const [isError, setIsError] = useState(false)
    const [isDone, setIsDone] = useState(false)
    const [isView, setIsView] = useState(false)
    const isEdit = location.pathname !== '/create-campaign/sms'

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
    }, [campaigns])

    const threwError = (message) => {
        setErrorMesssage(message)
        setIsError(true)
    }

    const save = () => {
        if (!campaign.name) return threwError('Campaign Name Field Is Empty')
        if (!campaign.description) return threwError('Campaign Description Field Is Empty')
        if (campaign.targetCustomers.length < 1) return threwError('No Customers Targeted')
        if (campaign.promotion) {
            if (!campaign.promotion.value) return threwError('It contains promotion but has no value')
            if (campaign.promotion.services.length < 1) return threwError('It contains promotion but has no selected services')
            if (campaign.promotion.duration.start > campaign.promotion.duration.end) return threwError('Promotion duration end should be after the start value')
        }

        if (!isEdit) addNewCampaign(campaign, 'SMS')
        else editCampaign(campaign.id, campaign)

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
            <div className="relative h-[100vh] mx-4 text-color2 overflow-hidden">
                <div className="flex justify-between items-center p-3">
                    <Header title={'Email Campaign'} action={() => navigate('/')} />
                    <div className="w-16 sm:hidden"><Button name={isView ? 'Edit' : 'View'} action={() => setIsView(!isView)} color={'bg-color4'} /></div>
                </div>
                <main className={`absolute flex gap-3 sm:w-full w-[200%] top-14 bottom-4 ${isView ? 'left-[-100%]' : 'left-0'} sm:left-0`}>
                    <div className="sm:w-[300px] w-1/2 p-3 bg-secondary rounded-md overflow-auto">
                        <EmailMenu save={save} campaign={campaign} selectedCampaign={selectedCampaign} setCampaign={setCampaign} edit={isEdit} />
                    </div>
                    <div className="flex flex-col sm:grow w-1/2 bg-secondary rounded-md">
                        <div className="w-full p-2 border-b-2 border-b-color2 text-center">TOAT</div>
                        <div className="grow p-3">
                            
                        </div>
                        <div><Button action={save} name={'Save'} color={'bg-color4'} /></div>
                    </div>
                </main>
            </div>
        </div>
    )
};
export default EmailCampaign;