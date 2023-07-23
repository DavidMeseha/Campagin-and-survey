import { useLocation, useNavigate, useParams } from "react-router";
import Header from "../components/general/Header";
import { useEffect, useState } from "react";
import Button from "../components/general/Button";
import useData from "../hooks/useData";
import { cloneDeep } from "lodash";
import SurveyMenu from "../components/create-campaign/SurveyMenu";

const CreateSurvey = () => {
    const navigate = useNavigate()
    const location = useLocation()
    const { id } = useParams()
    const { campaigns } = useData()

    const [survey, setSurvey] = useState({})
    const [selectedSurvey, setSelectedSurvey] = useState({
        title: '',
        targetCustomers: [],
        questions: [
            {
                type: '',
                question: '',
                options: []
            }
        ]
    })

    const isEdit = location.pathname !== `/create-campaign/survey`
    const [isView, setIsView] = useState(isEdit)

    useEffect(() => {
        if (isEdit && id) {
            let foundSurvey = {}
            for (let campaign of campaigns) {
                if (campaign.id === id) {
                    foundSurvey = cloneDeep(campaign)
                    break
                }
            }

            setSurvey(foundSurvey)
            setSelectedSurvey(foundSurvey)
        }

        if (selectedSurvey) {
            setSurvey(selectedSurvey)
        }
    }, [campaigns])

    return (
        <div className="relative">
            <div className="relative h-[100vh] mx-4 text-color2 overflow-hidden">
                <div className="flex justify-between items-center p-3">
                    <Header title={'Survey Campaign'} action={() => navigate('/')} />
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
                        <SurveyMenu survey={survey} selectedSurvey={selectedSurvey} setSurvey={setSurvey} isEdit={isEdit} />
                    </div>
                    <div className="sm:grow w-1/2 p-3 bg-secondary rounded-md overflow-auto">

                    </div>
                </main>
            </div>
        </div>
    )
};
export default CreateSurvey;