import { useEffect, useRef, useState } from 'react';
import CategorySet from '../components/service-select/CategorySet'
import ClickRecognition from '../hooks/useClickRecognition';
import SearchInput from '../components/general/SearchInput';
import useData from '../hooks/useData';

const ServicesSelect = ({ selected, setSelected, close }) => {
    const containerRef = useRef()
    const { services } = useData()
    const [search, setSearch] = useState('')
    const [searchResult, setSearchResult] = useState([])

    useEffect(() => {
        setSearchResult(services)
    }, [services])

    const searchService = (e) => {
        let value = e.target.value
        let result = []
        setSearch(value)
        if (value.length < 1) return setSearchResult(services)

        services.forEach(category => {
            if (category.name.toLowerCase().includes(value.toLowerCase())) {
                result.push(category)
            } else {
                let newCategory = { ...category }
                newCategory.items = []

                category.items.forEach(item => {
                    if (item.service.toLowerCase().includes(value.toLowerCase())) {
                        newCategory.items.push(item)
                    }
                })
                if (newCategory.items.length > 0) result.push(newCategory)
            }
        });
        setSearchResult(result)
    }

    ClickRecognition(() => setTimeout(() => close(), 150), containerRef)

    return (
        <div className='fixed inset-0 flex items-center justify-center z-30 bg-[#1e1e1fb0]'>
            <div ref={containerRef} className='bg-secondary rounded-md max-w-md w-[95%] h-[95%] xs:h-[500px] overflow-auto'>
                <div className='px-4 py-4'></div>
                <div className='px-4'><SearchInput value={search} onChange={searchService} placeholder={'Find Service'} /></div>
                <div className='px-4'>
                    {searchResult.map((category) => {
                        return (
                            <CategorySet key={category.name} category={category} selected={selected} setSelected={setSelected} />
                        )
                    })}
                </div>
            </div>
        </div>
    )
};
export default ServicesSelect;