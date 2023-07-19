import { useState } from "react";
import ServicesSelect from "../../popups/ServicesSelect";
import { ArrowSolid } from "../general/ArrowSolid";

const ServicesSelectButton = ({selected, setSelected}) => {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <>
            {isOpen && <ServicesSelect close={() => setIsOpen(false)} selected={selected} setSelected={setSelected} />}
            <div onClick={() => setIsOpen(true)} className="flex justify-between items-center bg-primary rounded-md cursor-default md:cursor-pointer p-2 mb-4">
                <div>
                    <div className=" text-color4 font-bold">Services & Products Included</div>
                    {selected.length < 1
                        ? <div className="text-color5 text-sm">Select Services and Products</div>
                        : selected.map((service) => {
                            return service.service + ', '
                        })}
                </div>
                <ArrowSolid />
            </div>
        </>
    )
};
export default ServicesSelectButton;