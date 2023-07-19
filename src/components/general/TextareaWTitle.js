const TextareaWTitle = ({ title, placeholder, onChange, value }) => {
    return (
        <div className='mb-3 w-full'>
            <div className='-mb-6 ml-2 text-color4 font-bold relative z-10 '>{title}</div>
            <div>
                <textarea className='p-2 pt-7 rounded-md bg-primary text-white w-full resize-none' value={value} onChange={onChange} rows={4} placeholder={placeholder} />
            </div>
        </div>
    )
};
export default TextareaWTitle;