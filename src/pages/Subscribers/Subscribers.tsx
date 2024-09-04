import SortIc from '../../assets/img/icons/sort.svg'

// import { SubscribersButtons } from './components/SubscribersButtons'
import { Followers } from './components/Followers/Followers'
import { SubscribersItems } from './components/SubscribersItems/SubscribersItems'
import { Groups } from './components/Groups/Groups'
import { BlockedUsers } from './components/BlockedUsers/BlockedUsers'
import { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'

export const Subscribers = () => {
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const initialTab = queryParams.get('tab') || 'subscribers';

    const [activeTab, setActiveTab] = useState('subscribers');
    const [isOpenModal, setIsOpenModal] = useState(false);

    const activeTabContent = () => {
        switch (activeTab) {
            case 'followers':
                return <Followers />;
            case 'groups':
                return <Groups />;
            case 'blocked':
                return <BlockedUsers />;
            default:
                return <SubscribersItems />;
        }
    };

    const handleOpenModal = () => {
        setIsOpenModal(!isOpenModal);
    }

    useEffect(() => {

        setActiveTab(initialTab);
        
    }, [initialTab]);


    return (
        <div className="page-subscribers">
            <div className="page-subscribers__container">
                <div className="page-subscribers__body">

                    <div className="page-subscribers__tabs tabs-subscribers">

                        <div className={`tabs-content-profile__item subscribers-tab ${activeTab === 'subscribers' ? 'active' : ''}`}
                            onClick={() => setActiveTab('subscribers')}
                        >
                            <p className="tabs-content-profile__name">Subscribers</p>
                        </div>


                        <div className={`tabs-content-profile__item followers-tab ${activeTab === 'followers' ? 'active' : ''}`}
                            onClick={() => setActiveTab('followers')}
                        >
                            <div className={`followers-tab__body field ${isOpenModal ? 'field-active' : ''}`}
                                onClick={handleOpenModal}
                            > 
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

                        <div className={`tabs-content-profile__item groups-tab ${activeTab === 'groups' ? 'active' : ''}`}
                            onClick={() => setActiveTab('groups')}
                        >
                            <p className="tabs-content-profile__name">Groups</p>
                        </div>

                        <div className={`tabs-content-profile__item blocked-tab ${activeTab === 'blocked' ? 'active' : ''}`}
                            onClick={() => setActiveTab('blocked')}
                        >
                            <p className="tabs-content-profile__name">Blocked users</p>
                        </div>
                
                    </div>
                    

                    <div className="page-subscribers__content">

                        {activeTabContent()}

                    </div>
                </div>
            </div>
        </div> 
    )
}
