import { useNavigate } from "react-router";
import Header from "../components/general/Header";
import Card from '../components/create-campaign/Card';
import templates from '../constants/campaign-templates'
import useScrollPosition from "../hooks/useCreatePageScrollPosition";
import { useEffect, useRef } from "react";

const CreateCampaign = () => {
    const navigate = useNavigate()
    const { position, setPosition } = useScrollPosition()
    const scrollRef = useRef()

    useEffect(() => {
        if (scrollRef.current) scrollRef.current.scrollTop = position
    }, [])

    return (
        <div className="absolute inset-0 overflow-auto" ref={scrollRef} onScroll={(e) => setPosition(e.target.scrollTop)}>
            <nav className="text-color2 m-3">
                <Header action={() => navigate('/')} title={'Create Your New Campaign'} />
            </nav>
            <main className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4 m-4">
                {Object.keys(templates).map(key => {
                    return (
                        <Card key={key} campaign={templates[key]} type={key} />
                    )
                })}
            </main>
        </div>
    )
};
export default CreateCampaign;