const Button = ({ name, action, color }) => {
    return (
        <button onClick={action} className={`p-1 w-full text-primary rounded-md font-semibold ${color}`}>{name}</button>
    )
};
export default Button;