import { useEffect, useRef, useState } from "react";
import ClickRecognition from "../hooks/useClickRecognition";
import SearchInput from "../components/general/SearchInput";
import CustomerCard from "../components/customer-select/CustomerCard";
import useData from "../hooks/useData";
import { cloneDeep } from "lodash";

const CustomerSelect = ({ close, selected, setSelected }) => {
    const { customers } = useData()
    const containerRef = useRef()
    const [avilableCustomers, setAvilableCustomers] = useState([])
    const [searchedCustomers, setSearchedCustomers] = useState([])
    const [search, setSearch] = useState()

    const initialState = () => {
        let allCustomers = cloneDeep(customers)
        let notSelected = []
        for (let customer of allCustomers) {
            let found = false
            for (let selectedCustomer of selected) {
                if (selectedCustomer.id === customer.id) {
                    found = true
                    break
                }
            }

            if (!found) notSelected.push(customer)
        }

        setAvilableCustomers(notSelected)
    }

    useEffect(() => {
        initialState()
    }, [])

    useEffect(() => {
        searchCustomer(search)
    }, [avilableCustomers])

    const add = (customer) => {
        let selectedCustomers = cloneDeep(selected)
        let notSelectedCustomers = cloneDeep(avilableCustomers)

        for (let index in notSelectedCustomers) {
            if (notSelectedCustomers[index].id === customer.id) {
                notSelectedCustomers.splice(index, 1)
                break
            }
        }

        selectedCustomers.push(customer)
        setSelected(selectedCustomers)
        setAvilableCustomers(notSelectedCustomers)
    }

    const remove = (customer) => {
        let selectedCustomers = cloneDeep(selected)
        let notSelectedCustomers = cloneDeep(avilableCustomers)

        for (let index in selectedCustomers) {
            if (selectedCustomers[index].id === customer.id) {
                selectedCustomers.splice(index, 1)
            }
        }

        notSelectedCustomers.push(customer)
        setSelected(selectedCustomers)
        setAvilableCustomers(notSelectedCustomers)
    }

    const searchCustomer = (value) => {
        setSearch(value)
        if (!value || avilableCustomers.length === 0) return setSearchedCustomers(avilableCustomers)
        let found = []
        avilableCustomers.forEach(customer => {
            console.log(customer.name.toString().toLowerCase())
            if (customer.name.toString().toLowerCase().includes(value.toString().toLowerCase())) {
                found.push(customer)
            }
        });

        setSearchedCustomers(found)
    }

    ClickRecognition(() => setTimeout(() => close(), 150), containerRef)
    return (
        <div className='fixed inset-0 flex items-center justify-center z-30 bg-[#1e1e1fb0] text-color2'>
            <div ref={containerRef} className='p-3 bg-secondary rounded-md max-w-md w-[95%] h-[400px] max-h-[95vh] overflow-auto'>
                <div className="flex gap-2 h-full">
                    <div className="w-1/2 h-full">
                        <div>Customers List</div>
                        <div className="my-2"><SearchInput placeholder="Find Customer" value={search} onChange={(e) => searchCustomer(e.target.value)} /></div>
                        <div className="overflow-auto h-4/5">
                            {searchedCustomers.map(customer => {
                                return (
                                    <CustomerCard customer={customer} option={'add'} action={add} />
                                )
                            })}

                        </div>
                    </div>
                    <div className="h-full w-px bg-color5"></div>
                    <div className="w-1/2">
                        <div>Added List</div>
                        <div className="h-[90%] overflow-auto">
                            {selected.map(customer => {
                                return (
                                    <CustomerCard customer={customer} option={'remove'} action={remove} />
                                )
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};
export default CustomerSelect;