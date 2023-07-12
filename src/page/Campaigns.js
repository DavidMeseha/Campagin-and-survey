import Button from "../components/general/Button";
import SearchInput from "../components/general/SearchInput";
import Switch from "../components/general/Switch";
import useData from "../hooks/useData"

const Campaigns = () => {
    const { campaigns } = useData()

    return (
        <>
            <nav className="p-4">
                <div className="text-color2 text-2xl mb-6">Avilable Campaigns</div>
                <div className="flex justify-between">
                    <div className="w-80"><SearchInput value={''} onChange={() => { }} placeholder="Find Campaign by Name" /></div>
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
                            <td className="min-w-[150px]">Status</td>
                            <td className="min-w-[150px]"></td>
                        </tr>
                    </thead>
                    <tbody>
                        {campaigns.map(campaign => {
                            return (
                                <tr className="bg-secondary">
                                    <td className="p-4">{campaign.created}</td>
                                    <td>{campaign.type}</td>
                                    <td>{campaign.name}</td>
                                    <td>{campaign.targetCustomers.length} customers</td>
                                    <td>{campaign.activated}</td>
                                    <td><Switch value={campaign.status} /></td>
                                    <td>Icon</td>
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