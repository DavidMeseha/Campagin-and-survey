import { useEffect, useState } from "react";
import Button from "../components/general/Button";
import SearchInput from "../components/general/SearchInput";
import Switch from "../components/general/Switch";
import useData from "../hooks/useData"
import { Chart, Edit } from "../components/general/Icons";
import Sort from "../components/campaigns/Sort";
import Filter from "../components/campaigns/Filter";
import { sortAZ, sortFromNewest, sortFromOldest, sortZA, statusFilter, typeFilter } from "../utilities/sortAndFilterCampaigns";
import { cloneDeep } from "lodash";
import CampaignPerformance from "../popups/CampaignPerformance";
import { useNavigate } from "react-router";
import Header from "../components/general/Header";

const Campaigns = () => {
    const { campaigns, changeCampaignStatus } = useData()
    const navigate = useNavigate()
    const [search, setSearch] = useState('')
    const [sort, setSort] = useState('none')
    const [filters, setFilters] = useState({ status: 'none', type: 'none' })
    const [PerformanceIsOpen, setPerformanceIsOpen] = useState(false)
    const [campaignPerformance, setCampaignPerformance] = useState({})
    const [selectedCampaigns, setCampaigns] = useState([])

    const findCampaigns = (value) => {
        setSearch(value)
        let found = []
        campaigns.forEach(campaign => {
            if (campaign.name.toLowerCase().includes(value.toLowerCase())) {
                found.push(campaign)
            }
        });
        return found
    }

    const sorting = (rowCampaigns) => {
        if (sort === 'az') return sortAZ(rowCampaigns)
        if (sort === 'za') return sortZA(rowCampaigns)
        if (sort === 'oldest') return sortFromOldest(rowCampaigns)
        if (sort === 'newest') return sortFromNewest(rowCampaigns)
        return rowCampaigns
    }

    const filtering = (rowCampaigns) => {
        let filtered = cloneDeep(rowCampaigns)
        if (filters.status !== 'none') filtered = statusFilter(filters.status, filtered)
        if (filters.type !== 'none') filtered = typeFilter(filters.type, filtered)
        return filtered
    }

    useEffect(() => {
        let displayCampaigns = cloneDeep(campaigns)
        if (search) displayCampaigns = findCampaigns(search)
        displayCampaigns = sorting(displayCampaigns)
        displayCampaigns = filtering(displayCampaigns)
        setCampaigns(displayCampaigns)
    }, [campaigns, sort, filters, search])

    const openPerformance = (campaign) => {
        setCampaignPerformance(campaign)
        setPerformanceIsOpen(true)
    }

    return (
        <>
            {PerformanceIsOpen && <CampaignPerformance close={() => setPerformanceIsOpen(false)} campaign={campaignPerformance} />}
            <nav className="p-4 text-color2">
                <div className="m-3"><Header title={'Avilable Campaigns'} action={() => { }} /></div>
                <div className="flex justify-between items-center gap-3 md:flex-row flex-col">
                    <div className="flex gap-2 items-center justify-center w-full md:w-auto">
                        <div className="md:w-80 w-[85%]"><SearchInput value={search} onChange={(e) => setSearch(e.target.value)} placeholder="Find Campaign by Name" /></div>
                        <Sort selected={sort} setSelected={setSort} />
                        <Filter filters={filters} setFilters={setFilters} />
                    </div>
                    <div className="w-48"><Button name={'Creat New Campaign'} action={() => navigate('/create-campaign')} color={'bg-color4'} /></div>
                </div>
            </nav>
            <div className="max-w-full overflow-auto">
                <table className="text-center text-color2 border-separate border-spacing-y-2 w-full">
                    <thead className="text-color4">
                        <tr>
                            <td className="min-w-[170px]">Created Date</td>
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
                                    <td className="flex justify-center"><div className="fill-color7 w-8 touch-no-pointer" onClick={() => openPerformance(campaign)}><Chart /></div></td>
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