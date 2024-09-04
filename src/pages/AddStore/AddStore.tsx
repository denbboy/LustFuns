import PostPh from '../../assets/img/post/01.jpg'
import UserPh from '../../assets/img/user/01.png'

export const AddStore = () => {
    return (

        <div className="video-store">
            <div className="video-store__container">
                <div className="video-store__header header-video-store">
                    <div className="header-video-store__search">
                        <input type="text" name="form[]" placeholder="Type search here" className="header-video-store__input input"/>
                    </div>
                    <a href="some" data-popup="#popup-add-vid" className="header-video-store__add button"><span>Add video to my store</span></a>

                </div>
                <div className="video-store__body">
                    <div className="video-store__content content-video-store">
                        <div className="content-video-store__item item-video-store">
                            <div className="item-video-store__wrapper">
                                <div className="item-video-store__image">
                                    <img src={PostPh} alt="ph"/>
                                </div>
                                <div className="item-video-store__body">
                                    <div className="user-item__image">
                                        <img className="user-photo" src={UserPh} alt="User ph"/>
                                    </div>
                                    <div className="item-video-store__content">
                                        <p className="item-video-store__text">Lorem ipsum dolor sit amet.</p>
                                        <div className="item-video-store__block">
                                            <div className="item-video-store__info">
                                                <div className="item-video-store__user">
                                                    <p className="item-video-store__name">Boob007</p>
                                                    <p className="item-video-store__username">@boob007</p>
                                                </div>
                                                <span className="item-video-store__date">08.03.2024</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="item-video-store__tags">
                                <div className="item-video-store__tag tag-item-video-store tag-item-video-store--orange">
                                    <div className="tag-item-video-store__body">
                                        <p className="tag-item-video-store__text"><span>25</span>$</p>
                                    </div>
                                    <div className="tag-item-video-store__decor"></div>
                                </div>
                            </div>
                        </div>
                        
                    </div>

                </div>
            </div>
        </div>
    )
}
