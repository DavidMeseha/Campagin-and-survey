import { useEffect, useRef, useState } from "react";
import { Filter as FilterIcon } from "../general/Icons";
import ClickRecognition from "../../hooks/useClickRecognition";
import Button from "../general/Button";

const Filter = ({ filters, setFilters }) => {
    const containerRef = useRef()
    const [isOpen, setIsOpen] = useState(false)
    const [selected, setSelected] = useState({ status: 'none', type: 'none' })
    const radioRef = useRef()
    radioRef.current = []

    const reset = () => {
        let empty = {
            status: 'none',
            type: 'none'
        }

        radioRef.current.forEach(radio => {
            console.log(radio.value)
            radio.checked = false
        });

        setSelected(empty)
        setFilters(empty)
        setIsOpen(false)
    }

    useEffect(() => {
        radioRef.current.forEach(radio => {
            if (radio) {
                if (radio.value === 'active' && filters.status === true) radio.checked = true
                if (radio.value === 'inactive' && filters.status === false) radio.checked = true
                if (radio.value === filters.type.toLowerCase()) radio.checked = true
            }
        });
        setSelected(filters)
    }, [isOpen, filters])

    ClickRecognition(() => setIsOpen(false), containerRef)
    return (
        <div ref={containerRef} className="relative">
            <div onClick={() => setIsOpen(true)} className="w-8 p-2 bg-color5 fill-primary touch-no-pointer"><FilterIcon /></div>
            {isOpen && <div className="w-52 bg-secondary top-10 right-0 absolute">
                <div className="p-3 border-b-2 border-b-color5">
                    <div className="text-color4 font-semibold">Status</div>
                    <div className="flex gap-2 w-full">
                        <label className="flex items-center gap-1 w-1/2 touch-no-pointer" >
                            <input ref={(e) => e && radioRef.current.push(e)} type="radio" name="status" value='inactive' onChange={(e) => setSelected({ ...selected, status: !e.target.checked })} />
                            Inactive
                        </label>
                        <label className="flex items-center touch-no-pointer">
                            <input ref={(e) => e && radioRef.current.push(e)} type="radio" name="status" value='active' onChange={(e) => setSelected({ ...selected, status: e.target.checked })} />
                            Active
                        </label>
                    </div>
                </div>
                <div className="p-3 border-b-2 border-b-color5">
                    <div className="text-color4 font-semibold">Type</div>
                    <div className="flex gap-2 w-full">
                        <label className="flex items-center gap-1 w-1/2 touch-no-pointer" >
                            <input ref={(e) => e && radioRef.current.push(e)} type="radio" name="type" value='email' onChange={(e) => setSelected({ ...selected, type: e.target.checked ? 'email' : selected.type })} />
                            Email
                        </label>
                        <label className="flex items-center w-1/2 touch-no-pointer">
                            <input ref={(e) => e && radioRef.current.push(e)} type="radio" name="type" value='sms' onChange={(e) => setSelected({ ...selected, type: e.target.checked ? 'sms' : selected.type })} />
                            SMS
                        </label>
                    </div>
                </div>
                <div className="flex p-2 gap-2">
                    <Button name={'Reset'} color={'bg-color5'} action={reset} />
                    <Button name={'Apply'} color={'bg-color7'} action={() => { setFilters(selected); setIsOpen(false) }} />
                </div>
            </div>}
        </div>
    )
};
export default Filter;