import SortIc from '../../../assets/img/icons/sort.svg'

export const SubscribersButtons = () => {
    return (
        <div className="page-subscribers__tabs tabs-subscribers">


            <div className="tabs-content-profile__item subscribers-tab active">
                <p className="tabs-content-profile__name">Subscribers</p>
            </div>


            <div className="tabs-content-profile__item followers-tab">
                <div className="followers-tab__body field"> 
                    <p className="tabs-content-profile__name">Followers</p>
                    <button className="followers-tab__sort ">
                        <img src={SortIc} alt="Icon"/>
                    </button>
                    <div className="followers-tab__popup popup-followers-tab popup-main">
                        <div className="popup-main__wrapper">
                            <div className="popup-main__content">

                                <div className="popup-followers-tab__top popup-main__top top-popup-main">
                                    <p className="top-popup-main__text">Sort by</p>
                                </div>
                                
                                <div className="popup-followers-tab__body body-popup-followers-tab">
                                    <div className="body-popup-followers-tab__sort">
                                        <div className="body-popup-followers-tab__item">
                                            <div className="radio">
                                                <label>
                                                    <input type="radio" name="followers-sort" id="balance-high" className="real-radio"/>
                                                    <span className="custom-radio"></span>
                                                    Balance (from high to low)
        
                                                </label>
                                            </div>
                                        </div>
                                        <div className="body-popup-followers-tab__item">
                                            <div className="radio">
                                                <label>
                                                    <input type="radio" name="followers-sort" id="balance-low" className="real-radio"/>
                                                    <span className="custom-radio"></span>
                                                    Balance (from low to high)
        
                                                </label>
                                            </div>
                                        </div>
                                        <div className="body-popup-followers-tab__item">
                                            <div className="radio">
                                                <label>
                                                    <input type="radio" name="followers-sort" id="date-high" className="real-radio"/>
                                                    <span className="custom-radio"></span>
                                                    Follow date (from high to low)
        
                                                </label>
                                            </div>
                                        </div>
                                        <div className="body-popup-followers-tab__item">
                                            <div className="radio">
                                                <label>
                                                    <input type="radio" name="followers-sort" id="date-low" className="real-radio"/>
                                                    <span className="custom-radio"></span>
                                                    Follow date (from low to high)
        
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="tabs-content-profile__item groups-tab">
                <p className="tabs-content-profile__name">Groups</p>
            </div>
            <div className="tabs-content-profile__item blocked-tab">
                <p className="tabs-content-profile__name">Blocked users</p>
            </div>
    
        </div>
    )
}
