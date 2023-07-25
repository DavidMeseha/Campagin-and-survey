import { createContext, useState } from "react";

const ScrollContext = createContext({})

export const CreatePagePositionProvider = ({ children }) => {
    const [position, setPosition] = useState(0)
    return (
        <ScrollContext.Provider value={{ position, setPosition }}>
            {children}
        </ScrollContext.Provider>
    )
};
export default ScrollContext;