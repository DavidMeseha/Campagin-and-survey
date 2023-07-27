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
import DonePopup from "../general/DonePopup";
import Message from "../general/Message";
import useData from "../../hooks/useData";
import { useNavigate } from "react-router";
import EmailImageInput from "../general/EmailImageInput";

const SMSMenu = ({ campaign, setCampaign, isEdit, selectedCampaign }) => {
    const { editCampaign, addNewCampaign } = useData()
    const navigate = useNavigate()
    const [campaignName, setCampaignName] = useState('')
    const [supject, setSupject] = useState('')
    const [title, setTitle] = useState('')
    const [salutation, setSalutation] = useState('')
    const [image, setImage] = useState(null)
    const [description, setDescription] = useState('')
    const [containPromotion, setContainPromotion] = useState(false)
    const [canBook, setCanBook] = useState(true)
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
            setImage(selectedCampaign.image)
            setSupject(selectedCampaign.supject)
            setSalutation(selectedCampaign.salutation)
            setTitle(selectedCampaign.title)
            setCanBook(selectedCampaign.canBook)
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
            description,
            title,
            supject,
            salutation,
            image,
            canBook,
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
    }, [campaignName, containPromotion, promotionValue, promotionDuration,
        selectedCustomers, selectedServices, description, image, supject,
        title, salutation, canBook])

    const threwError = (message) => {
        setErrorMesssage(message)
        setIsError(true)
    }

    const save = () => {
        if (!campaign.name) return threwError('Campaign Name Field Is Empty')
        if (!campaign.description) return threwError('Description Field Is Empty')
        if (!campaign.title) return threwError('Title Field Is Empty')
        if (!campaign.salutation) return threwError('Salutation Field Is Empty')
        if (!campaign.supject) return threwError('Supject Field Is Empty')
        if (campaign.targetCustomers.length < 1) return threwError('No Customers Targeted')
        if (campaign.promotion) {
            if (!campaign.promotion.value) return threwError('It contains promotion but has no value')
            if (campaign.promotion.services.length < 1) return threwError('It contains promotion but has no selected services')
            if (campaign.promotion.duration.start > campaign.promotion.duration.end) return threwError('Promotion duration end should be after the start value')
        }

        if (!isEdit) addNewCampaign(campaign, 'email')
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
                    title={'Campaign Name'}
                    placeholder={'Type Campaign Name'}
                    value={campaignName}
                    onChange={(e) => setCampaignName(e.target.value)}
                />
            </div>
            <div>
                <TextInput
                    title={'Supject'}
                    placeholder={'Type a Supject'}
                    value={supject}
                    onChange={(e) => setSupject(e.target.value)}
                />
            </div>
            <div className="bg-primary rounded-md mb-3">
                <EmailImageInput
                    setImage={setImage} image={image}
                />
            </div>
            <div>
                <TextInput
                    title={'Title'}
                    placeholder={'Type a header'}
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
            </div>
            <div>
                <TextInput
                    title={'Salutation'}
                    placeholder={'Hi First Name'}
                    value={salutation}
                    onChange={(e) => setSalutation(e.target.value)}
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
            <div className="flex justify-between items-center bg-primary rounded-md p-2 mb-2">
                <div className=" text-color4 font-bold">Book Button</div>
                <Switch onChange={(e) => { setCanBook(e.target.checked) }} value={canBook} />
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