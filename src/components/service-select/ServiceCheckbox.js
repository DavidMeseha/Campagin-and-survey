const ServiceCheckbox = ({ value, onChange, refList }) => {
    return (
        <label htmlFor={value} className="flex justify-between items-center my-4 text-white touch-no-pointer">
            <div className="flex items-center">
                <div className="py-3 mr-2 w-12 h-12 bg-color7 rounded-full text-center">HS</div>
                <div>{value}</div>
            </div>
            <input id={value} ref={(e) => refList.current.push(e)} onChange={onChange} type="checkbox" value={value} className="w-6 h-6 touch-no-pointer" />
        </label>
    )
};
export default ServiceCheckbox;