import { useRef } from "react";
import ClickRecognition from "../hooks/useClickRecognition";
import { Arrow } from "../components/general/Icons";

const CampaignPerformance = ({ campaign, close }) => {
    const containerRef = useRef()
    const sectionStyle = "m-3 p-3 bg-primary rounded-md"
    const titleStyle = "text-color4 font-semibold py-1"

    ClickRecognition(() => setTimeout(() => close(), 150), containerRef)
    return (
        <div className='fixed inset-0 flex items-center justify-center z-30 bg-[#1e1e1fb0] text-color2'>
            <div ref={containerRef} className='bg-secondary rounded-md max-w-md w-[95%] overflow-auto'>
                <div className="page-title m-3">
                    <div className="inline-block -rotate-90 fill-color2 w-6 mr-2 touch-no-pointer" onClick={close} ><Arrow /></div>
                    Campaign Performance
                </div>
                <div className={sectionStyle}>
                    <div className={titleStyle}>Customers Engaged</div>
                    <div>{campaign.performance.engagement} Customers Engaged</div>
                </div>
                <div className={sectionStyle}>
                    <div className={titleStyle}>Percentage Engaged</div>
                    <div>{(campaign.performance.engagement / campaign.targetCustomers.length) * 100}% of the customers engaged</div>
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