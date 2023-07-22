import { useLocation, useNavigate, useParams } from "react-router";
import Header from "../components/general/Header";
import EmailMenu from "../components/create-campaign/EmailMenu";
import { useEffect, useState } from "react";
import Button from "../components/general/Button";
import useData from "../hooks/useData";
import { cloneDeep } from "lodash";
import { companyData } from "../constants/initialData";
import templates from "../constants/campaign-templates";

const EmailCampaign = () => {
    const navigate = useNavigate()
    const location = useLocation()
    const { id, template } = useParams()
    const { campaigns } = useData()
    const [campaign, setCampaign] = useState({})
    const [selectedCampaign, setSelectedCampaign] = useState({})
    const isEdit = location.pathname !== `/create-campaign/email/${template}`
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

        if (template && template != 'custom') {
            setCampaign(templates[template].email)
            setSelectedCampaign(templates[template].email)
        }
    }, [campaigns])

    return (
        <div className="relative">
            <div className="relative h-[100vh] mx-4 text-color2 overflow-hidden">
                <div className="flex justify-between items-center p-3">
                    <Header title={'Email Campaign'} action={() => navigate('/create-campaign')} />
                    <div className="w-16 sm:hidden">
                        <Button
                            name={isView ? 'Edit' : 'View'}
                            action={() => setIsView(!isView)}
                            color={'bg-color4'}
                        />
                    </div>
                </div>
                <main className={`absolute flex gap-3 sm:w-full w-[200%] top-14 bottom-4 ${isView ? 'left-[-100%]' : 'left-0'} sm:left-0`}>
                    <div className="sm:w-[300px] w-1/2 p-3 bg-secondary rounded-md overflow-auto">
                        <EmailMenu campaign={campaign} selectedCampaign={selectedCampaign} setCampaign={setCampaign} isEdit={isEdit} />
                    </div>
                    <div className="flex flex-col sm:grow w-1/2 p-3 bg-secondary rounded-md overflow-auto">
                        <div className="grow">
                            <div className="w-full p-3"><span className="text-green">Supject: </span>{campaign.supject}</div>
                            <div className="relative flex justify-center items-center h-28 w-[90%] m-auto my-3">
                                {campaign.image
                                    ? <img src={campaign.image ? URL.createObjectURL(campaign.image) : ''} className="max-h-full" alt="someone's Img" />
                                    : <div>Add Header Image</div>}
                            </div>
                            <div className="text-center w-[90%] m-auto">
                                <div className="text-green text-2xl">{campaign.title || 'Input Title To Edit'}</div>
                                <div>{campaign.salutation || 'Some Salutation'},</div>
                                <div className="text-base">
                                    {campaign.description
                                        ? campaign.description.split('\n').map(text => {
                                            return (
                                                <p className="mt-4">{text}</p>
                                            )
                                        }) : <p className="text-3xl font-bold py-9">Input Campgain Description To Edit</p>}</div>
                                {campaign.canBook && <div className="w-32 m-auto my-4"><Button name={'Book Now'} action={() => { }} color={'bg-color7'} /></div>}
                                <div className="mt-4 text-base">{companyData.name}</div>
                                <div className="mb-4 text-base">{companyData.address}</div>
                            </div>
                        </div>
                        <div className="text-center underline text-xs">Click To Unsubscribe</div>
                    </div>
                </main>
            </div>
        </div>
    )
};
export default EmailCampaign;