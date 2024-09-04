import React, { useState } from 'react'
import { IUser } from '../../../../models'
import { useSelector } from 'react-redux'
import { NavLink, useNavigate } from 'react-router-dom'
import CreditCardIc from '../../../../assets/img/icons/user-menu/credit-card.svg'
import EditIc from '../../../../assets/img/icons/user-menu/edit.svg'
import SupportIc from '../../../../assets/img/icons/user-menu/service.svg'
import VideoIc from '../../../../assets/img/icons/video.svg'
import TimelineIc from '../../../../assets/img/icons/user-menu/timeline.svg'
import MessageIc from '../../../../assets/img/icons/user-menu/message.svg'
import SettingsIc from '../../../../assets/img/icons/user-menu/settings.svg'
import LogoutIc from '../../../../assets/img/icons/user-menu/logout.svg'
import { toast } from 'react-toastify'
import setCookie from '../../../../functions/setCookie'
import { useClickOutside } from '../../../../hooks/ClickOutside'

interface IProfileProps {

}

export const Profile: React.FC<IProfileProps> = () => {
    const navigate = useNavigate();
    const [isOpenBlock, setIsOpenBlock] = useState(false);

    const user: IUser = useSelector((state: any) => state.toolkit.user);

    const { rootEl } = useClickOutside(setIsOpenBlock);

    const handleFansClick = () => {
        navigate('/subscribers?tab=followers');
    };

    return (
        <div ref={rootEl} className={`header__user user-header field ${isOpenBlock ? 'field-active' : ''}`} onClick={() => setIsOpenBlock(prev => !prev)}>
            <button type="button" className="user-header__button">
                <div className="user-header__button-body">
                    <span></span>
                </div>
            </button>
            <img className="user-header__image" src={"https://static01.nyt.com/images/2012/08/19/t-magazine/19well-emma-2/19well-emma-2-superJumbo.jpg"} alt="ph" />
            <div className="user-header__popup popup-user-header popup-main">
                <div className="popup-main__wrapper">
                    <div className="popup-main__content">

                        <div className="popup-user-header__top top-popup-user-header">
                            <div className="top-popup-user-header__image">
                                <img src={"https://static01.nyt.com/images/2012/08/19/t-magazine/19well-emma-2/19well-emma-2-superJumbo.jpg"} alt="ph" />
                            </div>
                            <p className="top-popup-user-header__name">darkangeel</p>
                            <p className="top-popup-user-header__username">@darkangeel</p>
                        </div>
                        <div className="popup-user-header__body body-popup-user-header">
                            <div className="body-popup-user-header__rating rating-body-popup-user-header">
                                <div className="rating-body-popup-user-header__image">

                                    <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <g clipPath="url(#clip0_168_8467)">
                                            <path d="M27.9598 10.7875C27.8633 10.4904 27.6066 10.274 27.2976 10.2292L18.6176 8.96779L14.7356 1.10226C14.5974 0.822207 14.3123 0.64502 14 0.64502C13.6878 0.64502 13.4026 0.822207 13.2644 1.10226L9.38227 8.96773L0.702344 10.2292C0.393415 10.274 0.136603 10.4904 0.0401892 10.7874C-0.056334 11.0845 0.0241658 11.4105 0.247728 11.6283L6.52847 17.7509L5.046 26.3959C4.99323 26.7038 5.11977 27.0147 5.37237 27.1983C5.62498 27.3818 5.95977 27.4061 6.23627 27.2607L14 23.179L21.7634 27.2607C21.8835 27.3238 22.0145 27.3549 22.1451 27.3549C22.3152 27.3549 22.4845 27.3021 22.6273 27.1983C22.8799 27.0147 23.0065 26.7037 22.9537 26.3959L21.4708 17.7509L27.7522 11.6283C27.9758 11.4104 28.0563 11.0844 27.9598 10.7875Z" fill="#FED42D" />
                                            <path d="M27.9598 10.7875C27.8633 10.4904 27.6066 10.274 27.2976 10.2292L18.6175 8.96778L14.7356 1.10226C14.5974 0.822207 14.3123 0.64502 14 0.64502V23.179L21.7635 27.2607C21.8835 27.3238 22.0145 27.3549 22.1451 27.3549C22.3152 27.3549 22.4845 27.3022 22.6274 27.1984C22.88 27.0148 23.0065 26.7037 22.9537 26.396L21.4708 17.7509L27.7522 11.6283C27.9758 11.4104 28.0563 11.0844 27.9598 10.7875Z" fill="#FCBF29" />
                                        </g>
                                        <defs>
                                            <clipPath id="clip0_168_8467">
                                                <rect width="28" height="28" fill="white" style={{ fill: 'white', fillOpacity: '1' }} />
                                            </clipPath>
                                        </defs>
                                    </svg>
                                </div>
                                <p className="rating-body-popup-user-header__text">You are in the <span>top 5.61%</span> of all creators!</p>
                            </div>
                            <div className="body-popup-user-header__content">
                                <NavLink to={'/subscribers'} className="body-popup-user-header__subscribers subscribers">
                                    <div className="subscribers__value">26</div>
                                    <div className="subscribers__text">Subscibers</div>
                                </NavLink>
                                <div onClick={handleFansClick} className="body-popup-user-header__fans subscribers">
                                    <div className="subscribers__value">1389</div>
                                    <div className="subscribers__text">Fans</div>
                                </div>
                            </div>
                        </div>
                        <div className="popup-user-header__menu menu-popup-user-header">
                            {user.sex === 'man' &&
                                <NavLink to={'/payment-add'} className="menu-popup-user-header__link link-menu-popup-user-header">
                                    <div className="link-menu-popup-user-header__image">
                                        <img src={CreditCardIc} alt="ph" />

                                    </div>
                                    <p className="link-menu-popup-user-header__text">Add funds</p>
                                </NavLink>
                            }
                            <button onClick={_ => toast.error('This page is developing')} className="menu-popup-user-header__link link-menu-popup-user-header">
                                <div className="link-menu-popup-user-header__image">
                                    <img src={TimelineIc} alt="ph" />
                                </div>
                                <p className="link-menu-popup-user-header__text">Timeline</p>
                            </button>
                            {user.sex === 'man' &&
                                <NavLink to={'/my-profile'} className="menu-popup-user-header__link link-menu-popup-user-header">
                                    <div className="link-menu-popup-user-header__image">
                                        <img src={EditIc} alt="ph" />

                                    </div>
                                    <p className="link-menu-popup-user-header__text">Edit profile</p>
                                </NavLink>
                            }
                            {user.sex === 'woman' &&
                                <NavLink to={'/video-store'} className="menu-popup-user-header__link link-menu-popup-user-header">
                                    <div className="link-menu-popup-user-header__image">
                                        <img src={VideoIc} alt="ph" />

                                    </div>
                                    <p className="link-menu-popup-user-header__text">Video Store</p>
                                </NavLink>
                            }
                            <NavLink to={'/messages'} className="menu-popup-user-header__link link-menu-popup-user-header">
                                <div className="link-menu-popup-user-header__image">
                                    <img src={MessageIc} alt="ph" />

                                </div>
                                <p className="link-menu-popup-user-header__text">Messages</p>
                            </NavLink>
                            {user.sex === 'woman' &&
                                <NavLink to={'/my-profile'} className="menu-popup-user-header__link link-menu-popup-user-header">
                                    <div className="link-menu-popup-user-header__image">
                                        <img src={SettingsIc} alt="ph" />

                                    </div>
                                    <p className="link-menu-popup-user-header__text">Settings</p>
                                </NavLink>
                            }
                            {user.sex === 'man' &&
                                <button onClick={() => toast.error('This page is development')} className="menu-popup-user-header__link link-menu-popup-user-header">
                                    <div className="link-menu-popup-user-header__image">
                                        <img src={SupportIc} alt="ph" />

                                    </div>
                                    <p className="link-menu-popup-user-header__text">Support</p>
                                </button>
                            }
                            <NavLink to={'/login'} onClick={_ => setCookie('access_token', '')} className="menu-popup-user-header__link link-menu-popup-user-header">
                                <div className="link-menu-popup-user-header__image">
                                    <img src={LogoutIc} alt="ph" />

                                </div>
                                <p className="link-menu-popup-user-header__text">Logout</p>
                            </NavLink>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
