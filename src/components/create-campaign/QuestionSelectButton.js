import { useState } from "react";
import { ArrowSolid } from "../general/ArrowSolid";
import QuestionSelect from "../../popups/QuestionSelect";
import { MultipleOptionsQuestions, TextQuestion } from "./Questions";

const MULTI_OPTIONS_Questions = ['Multiple Textbox', 'Multiple Choice', 'Checkbox', 'Ranking']
const SINGLE_QUESTION = ['Single Textbox', 'Rating']

const QuestionSelectButton = ({ question, setQuestionType, setQuestionText, setOption, addOption }) => {
    const [isOpen, setIsOpen] = useState(false)

    if (!question.type) {
        return (
            <>
                {isOpen && <QuestionSelect close={() => setIsOpen(false)} setQuestionType={setQuestionType} />}
                <div onClick={() => setIsOpen(true)} className="flex justify-between items-center bg-primary rounded-md cursor-default md:cursor-pointer p-2 mb-4">
                    <div>
                        <div className=" text-color4 font-bold">Question</div>
                        <div className="text-color5 text-sm">Click To select Question</div>
                    </div>
                    <ArrowSolid />
                </div>
            </>
        )
    }

    if (SINGLE_QUESTION.includes(question.type)) {
        return (
            <TextQuestion question={question} setQuestionText={setQuestionText} />
        )
    }

    if (MULTI_OPTIONS_Questions.includes(question.type)) {
        return (
            <MultipleOptionsQuestions question={question} setQuestionText={setQuestionText} setOption={setOption} addOption={addOption} />
        )
    }
};
export default QuestionSelectButton;