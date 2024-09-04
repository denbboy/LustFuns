import { useEffect, useState } from 'react'
import CalendarIc from '../../assets/img/icons/calendar.svg'
import { StatisticItem } from './components/StatisticItem'
import { StatisticStyled } from './Statistic.styled'
import DatePicker from 'react-datepicker'
import "react-datepicker/dist/react-datepicker.css";
import { StatisticTable } from './components/StatisticTable'
import { useClickOutside } from '../../hooks/ClickOutside'



export const Statistic = () => {

    const [isActiveCalendar, setIsActiveCalendar] = useState<boolean>(false)
    const [selectType, setSelectType] = useState<string>('')
    const [startDate, setStartDate] = useState<Date | null>(null);
    const [endDate, setEndDate] = useState<Date | null>(null);
    const [selectedMonth, setSelectedMonth] = useState<string>('March 2024');

    const months = [
        'March 2024',
        'February 2024',
        'January 2024',
        'December 2023',
        'November 2023',
        'October 2023',
        'September 2023',
        'August 2023',
    ];
    
    const showZeroSymbol = (number: number | string) => {
        return +number < 10 ? '0' + +number : +number
    }

    const [date, setDate] = useState<string>('')

    useEffect(() => {

        const start = `${showZeroSymbol(String(startDate?.getDate()))}.${showZeroSymbol(String(startDate?.getMonth() && startDate?.getMonth() + 1))}.${String(startDate?.getFullYear()).slice(2, 4)}`
        const end = `${showZeroSymbol(String(endDate?.getDate()))}.${showZeroSymbol(String(endDate?.getMonth() && endDate?.getMonth() + 1))}.${String(endDate?.getFullYear())?.slice(2, 4)}`

        setDate(`${start} – ${end}`)

    }, [startDate, endDate])


    const getToday = () => {
        setStartDate(new Date())
        setEndDate(new Date())

        setSelectType('TODAY')
    }
    const getYesterday = () => {
        const today = new Date()
        const newDate = new Date(today)

        setStartDate(new Date(newDate.setDate(today.getDate() - 1)))
        setEndDate(new Date())

        setSelectType('YESTERDAY')
    }
    const getWeekLater = () => {
        const today = new Date()
        const newDate = new Date(today)

        setStartDate(new Date(newDate.setDate(today.getDate() - 7)))
        setEndDate(new Date())

        setSelectType('WEEK_LATER')
    }
    const getMonthLater = () => {
        const today = new Date()
        const newDate = new Date(today)

        setStartDate(new Date(newDate.setDate(today.getDate() - 30)))
        setEndDate(new Date())
        
        setSelectType('MONTH_LATER')
    }
    const getThisMonth = () => {
        const today = new Date()

        setStartDate(new Date(today.getFullYear(), today.getMonth(), 1))
        setEndDate(new Date(today.getFullYear(), today.getMonth() + 1, 0))

        setSelectType('THIS_MONTH')
    }
    const getLastMonth = () => {
        const today = new Date()

        setStartDate(new Date(today.getFullYear(), today.getMonth() - 1, 1))
        setEndDate(new Date(today.getFullYear(), today.getMonth(), 0))

        setSelectType('LAST_MONTH')
    }


    const handleChangeStart = (date: any) => {
        setStartDate(date)

        setSelectType('CUSTOM')
    }
    const handleChangeEnd = (date: any) => {
        setEndDate(date)

        setSelectType('CUSTOM')
    }

    const handleMonthClick = (month: string) => {
        setSelectedMonth(month);
    };

    const handleClickCalendar = () => {
        setIsActiveCalendar(prev => !prev);
        setSelectedMonth('');
    }  

    const {rootEl} = useClickOutside(setIsActiveCalendar)

    return (
        <StatisticStyled className="statistics">
            <div className="statistics__container">
                <div className="statistics__header">
                    <h2 className="statistics__title title title--medium">Summary</h2>
                </div>
                <div className="statistics__wrapper">
                    <div className="statistics__months months-statistics">
                        <div className="months-statistics__header">
                            <div className="months-statistics__current">Current Month</div>
                            <span className="months-statistics__date">March 2024</span>
                        </div>

                        <div className="months-statistics__items">
                            <div ref={rootEl} className={`months-statistics__item months-statistics-range ${isActiveCalendar ? 'active' : ''}`}>
                                <div className="months-statistics__head" onClick={handleClickCalendar}>
                                    <input readOnly value={startDate && endDate ? date : ""} type="text" id="dateRange" placeholder="Select a custom range" className="months-statistics-range__input" />
                                    <div className="months-statistics-range__icon">
                                        <img src={CalendarIc} alt="Icon" />
                                    </div>
                                </div>
                                <div className="months-statistics-range__popup popup-months-statistics-range">
                                    <div className="popup-months-statistics-range__body">
                                        <div className="popup-months-statistics-range__items">
                                            <div onClick={getToday} className={`popup-months-statistics-range__item ${selectType === "TODAY" ? "active" : ""}`}>Today</div>
                                            <div onClick={getYesterday} className={`popup-months-statistics-range__item ${selectType === "YESTERDAY" ? "active" : ""}`}>Yesterday</div>
                                            <div onClick={getWeekLater} className={`popup-months-statistics-range__item ${selectType === "WEEK_LATER" ? "active" : ""}`}>Last 7 days</div>
                                            <div onClick={getMonthLater} className={`popup-months-statistics-range__item ${selectType === "MONTH_LATER" ? "active" : ""}`}>Last 30 days</div>
                                            <div onClick={getThisMonth} className={`popup-months-statistics-range__item ${selectType === "THIS_MONTH" ? "active" : ""}`}>This month</div>
                                            <div onClick={getLastMonth} className={`popup-months-statistics-range__item ${selectType === "LAST_MONTH" ? "active" : ""}`}>Last month</div>
                                            <div style={{cursor: "default"}} className={`popup-months-statistics-range__item ${selectType === "CUSTOM" ? "active" : ""}`}>Custom range</div>
                                        </div>
                                        <div className="popup-months-statistics-range__block">
                                            {/* <div id="min" className="popup-months-statistics-range__calendar"></div>
                                            <div id="max" className="popup-months-statistics-range__calendar"></div> */}
                                            <DatePicker selected={startDate} inline onChange={handleChangeStart} />
                                            <DatePicker selected={endDate} inline onChange={handleChangeEnd} />
                                        </div>

                                    </div>
                                </div>
                            </div>

                            {months.map((month) => (
                                <div key={month} className={`months-statistics__item item-months-statistics ${selectedMonth === month ? 'active' : ''}`}
                                    onClick={() => handleMonthClick(month)}
                                >
                                    <div className="item-months-statistics__month">{month}</div>
                                    <p className="item-months-statistics__value">$<span>2,129</span></p>
                                </div>
                            ))}
                            
                        </div>

                    </div>
                    <div className="statistics__body body-statistics">
                        <div className="body-statistics__header header-body-statistics">
                            <div className="header-body-statistics__item item-header-body-statistics">
                                <p className="item-header-body-statistics__value">$ <span>2,129</span></p>
                                <p className="item-header-body-statistics__text">Total Earnings for selected period</p>
                            </div>
                            <div className="header-body-statistics__item item-header-body-statistics">
                                <p className="item-header-body-statistics__value"><span>8.36</span> K</p>
                                <p className="item-header-body-statistics__text">Profile visits selected period</p>
                            </div>
                        </div>

                        <div className="body-statistics__items">

                            <StatisticItem />

                            <div className="body-statistics__graphic graphic-body-statistics">
                                <div className="graphic-body-statistics__header">
                                    <div className="graphic-body-statistics__block">
                                        <div className="graphic-body-statistics__title">Profile Visits</div>
                                        <span className="graphic-body-statistics__date">March 2024</span>
                                    </div>
                                    <div className="graphic-body-statistics__stat">
                                        <div className="graphic-body-statistics__block">
                                            <p className="graphic-body-statistics__value"><span>8.36</span>K</p>
                                            <div className="graphic-body-statistics__change change-graphic-body-statistics down">
                                                <div className="change-graphic-body-statistics__arrow">
                                                    <svg width="5" height="7" viewBox="0 0 5 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M2.00613 6.39722V2.00825L0.866188 3.35454C0.738002 3.50593 0.551245 3.56503 0.376127 3.50963C0.201009 3.4542 0.0642422 3.29268 0.0173103 3.08588C-0.0296216 2.87907 0.0205187 2.65844 0.148705 2.50705L2.15409 0.138589C2.20602 0.0772143 2.26855 0.0299384 2.33749 2.20298e-05V0H2.34607H2.35033H2.35704H2.36316H2.36808H2.37599H2.37905H2.38823H2.398H2.40837H2.41934H2.43031H2.44068H2.45046H2.54887H2.55865H2.56902H2.57999H2.59095H2.60133H2.6111H2.62028H2.62393H2.63184H2.63677H2.64288H2.6496H2.65385L2.66243 0.00361288C2.73138 0.0335073 2.79398 0.0808052 2.84583 0.142202L4.8513 2.51067C4.97956 2.66205 5.02962 2.88268 4.98269 3.0895C4.93576 3.29629 4.79899 3.45781 4.62387 3.51324C4.44876 3.56864 4.26192 3.50954 4.13374 3.35815L2.99379 2.01187V6.40083C2.99379 6.6149 2.89717 6.8127 2.74018 6.91972C2.58319 7.02677 2.3898 7.02677 2.23281 6.91972C2.07582 6.8127 1.9792 6.6149 1.9792 6.40083L2.00613 6.39722Z" fill="#1AD598" />
                                                    </svg>
                                                </div>
                                                <p className="change-graphic-body-statistics__value"><span>-4,12</span> %</p>
                                            </div>
                                        </div>
                                        <p className="graphic-body-statistics__text">This month</p>
                                    </div>
                                </div>
                                <div className="graphic-body-statistics__body">
                                    <canvas id="visits"></canvas>
                                </div>
                            </div>
                        </div>

                        <StatisticTable/>
                    </div>
                </div>

            </div>
        </StatisticStyled>
    )
}
