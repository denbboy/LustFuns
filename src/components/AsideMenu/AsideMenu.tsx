import LogoutIc from '../../assets/img/icons/user-menu/logout.svg'
import { useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom"
import { AsideMenuMode } from "./components/AsideMenuMode";
import { toast } from "react-toastify";
import { AsideMenuStyled } from "./AsideMenu.styled";
import { IUser } from "../../models";
import { useSelector } from "react-redux";
import setCookie from '../../functions/setCookie';

interface IAsideMenu {
    isOpenAsideMenu?: boolean
    handleOpenMenu?: any
}
export const AsideMenu = ({ isOpenAsideMenu, handleOpenMenu }: IAsideMenu) => {
    const user: IUser = useSelector((state: any) => state.toolkit.user);
    const [subMenu, setSubMenu] = useState(false);

    const location = useLocation()

    const handleOpenSubMenu = () => {
        setSubMenu(!subMenu);
        handleOpenMenu(true)
    }

    useEffect(() => {
        if (isOpenAsideMenu) return
        setSubMenu(false)
    }, [isOpenAsideMenu])

    const componentInDevelopment = () => {
        toast.error('This page is still under development');

    }

    return (
        <AsideMenuStyled className={`page-menu ${isOpenAsideMenu === true ? 'active' : ''}`} >
            <div className="page-menu__wrapper">
                <div data-spollers className="page-menu__body">
                    <div className="page-menu__items spollers">
                        <NavLink to={'/'} className="page-menu__item item-page-menu">
                            <div className="item-page-menu__image">
                                <div className="item-page-menu__image-body">

                                    <svg width="22" height="22" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M15.1667 8.37251C15.1667 11.6666 14.5833 11.6666 9.33333 11.6666C4.08333 11.6666 3.5 11.6666 3.5 8.16663C3.5 4.66663 4.08333 4.66663 9.33333 4.66662C14.5833 4.66662 15.1667 4.66662 15.1667 8.37251Z" stroke="#3F79CF" style={{ stroke: '#B5CBED', strokeOpacity: 1 }} strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
                                        <path d="M12.8333 19.6275C12.8333 16.3334 13.4167 16.3334 18.6667 16.3334C23.9167 16.3334 24.5 16.3334 24.5 19.8334C24.5 23.3334 23.9167 23.3334 18.6667 23.3334C13.4167 23.3334 12.8333 23.3334 12.8333 19.6275Z" stroke="#3F79CF" style={{ stroke: '#B5CBED', strokeOpacity: 1 }} strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
                                        <path d="M24.5006 8.37251C24.5007 11.6666 24.034 11.6666 22.1673 11.6666C20.3007 11.6666 19.834 11.6666 19.834 8.16663C19.834 4.66663 20.3007 4.66663 22.1673 4.66663C24.209 4.66663 24.5006 4.66663 24.5006 8.37251Z" stroke="#3F79CF" style={{ stroke: '#B5CBED', strokeOpacity: 1 }} strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
                                        <path d="M3.49935 19.6275C3.49935 16.3334 3.96602 16.3334 5.83268 16.3334C7.69935 16.3334 8.16601 16.3334 8.16601 19.8334C8.16602 23.3334 7.69935 23.3334 5.83268 23.3334C3.79102 23.3334 3.49935 23.3334 3.49935 19.6275Z" stroke="#3F79CF" style={{ stroke: '#B5CBED', strokeOpacity: 1 }} strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </div>

                            </div>
                            <div className="item-page-menu__content">
                                <div className="sub-menu__title spollers__title">Main page</div>
                            </div>
                        </NavLink>
                        <NavLink to={'/video-store'} className="page-menu__item item-page-menu">
                            <div className="item-page-menu__image">
                                <div className="item-page-menu__image-body">
                                    <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M17.9085 0H4.09148C1.83292 0.00262109 0.00262109 1.83292 0 4.09148V17.9085C0.00262109 20.1671 1.83292 21.9974 4.09148 22H17.9085C20.1671 21.9974 21.9974 20.1671 22 17.9085V4.09148C21.9974 1.83292 20.1671 0.00262109 17.9085 0ZM20.4813 4.09148V5.41797H16.6339L13.7564 1.51873H17.9086C19.3288 1.52032 20.4797 2.67124 20.4813 4.09148ZM11.8689 1.51873L14.7464 5.41797H10.1311L7.25364 1.51873H11.8689ZM1.51873 4.09148C1.52032 2.67128 2.67124 1.52036 4.09148 1.51873H5.36615L8.2436 5.41797H1.51873V4.09148ZM17.9085 20.4813H4.09148C2.67128 20.4797 1.52036 19.3288 1.51873 17.9085V6.93675H20.4813V17.9085C20.4796 19.3287 19.3287 20.4796 17.9085 20.4813Z" fill="#B5CBED" style={{ fill: '#B5CBED', fillOpacity: 1 }} />
                                        <path d="M15.051 13.0513L9.04336 9.58282C8.68014 9.37313 8.21573 9.49757 8.00605 9.86078C7.9394 9.97624 7.9043 10.1072 7.9043 10.2405V17.1776C7.9043 17.597 8.24427 17.937 8.66364 17.937C8.79693 17.937 8.9279 17.9019 9.04336 17.8352L15.051 14.3667C15.4142 14.157 15.5387 13.6926 15.329 13.3293C15.2623 13.2138 15.1664 13.118 15.051 13.0513ZM9.42303 15.8623V11.5557L13.1526 13.709L9.42303 15.8623Z" fill="#B5CBED" style={{ fill: '#B5CBED', fillOpacity: 1 }} />
                                    </svg>

                                </div>


                            </div>
                            <div className="item-page-menu__content">
                                <div className="sub-menu__title spollers__title">Shop</div>

                            </div>
                        </NavLink>
                        {user.sex === "woman" &&
                            <NavLink to={'/live'} className="page-menu__item item-page-menu">
                                <div className="item-page-menu__image">
                                    <div className="item-page-menu__image-body">

                                        <svg width="24" height="22" viewBox="0 0 24 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M4.3267 17.556H19.675C21.4446 17.556 22.8845 16.1161 22.8845 14.3457V3.71029C22.8845 1.93993 21.4446 0.5 19.675 0.5H4.3267C2.55712 0.5 1.11719 1.93993 1.11719 3.71029V14.3457C1.11719 16.1161 2.55712 17.556 4.3267 17.556ZM2.52658 3.71029C2.52658 2.71745 3.33464 1.91018 4.3267 1.91018H19.675C20.6679 1.91018 21.4751 2.71745 21.4751 3.71029V14.3457C21.4751 15.3386 20.6671 16.1459 19.675 16.1459H4.3267C3.33385 16.1459 2.52658 15.3386 2.52658 14.3457V3.71029Z" fill="#B5CBED" style={{ fill: '#B5CBED', fillOpacity: 1 }} />
                                            <path d="M9.9398 12.9699C10.264 13.1375 10.6147 13.2205 10.9647 13.2205C11.4157 13.2205 11.8636 13.0827 12.2481 12.8118L15.0301 10.8449C15.6197 10.4283 15.9712 9.74866 15.9712 9.02674C15.9712 8.3056 15.6189 7.62596 15.0301 7.21019L12.2473 5.24408C11.5645 4.76175 10.6805 4.70068 9.93901 5.08591C9.19751 5.46958 8.73633 6.22752 8.73633 7.0622V10.9936C8.73711 11.8283 9.19751 12.5862 9.9398 12.9699ZM10.1465 7.0622C10.1465 6.75135 10.3109 6.48043 10.5873 6.33714C10.7079 6.2745 10.8371 6.24318 10.9647 6.24318C11.1284 6.24318 11.2912 6.29408 11.4338 6.39509L14.2157 8.36119C14.435 8.51544 14.5603 8.75896 14.5603 9.02752C14.5603 9.29609 14.4342 9.53882 14.215 9.69464L11.433 11.6607C11.1793 11.8401 10.8637 11.862 10.5866 11.7187C10.3102 11.5754 10.1457 11.3053 10.1457 10.9936L10.1465 7.0622Z" fill="#B5CBED" style={{ fill: '#B5CBED', fillOpacity: 1 }} />
                                            <path d="M22.9626 20.0099H1.03868C0.649532 20.0099 0.333984 20.3254 0.333984 20.7146C0.333984 21.1037 0.649532 21.4193 1.03868 21.4193H22.9626C23.3518 21.4193 23.6673 21.1037 23.6673 20.7146C23.6673 20.3254 23.3518 20.0099 22.9626 20.0099Z" fill="#B5CBED" style={{ fill: '#B5CBED', fillOpacity: 1 }} />
                                        </svg>
                                    </div>


                                </div>
                                <div className="item-page-menu__content">
                                    <div className="sub-menu__title spollers__title">Livestreaming</div>
                                </div>
                            </NavLink>
                        }

                        <NavLink to={'/models'} className="page-menu__item item-page-menu">
                            <div className="item-page-menu__image">
                                <div className="item-page-menu__image-body">

                                    <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path fillRule="evenodd" clipRule="evenodd" d="M2.70572 0.310097C3.08671 0.147567 3.52733 0.324667 3.68985 0.705667L3.00025 0.999837C3.68985 0.705667 3.6898 0.705527 3.68985 0.705667L3.69056 0.707327L3.692 0.710707L3.69699 0.722527L3.71515 0.765997C3.73077 0.803617 3.75326 0.858337 3.78163 0.928787C3.83837 1.06967 3.91871 1.27365 4.01478 1.52994C4.20677 2.04212 4.46236 2.76534 4.71804 3.61292C5.22541 5.29484 5.75 7.52044 5.75 9.5714C5.75 10.172 5.66261 10.7274 5.51666 11.2499H16.4833C16.3374 10.7274 16.25 10.172 16.25 9.5714C16.25 7.52044 16.7746 5.29484 17.282 3.61292C17.5376 2.76534 17.7932 2.04212 17.9852 1.52994C18.0813 1.27365 18.1616 1.06967 18.2184 0.928787C18.2467 0.858337 18.2692 0.803617 18.2849 0.765997L18.303 0.722527L18.308 0.710707L18.3094 0.707327L18.3099 0.706287C18.3099 0.706147 18.3101 0.705667 19 0.999947L18.3099 0.706287C18.4724 0.325287 18.9133 0.147567 19.2943 0.310097C19.6752 0.472597 19.8523 0.913117 19.6899 1.29408L19.6891 1.29602L19.6855 1.30451L19.6702 1.3411C19.6565 1.37405 19.6361 1.42385 19.6098 1.48918C19.5571 1.61987 19.4812 1.81251 19.3898 2.05643C19.2068 2.54466 18.9624 3.23623 18.718 4.04613C18.2254 5.67916 17.75 7.73928 17.75 9.5714C17.75 10.6302 18.1082 11.5388 18.656 12.5277C18.8445 12.8678 19.0655 13.2315 19.3001 13.6174C19.8141 14.4629 20.393 15.4152 20.8363 16.4617C21.3695 17.7203 21.75 19.1843 21.75 20.9999C21.75 21.4142 21.4142 21.7499 21 21.7499C20.5858 21.7499 20.25 21.4142 20.25 20.9999C20.25 19.5093 19.96 18.3043 19.5413 17.2561C14.1471 17.403 12.0815 20.127 11.7115 21.2371C11.6094 21.5434 11.3228 21.7499 11 21.7499C10.6772 21.7499 10.3906 21.5434 10.2885 21.2371C9.9185 20.127 7.85291 17.403 2.45871 17.2561C2.03996 18.3043 1.75 19.5093 1.75 20.9999C1.75 21.4142 1.41421 21.7499 1 21.7499C0.58579 21.7499 0.25 21.4142 0.25 20.9999C0.25 19.1843 0.63049 17.7203 1.16368 16.4617C1.60702 15.4152 2.18593 14.4629 2.69986 13.6174C2.93446 13.2315 3.15551 12.8678 3.34395 12.5277C3.89176 11.5388 4.25 10.6302 4.25 9.5714C4.25 7.73928 3.77458 5.67916 3.28196 4.04613C3.03764 3.23623 2.79323 2.54466 2.61022 2.05643C2.51879 1.81251 2.44288 1.61987 2.39024 1.48918C2.36393 1.42385 2.34345 1.37405 2.32977 1.3411L2.31449 1.30451L2.3109 1.29602L2.31017 1.29428C2.14775 0.913307 2.32477 0.472597 2.70572 0.310097ZM3.16148 15.7876C7.37156 16.0662 9.8303 17.8417 11 19.4374C12.1697 17.8417 14.6284 16.0662 18.8385 15.7876C18.599 15.353 18.3479 14.9414 18.0947 14.5262C17.8435 14.1144 17.5902 13.6991 17.3439 13.2545C17.2513 13.0874 17.1613 12.9182 17.0752 12.7462C17.0505 12.7487 17.0254 12.7499 17 12.7499H5C4.97462 12.7499 4.94953 12.7487 4.9248 12.7462C4.8387 12.9182 4.74865 13.0874 4.65608 13.2545C4.40979 13.6991 4.15649 14.1144 3.90532 14.5262C3.6521 14.9414 3.40103 15.353 3.16148 15.7876Z" fill="#B5CBED" style={{ fill: '#B5CBED', fillOpacity: 1 }} />
                                    </svg>
                                </div>


                            </div>
                            <div className="item-page-menu__content">
                                <div className="sub-menu__title spollers__title">Models</div>
                            </div>
                        </NavLink>

                        {user.sex === "woman" &&
                            <NavLink to={'/statistic'} className="page-menu__item item-page-menu">
                                <div className="item-page-menu__image">
                                    <div className="item-page-menu__image-body">
                                        <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M16.3333 3.57814C15.6144 3.52456 14.8379 3.5 14 3.5C5.83333 3.5 3.5 5.83333 3.5 14C3.5 22.1667 5.83333 24.5 14 24.5C22.1667 24.5 24.5 22.1667 24.5 14.6176C24.5 13.5393 24.4648 12.5582 24.388 11.6667" stroke="#B5CBED" style={{ stroke: '#B5CBED', strokeOpacity: 1 }} strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
                                            <path d="M22.1654 8.16667C23.454 8.16667 24.4987 7.122 24.4987 5.83333C24.4987 4.54467 23.454 3.5 22.1654 3.5C20.8767 3.5 19.832 4.54467 19.832 5.83333C19.832 7.122 20.8767 8.16667 22.1654 8.16667Z" stroke="#B5CBED" style={{ stroke: '#B5CBED', strokeOpacity: 1 }} strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
                                            <path d="M8.16797 17.5C10.268 14.5 11.0089 12.8272 12.4634 13.2222C13.5373 13.5139 13.6285 14.9179 14.8498 15.1667C16.4862 15.5 17.093 13 18.668 10.5" stroke="#B5CBED" style={{ stroke: '#B5CBED', strokeOpacity: 1 }} strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>

                                    </div>


                                </div>
                                <div className="item-page-menu__content">
                                    <div className="sub-menu__title spollers__title">Statistics</div>
                                </div>
                            </NavLink>
                        }
                        <div className="item-page-menu-wrapper">
                            <div className={`page-menu__item item-page-menu ${location.pathname.includes('auto-message') || location.pathname.includes('history') || location.pathname.includes('payment') || location.pathname.includes('profile') ? "active" : ""}`}>

                                <div className="item-page-menu__image" onClick={handleOpenSubMenu}>
                                    <div className="item-page-menu__image-body">
                                        <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <mask id="mask0_266_13139" style={{ maskType: 'luminance' }} maskUnits="userSpaceOnUse" x="0" y="0" width="22" height="22">
                                                <path d="M0 1.90735e-06H22V22H0V1.90735e-06Z" fill="white" style={{ fill: 'white', fillOpacity: '1' }} />
                                            </mask>
                                            <g mask="url(#mask0_266_13139)">
                                                <path d="M5.5 6.35938C5.5 3.32183 7.96245 0.859376 11 0.859376C14.0375 0.859376 16.5 3.32183 16.5 6.35938C16.5 9.39692 14.0375 11.8594 11 11.8594C7.96245 11.8594 5.5 9.39692 5.5 6.35938Z" stroke="#B5CBED" style={{ stroke: '#B5CBED', strokeOpacity: 1 }} strokeWidth="1.6" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                                                <path d="M17.2776 13.1055C18.2792 13.5505 19.0804 14.0772 19.6877 14.6108C20.6136 15.4243 21.1406 16.5996 21.1406 17.832V19.4219C21.1406 20.3711 20.3711 21.1406 19.4219 21.1406H2.57812C1.6289 21.1406 0.859375 20.3711 0.859375 19.4219V17.832C0.859375 16.5996 1.38639 15.4243 2.31228 14.6108C3.87995 13.2335 6.73905 11.8594 11 11.8594" stroke="#B5CBED" style={{ stroke: '#B5CBED', strokeOpacity: 1 }} strokeWidth="1.6" strokeMiterlimit="10" strokeLinecap="round" />
                                            </g>
                                        </svg>

                                    </div>


                                </div>
                                <div className="item-page-menu__content">
                                    <div className={`sub-menu__title spollers__title`} onClick={handleOpenSubMenu}>My profile</div>
                                </div>
                            </div>


                            <div className="sub-menu-wrapper">

                                <div className={`item-page-menu__content sub-menu`}>
                                    <div className={`sub-menu__item spollers__item ${subMenu ? "active" : ""}`}>


                                        <div className="sub-menu__body spollers__body">
                                            <NavLink to={'/my-profile'} className="item-page-menu__text">Profile</NavLink>


                                            {user?.sex === "woman" ?<>
                                                <NavLink to={'/auto-message'} className="item-page-menu__text">Automated messages</NavLink>
                                                <NavLink to={'/history'} className="item-page-menu__text">History</NavLink>
                                            </> :
                                            <>
                                                <div onClick={() => toast.error('This page is development')} className="item-page-menu__text">Transactions</div>
                                                <NavLink to={'/payment'} className="item-page-menu__text">Payment method</NavLink>
                                            </>}

                                        </div>

                                    </div>
                                </div>
                            </div>
                                
                            
                            {user.sex === 'man' &&
                                <NavLink to={'/login'} onClick={_ => setCookie('access_token', '')} className="page-menu__item item-page-menu">
                                    <div className="item-page-menu__image">
                                        <div className="item-page-menu__image-body">
                                            <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <mask id="mask0_191_2252" style={{ maskType: 'luminance' }} maskUnits="userSpaceOnUse" x="3" y="3" width="22" height="22">
                                                    <path d="M25 3H3V25H25V3Z" fill="white" />
                                                </mask>
                                                <g mask="url(#mask0_191_2252)">
                                                    <mask id="mask1_191_2252" style={{ maskType: 'luminance' }} maskUnits="userSpaceOnUse" x="3" y="3" width="22" height="22">
                                                        <path d="M3 3H25V25H3V3Z" fill="white" />
                                                    </mask>
                                                    <g mask="url(#mask1_191_2252)">
                                                        <path d="M17.6523 19.8438V21.5625C17.6523 22.9864 16.4981 24.1406 15.0742 24.1406H6.4375C5.01364 24.1406 3.85938 22.9864 3.85938 21.5625V6.4375C3.85938 5.01364 5.01364 3.85938 6.4375 3.85938H15.0742C16.4981 3.85938 17.6523 5.01364 17.6523 6.4375V8.15625" stroke="#B5CBED" strokeWidth="1.875" stroke-miterlimit="10" stroke-linecap="round" strokeLinejoin="round" />
                                                        <path d="M23.9258 14.043H12.2812" stroke="#B5CBED" strokeWidth="1.875" stroke-miterlimit="10" stroke-linecap="round" strokeLinejoin="round" />
                                                        <path d="M21.8379 16.8789L23.7623 14.9545C24.2657 14.451 24.2657 13.6349 23.7623 13.1315L21.8379 11.207" stroke="#B5CBED" strokeWidth="1.875" stroke-miterlimit="10" stroke-linecap="round" strokeLinejoin="round" />
                                                    </g>
                                                </g>
                                            </svg>
                                        </div>
                                    </div>
                                    <div className="item-page-menu__content sub-menu">
                                        <div className="sub-menu__item spollers__item">
                                            <div className="sub-menu__title spollers__title">Logout</div>
                                        </div>
                                    </div>
                                </NavLink>
                            }
                        </div>
                    </div>

                </div>
                <div className="page-menu__footer">
                    <div className="page-menu__items">
                        <NavLink to={'/rules/privacy'} className="page-menu__item item-page-menu">
                            <div className="item-page-menu__image">
                                <div className="item-page-menu__image-body">
                                    <svg width="24" height="26" viewBox="0 0 24 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M12 25.3754C11.6525 25.3751 11.3109 25.2858 11.0076 25.1162L7.07585 22.9321C5.12129 21.8452 3.49267 20.2558 2.35852 18.3283C1.22436 16.4009 0.625878 14.2053 0.625 11.9689V5.90717C0.624665 5.40249 0.811608 4.91564 1.14963 4.54089C1.48766 4.16614 1.95271 3.93015 2.45475 3.87861C4.01889 3.71291 5.55831 3.36496 7.04167 2.84186C8.40176 2.36118 9.7065 1.73631 10.9336 0.977923C11.2547 0.781595 11.6237 0.677756 12.0001 0.677857C12.3764 0.677957 12.7454 0.781995 13.0664 0.978495C14.2936 1.73647 15.5984 2.36114 16.9583 2.84186C18.4417 3.36497 19.9811 3.71293 21.5452 3.87864C22.0473 3.93018 22.5123 4.16617 22.8504 4.54091C23.1884 4.91566 23.3753 5.4025 23.375 5.90717V11.9689C23.3741 14.2053 22.7756 16.4009 21.6415 18.3284C20.5073 20.2559 18.8787 21.8453 16.9241 22.9321L12.9912 25.1168C12.6883 25.2861 12.3471 25.3751 12 25.3754ZM12 2.42597C11.9486 2.42573 11.8981 2.43973 11.8542 2.46641C10.5206 3.28994 9.1028 3.96921 7.625 4.49153C6.01279 5.06045 4.3395 5.43862 2.63932 5.61832C2.56708 5.62459 2.49983 5.65775 2.45088 5.71124C2.40193 5.76474 2.37485 5.83466 2.375 5.90717V11.9689C2.37569 13.8933 2.89064 15.7824 3.86656 17.4409C4.84248 19.0994 6.24391 20.4669 7.92578 21.402L11.8587 23.5866C11.9017 23.6108 11.9501 23.6235 11.9994 23.6236C12.0486 23.6237 12.0971 23.6112 12.1401 23.5872L16.0742 21.402C17.7561 20.467 19.1575 19.0994 20.1334 17.4409C21.1094 15.7824 21.6243 13.8933 21.625 11.9689V5.90717C21.6251 5.83467 21.5981 5.76475 21.5491 5.71127C21.5002 5.65778 21.4329 5.62462 21.3607 5.61835C19.6605 5.43865 17.9872 5.06046 16.375 4.49153C14.8972 3.9692 13.4794 3.29049 12.1458 2.46695C12.102 2.43985 12.0515 2.42565 12 2.42597Z" fill="#B5CBED" style={{ fill: '#B5CBED', fillOpacity: '1' }} />
                                        <path d="M11.4158 15.625C11.2015 15.6254 10.9947 15.5467 10.8348 15.404L8.2098 13.0707C8.03715 12.9164 7.93272 12.6999 7.91942 12.4687C7.90611 12.2375 7.98501 12.0105 8.13882 11.8374C8.29263 11.6642 8.5088 11.5592 8.73994 11.5452C8.97109 11.5312 9.19836 11.6094 9.37192 11.7627L11.36 13.5298L15.1529 9.48466C15.2311 9.39935 15.3255 9.33041 15.4306 9.28183C15.5356 9.23325 15.6493 9.20601 15.7649 9.20167C15.8806 9.19732 15.996 9.21598 16.1044 9.25654C16.2128 9.29711 16.3121 9.35878 16.3965 9.43799C16.4809 9.51719 16.5488 9.61236 16.5961 9.71798C16.6435 9.82359 16.6694 9.93755 16.6725 10.0533C16.6755 10.169 16.6555 10.2841 16.6137 10.3921C16.5719 10.5 16.5091 10.5986 16.4289 10.6821L12.0539 15.3487C11.9722 15.4361 11.8734 15.5057 11.7636 15.5533C11.6538 15.6008 11.5354 15.6252 11.4158 15.625Z" fill="#B5CBED" style={{ fill: '#B5CBED', fillOpacity: '1' }} />
                                    </svg>

                                </div>


                            </div>
                            <div className="item-page-menu__content">
                                <div className="sub-menu__title spollers__title">Privacy</div>
                            </div>
                        </NavLink>
                        <NavLink to={'/rules/Cookie-Notice'} className="page-menu__item item-page-menu">
                            <div className="item-page-menu__image">
                                <div className="item-page-menu__image-body">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M20.4834 3.51563C18.2221 1.31949 15.1875 0.101308 12.0353 0.124344C8.88321 0.147381 5.86672 1.40979 3.63777 3.63874C1.40881 5.8677 0.146405 8.88419 0.123368 12.0363C0.100331 15.1885 1.31851 18.2231 3.51465 20.4844C5.04802 22.0159 6.96703 23.1043 9.06848 23.6343C11.1699 24.1642 13.3756 24.116 15.4518 23.4947C15.7482 23.4043 15.9968 23.2002 16.1431 22.927C16.2893 22.6538 16.3215 22.3338 16.2324 22.037C16.1433 21.7402 15.9403 21.4907 15.6678 21.3432C15.3953 21.1957 15.0755 21.1621 14.7782 21.2498C13.8766 21.52 12.9403 21.6569 11.999 21.6563C6.6745 21.6563 2.34278 17.3245 2.34278 12C2.34278 6.67547 6.6745 2.34375 11.999 2.34375C17.3236 2.34375 21.6553 6.67547 21.6553 12C21.6586 13.8822 21.1094 15.724 20.0756 17.2969C19.9094 17.5566 19.8523 17.8713 19.9166 18.1728C19.9809 18.4743 20.1615 18.7384 20.4191 18.9077C20.6767 19.077 20.9907 19.138 21.293 19.0774C21.5953 19.0169 21.8615 18.8396 22.034 18.5841C23.5467 16.2768 24.2184 13.5188 23.936 10.7743C23.6536 8.02987 22.4343 5.46648 20.4834 3.51563Z" fill="#B5CBED" />
                                        <path d="M10.8281 6.28125V13.7344C10.8281 14.0452 10.9516 14.3432 11.1714 14.563C11.3911 14.7828 11.6892 14.9062 12 14.9062C12.3108 14.9062 12.6089 14.7828 12.8286 14.563C13.0484 14.3432 13.1719 14.0452 13.1719 13.7344V6.28125C13.1719 5.97045 13.0484 5.67238 12.8286 5.45261C12.6089 5.23284 12.3108 5.10938 12 5.10938C11.6892 5.10938 11.3911 5.23284 11.1714 5.45261C10.9516 5.67238 10.8281 5.97045 10.8281 6.28125Z" fill="#B5CBED" />
                                        <path d="M12 18.8906C11.7682 18.8906 11.5417 18.8219 11.3489 18.6931C11.1562 18.5644 11.006 18.3813 10.9173 18.1672C10.8286 17.9531 10.8054 17.7175 10.8506 17.4901C10.8959 17.2628 11.0075 17.054 11.1714 16.8901C11.3352 16.7262 11.5441 16.6146 11.7714 16.5694C11.9987 16.5242 12.2343 16.5474 12.4485 16.6361C12.6626 16.7248 12.8456 16.875 12.9744 17.0677C13.1031 17.2604 13.1719 17.487 13.1719 17.7188C13.1719 18.0296 13.0484 18.3276 12.8286 18.5474C12.6089 18.7672 12.3108 18.8906 12 18.8906Z" fill="#B5CBED" />
                                    </svg>

                                </div>

                            </div>
                            <div className="item-page-menu__content">
                                <div className="sub-menu__title spollers__title">Cookie Notice</div>

                            </div>
                        </NavLink>

                        <NavLink to={'/rules/Terms-of-Service'} className="page-menu__item item-page-menu">
                            <div className="item-page-menu__image">
                                <div className="item-page-menu__image-body">
                                    <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M5.83333 3.5H17.5C18.1188 3.5 18.7123 3.74583 19.1499 4.18342C19.5875 4.621 19.8333 5.21449 19.8333 5.83333V24.5H5.83333C5.21449 24.5 4.621 24.2542 4.18342 23.8166C3.74583 23.379 3.5 22.7855 3.5 22.1667V5.83333C3.5 5.21449 3.74583 4.621 4.18342 4.18342C4.621 3.74583 5.21449 3.5 5.83333 3.5V3.5Z" stroke="#B5CBED" style={{ stroke: '#B5CBED', strokeOpacity: '1' }} strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
                                        <path d="M19.834 14H24.5007V22.1667C24.5007 22.7855 24.2548 23.379 23.8172 23.8166C23.3796 24.2542 22.7862 24.5 22.1673 24.5H19.834V14Z" stroke="#B5CBED" style={{ stroke: '#B5CBED', strokeOpacity: '1' }} strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
                                        <path d="M8.16602 9.33331H15.166" stroke="#B5CBED" style={{ stroke: '#B5CBED', strokeOpacity: '1' }} strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
                                        <path d="M8.16602 14H15.166" stroke="#B5CBED" style={{ stroke: '#B5CBED', strokeOpacity: '1' }} strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
                                        <path d="M8.16602 18.6667H11.666" stroke="#B5CBED" style={{ stroke: '#B5CBED', strokeOpacity: '1' }} strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>

                                </div>



                            </div>
                            <div className="item-page-menu__content">
                                <div className="sub-menu__title spollers__title">Terms of Service</div>

                            </div>

                        </NavLink>
                        <div className="page-menu__item item-page-menu item-page-menu--mode">
                            <div className="item-page-menu__content item-page-menu__content-mode">
                                <AsideMenuMode />

                            </div>
                        </div>

                    </div>

                </div>
            </div>
        </AsideMenuStyled>
    )
}
