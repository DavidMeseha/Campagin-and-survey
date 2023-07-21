import { useNavigate } from "react-router";
import Button from "../general/Button";
import { Feedback, BrokenHeart, Birthday, Survey, Holiday, Crown, Offer, Custom } from "../general/Icons";

const Card = ({ campaign, type }) => {
    const navigate = useNavigate()

    const icon = (type) => {
        if (type === 'feedback') return <Feedback />
        if (type === 'lostCustomer') return <BrokenHeart />
        if (type === 'birthday') return <Birthday />
        if (type === 'survey') return <Survey />
        if (type === 'holiday') return <Holiday />
        if (type === 'VIP') return <Crown />
        if (type === 'newOffer') return <Offer />
        if (type === 'custom') return <Custom />
    }

    return (
        <div className="bg-secondary rounded-md p-3 text-color2">
            <div className="flex gap-2 items-center rounded-md bg-primary p-2 text-color4">
                <div className="p-3 w-16 bg-color1 rounded-full">{icon(type)}</div>
                <div>{campaign.name}</div>
            </div>
            <div className="my-3">
                <p>{campaign.description}</p>
            </div>
            <div className="flex gap-3 w-full">
                {type !== 'survey'
                    ? <>
                        <Button name={'Email'} color={'bg-color4'} action={() => navigate(`/create-campaign/email/${type}`)} />
                        <Button name={'SMS'} color={'bg-green'} action={() => navigate(`/create-campaign/sms/${type}`)} />
                    </>
                    : <Button name={'Create Survey'} color={'bg-color4'} />
                }
            </div>
        </div>
    )
};
export default Card;