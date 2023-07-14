import { createContext, useEffect, useState } from "react";
import { cloneDeep } from "lodash";
import { campaignsData, customersData, servicesData } from "../constants/initialData";

const DataContext = createContext({})

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

    return (
        <DataContext.Provider value={{ campaigns, customers, services, changeCampaignStatus }}>
            {children}
        </DataContext.Provider>
    )
};
export default DataContext;