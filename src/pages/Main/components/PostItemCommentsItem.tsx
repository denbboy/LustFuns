import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { IUser } from '../../../models'
import { toast } from 'react-toastify'

interface IPostItemCommentsItemProps {
    user: IUser
    date: Date
    comment: string
}

export const PostItemCommentsItem: React.FC<IPostItemCommentsItemProps> = ({user, date, comment}) => {

    const dateWithZeroSymbol = (number: number) => {
        return +number < 10 ? "0" + number : number
    }

    const [isLiked, setIsLiked] = useState(false)

    return (
        <div className="comments-post__item item-comments-post">
            <div className="item-comments-post__user user-item user-item--stories online">
                <div className="user-item__image user-item__image--decoration">
                    <img className="user-photo" src={user.photo} alt="ph" />
                    <div className="user-item__image-status">
                        <svg className="online-status" width="8" height="9" viewBox="0 0 8 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="4" cy="4.5" r="4" fill="#3DD598" style={{ fill: '#3DD598', fillOpacity: '1' }} />
                        </svg>
                    </div>
                </div>
                <div className="user-item__body">
                    <NavLink to={`/profile/${user.usertag}`} className="user-item__name">
                        {user.username}
                    </NavLink>
                    <div className="user-item__block">
                        <div className="user-item__post-time">
                            <span>
                                {dateWithZeroSymbol(date.getDate())}.{dateWithZeroSymbol(date.getMonth() + 1)}.{date.getFullYear()}
                            </span>
                            {dateWithZeroSymbol(date.getHours())}:{dateWithZeroSymbol(date.getMinutes())}
                            <span></span>
                        </div>
                        {/* {isPinned && <div className="user-item__post-pin pin-icon">
                            <img src={PinIc} alt="Icon" />
                        </div>} */}
                    </div>
                </div>
            </div>
            <div className="item-comments-post__body">
                <div className="item-comments-post__content">
                    <p>
                        {comment}
                    </p>
                </div>
                <div className="item-comments-post__actions">
                    <button onClick={_ => setIsLiked(prev => !prev)} className="item-comments-post__button">{isLiked ? "Liked" : "Like"} {isLiked ? 1 : 0}</button>
                    <button className="item-comments-post__button" onClick={_ => toast.error('This function id developing')}>Reply</button>
                </div>
            </div>
        </div>
    )
}
