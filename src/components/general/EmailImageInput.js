import { useRef, useState } from "react";
import Message from "./Message";
import { AddPhoto } from "./Icons";

const EmailImageInput = ({ image, setImage }) => {
    const imageInputRef = useRef()
    const [errorState, setErrorState] = useState(false)
    const [errorMessage, setErrorMessage] = useState('')

    const changeImageHandle = () => {
        var file = imageInputRef.current.files[0];

        if (!file) return
        if (!file.type.includes('image')) {
            setErrorMessage('Selected file is not an image.')
            setErrorState(true)
            return
        }

        console.log(file)

        setImage(file)
    }

    return (
        <>
            <Message message={errorMessage} state={errorState} setState={setErrorState} />
            <label htmlFor='img-input' className="relative bg-primary overflow-hidden cursor-default md:cursor-pointer">
                {image && <div className="relative flex justify-center items-center h-28"> <img src={image ? URL.createObjectURL(image) : ''} className="max-h-full" alt="someone's Img" /> </div>}
                <input id='img-input' type="file" className="w-0 hidden absolute inset-0" accept="image/*" onChange={changeImageHandle} ref={imageInputRef} />
                {!image && <div className="p-3 w-full flex justify-center items-center gap-3"><div className="w-14"><AddPhoto /></div><div>Add Header Image</div></div>}
            </label>
        </>
    )
};
export default EmailImageInput;