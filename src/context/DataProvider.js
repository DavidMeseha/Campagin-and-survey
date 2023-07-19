import { createContext, useEffect, useState } from "react";
import { cloneDeep } from "lodash";
import { campaignsData, customersData, servicesData } from "../constants/initialData";

const DataContext = createContext({})
let campaignID = 4

export const DataProvider = ({ children }) => {
    const [customers, setCustomers] = useState([])
    const [campaigns, setCampaigns] = useState([])
    const [services, setServices] = useState([])

    useEffect(() => {
        setCustomers(customersData)
        setCampaigns(campaignsData)
        setServices(servicesData)
    }, [])


    const changeCampaignStatus = (newStatus, id) => {
        let newCampaigns = cloneDeep(campaigns)

        for (let index in newCampaigns) {
            if (newCampaigns[index].id === id) {
                newCampaigns[index].status = newStatus
                if (newStatus) newCampaigns[index].activated = new Date().toLocaleDateString('en', { month: 'long', day: 'numeric', year: 'numeric' })
                break
            }
        }

        console.log(newCampaigns)
        setCampaigns(newCampaigns)
    }

    const addNewCampaign = (campaign, type) => {
        let avilableCampaigns = cloneDeep(campaigns)
        let newCampaign = {
            id: (++campaignID).toString(),
            ...campaign,
            created: new Date(),
            activated: new Date(),
            status: true,
            type: type,
        }
        avilableCampaigns.push(newCampaign)
        setCampaigns(avilableCampaigns)
    }

    const editCampaign = (id, newData) => {
        let avilableCampaigns = cloneDeep(campaigns)

        for (let index in campaigns) {
            console.log(avilableCampaigns[index].id, id)
            if (avilableCampaigns[index].id === id) {
                avilableCampaigns[index] = { ...avilableCampaigns[index], ...newData }
            }
        }
        setCampaigns(avilableCampaigns)
    }

    return (
        <DataContext.Provider value={{
            campaigns, customers, services,
            changeCampaignStatus, addNewCampaign, editCampaign
        }}>
            {children}
        </DataContext.Provider>
    )
};
export default DataContext;