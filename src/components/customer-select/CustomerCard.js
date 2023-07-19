const CustomerCard = ({ customer, option, action }) => {
    const tag = customer.name.split(' ')[0][0] + customer.name.split(' ')[1][0]
    return (
        <div className="p-2 my-2 rounded-full bg-primary flex items-center justify-between">
            <div className="flex items-center gap-2">
                <div className="w-10 h-10 font-semibold text-base bg-color5 flex items-center justify-center rounded-full">{tag}</div>
                <div>{customer.name}</div>
            </div>
            <div onClick={() => action(customer)} className={`font-bold text-2xl h-full ${option === 'add' ? 'text-color4' : 'text-color1'}`}>{option === 'add' ? '+' : '-'}</div>
        </div>
    )
};
export default CustomerCard;