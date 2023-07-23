import TimePickerInput from "./TimePickerInput"

export const TextInput = ({ title, type, onChange, value, placeholder }) => {
    return (
        <div className='mb-3 w-full grow'>
            <div className='-mb-6 ml-2 text-color4 font-bold relative z-10 '>{title}</div>
             <input className='p-2 pt-7 rounded-md bg-primary text-white w-full h-16' type={type} value={value} onChange={onChange} placeholder={placeholder} />
        </div>
    )
};

export const NumberInput = ({ title, onChange, value, placeholder }) => {
    return (
        <div className='mb-3 w-full xs:grow'>
            <div className='-mb-6 ml-2 text-color4 font-bold relative z-10 '>{title}</div>
            <input className='p-2 pt-7 rounded-md bg-primary text-white w-full' type='number' value={value} onChange={onChange} placeholder={placeholder} pattern="\d*" />
        </div>
    )
};

export const TimeInput = ({ title, value, setValue, placeholder }) => {
    return (
        <div className='mb-3 w-full xs:grow'>
            <div className='-mb-6 ml-2 text-color4 font-bold relative z-10 '>{title}</div>
            <TimePickerInput time={value} setTime={setValue} placeholder={placeholder} />
        </div>
    )
};