import { useRef } from "react";
import ClickRecognition from "../hooks/useClickRecognition";
import Header from "../components/general/Header";

const CampaignPerformance = ({ campaign, close }) => {
    const containerRef = useRef()
    const sectionStyle = "m-3 p-3 bg-primary rounded-md"
    const titleStyle = "text-color4 font-semibold py-1"

    ClickRecognition(() => setTimeout(() => close(), 150), containerRef)
    return (
        <div className='fixed inset-0 flex items-center justify-center z-30 bg-[#1e1e1fb0] text-color2'>
            <div ref={containerRef} className='bg-secondary rounded-md max-w-md w-[95%] overflow-auto'>
                <div className="m-3"><Header action={() => close()} title={'Campaign Performance'} /></div>
                <div className={sectionStyle}>
                    <div className={titleStyle}>Customers Engaged</div>
                    <div>{campaign.performance.engagement} Customers Engaged</div>
                </div>
                <div className={sectionStyle}>
                    <div className={titleStyle}>Percentage Engaged</div>
                    <div>{((campaign.performance.engagement / campaign.targetCustomers.length) * 100).toFixed(2)}% of the customers engaged</div>
                </div>
                <div className={sectionStyle}>
                    <div className={titleStyle}>Sales</div>
                    <div>{campaign.performance.sales.toLocaleString('en-US')} L.L.</div>
                </div>
            </div>
        </div>
    )
};
export default CampaignPerformance;