import { IUser } from '../../../models'
import { NavLink } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { addModal } from '../../../redux/toolkitSlice'

interface IVideoStoreItemProps {
    title: string
    user: IUser
    date: string
    isNew: boolean
    isDownload: boolean
    price: number
    poster: string
}

export const VideoStoreItem: React.FC<IVideoStoreItemProps> = ({ title, date, isNew, isDownload, price, poster, ...props }) => {
    const dispatch = useDispatch();
    const user: IUser = useSelector((state: any) => state.toolkit.user)

    const handleModalOpen = (modalName: string) => {
        dispatch(addModal(`${modalName}`))
    }

    return (
        <div className="content-video-store__item item-video-store">
            <div className="item-video-store__wrapper">
                <div data-gallery className="item-video-store__image">
                    <a data-fancybox={title} style={{width: "100%", height: "100%"}} href="https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.webm">
                        <img src={poster} alt="ph" />
                    </a>
                    {user.sex === "man" && <div className="item-video-store__price">
                        <p>$<span>
                            {price}
                        </span></p>
                    </div>}
                </div>
                <div className="item-video-store__body">
                    <NavLink to={`/profile/${user.usertag}`} className="user-item__image">
                        <img className="user-photo" src={user.photo} alt="User ph" />
                    </NavLink>
                    <div className="item-video-store__content">
                        <p className="item-video-store__text">
                            {title}
                        </p>
                        <div className="item-video-store__block">
                            <div className="item-video-store__info">
                                <div className="item-video-store__user">
                                    <p className="item-video-store__name">
                                        {user.username}
                                    </p>
                                    <p className="item-video-store__username">
                                        {user.usertag}
                                    </p>
                                </div>
                                <div className="item-video-store__info-block">
                                    <span className="item-video-store__date">
                                        {date}
                                    </span>
                                    <div className="item-video-store__discount">
                                        Discount -5%
                                    </div>
                                </div>
                            </div>
                            {user.sex === "man" && <button onClick={() => handleModalOpen('successfull')} className="item-video-store__button button button--transparent"><span>Buy</span></button>}
                        </div>
                    </div>
                </div>
            </div>
            <div className="item-video-store__tags">
                {user.sex === "woman" && <div className="item-video-store__tag tag-item-video-store tag-item-video-store--orange">
                    <div className="tag-item-video-store__body">
                        <p className="tag-item-video-store__text"><span>25</span>$</p>
                    </div>
                    <div className="tag-item-video-store__decor"></div>
                </div>}
                {user.sex === "man" && isNew && <div className="item-video-store__tag tag-item-video-store tag-item-video-store--purple">
                    <div className="tag-item-video-store__body">
                        <p className="tag-item-video-store__text">New</p>
                    </div>
                    <div className="tag-item-video-store__decor"></div>
                </div>}
                {user.sex === "man" && isDownload && <div className="item-video-store__tag tag-item-video-store tag-item-video-store--green">
                    <div className="tag-item-video-store__body">
                        <p className="tag-item-video-store__text">Download</p>
                    </div>
                    <div className="tag-item-video-store__decor"></div>
                </div>}
            </div>
        </div>
    )
}
