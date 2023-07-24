import { useRef } from "react";
import ClickRecognition from "../hooks/useClickRecognition";
import Header from "../components/general/Header";


const OPTIONS = ['Single Textbox', 'Multiple Textbox', 'Multiple Choice', 'Checkbox', 'Rating', 'Ranking']

const QuestionSelect = ({ setQuestionType, close }) => {
    const containerRef = useRef()
    const sectionStyle = "m-3 p-3 text-center bg-primary rounded-md"

    ClickRecognition(() => setTimeout(() => close(), 150), containerRef)
    return (
        <div className='fixed inset-0 flex items-center justify-center z-30 bg-[#1e1e1fb0] text-color2'>
            <div ref={containerRef} className='bg-secondary rounded-md max-w-md w-[95%] overflow-auto'>
                <div className="m-3"><Header action={() => close()} title={'Select Question Type'} /></div>
                {OPTIONS.map(option => {
                    return (
                        <div onClick={() => setQuestionType(option)} className={sectionStyle + 'touch-no-pointer'}>
                            {option}
                        </div>
                    )
                })}
            </div>
        </div>
    )
};
export default QuestionSelect;