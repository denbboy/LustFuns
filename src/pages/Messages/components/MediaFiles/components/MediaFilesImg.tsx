import UserBgPh from '../../../../../assets/img/user/bg.jpg'

export const MediaFilesImg = () => {
    return (
        <div className="media-files__item item-media-files">
            <div className="item-video-store__wrapper">
                <a href={`${UserBgPh}`} data-fancybox={"media-img"} className="item-video-store__image">
                    <img src={UserBgPh} alt="ph" />
                </a>
            </div>
            <div className="item-video-store__tags">
                <div className="item-video-store__tag tag-item-video-store tag-item-video-store--orange price">
                    <div className="tag-item-video-store__body">
                        <p className="tag-item-video-store__text">18$</p>
                    </div>
                    <div className="tag-item-video-store__decor"></div>
                </div>

            </div>
        </div>
    )
}
