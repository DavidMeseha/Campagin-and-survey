export let customersData = [
    {
        id: '0',
        name: 'Marcos brother',
        phone: '01234566789'
    },
    {
        id: '1',
        name: 'Mady Man',
        phone: '01234566789'
    },
    {
        id: '2',
        name: 'Paul father',
        phone: '987456321'
    },
    {
        id: '3',
        name: 'Paul Someone',
        phone: '987456321'
    },
    {
        id: '4',
        name: 'Someone else',
        phone: '01234566789'
    },
    {
        id: '5',
        name: 'David Magdy',
        phone: '01244569086'
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
        description: 'This Is Some Campaign SMS with Some Greetings and Promotions',
        type: 'SMS',
        status: false,
        targetCustomers: [
            {
                id: '0',
                name: 'Marcos brother',
                phone: '01234566789'
            },
            {
                id: '1',
                name: 'Mady Man',
                phone: '01234566789'
            },
            {
                id: '2',
                name: 'Paul father',
                phone: '987456321'
            },
            {
                id: '3',
                name: 'Paul Someone',
                phone: '987456321'
            },
        ],
        performance: {
            engagement: 3,
            sales: 2_000_000
        },
        promotion: {
            value: 20,
            type: '%',
            duration: { start: '', end: '' },
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
        title: 'Big Event',
        salutatin: 'Hi First Name',
        supject: 'New Things are Coming',
        image: null,
        description: 'This Is Some Campaign Email with Some Greetings and Promotions',
        canBook: true,
        type: 'email',
        status: true,
        targetCustomers: [
            {
                id: '0',
                name: 'Marcos brother',
                phone: '01234566789'
            },
            {
                id: '1',
                name: 'Mady Man',
                phone: '01234566789'
            },
            {
                id: '2',
                name: 'Paul father',
                phone: '987456321'
            },
        ],
        performance: {
            engagement: 1,
            sales: 200_000
        },
        promotion: {
            value: 20,
            type: '%',
            duration: { start: '', end: '' },
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
        description: 'This Is Some Campaign SMS with Some Greetings and Promotions',
        type: 'SMS',
        status: false,
        targetCustomers: [
            {
                id: '0',
                name: 'Marcos brother',
                phone: '01234566789'
            },
            {
                id: '1',
                name: 'Mady Man',
                phone: '01234566789'
            },
            {
                id: '2',
                name: 'Paul father',
                phone: '987456321'
            },
            {
                id: '3',
                name: 'Paul Someone',
                phone: '987456321'
            },
        ],
        performance: {
            engagement: 4,
            sales: 2_500_000
        },
        promotion: {
            value: 20,
            type: '%',
            duration: { start: '', end: '' },
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
        id: '4',
        created: 'June 10 2023',
        activated: 'June 10 2023',
        name: 'Discounted Services',
        title: 'Some Discounts',
        salutatin: 'Hi First Name',
        supject: 'Big Sale ',
        image: null,
        description: 'This Is Some Campaign Email with Some Greetings and Promotions',
        canBook: false,
        type: 'email',
        status: true,
        targetCustomers: [
            {
                id: '0',
                name: 'Marcos brother',
                phone: '01234566789'
            },
            {
                id: '1',
                name: 'Mady Man',
                phone: '01234566789'
            },
            {
                id: '2',
                name: 'Paul father',
                phone: '987456321'
            },
            {
                id: '3',
                name: 'Paul Someone',
                phone: '987456321'
            },
        ],
        performance: {
            engagement: 5,
            sales: 2_000_000
        },
        promotion: null
    },
]

export const companyData = {
    name:'Company Name',
    address: 'Company Address'
}