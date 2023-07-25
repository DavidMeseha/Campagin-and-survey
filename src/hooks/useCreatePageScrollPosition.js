import { useContext } from "react";
import ScrollContext from "../context/CreatePagePositionProvider";

const useScrollPosition = () => {
    return (useContext(ScrollContext))
};
export default useScrollPosition;