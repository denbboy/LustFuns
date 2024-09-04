import SuccessfullIc from '../../../assets/img/icons/checked-big.svg'
import { NavLink } from 'react-router-dom'

export const ModalSuccessfull = () => {
    return (
        <div className="popup-successfull__body popup__body">
            <div className="popup-successfull__image">
                <img src={SuccessfullIc} alt="Ic-su"/>
            </div>
            <h2 className="popup-successfull__title title title--medium">COngratulations</h2>
            <p className="popup-successfull__text">Your payment is successfull</p>
            <NavLink to={'/'} className="popup-successfull__button button button--fw"><span>Main page</span></NavLink>
        </div>
    )
}
