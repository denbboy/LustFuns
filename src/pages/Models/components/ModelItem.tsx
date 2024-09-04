import React, { useState } from 'react'
import UserPh from './../../../assets/img/user/01.png'
import PostPh from './../../../assets/img/post/01.jpg'
import { NavLink } from 'react-router-dom'

interface IModelItemProps {
    userName: string
    userTag: string
    userId: string
}

export const ModelItem: React.FC<IModelItemProps> = ({ userName, userTag, userId }) => {

    const [isFavorite, setIsFavorite] = useState<boolean>(false)

    return (
        <div className="models__item item-models">
            <div className="item-models__body body-item-models">
                <div className="body-item-models__image">
                    <img src={PostPh} alt="ph" />
                </div>
                <div className="body-item-models__user user-item">
                    <div className="user-item__body">
                        <NavLink to={`/profile/${userTag}`} className="user-item__name">
                            {userName}
                        </NavLink>
                        <NavLink to={`/profile/${userTag}`} className="user-item__username">
                            {userTag}
                        </NavLink>
                    </div>
                </div>

                <div className="item-models__user user-item-models">
                    <button onClick={_ => setIsFavorite(prev => !prev)} className="item-models__like like">
                        <svg width="22" height="20" viewBox="0 0 22 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path style={{fill: isFavorite ? "#FF0000" : "transparent"}} d="M9.83191 18.0065L9.83083 18.0055C7.00698 15.4472 4.72355 13.3741 3.13731 11.4352C1.55929 9.50633 0.75 7.80226 0.75 5.99455C0.75 3.04245 3.05268 0.75 6 0.75C7.67171 0.75 9.2884 1.53139 10.3402 2.75575L10.9091 3.418L11.478 2.75575C12.5298 1.53139 14.1465 0.75 15.8182 0.75C18.7655 0.75 21.0682 3.04245 21.0682 5.99455C21.0682 7.80226 20.2589 9.50633 18.6809 11.4352C17.0946 13.3741 14.8112 15.4472 11.9874 18.0055L11.9863 18.0065L10.9091 18.9862L9.83191 18.0065Z" fill={isFavorite ? "#FF0000" : "transparent"} stroke={isFavorite ? "#FF0000" : "#B5CBED"} stroke-width="1.5"/>
                        </svg>

                    </button>
                    <div className="user-item-models__body">
                        <div className="user-item-models__wrapper">
                            <div className="user-item-models__user user-item">
                                <div className="user-item__image">
                                    <img className="user-photo" src={UserPh} alt="User ph" />
                                </div>
                                <div className="user-item__body">
                                    <NavLink to={`/profile/${userId}`} className="user-item__name">
                                        {userName}
                                    </NavLink>
                                    <NavLink to={`/profile/${userId}`} className="user-item__username">
                                        {userTag}
                                    </NavLink>
                                </div>
                            </div>
                            <div className="user-item-models__actions">
                                <NavLink to={`/profile/${userId}`} className="user-item-models__view button button--transparent">
                                    <span>View profile</span>
                                </NavLink>
                                <NavLink to={`/messages/${userId}`} className="user-item-models__message button">
                                    <span>Message</span>
                                </NavLink>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}
