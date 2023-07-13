import { useEffect, useState } from "react";
import Button from "../components/general/Button";
import SearchInput from "../components/general/SearchInput";
import Switch from "../components/general/Switch";
import useData from "../hooks/useData"
import { Ascending, Chart, Edit, Filter } from "../components/general/Icons";
import Sort from "../components/campaigns/Sort";

const Campaigns = () => {
    const { campaigns, changeCampaignStatus } = useData()
    const [search, setSearch] = useState('')
    const [selectedCampaigns, setCampaigns] = useState([])

    useEffect(() => {
        if (search.length < 1) return setCampaigns(campaigns)
        findCampaigns(search)
    }, [campaigns])

    const findCampaigns = (value) => {
        setSearch(value)
        let found = []

        campaigns.forEach(campaign => {
            if (campaign.name.toLowerCase().includes(value.toLowerCase())) {
                found.push(campaign)
            }
        });
        setCampaigns(found)
    }

    return (
        <>
            <nav className="p-4 text-color2">
                <div className="text-2xl mb-6">Avilable Campaigns</div>
                <div className="flex justify-between">
                    <div className="flex gap-2 items-center justify-center">
                        <div className="w-80"><SearchInput value={search} onChange={(e) => findCampaigns(e.target.value)} placeholder="Find Campaign by Name" /></div>
                        <div className="w-8 p-2 bg-color5 fill-primary relative">
                            <Ascending />
                            <div className="absolute top-10 left-0"><Sort selected={'az'} /></div>
                        </div>
                        <div className="w-8 p-2 bg-color5 fill-primary"><Filter /></div>
                    </div>
                    <div className="w-48"><Button name={'Creat New Campaign'} action={() => { }} color={'bg-color4'} /></div>
                </div>
            </nav>
            <div className="max-w-full overflow-auto">
                <table className="text-center text-color2 border-separate border-spacing-y-2 w-full">
                    <thead className="text-color4">
                        <tr>
                            <td className="min-w-[150px]">Created Date</td>
                            <td className="min-w-[150px]">Type</td>
                            <td className="min-w-[150px]">Name</td>
                            <td className="min-w-[150px]">Target customers</td>
                            <td className="min-w-[150px]">activated Date</td>
                            <td className="min-w-[100px]">Status</td>
                            <td className="min-w-[60px]"></td>
                        </tr>
                    </thead>
                    <tbody>
                        {selectedCampaigns.map(campaign => {
                            return (
                                <tr key={campaign.id} className="bg-secondary">
                                    <td className="p-4 flex align-middle justify-center"><div className="fill-color2 w-5 mr-2"><Edit /></div>{campaign.created}</td>
                                    <td>{campaign.type}</td>
                                    <td>{campaign.name}</td>
                                    <td>{campaign.targetCustomers.length} customers</td>
                                    <td>{campaign.activated}</td>
                                    <td><Switch value={campaign.status} onChange={(e) => changeCampaignStatus(e.target.checked, campaign.id)} /></td>
                                    <td className="flex justify-center"><div className="fill-color7 w-8"><Chart /></div></td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </div>
        </>
    )
};
export default Campaigns;