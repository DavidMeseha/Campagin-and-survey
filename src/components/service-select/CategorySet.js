import { useEffect, useRef } from "react";
import ServiceCheckbox from "./ServiceCheckbox";

const CategorySet = ({ category, selected, setSelected }) => {
    const allRef = useRef()
    const itemsRef = useRef()
    itemsRef.current = []

    useEffect(() => {
        if (!itemsRef.current || !allRef.current) return
        allRef.current.checked = true
        itemsRef.current.forEach(element => {
            if (!element) return
            element.checked = false
            selected.forEach(service => {
                if (element.value === service.service) {
                    element.checked = true
                }
            });
            if (!element.checked) allRef.current.checked = false
        });
    }, [category])

    const selectAll = (e) => {
        let newSelected = [...selected]
        if (e.target.checked) {
            itemsRef.current.forEach((element) => {
                if (!element) return
                element.checked = true
            });

            category.items.forEach(service => {
                if (!newSelected.includes(service)) newSelected.push(service)
            });
            setSelected(newSelected)
            return
        }

        itemsRef.current.forEach(element => {
            if (!element) return
            element.checked = false
        });

        category.items.forEach(service => {
            if (newSelected.includes(service)) newSelected.splice(newSelected.indexOf(service), 1)
        });
        setSelected(newSelected)
    }

    const onchangeHandle = (e) => {
        let newSelected = [...selected]
        category.items.forEach(service => {
            if (service.service === e.target.value) {
                if (e.target.checked) {
                    newSelected.push(service)
                } else {
                    newSelected.splice(newSelected.indexOf(service), 1)
                }
            }
        });
        console.log(newSelected)
        setSelected(newSelected)


        let isAllSelected = true
        itemsRef.current.forEach(element => {
            if (!element) return
            if (!element.checked) {
                isAllSelected = false
            }
        });
        if (isAllSelected) allRef.current.checked = true
        else allRef.current.checked = false
    }

    return (
        <div>
            <div className='flex justify-between items-center py-2 border-b-2 border-b-color5 text-2xl text-color4 font-semibold'>
                <label htmlFor={category.name}>{category.name}</label>
                <input id={category.name} ref={allRef} onChange={selectAll} type="checkbox" className="w-6 h-6 cursor-pointer" />
            </div>
            <div className='my-2'>
                {category.items.map((item, index) => {
                    return (
                        <ServiceCheckbox key={index} value={item.service} refList={itemsRef} onChange={onchangeHandle} />
                    )
                })}
            </div>
        </div>
    )
};
export default CategorySet;