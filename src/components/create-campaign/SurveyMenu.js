import { useEffect, useState } from "react";
import { TextInput } from "../general/InputWTitle";
import CustomerSelectButton from "./CustomerSelectButton";
import { cloneDeep, isEmpty } from "lodash";
import Button from "../general/Button";
import DonePopup from "../general/DonePopup";
import Message from "../general/Message";
import useData from "../../hooks/useData";
import { useNavigate } from "react-router";
import QuestionSelectButton from "./QuestionSelectButton";

const SurveyMenu = ({ survey, setSurvey, isEdit, selectedSurvey }) => {
    const { editCampaign, addNewCampaign } = useData()
    const navigate = useNavigate()
    const [surveyTitle, setSurveyTitle] = useState('')
    const [selectedCustomers, setSelectedCustomers] = useState([])
    const [questions, setQuestions] = useState([])

    const [errorMessage, setErrorMesssage] = useState('')
    const [isError, setIsError] = useState(false)
    const [isDone, setIsDone] = useState(false)

    useEffect(() => {
        if (!isEmpty(selectedSurvey)) {
            setSurveyTitle(selectedSurvey.title)
            setSelectedCustomers(selectedSurvey.selectedCustomers || [])
            setQuestions(selectedSurvey.questions)
        }
    }, [selectedSurvey])

    useEffect(() => {
        setSurvey({
            ...selectedSurvey,
            name: surveyTitle,
            targetCustomers: [...selectedCustomers],
            questions
        })
    }, [surveyTitle, selectedCustomers, questions])

    const threwError = (message) => {
        setErrorMesssage(message)
        setIsError(true)
    }

    const save = () => {
        if (!survey.name) return threwError('The Survey title input is empty')
        if (survey.targetCustomers.length < 1) return threwError('No Customers Selected')
        if (survey.questions.length < 1) return threwError('No Questions added')
        
        if (!isEdit) addNewCampaign(survey, 'survey')
        else editCampaign(survey.id, survey)

        setIsDone(true)
        setTimeout(() => {
            setIsDone(false)
            navigate('/')
        }, 1200)
    }

    const addQuestion = () => {
        let newQuestion = {
            type: '',
            question: '',
            options: []
        }

        let allQuestions = cloneDeep(questions)
        allQuestions.push(newQuestion)
        setQuestions(allQuestions)
    }

    const setQuestionType = (index, type) => {
        let modifiedQuestions = cloneDeep(questions)
        modifiedQuestions[index].type = type
        setQuestions(modifiedQuestions)
    }

    const setQuestionText = (index, text) => {
        let modifiedQuestions = cloneDeep(questions)
        modifiedQuestions[index].question = text
        setQuestions(modifiedQuestions)
    }

    const setOption = (optionIndex, questionIndex, text) => {
        let modifiedQuestions = cloneDeep(questions)
        modifiedQuestions[questionIndex].options[optionIndex] = text
        setQuestions(modifiedQuestions)
    }

    const addOption = (index) => {
        let modifiedQuestions = cloneDeep(questions)
        modifiedQuestions[index].options.push('')
        setQuestions(modifiedQuestions)
    }

    const removeOption = (optionIndex, questionIndex) => {
        let modifiedQuestions = cloneDeep(questions)
        modifiedQuestions[questionIndex].options.splice(optionIndex, 1)
        setQuestions(modifiedQuestions)
    }

    const removeQuestion = (index) => {
        console.log(index)
        let allQuestions = cloneDeep(questions)
        allQuestions.splice(index, 1)
        setQuestions(allQuestions)
    }

    return (
        <>
            {isDone && <DonePopup action={'New Survey Created'} />}
            <Message message={errorMessage} state={isError} setState={setIsError} />
            <div>
                <TextInput
                    title={'Campaign Name'}
                    placeholder={'Type Campaign Name'}
                    value={surveyTitle}
                    onChange={(e) => setSurveyTitle(e.target.value)}
                />
            </div>
            <div><CustomerSelectButton selected={selectedCustomers} setSelected={setSelectedCustomers} /></div>
            {questions.map((question, index) => {
                return (
                    <div key={index}>
                        <QuestionSelectButton
                            question={question}
                            setQuestionType={(type) => setQuestionType(index, type)}
                            setQuestionText={(text) => setQuestionText(index, text)}
                            setOption={(optionIndex, text) => setOption(optionIndex, index, text)}
                            addOption={() => addOption(index)}
                            removeOption={(optionIndex) => removeOption(optionIndex, index)}
                            removeQuestion={() => removeQuestion(index)}
                        />
                    </div>

                )
            })}
            <div onClick={addQuestion} className="text-color7 mb-4 touch-no-pointer"><span className="text-2xl mr-2">+</span>Add Question</div>
            <div className="my-2"><Button action={save} name={'Save'} color={'bg-color4'} /></div>
        </>
    )
};
export default SurveyMenu;