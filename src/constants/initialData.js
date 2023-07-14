export let customersData = [
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

export let servicesData = [
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

export let campaignsData = [
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
            sales: 2_000_000
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
        created: 'May 18 2023',
        activated: 'May 18 2023',
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
            engagement: 1,
            sales: 200_000
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
        created: 'June 25 2023',
        activated: 'June 25 2023',
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
            engagement: 4,
            sales: 2_500_000
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
        created: 'June 10 2023',
        activated: 'June 10 2023',
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
            engagement: 5,
            sales: 2_000_000
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