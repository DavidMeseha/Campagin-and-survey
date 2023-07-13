const Sort = ({ selected }) => {
    const itemStyle = 'p-2 text-center border-b-color5 border-b-2'

    return (
        <div className="w-40 bg-secondary">
            <div className={`p-2 text-center border-b-color5 border-b-2 ${selected === 'az' ? 'text-color4' : 'text-color2'}`}>{'A->Z'}</div>
            <div className={itemStyle}>{'Z->A'}</div>
            <div className={itemStyle}>Newest</div>
            <div className={itemStyle}>Oldest</div>
        </div>
    )
};
export default Sort;