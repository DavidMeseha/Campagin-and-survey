import { createContext, useEffect, useState } from "react";
import { cloneDeep } from "lodash";

const DataContext = createContext({})

let customersData = [
    {
        name: 'Marcos brother',
        phone: '01234566789'
    },
    {
        name: 'Mady Man',
        phone: '01234566789'
    },
    {
        name: 'Paul father',
        phone: '987456321'
    },
    {
        name: 'Paul Someone',
        phone: '987456321'
    },
    {
        name: 'Someone else',
        phone: '01234566789'
    }
]

let servicesData = [
    {
        name: 'services',
        items: [
            {
                service: 'Hair Cut',
                price: 500_000_000,
                duration: 70
            },
            {
                service: 'Beard Cut',
                price: 10_000_000,
                duration: 50
            },
            {
                service: 'Some Service',
                price: 900_000_000,
                duration: 120
            },
            {
                service: 'Cut Cut',
                price: 10_000_000,
                duration: 30
            },
            {
                service: 'Do Somthing',
                price: 100_000_000,
                duration: 100
            },
        ]
    },

    {
        name: 'Membership',
        items: [
            {
                service: 'membership1',
                price: 500_000_000,
                duration: 70
            },
            {
                service: 'membership2',
                price: 10_000_000,
                duration: 50
            }
        ]
    }
]

let campaignsData = [
    {
        id: '1',
        created: 'July 10 2023',
        activated: 'July 10 2023',
        name: 'Birthday Newsletter',
        type: 'email',
        status: false,
        targetCustomers: [
            {
                name: 'Marcos brother',
                phone: '01234566789'
            },
            {
                name: 'Mady Man',
                phone: '01234566789'
            },
            {
                name: 'Paul father',
                phone: '987456321'
            },
            {
                name: 'Paul Someone',
                phone: '987456321'
            },
            {
                name: 'Someone else',
                phone: '01234566789'
            }
        ],
        performance: {
            engagement: 3,
            sales: 0
        },
        promotion: {
            value: 20,
            type: '%',
            services: [
                {
                    service: 'Beard Cut',
                    price: 10_000_000,
                    duration: 50
                },
                {
                    service: 'Some Service',
                    price: 900_000_000,
                    duration: 120
                },
                {
                    service: 'Cut Cut',
                    price: 10_000_000,
                    duration: 30
                },
            ]
        }
    },
    {
        id: '2',
        created: 'July 10 2023',
        activated: 'July 10 2023',
        name: 'New Campaingn',
        type: 'email',
        status: true,
        targetCustomers: [
            {
                name: 'Marcos brother',
                phone: '01234566789'
            },
            {
                name: 'Mady Man',
                phone: '01234566789'
            },
            {
                name: 'Paul father',
                phone: '987456321'
            },
            {
                name: 'Paul Someone',
                phone: '987456321'
            },
            {
                name: 'Someone else',
                phone: '01234566789'
            }
        ],
        performance: {
            engagement: 3,
            sales: 0
        },
        promotion: {
            value: 20,
            type: '%',
            services: [
                {
                    service: 'Beard Cut',
                    price: 10_000_000,
                    duration: 50
                },
                {
                    service: 'Some Service',
                    price: 900_000_000,
                    duration: 120
                },
                {
                    service: 'Cut Cut',
                    price: 10_000_000,
                    duration: 30
                },
            ]
        }
    },
    {
        id: '3',
        created: 'July 10 2023',
        activated: 'July 10 2023',
        name: 'Some Message',
        type: 'SMS',
        status: false,
        targetCustomers: [
            {
                name: 'Marcos brother',
                phone: '01234566789'
            },
            {
                name: 'Mady Man',
                phone: '01234566789'
            },
            {
                name: 'Paul father',
                phone: '987456321'
            },
            {
                name: 'Paul Someone',
                phone: '987456321'
            },
            {
                name: 'Someone else',
                phone: '01234566789'
            }
        ],
        performance: {
            engagement: 3,
            sales: 0
        },
        promotion: {
            value: 20,
            type: '%',
            services: [
                {
                    service: 'Beard Cut',
                    price: 10_000_000,
                    duration: 50
                },
                {
                    service: 'Some Service',
                    price: 900_000_000,
                    duration: 120
                },
                {
                    service: 'Cut Cut',
                    price: 10_000_000,
                    duration: 30
                },
            ]
        }
    },
    {
        created: 'July 10 2023',
        activated: 'July 10 2023',
        name: 'Discounted Services',
        type: 'email',
        status: true,
        targetCustomers: [
            {
                name: 'Marcos brother',
                phone: '01234566789'
            },
            {
                name: 'Mady Man',
                phone: '01234566789'
            },
            {
                name: 'Paul father',
                phone: '987456321'
            },
            {
                name: 'Paul Someone',
                phone: '987456321'
            },
            {
                name: 'Someone else',
                phone: '01234566789'
            }
        ],
        performance: {
            engagement: 3,
            sales: 0
        },
        promotion: {
            value: 20,
            type: '%',
            services: [
                {
                    service: 'Beard Cut',
                    price: 10_000_000,
                    duration: 50
                },
                {
                    service: 'Some Service',
                    price: 900_000_000,
                    duration: 120
                },
                {
                    service: 'Cut Cut',
                    price: 10_000_000,
                    duration: 30
                },
            ]
        }
    },
]

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