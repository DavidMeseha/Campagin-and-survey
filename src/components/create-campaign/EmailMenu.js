import { useEffect, useState } from "react";
import InputWSwitch from "../general/InputWSwitch";
import { TextInput } from "../general/InputWTitle";
import Switch from "../general/Switch";
import TextareaWTitle from "../general/TextareaWTitle";
import ServicesSelectButton from "./ServicesSelectButton";
import CustomerSelectButton from "./CustomerSelectButton";
import { convertDateToYMD } from "../../utilities/convertDateToYMD";
import { isEmpty } from "lodash";

const SMSMenu = ({ setCampaign, edit, selectedCampaign }) => {
    const [campaignName, setCampaignName] = useState('')
    const [description, setDescription] = useState('')
    const [containPromotion, setContainPromotion] = useState(false)
    const [promotionValue, setPromotionValue] = useState({ value: 0, type: '%' })
    const [promotionDuration, setPromotionDuration] = useState({ start: new Date(), end: new Date() })
    const [selectedCustomers, setSelectedCustomers] = useState([])
    const [selectedServices, setSelectedServices] = useState([])

    useEffect(() => {
        if (edit && !isEmpty(selectedCampaign)) {
            setCampaignName(selectedCampaign.name)
            setDescription(selectedCampaign.description)
            setSelectedCustomers([...selectedCampaign.targetCustomers])
            if (selectedCampaign.promotion) {
                setContainPromotion(true)
                setSelectedServices([...selectedCampaign.promotion.services])
                setPromotionDuration({ ...selectedCampaign.promotion.duration })
                setPromotionValue({ value: selectedCampaign.promotion.value, type: selectedCampaign.promotion.type })
            }
        }
    }, [selectedCampaign])

    useEffect(() => {
        setCampaign({
            ...selectedCampaign,
            name: campaignName,
            description: description,
            targetCustomers: [...selectedCustomers],
            promotion: containPromotion ? {
                value: promotionValue.value,
                type: promotionValue.type,
                duration: { start: new Date(promotionDuration.start), end: new Date(promotionDuration.end) },
                services: [...selectedServices]
            } : null,
            performance: {
                engagment: 0,
                sales: 0
            }
        })
    }, [campaignName, containPromotion, promotionValue, promotionDuration, selectedCustomers, selectedServices, description])

    return (
        <>
            <div>
                <TextInput
                    title={'Campaign Name'}
                    placeholder={'Type Campaign Name'}
                    value={campaignName}
                    onChange={(e) => setCampaignName(e.target.value)}
                />
            </div>
            <div>
                <TextareaWTitle
                    title={'Campaign Description'}
                    placeholder={'Type Campaign Description'}
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                />
            </div>
            <div><CustomerSelectButton selected={selectedCustomers} setSelected={setSelectedCustomers} /></div>
            <div className="flex justify-between items-center bg-primary rounded-md p-2 mb-2">
                <div className=" text-color4 font-bold">Promotion</div>
                <Switch onChange={(e) => { setContainPromotion(e.target.checked) }} value={containPromotion} />
            </div>
            <div className="mb-3 mt-6">Promotion Details</div>
            <div className="relative">
                {!containPromotion && <div className=" absolute inset-0 bg-[#292a2ba1] z-20"></div>}
                <div>
                    <InputWSwitch
                        title={'Promotion Value'} placeholder={'Type Promotion Value'}
                        onChange={(e) => setPromotionValue({ ...promotionValue, value: e.target.value })}
                        typeChange={(type) => setPromotionValue({ ...promotionValue, type: type })}
                        value={promotionValue.value}
                        type={promotionValue.type}
                    />
                </div>
                <div><ServicesSelectButton selected={selectedServices} setSelected={setSelectedServices} /></div>
                <div className="mb-2">Promotion Duration</div>
                <div className="flex gap-1 w-full">
                    <div className="w-1/2">
                        <TextInput
                            type={'date'} title={'From'}
                            value={convertDateToYMD(promotionDuration.start)}
                            onChange={(e) => setPromotionDuration({ ...promotionDuration, start: new Date(e.target.value) })}
                        />
                    </div>
                    <div className="w-1/2">
                        <TextInput
                            type={'date'} title={'To'}
                            value={convertDateToYMD(promotionDuration.end)}
                            onChange={(e) => setPromotionDuration({ ...promotionDuration, end: new Date(e.target.value) })}
                        />
                    </div>
                </div>
            </div>
        </>
    )
};
export default SMSMenu;