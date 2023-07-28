import { useEffect, useState } from "react";
import InputWSwitch from "../general/InputWSwitch";
import { TextInput } from "../general/InputWTitle";
import Switch from "../general/Switch";
import TextareaWTitle from "../general/TextareaWTitle";
import ServicesSelectButton from "./ServicesSelectButton";
import CustomerSelectButton from "./CustomerSelectButton";
import { convertDateToYMD } from "../../utilities/convertDateToYMD";
import { isEmpty } from "lodash";
import Button from "../general/Button";
import { useNavigate } from "react-router";
import DonePopup from "../general/DonePopup";
import Message from "../general/Message";
import useData from "../../hooks/useData";

const SMSMenu = ({ setCampaign, campaign, isEdit, selectedCampaign }) => {
    const navigate = useNavigate()
    const { editCampaign, addNewCampaign } = useData()
    const [campaignName, setCampaignName] = useState('')
    const [description, setDescription] = useState('')
    const [containPromotion, setContainPromotion] = useState(false)
    const [promotionValue, setPromotionValue] = useState({ value: 0, type: '%' })
    const [promotionDuration, setPromotionDuration] = useState({ start: new Date(), end: new Date() })
    const [selectedCustomers, setSelectedCustomers] = useState([])
    const [selectedServices, setSelectedServices] = useState([])

    const [errorMessage, setErrorMesssage] = useState('')
    const [isError, setIsError] = useState(false)
    const [isDone, setIsDone] = useState(false)

    useEffect(() => {
        if (!isEmpty(selectedCampaign)) {
            setCampaignName(selectedCampaign.name)
            setDescription(selectedCampaign.description)
            setSelectedCustomers(selectedCampaign.targetCustomers || [])
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

    const threwError = (message) => {
        setErrorMesssage(message)
        setIsError(true)
    }

    const save = () => {
        if (!campaign.name) return threwError('Campaign Name Field Is Empty')
        if (!campaign.description) return threwError('Campaign Description Field Is Empty')
        if (campaign.targetCustomers.length < 1) return threwError('No Customers Targeted')
        if (campaign.promotion) {
            if (!campaign.promotion.value) return threwError('It contains promotion but has no value')
            if (campaign.promotion.services.length < 1) return threwError('It contains promotion but has no selected services')
            if (campaign.promotion.duration.start > campaign.promotion.duration.end) return threwError('Promotion duration end should be after the start value')
        }

        if (!isEdit) addNewCampaign(campaign, 'SMS')
        else editCampaign(campaign.id, campaign)

        setIsDone(true)
        setTimeout(() => {
            setIsDone(false)
            navigate('/')
        }, 1200)
    }

    return (
        <>
            {isDone && <DonePopup action={'New Campaign Created'} />}
            <Message message={errorMessage} state={isError} setState={setIsError} />
            <div>
                <TextInput
                    type={'text'}
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
                <div className="flex gap-1 w-full h-20">
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
            <div className="my-2"><Button action={save} name={'Save'} color={'bg-color4'} /></div>
        </>
    )
};
export default SMSMenu;