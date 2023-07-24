const Checkbox = ({ name, index }) => {
    return (
        <label htmlFor={index + name} className="flex gap-2 items-center text-white cursor-default md:cursor-pointer w-fit">
            <input id={index + name} type="checkbox" className="w-4 h-4 cursor-default md:cursor-pointer" />
            {name || 'Some Option.'}
        </label>
    )
};
export default Checkbox;