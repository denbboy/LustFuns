import React from 'react'
import { NavLink } from 'react-router-dom'
import { IUser } from '../../../../models'

interface IMessagesItemProps {
    user: IUser
    isRead: boolean
    message: string
}

export const MessagesItem: React.FC<IMessagesItemProps> = ({ user, isRead, message }) => {

    return (
        <NavLink to={`/messages/${user.usertag}`} className={`body-messages__item item-message ${!isRead ? "unread" : ""}`}>
            <div className="item-message__user user-item user-item--stories online">
                <div className="user-item__image user-item__image--decoration">
                    <img className="user-photo" src={user.photo} alt="ph" />
                    <div className="user-item__image-status">
                        <svg className="online-status" width="8" height="9" viewBox="0 0 8 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="4" cy="4.5" r="4" fill="#3DD598" style={{ fill: '#3DD598', fillOpacity: '1' }} />
                        </svg>
                    </div>
                </div>
                <div className="user-item__body">
                    <button className="user-item__name">
                        {user.username}
                    </button>
                    <p className="user-item__message">
                        {message}
                    </p>
                </div>
            </div>

        </NavLink>
    )
}
