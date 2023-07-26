import { useState } from "react";
import QuestionSelect from "../../popups/QuestionSelect";
import { MultipleOptionsQuestions, TextQuestion } from "./Questions";
import { Close } from "../general/Icons";

const MULTI_OPTIONS_Questions = ['Multiple Textbox', 'Multiple Choice', 'Checkbox', 'Ranking']
const SINGLE_QUESTION = ['Single Textbox', 'Rating']

const QuestionSelectButton = ({ question, setQuestionType, setQuestionText, setOption, addOption, removeOption, removeQuestion }) => {
    const [isOpen, setIsOpen] = useState(false)

    if (!question.type) {
        return (
            <>
                {isOpen && <QuestionSelect close={() => setIsOpen(false)} setQuestionType={setQuestionType} />}
                <div className="flex justify-between items-center bg-primary rounded-md cursor-default md:cursor-pointer p-2 mb-4">
                    <div onClick={() => setIsOpen(true)} className="grow">
                        <div className=" text-color4 font-bold">Question</div>
                        <div className="text-color5 text-sm">Click To select Question</div>
                    </div>
                    <div onClick={removeQuestion} className="w-6 fill-color1 ml-4"><Close /></div>
                </div>
            </>
        )
    }

    if (SINGLE_QUESTION.includes(question.type)) {
        return (
            <TextQuestion question={question} setQuestionText={setQuestionText} removeQuestion={removeQuestion} />
        )
    }

    if (MULTI_OPTIONS_Questions.includes(question.type)) {
        return (
            <MultipleOptionsQuestions
                question={question}
                setQuestionText={setQuestionText}
                setOption={setOption}
                addOption={addOption}
                removeOption={removeOption}
                removeQuestion={removeQuestion}
            />
        )
    }
};
export default QuestionSelectButton;