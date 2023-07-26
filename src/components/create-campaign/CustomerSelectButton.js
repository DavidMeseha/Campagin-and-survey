import { useEffect, useState } from "react";
import { ArrowSolid } from "../general/ArrowSolid";
import CustomerSelect from "../../popups/CustomerSelect";

const CustomerSelectButton = ({ selected, setSelected }) => {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <>
            {isOpen && <CustomerSelect close={() => setIsOpen(false)} selected={selected} setSelected={setSelected} />}
            <div onClick={() => setIsOpen(true)} className="flex justify-between items-center bg-primary rounded-md cursor-default md:cursor-pointer p-2 mb-4">
                <div>
                    <div className=" text-color4 font-bold">Target Customers</div>
                    <div className="text-color5 text-sm">Click To Add Customers</div>
                </div>
                <ArrowSolid />
            </div>
        </>
    )
};
export default CustomerSelectButton;