import React, { useState } from 'react'
import { MessagesItem } from './MessagesItem'
import { IUser } from '../../../../models'
import UserPhoto from '../../../../assets/img/user/01.png'
import { useClickOutside } from '../../../../hooks/ClickOutside'

interface IMessagesProps {

}

interface IMessage {
    user: IUser,
    message: string,
    isRead: boolean
}

export const Messages: React.FC<IMessagesProps> = () => {

    const [isOpenBlock, setIsOpenBlock] = useState(false)
    const [mockMessages, setMockMessages] = useState<IMessage[]>([
        {
            user: {
                username: "Lily",
                usertag: "@lil",
                photo: UserPhoto
            },
            message: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, labore.",
            isRead: false
        },
        {
            user: {
                username: "Lily",
                usertag: "@lil",
                photo: UserPhoto
            },
            message: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, labore.",
            isRead: false
        },
        {
            user: {
                username: "Lily",
                usertag: "@lil",
                photo: UserPhoto
            },
            message: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, labore.",
            isRead: false
        },
    ])

    const handleReadAll = () => {
        setMockMessages(prev => prev.map(item => ({ ...item, isRead: true })))
        setTimeout(() => setIsOpenBlock(true), 1)
    }

    const isHaveUnreadMessages = !!mockMessages.filter(item => !item.isRead).length

    const {rootEl} = useClickOutside(setIsOpenBlock)
    
    return (
        <div ref={rootEl} className={`header__messages messages-header field notification ${isOpenBlock ? 'field-active' : ''}`}>
            <div onClick={() => setIsOpenBlock(prev => !prev)} className="messages-header__icon header-icon">
                <svg width="24" height="20" viewBox="0 0 24 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M23.25 0.859375H0.75C0.56352 0.859375 0.384677 0.933454 0.252815 1.06532C0.120954 1.19718 0.046875 1.37602 0.046875 1.5625V17.5C0.046875 17.9351 0.219726 18.3524 0.527403 18.6601C0.83508 18.9678 1.25238 19.1406 1.6875 19.1406H22.3125C22.7476 19.1406 23.1649 18.9678 23.4726 18.6601C23.7803 18.3524 23.9531 17.9351 23.9531 17.5V1.5625C23.9531 1.37602 23.879 1.19718 23.7472 1.06532C23.6153 0.933454 23.4365 0.859375 23.25 0.859375ZM21.443 2.26562L12 10.9211L2.55703 2.26562H21.443ZM22.3125 17.7344H1.6875C1.62534 17.7344 1.56573 17.7097 1.52177 17.6657C1.47782 17.6218 1.45312 17.5622 1.45312 17.5V3.16094L11.5312 12.393C11.6609 12.5116 11.8302 12.5773 12.0059 12.5773C12.1815 12.5773 12.3509 12.5116 12.4805 12.393L22.5469 3.16094V17.5C22.5469 17.5622 22.5222 17.6218 22.4782 17.6657C22.4343 17.7097 22.3747 17.7344 22.3125 17.7344Z" fill="#6F767E" style={{ fill: '#6F767E', fillOpacity: '1' }} />
                </svg>
            </div>
            {!!mockMessages.filter(item => !item.isRead).length && 
                <div className="messages-header__notification header-icon-notification">
                    <span>{mockMessages.filter(item => !item.isRead).length}</span>
                </div>
            }

            <div className="messages-header__popup popup-messages-header popup-main">
                <div className="popup-main__wrapper">
                    <div className="popup-main__content">

                        <div className="popup-messages-header__top popup-main__top top-popup-main">
                            <p className="top-popup-main__text">Messages</p>
                            {isHaveUnreadMessages && <button onClick={handleReadAll} className="top-popup-main__read"><span>Mark as read</span></button>}
                        </div>
                        <div className="popup-messages-header__body body-popup-messages-header">
                            <div className="page-messages__body body-messages">
                                <div className="content-body-messages">
                                    <div className="body-messages__items">

                                        {
                                            mockMessages.map(item => (
                                                <MessagesItem
                                                    user={item.user}
                                                    isRead={item.isRead}
                                                    message={item.message}
                                                />
                                            ))
                                        }

                                    </div>

                                </div>
                                <button className="body-messages__button button button--transparent button--fw"><span>View all messages</span></button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
