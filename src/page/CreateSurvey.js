import { useLocation, useNavigate, useParams } from "react-router";
import Header from "../components/general/Header";
import EmailMenu from "../components/create-campaign/EmailMenu";
import { useEffect, useState } from "react";
import Button from "../components/general/Button";
import useData from "../hooks/useData";
import { cloneDeep } from "lodash";
import { companyData } from "../constants/initialData";
import templates from "../constants/campaign-templates";

const CreateSurvey = () => {
    const navigate = useNavigate()
    const location = useLocation()
    const { id, template } = useParams()
    const { campaigns } = useData()
    const [campaign, setCampaign] = useState({})
    const [selectedCampaign, setSelectedCampaign] = useState({})
    const isEdit = location.pathname !== `/create-campaign/sms/${template}`
    const [isView, setIsView] = useState(isEdit)

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
                    <Header title={'Email Campaign'} action={() => navigate('/')} />
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
                    <div className="sm:grow w-1/2 p-3 bg-secondary rounded-md overflow-auto">
                        
                    </div>
                </main>
            </div>
        </div>
    )
};
export default CreateSurvey;