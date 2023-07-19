import { useEffect, useState } from "react";

const Message = ({ message, state, setState }) => {
    const [exit, setExit] = useState(false)

    useEffect(() => {
        if (!state) return

        setTimeout(() => {
            setExit(true)

            setTimeout(() => {
                setState(false)
                setExit(false)
            }, 1000)
        }, 4500)

    }, [state])

    return (
        <>
            {state && <div className='fixed left-0 top-10 w-full transition-all duration-1000 z-50' style={{ opacity: exit ? 0 : 1 }}>
                <div className='px-10 py-3 w-fit m-auto bg-[#440000] text-[red] border-[#850000] border-2 rounded-full'>
                    <p>{message}.</p>
                </div >
            </div>}
        </>
    )
};
export default Message;