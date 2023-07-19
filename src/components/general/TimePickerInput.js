import { cloneDeep } from "lodash";
import clickRecognition from '../../hooks/useClickRecognition';
import { convert24to12 } from "../../utilities/convertTime";
import { useEffect, useRef, useState } from "react";

const TimePickerInput = ({ time, setTime, }) => {
    const [isOpen, setIsOpen] = useState('')
    const [minutes, setMinutes] = useState([])
    const [hours, setHours] = useState([])
    const [dayPeriod, setDayPeriod] = useState('AM')
    const containerRef = useRef()
    const selectedHourRef = useRef()
    const selectedMinuteRef = useRef()
    const noRef = useRef()

    const [selected, setSelected] = useState({ hour: '', minute: '', dayPeriod: '' })

    useEffect(() => {
        const displayedTime = () => {
            let mins = []
            for (let i = 0; i <= 55; i += 5) {
                let stringValue = i.toString()
                if (stringValue.length === 1) stringValue = '0' + stringValue
                mins.push(stringValue)
            }

            setMinutes(mins)

            let hrs = []
            for (let i = 1; i <= 12; i++) {
                let stringValue = i.toString()
                if (stringValue.length === 1) stringValue = '0' + stringValue
                hrs.push(stringValue)
            }

            setHours(hrs)
        }

        displayedTime()
    }, [])

    useEffect(() => {
        if (time.length === 0) return
        let recentTime = convert24to12(time)

        let hour = recentTime.split(':')[0]
        let minute = recentTime.split(':')[1].split(' ')[0]
        let period = recentTime.split(':')[1].split(' ')[1]

        setSelected({ hour: hour, minute: minute, dayPeriod: period })
    }, [])

    useEffect(() => {
        if (selectedMinuteRef.current && selectedHourRef.current && isOpen) {
            selectedMinuteRef.current.scrollIntoView({ block: 'center' })
            selectedHourRef.current.scrollIntoView({ block: 'center' })
        }
    }, [isOpen])

    const selectMinutes = (value) => {
        if (time === '') {
            setSelected({ ...selected, minute: value })
            return setTime(`01:${value}`)
        }

        let hrs = time.split(':')[0]
        let newTime = hrs + ':' + value
        setSelected({ ...selected, minute: value })
        setTime(newTime)
    }

    const selectHours = (value) => {
        if (time === '') {
            setSelected({ ...selected, hour: value })
            return setTime(`${value}:00`)
        }
        let newValue = value
        if (dayPeriod === 'PM') newValue = ((parseInt(value) % 12) + 12).toString()
        let mins = time.split(':')[1]
        let newTime = newValue + ':' + mins
        setSelected({ ...selected, hour: value })
        setTime(newTime)
    }

    const selectDayPeriod = (value) => {
        if (value === 'AM') {
            if (time === '') {
                setSelected({ ...selected, dayPeriod: 'AM' })
                return setTime('01:00')
            }

            let mins = time.split(':')[1]
            let hrs = parseInt(time.split(':')[0])
            hrs = hrs % 12
            hrs = hrs.toString()
            hrs = hrs.length === 1 ? '0' + hrs : hrs
            setTime(hrs + ':' + mins)
            setDayPeriod('AM')
            setSelected({ ...selected, dayPeriod: 'AM' })
        }

        if (value === 'PM') {
            if (time === '') {
                setSelected({ ...selected, dayPeriod: 'PM' })
                return setTime('13:00')
            }
            let mins = time.split(':')[1]
            let hrs = parseInt(time.split(':')[0])
            hrs = (hrs % 12) + 12
            hrs = hrs.toString()
            hrs = hrs.length === 1 ? '0' + hrs : hrs
            setTime(hrs + ':' + mins)
            setDayPeriod('PM')
            setSelected({ ...selected, dayPeriod: 'PM' })
        }

        setIsOpen(false)
    }

    clickRecognition(() => setIsOpen(false), containerRef)

    return (
        <>
            <div ref={containerRef} >
                <div
                    className={`h-14 p-2 pt-7 rounded-md bg-primary text-white w-full md:cursor-pointer cursor-default ${isOpen ? 'border-color2 border-2' : ''}`}
                    onClick={(e) => { e.preventDefault(); setIsOpen(true) }}
                    required
                >
                    {time === '' ? time : convert24to12(cloneDeep(time))}
                </div>
                {isOpen && <div className='flex absolute h-44 z-30 text-black px-2 rounded-sm bg-white'>
                    <div className='overflow-auto'>
                        {hours.map((hour, key) => {
                            return (
                                <div ref={selected.hour === hour ? selectedHourRef : noRef} key={key} onClick={() => selectHours(hour)} className={`p-3 cursor-pointer ${selected.hour === hour ? 'bg-color8' : ''}`}>{hour}</div>
                            )
                        })}
                    </div>
                    <div className='overflow-auto'>
                        {minutes.map((minute, key) => {
                            return (
                                <div ref={selected.minute === minute ? selectedMinuteRef : noRef} key={key} onClick={() => selectMinutes(minute)} className={`p-3 cursor-pointer ${selected.minute === minute ? 'bg-color8' : ''}`}>{minute}</div>
                            )
                        })}
                    </div>
                    <div>
                        <div onClick={() => selectDayPeriod('AM')} className={`p-3 cursor-pointer ${selected.dayPeriod === 'AM' ? 'bg-color8' : ''}`}>AM</div>
                        <div onClick={() => selectDayPeriod('PM')} className={`p-3 cursor-pointer ${selected.dayPeriod === 'PM' ? 'bg-color8' : ''}`}>PM</div>
                    </div>
                </div>}
            </div>
        </>
    )
};
export default TimePickerInput;