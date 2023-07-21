import { useRef, useState } from "react";
import ClickRecognition from "../../hooks/useClickRecognition";
import { Ascending } from "../general/Icons";

const Sort = ({ selected, setSelected }) => {
    const itemStyle = 'p-2 text-center border-b-color5 border-b-2 touch-no-pointer'
    const containerRef = useRef()
    const [isOpen, setIsOpen] = useState()

    const setFilter = (type) => {
        setSelected(type)
        setIsOpen(false)
    }

    ClickRecognition(() => setIsOpen(false), containerRef)
    return (
        <div ref={containerRef} className="relative">
            <div onClick={() => setIsOpen(true)} className="w-8 p-2 bg-color5 fill-primary relative touch-no-pointer"><Ascending /></div>
            {isOpen && <div className="w-40 bg-secondary top-10 right-0 absolute">
                <div onClick={() => setFilter('az')} className={`${itemStyle} ${selected === 'az' ? 'text-color4' : 'text-color2'}`}>{'A->Z'}</div>
                <div onClick={() => setFilter('za')} className={`${itemStyle} ${selected === 'za' ? 'text-color4' : 'text-color2'}`}>{'Z->A'}</div>
                <div onClick={() => setFilter('newest')} className={`${itemStyle} ${selected === 'newest' ? 'text-color4' : 'text-color2'}`}>Newest</div>
                <div onClick={() => setFilter('oldest')} className={`${itemStyle} ${selected === 'oldest' ? 'text-color4' : 'text-color2'}`}>Oldest</div>
            </div>}
        </div>
    )
};
export default Sort;