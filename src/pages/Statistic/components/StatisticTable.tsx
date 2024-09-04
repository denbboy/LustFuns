import React, { useState } from 'react'
import { useClickOutside } from '../../../hooks/ClickOutside'
import { NavLink } from 'react-router-dom'

interface IStatisticTableProps {

}

export const StatisticTable: React.FC<IStatisticTableProps> = () => {

    const [countPerPage, setCountPerPage] = useState(10)
    const [currentPageNumber, setCurrentPageNumber] = useState(1)
    const [historyList, setHistoryList] = useState(Array(56).fill(''))

    const [isOpenSelect, setIsOpenSelect] = useState(false)

    const { rootEl } = useClickOutside(setIsOpenSelect)

    return (
        <div className="body-statistics__transactions transactions-body-statistics">
            <div className="transactions-body-statistics__body">
                <div className="transactions-body-statistics__header">
                    <div className="transactions-body-statistics__title title title--small">Last transactions</div>
                    <span className="transactions-body-statistics__date">March 2024</span>
                </div>
                <div className="transactions-body-statistics__content">
                    <div className="transactions-body-statistics__items">


                        {
                            historyList
                                ?.slice(0, ((currentPageNumber * countPerPage) < historyList.length ? currentPageNumber * countPerPage : historyList.length) - (currentPageNumber * countPerPage - countPerPage + 1) + 1)
                                ?.map((item, index) =>
                                    <div key={index} className="transactions-body-statistics__item item-transactions">
                                        <div className="item-transactions__block">
                                            <span className="item-transactions__date">16/08/2023</span>
                                            <p className="item-transactions__time"><span>03:23 PM</span></p>
                                            <p className="item-transactions__text">
                                                <p>
                                                    <span className="item-transactions__item">Locked Media Message</span> sold to <NavLink to={'/profile/123'} className="item-transactions__user">Eric101</NavLink> <NavLink to={'/profile/123'} className="item-transactions__user-link">Eric101</NavLink>
                                                </p>
                                            </p>
                                        </div>
                                        <div className="item-transactions__block item-transactions__block--values">

                                            <p className="item-transactions__price">$<span>20.00</span></p>
                                            <div className="item-transactions__percent">80%</div>
                                            <p className="item-transactions__value">$<span>16.00</span></p>
                                        </div>

                                    </div>
                                )
                        }


                    </div>
                </div>
                <div className="transactions-body-statistics__bottom">
                    <div className="footer-body-earnings__block">
                        <div className="footer-body-earnings__pages">
                            <p><span>
                                {currentPageNumber * countPerPage - countPerPage + 1}
                            </span>-<span>
                                    {(currentPageNumber * countPerPage) < historyList.length ? currentPageNumber * countPerPage : historyList.length}
                                </span> of {historyList.length}</p>
                        </div>
                        <div className="footer-body-earnings__arrows">
                            <button onClick={_ => setCurrentPageNumber(prev => prev > 1 ? prev - 1 : prev)} className="footer-body-earnings__arrow footer-body-earnings__prev">
                                <svg width="5" height="9" viewBox="0 0 5 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M4.58211 8.50318L4.86132 8.22013C4.94852 8.13104 4.99656 8.01252 4.99656 7.88585C4.99656 7.75925 4.94852 7.64059 4.86132 7.55151L1.69807 4.32258L4.86483 1.08994C4.95203 1.00099 5 0.882334 5 0.755734C5 0.629134 4.95203 0.510403 4.86483 0.42139L4.58734 0.138262C4.40688 -0.0460874 4.11294 -0.0460874 3.93248 0.138262L0.14852 3.98712C0.0613902 4.07606 -1.90962e-07 4.19458 -1.96776e-07 4.3223L-1.96844e-07 4.32378C-2.0261e-07 4.45045 0.0614589 4.56897 0.14852 4.65791L3.92223 8.50318C4.00936 8.59227 4.12897 8.64116 4.25299 8.6413C4.37708 8.6413 4.49504 8.59227 4.58211 8.50318Z" fill="#3F79CF" />
                                </svg>
                            </button>
                            <button onClick={_ => setCurrentPageNumber(prev => (prev * countPerPage) < historyList.length ? prev + 1 : prev)} className="footer-body-earnings__arrow footer-body-earnings__next">
                                <svg width="5" height="9" viewBox="0 0 5 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M4.58211 8.50318L4.86132 8.22013C4.94852 8.13104 4.99656 8.01252 4.99656 7.88585C4.99656 7.75925 4.94852 7.64059 4.86132 7.55151L1.69807 4.32258L4.86483 1.08994C4.95203 1.00099 5 0.882334 5 0.755734C5 0.629134 4.95203 0.510403 4.86483 0.42139L4.58734 0.138262C4.40688 -0.0460874 4.11294 -0.0460874 3.93248 0.138262L0.14852 3.98712C0.0613902 4.07606 -1.90962e-07 4.19458 -1.96776e-07 4.3223L-1.96844e-07 4.32378C-2.0261e-07 4.45045 0.0614589 4.56897 0.14852 4.65791L3.92223 8.50318C4.00936 8.59227 4.12897 8.64116 4.25299 8.6413C4.37708 8.6413 4.49504 8.59227 4.58211 8.50318Z" fill="#3F79CF" />
                                </svg>
                            </button>
                        </div>
                    </div>
                    <div data-spollers className="footer-body-earnings__per-page _spoller-init">
                        <p>Items per page:</p>
                        <button ref={rootEl} onClick={_ => setIsOpenSelect(prev => !prev)} className={`field-block-add-vid__item spollers__item-main spollers__item input input-main ${isOpenSelect ? 'active' : ''}`}>
                            <div data-spoller-close className="field-block-add-vid__title spollers__title">
                                {countPerPage}
                            </div>
                            <div className="spollers__wrapper">

                                <div className="field-block-add-vid__body spollers__body">
                                    <div onClick={_ => { setCountPerPage(10); setCurrentPageNumber(1) }} className="field-block-add-vid__value">10</div>
                                    <div onClick={_ => { setCountPerPage(16); setCurrentPageNumber(1) }} className="field-block-add-vid__value">16</div>
                                    <div onClick={_ => { setCountPerPage(32); setCurrentPageNumber(1) }} className="field-block-add-vid__value">32</div>
                                </div>
                            </div>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}
