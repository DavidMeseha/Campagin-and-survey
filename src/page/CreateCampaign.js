import { useNavigate } from "react-router";
import Header from "../components/general/Header";
import Card from '../components/create-campaign/Card';
import templates from '../constants/campaign-templates'

const CreateCampaign = () => {
    const navigate = useNavigate()

    return (
        <>
            <nav className="text-color2 p-3">
                <Header action={() => navigate('/')} title={'Create Your New Campaign'} />
            </nav>
            <main className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4 m-4">
                {Object.keys(templates).map(key => {
                    return (
                        <Card key={key} campaign={templates[key]} type={key} />
                    )
                })}
            </main>
        </>
    )
};
export default CreateCampaign;