import React, { useState } from 'react'
import { useClickOutside } from '../../../../hooks/ClickOutside'
import { NavLink } from 'react-router-dom'
import LogoIc from '../../../../assets/img/icons/logo-white.svg'

interface IRequestsProps {

}

interface IRequest {
    id: number,
    username: string,
    time: string,
}

export const Requests: React.FC<IRequestsProps> = () => {

    const [isOpenBlock, setIsOpenBlock] = useState(false)
    const [requests, setRequests] = useState<IRequest[]>([
        {id: 1, username: 'Bob007', time: '21 min'},
        {id: 2, username: 'Lar', time: '22 min'},
        {id: 3, username: 'The men', time: '23 min'},
    ])

    const handleRequest = (id: number) => {
        setRequests(prevRequests => prevRequests.filter(request => request.id !== id))
        setTimeout(() => setIsOpenBlock(true), 1)
    }

    const {rootEl} = useClickOutside(setIsOpenBlock)
    
    return (
        <div ref={rootEl} className={`header__sub sub-header field notification ${isOpenBlock ? 'field-active' : ''}`}>
            <div onClick={() => setIsOpenBlock(prev => !prev)} className="sub-header__icon header-icon">
                <svg width="24" height="22" viewBox="0 0 24 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M13.3508 17.9595C12.9161 17.9825 12.4654 17.9896 11.9988 17.9896C10.0955 17.9896 8.16496 17.8079 6.26483 17.4477C6.03151 17.4017 5.86211 17.1962 5.86211 16.9581V16.1813C5.86211 13.5738 7.99876 11.452 10.6244 11.452C11.5433 11.4528 12.455 11.4528 13.3731 11.452C14.5238 11.452 15.632 11.867 16.4926 12.6224C16.7915 12.8843 17.2453 12.8549 17.5082 12.5598C17.7711 12.2638 17.7423 11.8131 17.4451 11.5512C16.8266 11.0093 16.1091 10.607 15.3404 10.3491C16.7179 9.33181 17.6153 7.70831 17.6153 5.87613C17.6153 2.80054 15.0959 0.297852 11.9988 0.297852C8.90168 0.297852 6.38229 2.80054 6.38229 5.87613C6.38229 7.70673 7.27882 9.32864 8.65398 10.3467C6.19851 11.1672 4.42383 13.4699 4.42383 16.1805V16.9573C4.42383 17.8762 5.08144 18.6713 5.99076 18.849C7.98358 19.2267 10.0044 19.4179 11.9988 19.4179C12.4918 19.4179 12.968 19.4092 13.4283 19.3846C13.8254 19.364 14.129 19.0275 14.1083 18.6332C14.0859 18.2404 13.7351 17.9365 13.3508 17.9595ZM7.82057 5.87613C7.82057 3.58769 9.69513 1.72694 11.9988 1.72694C14.3024 1.72694 16.177 3.58848 16.177 5.87613C16.177 8.15585 14.3152 10.0102 12.022 10.0229H11.9756C9.68235 10.0102 7.82057 8.15585 7.82057 5.87613Z" fill="#6F767E" style={{ fill: '#6F767E', fillOpacity: '1' }} />
                    <path d="M18.8922 9.63493C18.5854 9.75158 18.3976 10.061 18.4368 10.3856C18.4751 10.7093 18.7308 10.9664 19.0568 11.0093C19.9398 11.1243 20.8211 11.6345 21.4755 12.4106C21.6178 12.5788 21.8215 12.6661 22.0269 12.6661C22.1899 12.6661 22.3537 12.6113 22.4879 12.4995C22.7924 12.2463 22.8331 11.7956 22.5774 11.4925C22.082 10.9053 21.4811 10.4284 20.8307 10.096C21.7776 9.24374 22.3537 8.01461 22.3537 6.70614C22.3537 4.82079 21.2119 3.15524 19.4452 2.46331C19.076 2.31731 18.6581 2.49823 18.5127 2.86561C18.3673 3.23221 18.5486 3.64721 18.9178 3.79163C20.1316 4.26772 20.9154 5.41115 20.9154 6.70614C20.9162 7.99478 20.1028 9.17232 18.8922 9.63493Z" fill="#6F767E" style={{ fill: '#6F767E', fillOpacity: '1' }} />
                    <path d="M2.47393 15.8512L2.18627 15.8013C2.02966 15.7743 1.87624 15.7489 1.72682 15.7187C1.61495 15.6965 1.53106 15.5926 1.53106 15.4751V14.8633C1.53106 13.0796 3.15631 11.2426 4.94138 11.0093C5.26739 10.9665 5.52309 10.7094 5.56144 10.3856C5.60059 10.0611 5.41282 9.75164 5.10598 9.635C3.89543 9.17239 3.082 7.99563 3.082 6.70699C3.082 5.41201 3.86587 4.26858 5.07962 3.79248C5.44877 3.64806 5.63016 3.23306 5.48473 2.86647C5.33851 2.49908 4.92061 2.31816 4.55145 2.46417C2.78476 3.1561 1.64292 4.82165 1.64292 6.70699C1.64292 8.01309 2.21744 9.24063 3.16191 10.0936C1.39202 10.9911 0.0927734 12.8931 0.0927734 14.8641V15.4759C0.0927734 16.275 0.662493 16.9669 1.44476 17.1193C1.60457 17.1518 1.77077 17.1804 1.94256 17.2089L2.21903 17.2573C2.26218 17.2653 2.30453 17.2692 2.34768 17.2692C2.68887 17.2692 2.99171 17.0264 3.05483 16.682C3.12435 16.2924 2.86466 15.9211 2.47393 15.8512Z" fill="#6F767E" style={{ fill: '#6F767E', fillOpacity: '1' }} />
                    <path d="M22.6587 14.7903C21.0007 13.1446 18.3031 13.1446 16.6451 14.7903C15.8421 15.5878 15.3994 16.6487 15.3994 17.7762C15.3994 18.9046 15.8413 19.9655 16.6443 20.763C17.4474 21.5604 18.5157 22 19.6519 22C20.7882 22 21.8557 21.5604 22.6587 20.763C23.4618 19.9655 23.9045 18.9046 23.9045 17.7762C23.9045 16.6487 23.4626 15.5878 22.6587 14.7903ZM21.6416 19.752C20.5788 20.809 18.725 20.809 17.6623 19.752C16.5652 18.6626 16.5652 16.8907 17.6623 15.8012C18.2113 15.2561 18.932 14.9839 19.6527 14.9839C20.3735 14.9839 21.0942 15.2569 21.6432 15.8012C22.7394 16.8899 22.7394 18.6626 21.6416 19.752Z" fill="#6F767E" style={{ fill: '#6F767E', fillOpacity: '1' }} />
                    <path d="M20.8613 17.0621H20.3707V16.5757C20.3707 16.1814 20.0487 15.8616 19.6516 15.8616C19.2544 15.8616 18.9324 16.1814 18.9324 16.5757V17.0621H18.4418C18.0447 17.0621 17.7227 17.3819 17.7227 17.7763C17.7227 18.1706 18.0447 18.4904 18.4418 18.4904H18.9324V18.9768C18.9324 19.3712 19.2544 19.691 19.6516 19.691C20.0487 19.691 20.3707 19.3712 20.3707 18.9768V18.4904H20.8613C21.2584 18.4904 21.5804 18.1706 21.5804 17.7763C21.5804 17.3819 21.2584 17.0621 20.8613 17.0621Z" fill="#6F767E" style={{ fill: '#6F767E', fillOpacity: '1' }} />
                </svg>
            </div>
            {!!requests.length &&
                <div className="sub-header__notification header-icon-notification">
                    <span>{requests.length}</span>
                </div>
             }

            <div className="sub-header__popup popup-sub-header popup-main">
                <div className="popup-main__wrapper">
                    <div className="popup-main__content">

                        <div className="popup-sub-header__top popup-main__top top-popup-main">
                            <p className="top-popup-main__text">Requests</p>
                            {/* <button className="top-popup-notifications-header__read"><span>Mark as read</span></button> */}
                        </div>
                        <div className="popup-sub-header__body body-popup-sub-header">
                            {
                                requests.map(item => (
                                    <div className="body-popup-sub-header__item item-sub"
                                        key={item.id}
                                    >
                                        <div className="item-sub__user user-item user-item--stories">
                                            <div className="user-item__image user-item__image--decoration">
                                                <img className="user-photo" src={"https://static01.nyt.com/images/2012/08/19/t-magazine/19well-emma-2/19well-emma-2-superJumbo.jpg"} alt="ph" />
                                                <div className="user-item__image-icon">
                                                    <img src={LogoIc} alt="ph" />
                                                </div>
                                            </div>
                                            <div className="user-item__body">
                                                <NavLink to={`/profile/${item.username}`} className="user-item__name">{item.username}</NavLink>
                                                <span className="user-item__status online">
                                                    <svg className="online-status" width="8" height="9" viewBox="0 0 8 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <circle cx="4" cy="4.5" r="4" fill="#3DD598" style={{ fill: '#3DD598', fillOpacity: '1' }} />
                                                    </svg>

                                                    Online
                                                </span>
                                            </div>
                                        </div>
                                        <div className="item-sub__block">
                                            <span className="item-sub__time">{item.time}</span>
                                            <button className="item-sub__button button button--transparent"
                                                onClick={() => handleRequest(item.id)}
                                            >
                                                <span>Reject</span>
                                            </button>
                                        </div>
                                    </div>
                                ))
                            }

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
