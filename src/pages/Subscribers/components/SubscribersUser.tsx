import React from 'react'
import UserBgPh from './../../../assets/img/user/bg.jpg'
import UserPh from './../../../assets/img/user/01.png'
import BlockedUserIc from './../../../assets/img/icons/blocked-user.svg'
import { IUser } from '../../../models'
import { NavLink } from 'react-router-dom'
import { toast } from 'react-toastify'

interface ISubscribersUserProps {
    isBlocked?: boolean
    isSubscriber?: boolean
    isFollower?: boolean
    user: IUser
    price?: number
    date: string
}

export const SubscribersUser: React.FC<ISubscribersUserProps> = ({ isBlocked, isSubscriber, isFollower, user, price, date }) => {

    return (
        <div className={`page-subscribers__item item-video-store ${isBlocked ? "blocked" : ""}`}>
            <div className="item-video-store__wrapper">
                <NavLink to={`/profile/${user.usertag}`} className="item-video-store__link">
                    <span className="sr-only">Link description</span>
                </NavLink>

                <div className="item-video-store__image">
                    <img src={UserBgPh} alt="ph" />
                </div>
                <div className="item-video-store__body">
                    <div className="user-item__image">
                        <img className="user-photo" src={UserPh} alt="User ph" />
                        {isBlocked && <div className="user-item__image-blocked">
                            <div className="user-item__image-blocked-body">
                                <img src={BlockedUserIc} alt="Icon" />
                            </div>
                        </div>}
                    </div>
                    <div className="item-video-store__content">
                        <div className="item-video-store__top">
                            <div className="item-video-store__user">
                                <p className="item-video-store__name">
                                    {user.username}
                                </p>
                                <p className="item-video-store__username">
                                    {user.usertag}
                                </p>
                            </div>
                            {!isBlocked && <p className="item-video-store__value">$ <span>
                                {price}
                            </span></p>}
                        </div>
                        <div className="item-video-store__block">
                            <div className="item-video-store__info">
                                <p>Subscribed since</p>
                                <span className="item-video-store__date">
                                    {date}
                                </span>
                            </div>
                            {!isBlocked && <div className="item-video-store__actions">
                                <button onClick={_ => toast.error('This function not developed yet')} className="item-video-store__add">
                                    <svg width="20" height="18" viewBox="0 0 20 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M11.1247 14.6941C10.7624 14.7129 10.3869 14.7188 9.99801 14.7188C8.4119 14.7188 6.80316 14.5701 5.21971 14.2753C5.02528 14.2377 4.88411 14.0695 4.88411 13.8748V13.2392C4.88411 11.1058 6.66465 9.3698 8.85271 9.3698C9.61846 9.37045 10.3782 9.37045 11.1433 9.3698C12.1022 9.3698 13.0257 9.70934 13.7429 10.3274C13.9919 10.5416 14.3701 10.5176 14.5892 10.2761C14.8083 10.034 14.7843 9.6652 14.5366 9.45095C14.0212 9.00753 13.4232 8.67838 12.7827 8.46738C13.9306 7.63507 14.6784 6.30676 14.6784 4.8077C14.6784 2.29131 12.5789 0.243652 9.99801 0.243652C7.41709 0.243652 5.3176 2.29131 5.3176 4.8077C5.3176 6.30546 6.0647 7.63248 7.21067 8.46543C5.16445 9.13673 3.68555 11.0208 3.68555 13.2385V13.8741C3.68555 14.6259 4.23356 15.2764 4.99132 15.4219C6.652 15.7309 8.33599 15.8874 9.99801 15.8874C10.4088 15.8874 10.8057 15.8802 11.1892 15.8601C11.5202 15.8432 11.7732 15.5679 11.7559 15.2453C11.7373 14.9239 11.4449 14.6753 11.1247 14.6941ZM6.51617 4.8077C6.51617 2.93534 8.0783 1.41291 9.99801 1.41291C11.9177 1.41291 13.4798 2.93599 13.4798 4.8077C13.4798 6.67292 11.9284 8.19016 10.0173 8.20055H9.9787C8.06765 8.19016 6.51617 6.67292 6.51617 4.8077Z" fill="#3F79CF" />
                                        <path d="M15.7413 7.88308C15.4856 7.97852 15.3291 8.23172 15.3617 8.49725C15.3937 8.76213 15.6067 8.97248 15.8784 9.00754C16.6142 9.10168 17.3487 9.51913 17.894 10.1541C18.0125 10.2917 18.1823 10.3631 18.3535 10.3631C18.4893 10.3631 18.6258 10.3183 18.7377 10.2268C18.9914 10.0197 19.0253 9.65092 18.8122 9.40292C18.3994 8.92249 17.8987 8.53231 17.3567 8.26028C18.1457 7.56301 18.6258 6.55737 18.6258 5.4868C18.6258 3.94424 17.6743 2.58152 16.202 2.01539C15.8944 1.89594 15.5462 2.04396 15.425 2.34455C15.3038 2.64449 15.4549 2.98404 15.7626 3.10219C16.774 3.49173 17.4272 4.42726 17.4272 5.4868C17.4279 6.54114 16.75 7.50458 15.7413 7.88308Z" fill="#3F79CF" />
                                        <path d="M2.06047 12.9691L1.82075 12.9282C1.69024 12.9061 1.5624 12.8853 1.43788 12.8606C1.34466 12.8425 1.27474 12.7574 1.27474 12.6613V12.1608C1.27474 10.7013 2.62912 9.19837 4.11668 9.0075C4.38835 8.97244 4.60143 8.76209 4.63339 8.49721C4.66602 8.23168 4.50954 7.97848 4.25385 7.88305C3.24505 7.50455 2.5672 6.54175 2.5672 5.48741C2.5672 4.42787 3.22042 3.49234 4.23187 3.10281C4.53951 2.98465 4.69066 2.6451 4.56947 2.34516C4.44762 2.04457 4.09937 1.89655 3.79173 2.016C2.31949 2.58213 1.36796 3.94485 1.36796 5.48741C1.36796 6.55603 1.84672 7.56038 2.63378 8.2583C1.15888 8.99257 0.0761719 10.5488 0.0761719 12.1614V12.662C0.0761719 13.3158 0.550938 13.8819 1.20283 14.0065C1.336 14.0331 1.4745 14.0565 1.61766 14.0799L1.84806 14.1195C1.88401 14.126 1.9193 14.1292 1.95526 14.1292C2.23959 14.1292 2.49195 13.9306 2.54456 13.6488C2.60249 13.33 2.38608 13.0262 2.06047 12.9691Z" fill="#3F79CF" />
                                        <path d="M18.8815 12.1011C17.4998 10.7546 15.2518 10.7546 13.8701 12.1011C13.2009 12.7535 12.832 13.6215 12.832 14.5441C12.832 15.4673 13.2003 16.3353 13.8695 16.9878C14.5387 17.6402 15.4289 17.9999 16.3758 17.9999C17.3227 17.9999 18.2123 17.6402 18.8815 16.9878C19.5507 16.3353 19.9196 15.4673 19.9196 14.5441C19.9196 13.6215 19.5513 12.7535 18.8815 12.1011ZM18.0338 16.1607C17.1482 17.0254 15.6034 17.0254 14.7178 16.1607C13.8035 15.2693 13.8035 13.8196 14.7178 12.9282C15.1752 12.4821 15.7758 12.2595 16.3765 12.2595C16.9771 12.2595 17.5777 12.4828 18.0351 12.9282C18.9487 13.8189 18.9487 15.2693 18.0338 16.1607Z" fill="#3F79CF" />
                                        <path d="M17.3851 13.9599H16.9762V13.562C16.9762 13.2393 16.7079 12.9777 16.3769 12.9777C16.046 12.9777 15.7777 13.2393 15.7777 13.562V13.9599H15.3688C15.0379 13.9599 14.7695 14.2216 14.7695 14.5442C14.7695 14.8669 15.0379 15.1285 15.3688 15.1285H15.7777V15.5265C15.7777 15.8492 16.046 16.1108 16.3769 16.1108C16.7079 16.1108 16.9762 15.8492 16.9762 15.5265V15.1285H17.3851C17.716 15.1285 17.9844 14.8669 17.9844 14.5442C17.9844 14.2216 17.716 13.9599 17.3851 13.9599Z" fill="#3F79CF" />
                                    </svg>

                                </button>
                                <NavLink to={`/messages/${user.usertag}`} className="item-video-store__message">
                                    <svg width="20" height="16" viewBox="0 0 20 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M19 0.6875H1C0.850816 0.6875 0.707742 0.746763 0.602252 0.852252C0.496763 0.957742 0.4375 1.10082 0.4375 1.25V14C0.4375 14.3481 0.575781 14.6819 0.821922 14.9281C1.06806 15.1742 1.4019 15.3125 1.75 15.3125H18.25C18.5981 15.3125 18.9319 15.1742 19.1781 14.9281C19.4242 14.6819 19.5625 14.3481 19.5625 14V1.25C19.5625 1.10082 19.5032 0.957742 19.3977 0.852252C19.2923 0.746763 19.1492 0.6875 19 0.6875ZM17.5544 1.8125L10 8.73688L2.44562 1.8125H17.5544ZM18.25 14.1875H1.75C1.70027 14.1875 1.65258 14.1677 1.61742 14.1326C1.58225 14.0974 1.5625 14.0497 1.5625 14V2.52875L9.625 9.91438C9.72869 10.0092 9.86415 10.0619 10.0047 10.0619C10.1452 10.0619 10.2807 10.0092 10.3844 9.91438L18.4375 2.52875V14C18.4375 14.0497 18.4177 14.0974 18.3826 14.1326C18.3474 14.1677 18.2997 14.1875 18.25 14.1875Z" fill="#3F79CF" />
                                    </svg>
                                </NavLink>
                            </div>}
                        </div>
                    </div>
                </div>

            </div>
            <div className="item-video-store__tags">
                <div className={`item-video-store__tag tag-item-video-store ${isSubscriber ? "tag-item-video-store--blue" : ""} ${isFollower ? "tag-item-video-store--yellow" : ""}`}>
                    <div className="tag-item-video-store__body">
                        <p className="tag-item-video-store__text">
                            {isSubscriber && "Subscriber"}
                            {isFollower && "Follower"}
                        </p>
                    </div>
                    <div className="tag-item-video-store__decor"></div>
                </div>

            </div>
        </div>
    )
}
