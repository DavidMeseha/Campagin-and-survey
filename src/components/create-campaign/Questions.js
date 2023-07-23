import { TextInput } from "../general/InputWTitle"

export const TextQuestion = ({ question, setQuestionText }) => {
    return (
        <div>
            <TextInput title={question.type + ' Question'} placeholder={'Type Question'} value={question.question} onChange={(e) => setQuestionText(e.target.value)} />
        </div>
    )
}

export const MultipleOptionsQuestions = ({ question, setQuestionText, setOption, addOption }) => {
    return (
        <div className="relative bg-primary p-2 pb-4 rounded-md mb-3">
            <div className="absolute top-1 left-2 text-color4 font-bold">{question.type} Question</div>
            <div className="mb-1">
                <input
                    type="text" placeholder="Type Question"
                    className="bg-primary pt-8 w-full p-2 rounded-md"
                    value={question.question}
                    onChange={(e) => setQuestionText(e.target.value)}
                />
            </div>
            <div>
                <ol className="list-decimal pl-6 space-y-1 text-color8">
                    {question.options.map((option, index) => {
                        return (
                            <li>
                                <input
                                    type="text" className="bg-primary w-full"
                                    placeholder="Enter Keyword"
                                    value={option}
                                    onChange={(e) => setOption(index, e.target.value)}
                                />
                            </li>
                        )
                    })}
                </ol>
            </div>
            <div onClick={addOption} className="text-color7 ml-2"><span className="text-xl mr-2">+</span>Add Option</div>
        </div>
    )
}