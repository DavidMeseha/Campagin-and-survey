const InputWSwitch = ({ title, value, type, onChange, typeChange }) => {
    return (
        <div className='mb-3 w-full xs:grow'>
            <div className='-mb-6 ml-2 text-color4 font-bold relative z-10 '>{title}</div>
            <div className="flex">
                <input className='p-2 pt-7 pr-16 rounded-md bg-primary text-white w-full' type='number' value={value} onChange={onChange} placeholder='Entr Commission' pattern='\d*' />
                <div className="w-12 flex items-center gap-2 -ml-12 font-bold text-2xl">
                    <div onClick={() => typeChange('$')} className={`${type === '$' ? 'opacity-100' : 'opacity-30'} mt-3 text-color4 cursor-default md:cursor-pointer`}>$</div>
                    <div onClick={() => typeChange('%')} className={`${type === '%' ? 'opacity-100' : 'opacity-30'} mt-3 text-color4 cursor-default md:cursor-pointer`}>%</div>
                </div>
            </div>
        </div>
    )
};
export default InputWSwitch;