import { useRef, useState } from "react";
import ClickRecognition from "../../hooks/useClickRecognition";
import { Ascending } from "../general/Icons";

const Sort = ({ selected, setSelected }) => {
    const itemStyle = 'p-2 text-center border-b-color5 border-b-2'
    const containerRef = useRef()
    const [isOpen, setIsOpen] = useState()

    ClickRecognition(() => setIsOpen(false), containerRef)

    return (
        <div onClick={() => setIsOpen(true)} ref={containerRef} className="w-8 p-2 bg-color5 fill-primary relative">
            <div><Ascending /></div>
            {isOpen && <div className="w-40 bg-secondary top-10 right-0 absolute">
                <div onClick={() => setSelected('az')} className={`${itemStyle} ${selected === 'az' ? 'text-color4' : 'text-color2'}`}>{'A->Z'}</div>
                <div onClick={() => setSelected('za')} className={`${itemStyle} ${selected === 'za' ? 'text-color4' : 'text-color2'}`}>{'Z->A'}</div>
                <div onClick={() => setSelected('newest')} className={`${itemStyle} ${selected === 'newest' ? 'text-color4' : 'text-color2'}`}>Newest</div>
                <div onClick={() => setSelected('oldest')} className={`${itemStyle} ${selected === 'oldest' ? 'text-color4' : 'text-color2'}`}>Oldest</div>
            </div>}
        </div>
    )
};
export default Sort;