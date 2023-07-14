import { cloneDeep } from "lodash"

export const sortAZ = (campaigns) => {
    let newOrder = cloneDeep(campaigns)
    let temp
    for (let repeat = 0; repeat < newOrder.length; repeat++) {
        for (let index = 0; index < newOrder.length - 1; index++) {
            let name1 = newOrder[index].name.replace(' ', '').toLowerCase()
            let name2 = newOrder[index + 1].name.replace(' ', '').toLowerCase()
            for (let charIndex = 0; charIndex < name1.length; charIndex++) {
                if (name1[charIndex] < name2[charIndex]) break
                if (name1[charIndex] > name2[charIndex]) {
                    temp = newOrder[index]
                    newOrder[index] = newOrder[index + 1]
                    newOrder[index + 1] = temp
                    break
                }
            }
        }
    }

    return newOrder
}

export const sortZA = (campaigns) => {
    let newOrder = cloneDeep(campaigns)
    let temp
    for (let repeat = 0; repeat < newOrder.length; repeat++) {
        for (let index = 0; index < newOrder.length - 1; index++) {
            let name1 = newOrder[index].name.replace(' ', '').toLowerCase()
            let name2 = newOrder[index + 1].name.replace(' ', '').toLowerCase()
            for (let charIndex = 0; charIndex < name1.length; charIndex++) {
                if (name1[charIndex] > name2[charIndex]) break
                if (name1[charIndex] < name2[charIndex]) {
                    temp = newOrder[index]
                    newOrder[index] = newOrder[index + 1]
                    newOrder[index + 1] = temp
                    break
                }
            }
        }
    }

    return newOrder
}

export const sortFromNewest = (campaigns) => {
    let newOrder = cloneDeep(campaigns)
    let temp
    for (let repeat = 0; repeat < newOrder.length; repeat++) {
        for (let index = 0; index < newOrder.length - 1; index++) {
            if (new Date(newOrder[index].created) < new Date(newOrder[index + 1].created)) {
                temp = newOrder[index]
                newOrder[index] = newOrder[index + 1]
                newOrder[index + 1] = temp
            }
        }
    }

    return newOrder
}

export const sortFromOldest = (campaigns) => {
    let newOrder = cloneDeep(campaigns)
    let temp
    for (let repeat = 0; repeat < newOrder.length; repeat++) {
        for (let index = 0; index < newOrder.length - 1; index++) {
            if (new Date(newOrder[index].created) > new Date(newOrder[index + 1].created)) {
                temp = newOrder[index]
                newOrder[index] = newOrder[index + 1]
                newOrder[index + 1] = temp
            }
        }
    }

    return newOrder
}

export const typeFilter = (type, campaigns) => {
    let filtered = []
    campaigns.forEach(campaign => {
        if (type.toLowerCase() === campaign.type.toLowerCase()) filtered.push(campaign)
    });

    return filtered
}

export const statusFilter = (status, campaigns) => {
    let filtered = []
    campaigns.forEach(campaign => {
        if (status === campaign.status) filtered.push(campaign)
    });

    return filtered
}