import { cloneDeep } from "lodash";
import { useEffect, useState } from "react";
import Checkbox from "../general/Checkbox";
import { Star } from "../general/Icons";

const SECTION_STYLE = "p-4 space-y-6 bg-primary rounded-md"
const QUESTION_STYLE = "text-green"
const TEXTBOX_STYLE = "bg-primary p-2 w-full"

export const SingleTextbox = ({ question }) => {
    const [answer, setAnswer] = useState()
    let text = question.question || 'Some Question'
    let questionText = text.replace(' ?', '') + ' ?'

    return (
        <div className={SECTION_STYLE}>
            <div className={QUESTION_STYLE}>{questionText}</div>
            <div><input type="text" value={answer} onChange={(e) => setAnswer(e.target.value)} placeholder="Answer" className={TEXTBOX_STYLE + ' text-center'} /></div>
        </div>
    )
}

export const MultipleTextbox = ({ question }) => {
    const [inputs, setInputs] = useState([])
    let text = question.question || 'Some Question'
    let questionText = text.replace(' ?', '') + ' ?'

    useEffect(() => {
        let values = []
        question.options.forEach(option => {
            values.push('')
        });
        setInputs(values)
    }, [question])

    const setAnInput = (value, index) => {
        let values = cloneDeep(inputs)
        values[index] = value
        setInputs(values)
    }

    return (
        <div className={SECTION_STYLE}>
            <div className={QUESTION_STYLE}>{questionText}</div>
            <div className="space-y-1">
                {question.options.map((option, index) => {
                    return (
                        <div key={index} className="flex items-center gap-2 w-full">
                            <div>{option || 'Some Keyword'}</div>
                            <div>
                                <input
                                    type="text" placeholder="Answer"
                                    value={inputs[index]}
                                    onChange={(e) => setAnInput(e.target.value, index)}
                                    className={TEXTBOX_STYLE + ' p-0'}
                                />
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export const CheckboxQuestion = ({ question }) => {
    let text = question.question || 'Some Question'
    let questionText = text.replace(' ?', '') + ' ?'

    return (
        <div className={SECTION_STYLE}>
            <div className={QUESTION_STYLE}>{questionText}</div>
            <div className="space-y-2">
                {question.options.map((option, index) => {
                    return (
                        <Checkbox key={index} name={option} index={index} />
                    )
                })}
            </div>
        </div>
    )
}

export const MultipleChoice = ({ question }) => {
    const [selected, setSelected] = useState()
    let text = question.question || 'Some Question'
    let questionText = text.replace(' ?', '') + ' ?'

    return (
        <div className={SECTION_STYLE}>
            <div className={QUESTION_STYLE}>{questionText}</div>
            <ol className="space-y-2 list-decimal list-inside text-color5">
                {question.options.map((option, index) => {
                    return (
                        <li key={index} onClick={() => setSelected(index)} className={`hover:text-color2 touch-no-pointer ${selected === index ? 'text-color2' : ''}`}>{option || 'Option ' + (index + 1)}</li>
                    )
                })}
            </ol>
        </div>
    )
}

export const Ranking = ({ question }) => {
    const [order, setOrder] = useState([])
    let text = question.question || 'Some Question'
    let questionText = text.replace(' ?', '') + ' ?'

    const selectHandle = (option) => {
        let newOrder = cloneDeep(order)
        if (order.includes(option)) {
            newOrder.splice(newOrder.indexOf(option), 1)
        } else {
            newOrder.push(option)
        }
        setOrder(newOrder)
    }

    return (
        <div className={SECTION_STYLE}>
            <div className={QUESTION_STYLE}>{questionText}</div>
            <ul className="space-y-4 list-inside">
                {question.options.map((option, index) => {
                    return (
                        <li key={index} onClick={() => selectHandle(option + index)} className={`flex gap-3 items-center touch-no-pointer`}>
                            <div className="p-1 w-5 h-5 text-base leading-[0.5] border-color2 border-2">
                                {order.includes(option + index)
                                    ? (order.indexOf(option + index) + 1)
                                    : ''
                                }
                            </div>
                            {option || 'Option'}
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}

export const Rating = ({ question }) => {
    const [rate, setRate] = useState(0)
    let text = question.question || 'Some Question'
    let questionText = text.replace(' ?', '') + ' ?'

    return (
        <div className={SECTION_STYLE}>
            <div className={QUESTION_STYLE}>{questionText}</div>
            <div className="flex gap-4">
                <div onClick={() => setRate(1)} className={`w-10 touch-no-pointer ${rate >= 1 ? 'fill-color4' : 'fill-none'}`}><Star /></div>
                <div onClick={() => setRate(2)} className={`w-10 touch-no-pointer ${rate >= 2 ? 'fill-color4' : 'fill-none'}`}><Star /></div>
                <div onClick={() => setRate(3)} className={`w-10 touch-no-pointer ${rate >= 3 ? 'fill-color4' : 'fill-none'}`}><Star /></div>
                <div onClick={() => setRate(4)} className={`w-10 touch-no-pointer ${rate >= 4 ? 'fill-color4' : 'fill-none'}`}><Star /></div>
                <div onClick={() => setRate(5)} className={`w-10 touch-no-pointer ${rate >= 5 ? 'fill-color4' : 'fill-none'}`}><Star /></div>
            </div>
        </div>
    )
}