import Button from "../general/Button";
import { Chart } from "../general/Icons";

const Card = ({ campaign, type }) => {
    return (
        <div className="bg-secondary rounded-md p-3 text-color2">
            <div className="flex gap-2 items-center rounded-md bg-primary p-2 text-color4">
                <div className="p-3 fill-color4 w-12 bg-color1 rounded-full"><Chart /></div>
                <div>{campaign.name}</div>
            </div>
            <div className="my-3">
                <p>{campaign.description}</p>
            </div>
            <div className="flex gap-3 w-full">
                {type !== 'survey'
                    ? <>
                        <Button name={'Email'} color={'bg-color4'} />
                        <Button name={'SMS'} color={'bg-green'} />
                    </>
                    : <Button name={'Create Survey'} color={'bg-color4'} />
                }
            </div>
        </div>
    )
};
export default Card;