import { Close } from "../general/Icons"

export const TextQuestion = ({ question, setQuestionText, removeQuestion }) => {
    return (
        <div>
            <div className="relative bg-primary p-2 rounded-md mb-3">
                <div className="absolute flex items-center top-1 left-2 right-2 text-color4 font-bold">
                    <div className="grow">{question.type} Question</div>
                    <div onClick={removeQuestion} className="w-5 fill-color1"><Close /></div>
                </div>
                <input className='p-2 pt-7 rounded-md bg-primary text-white w-full h-16 outline-offset-8' type='text' value={question.question} onChange={(e) => setQuestionText(e.target.value)} placeholder='Type Question' />
            </div>
        </div>
    )
}

export const MultipleOptionsQuestions = ({ question, setQuestionText, removeQuestion, setOption, addOption, removeOption }) => {
    return (
        <div className="relative bg-primary p-2 pb-4 rounded-md mb-3">
            <div className="absolute flex items-center top-1 left-2 right-2 text-color4 font-bold">
                <div className="grow">{question.type} Question</div>
                <div onClick={removeQuestion} className="w-5 fill-color1"><Close /></div>
            </div>
            <div className="mb-5">
                <input
                    type="text" placeholder="Type Question"
                    className="bg-primary pt-8 w-full p-2 rounded-md outline-offset-8"
                    value={question.question}
                    onChange={(e) => setQuestionText(e.target.value)}
                />
            </div>
            <div>
                <ol className="list-decimal pl-6 space-y-2 text-color8">
                    {question.options.map((option, index) => {
                        return (
                            <li key={index}>
                                <div className="flex gap-1 items-center" >
                                    <div className="grow">
                                        <input
                                            type="text" className="pl-2 bg-primary w-full"
                                            placeholder="Enter Keyword"
                                            value={option}
                                            onChange={(e) => setOption(index, e.target.value)}
                                        />
                                    </div>
                                    <div onClick={() => removeOption(index)} className="w-4 fill-color1 mr-2 font-bold text-3xl leading-[0.7] text-color1">-</div>
                                </div>
                            </li>
                        )
                    })}
                </ol>
            </div>
            <div onClick={addOption} className="text-color7 ml-2 touch-no-pointer"><span className="text-xl mr-2">+</span>Add Option</div>
        </div>
    )
}