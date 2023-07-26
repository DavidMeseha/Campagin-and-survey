import { Done as DoneIcon } from "./Icons";

const DonePopup = ({ action, className }) => {
    return (
        <div className={"absolute flex flex-col items-center justify-center gap-5 bg-secondary text-center inset-0 z-40 fill-green " + className}>
            <div className='w-40'><DoneIcon /></div>
            <div className="text-color2 text-2xl font-bold" ><h1>{action}</h1></div>
        </div>
    );
};
export default DonePopup;