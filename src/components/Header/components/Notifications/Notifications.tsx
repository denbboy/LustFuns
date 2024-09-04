import React, { useState } from 'react'
import { NotificationsItem } from './NotificationsItem'
import UserPhoto from './../../../../assets/img/user/01.png'
import { useClickOutside } from '../../../../hooks/ClickOutside'

interface INotificationsProps {

}

export const Notifications: React.FC<INotificationsProps> = () => {

    const [isOpenBlock, setIsOpenBlock] = useState(false)
    const [mockNotify, setMockNotify] = useState([
        {
            user: {
                username: 'Asd',
                usertag: '@asd',
                photo: UserPhoto
            },
            isRead: false,
            time: "24 min",
            message: "has sent you an tip in value of <span>$0.80</span>"
        },
        {
            user: {
                username: 'Asd12',
                usertag: '@asd321',
                photo: UserPhoto
            },
            isRead: false,
            time: "26 min",
            message: "has sent you an tip in value of <span>$0.20</span>"
        },
    ])

    const handleReadAll = () => {
        setMockNotify(prev => prev.map(item => ({ ...item, isRead: true })))
        setTimeout(() => setIsOpenBlock(true), 1)
    }

    const isHaveUnreadNotifies = !!mockNotify.filter(item => !item.isRead).length

    const {rootEl} = useClickOutside(setIsOpenBlock)

    return (

        <div ref={rootEl} className={`header__notifications notifications-header field notification ${isOpenBlock ? 'field-active' : ''}`}>
            <div onClick={() => setIsOpenBlock(prev => !prev)} className="notifications-header__icon header-icon">
                <svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" clipRule="evenodd" d="M0 15.0959C2.07459e-06 14.7151 0.154705 14.3506 0.428635 14.086L1.45759 13.0922C1.84928 12.7139 2.06977 12.1922 2.06814 11.6476L2.05867 8.4946C2.04543 4.08319 5.61789 0.5 10.0293 0.5C14.4314 0.5 18 4.06859 18 8.47067L18 11.6716C18 12.202 18.2107 12.7107 18.5858 13.0858L19.5858 14.0858C19.851 14.351 20 14.7107 20 15.0858C20 15.8668 19.3668 16.5 18.5858 16.5H14C14 18.7091 12.2091 20.5 10 20.5C7.79086 20.5 6 18.7091 6 16.5H1.40408C0.628628 16.5 0 15.8714 0 15.0959ZM8 16.5C8 17.6046 8.89543 18.5 10 18.5C11.1046 18.5 12 17.6046 12 16.5H8ZM16 11.6716C16 12.7324 16.4214 13.7499 17.1716 14.5L2.87851 14.5C3.64222 13.746 4.07136 12.7161 4.06813 11.6416L4.05867 8.4886C4.04875 5.1841 6.7248 2.5 10.0293 2.5C13.3268 2.5 16 5.17316 16 8.47067L16 11.6716Z" fill="#6F767E" style={{ fill: '#6F767E', fillOpacity: '1' }} />
                </svg>
            </div>
            {!!mockNotify.filter(item => !item.isRead).length && 
                <div className="notifications-header__notification header-icon-notification">
                    <span></span>
                </div>
            }


            <div className="notifications-header__popup popup-notifications-header popup-main">
                <div className="popup-main__wrapper">
                    <div className="popup-main__content">

                        <div className="popup-notifications-header__top popup-main__top top-popup-main">
                            <p className="top-popup-main__text">Notification</p>
                            {isHaveUnreadNotifies && <button onClick={handleReadAll} className="top-popup-main__read"><span>Mark as read</span></button>}
                        </div>
                        <div className="popup-notifications-header__body body-popup-notifications-header">

                            {
                                mockNotify.map(item => (
                                    <NotificationsItem
                                        user={item.user}
                                        isRead={item.isRead}
                                        time={item.time}
                                        message={item.message}
                                    />
                                ))
                            }

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
