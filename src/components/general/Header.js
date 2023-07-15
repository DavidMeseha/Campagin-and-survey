import { Arrow } from "./Icons";


const Header = ({ action, title }) => {
    return (
        <div className='flex text-white text-lg pb-2 pt-0'>
            <div onClick={action} className='w-6 mr-2 fill-white -rotate-90 cursor-default md:cursor-pointer'>
                <Arrow />
            </div>
            <div>{title}</div>
        </div>
    )
};
export default Header;