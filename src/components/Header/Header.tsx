import LogoPh from '../../assets/img/icons/logo.svg'
import { NavLink, useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { Notifications } from './components/Notifications/Notifications'
import { toast } from 'react-toastify'
import setCookie from '../../functions/setCookie'
import { AsideMenuMode } from '../AsideMenu/components/AsideMenuMode'
import { IUser } from '../../models'
import { useSelector } from 'react-redux'
import { Requests } from './components/Requests/Requests'
import { Messages } from './components/Messages/Messages'
import { Profile } from './components/Profile/Profile'

interface IOpenMenu {
    handleOpenMenu?: any
}

export const Header = ({handleOpenMenu}: IOpenMenu) => {

    const [searchValue, setSearchValue] = useState<string>('')

    const navigate = useNavigate()

    const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        navigate(`/models/?search=${searchValue}`)

    }
    
    return (
        <header className="header">
            <div className="header__wrapper">
                <div className="header__menu-button button-menu-header" onClick={_ => handleOpenMenu()}>
                    <div className="button-menu-header__body">
                        <svg width="28" height="25" viewBox="0 0 28 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1.99935 0.5H25.9993C26.7993 0.5 27.3327 1.03333 27.3327 1.83333V23.1667C27.3327 23.9667 26.7993 24.5 25.9993 24.5H1.99935C1.19935 24.5 0.666016 23.9667 0.666016 23.1667V1.83333C0.666016 1.03333 1.19935 0.5 1.99935 0.5ZM13.9056 3.16667V21.8333H24.666V3.16667H13.9056Z" fill="#3F79CF" style={{fill:'#3F79CF', fillOpacity:'1'}} />
                        </svg>
                    </div>
                </div>

                <NavLink to={'/'} className="header__logo logo">
                    <div className="logo__block">

                        <p className="logo__text">l</p>
                        <img className="logo__image" src={LogoPh} alt="ph"/>
                        <p className="logo__text">st</p>
                    </div>

                    <span className="logo__text">fans</span>

                </NavLink>

                <div className="header__actions">
                    <form onSubmit={handleSearch} className="header__search">
                        <input onChange={e => setSearchValue(e.target.value)} value={searchValue} type="text" name="form[]" placeholder="Search by nickname or hashtags " className="header__input input"/>
                    </form>
                    <div className="header__content">
                        <AsideMenuMode />

                        <NavLink to={'/statistic'} className="header__value">$ 268.80</NavLink>

                        <Messages/>

                        <Requests/>

                        <Notifications/>

                        <Profile/>

                    </div>
                </div>
            </div>
        </header>
    )
}
