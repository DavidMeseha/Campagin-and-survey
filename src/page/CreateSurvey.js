import { useLocation, useNavigate, useParams } from "react-router";
import Header from "../components/general/Header";
import { useEffect, useState } from "react";
import Button from "../components/general/Button";
import useData from "../hooks/useData";
import { cloneDeep } from "lodash";
import SurveyMenu from "../components/create-campaign/SurveyMenu";
import { CheckboxQuestion, MultipleChoice, MultipleTextbox, Ranking, Rating, SingleTextbox } from "../components/create-campaign/QuestionsPreview";

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
        <div className="relative overflow-hidden">
            <div className="relative h-[100vh] mx-4 text-color2 overflow-hidden">
                <div className="flex justify-between items-center p-3">
                    <Header title={'Survey Campaign'} action={() => navigate(`${isEdit ? '/' : '/create-campaign'}`)} />
                    <div className="w-16 sm:hidden">
                        <Button
                            name={isView ? 'Edit' : 'View'}
                            action={() => setIsView(!isView)}
                            color={'bg-color4'}
                        />
                    </div>
                </div>
                <main className={`absolute flex gap-3 sm:w-full w-[210%] top-14 bottom-16 md:bottom-4 ${isView ? 'left-[-100%]' : 'left-0'} sm:left-0`}>
                    <div className="sm:w-[300px] w-1/2 p-3 bg-secondary rounded-md overflow-auto">
                        <SurveyMenu survey={survey} selectedSurvey={selectedSurvey} setSurvey={setSurvey} isEdit={isEdit} />
                    </div>
                    <div className="sm:grow w-1/2 p-3 bg-secondary rounded-md overflow-auto">
                        <div className="space-y-2">
                            {survey?.questions?.map((question, index) => {
                                if (question.type === 'Single Textbox') {
                                    return (
                                        <SingleTextbox key={index} question={question} />
                                    )
                                }

                                if (question.type === 'Multiple Textbox') {
                                    return (
                                        <MultipleTextbox key={index} question={question} />
                                    )
                                }

                                if (question.type === 'Checkbox') {
                                    return (
                                        <CheckboxQuestion key={index} question={question} />
                                    )
                                }

                                if (question.type === 'Multiple Choice') {
                                    return (
                                        <MultipleChoice key={index} question={question} />
                                    )
                                }

                                if (question.type === 'Ranking') {
                                    return (
                                        <Ranking key={index} question={question} />
                                    )
                                }

                                if (question.type === 'Rating') {
                                    return (
                                        <Rating key={index} question={question} />
                                    )
                                }
                            })}
                        </div>
                    </div>
                </main>
            </div>
        </div>
    )
};
export default CreateSurvey;