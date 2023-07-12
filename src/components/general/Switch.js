import { useEffect, useRef } from "react";

const Switch = ({ onChange, value }) => {
    const switchRef = useRef()

    useEffect(() => {
        if (!switchRef.current) return
        switchRef.current.checked = value
    }, [])

    return (
        <label className="relative inline-flex items-center cursor-default md:cursor-pointer">
            <input ref={switchRef} onChange={onChange} type="checkbox" className="sr-only peer" />
            <div className="w-11 h-6 bg-color5 rounded-full peer peer-checked:after:translate-x-full after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-color1"></div>
        </label>
    )
};
export default Switch;