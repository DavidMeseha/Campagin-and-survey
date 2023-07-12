import { Search } from "./Icons";

const SearchInput = ({ value, onChange, placeholder = 'Find' }) => {
    return (
        <div className='flex items-center relative'>
            <div className='w-6 h-6 fill-color4 z-10 absolute left-1'><Search /></div>
            <input
                type='text' placeholder={placeholder} value={value} onChange={onChange}
                className='w-full p-1 pl-8 bg-primary text-white rounded-lg border-2 border-color5'
            />
        </div>
    )
};
export default SearchInput;