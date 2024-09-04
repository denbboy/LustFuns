import { useDispatch } from 'react-redux'
import UserPh from '../../../assets/img/user/01.png'
import { NavLink } from 'react-router-dom'
import { removeModal } from '../../../redux/toolkitSlice';

export const ModalBlockUser = () => {
    const dispatch = useDispatch();


    return (
        <div className="popup-block-user__body popup__body">
            <h4 className="popup-block-user__title popup-title">Block user</h4>
            <div className="popup-block-user__block">
                <NavLink to={'/profile/:userId'} className="top-chat__user user-item online">
                    <div className="user-item__image">
                        <picture><source srcSet={UserPh} type="image/webp"/><img className="user-photo" src={UserPh} alt="User ph"/></picture>
                    </div>
                    <div className="user-item__body">
                        <div className="user-item__username">@Boob007</div>
                    </div>
                </NavLink>
                <div className="popup-block-user__items">
                    <div className="popup-block-user__item item-block">
                        <div className="item-block__body">
                            <div className="item-block__title">Complete Block</div>
                            <p className="item-block__text">This user will not be able to see your account. Search results will display a "not found" message.</p>
                        </div>
                        <div className="switch">
                            <div className="switch__body">
                                <input type="checkbox" id="switch-complete-block" className="switch__input"/>
                                <label htmlFor="switch-complete-block" className="switch__button"></label>
                            </div>
                        </div>
                    </div>
                    <div className="popup-block-user__item item-block">
                        <div className="item-block__body">
                            <div className="item-block__title">Response Block (Social)</div>
                            <p className="item-block__text">This user cannot comment, react, or see others' comments on your timeline.</p>
                        </div>
                        <div className="switch">
                            <div className="switch__body">
                                <input type="checkbox" id="switch-response-block" className="switch__input"/>
                                <label htmlFor="switch-response-block" className="switch__button"></label>
                            </div>
                        </div>
                    </div>
                    <div className="popup-block-user__item item-block">
                        <div className="item-block__body">
                            <div className="item-block__title">Block Live Streams</div>
                            <p className="item-block__text">This user will be blocked from watching your live streams.</p>
                        </div>
                        <div className="switch">
                            <div className="switch__body">
                                <input type="checkbox" id="switch-streams-block" className="switch__input"/>
                                <label htmlFor="switch-streams-block" className="switch__button"></label>
                            </div>
                        </div>
                    </div>
                    <div className="popup-block-user__item item-block">
                        <div className="item-block__body">
                            <div className="item-block__title">Block Messages</div>
                            <p className="item-block__text">This user will be blocked from sending you messages.</p>
                        </div>
                        <div className="switch">
                            <div className="switch__body">
                                <input type="checkbox" id="switch-messages-block" className="switch__input"/>
                                <label htmlFor="switch-messages-block" className="switch__button"></label>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            <button onClick={() => dispatch(removeModal('blockUser'))} className="popup-block-user__button button"><span>Done</span></button>
        </div>
    )
}
