import { NavLink } from 'react-router-dom'
import SuccessIc from '../../../assets/img/icons/success.svg'

export const ForgotPassSuccess = () => {
    return (
        <div className="success">
            <div className="success__image">
                <img className="ibg" src={SuccessIc} alt="Icon"/>
            </div>
            <div className="success__body">
                <p className="success__text">The password recovery link was successfully sent to the email address specified during registration.</p>
            </div>
            <NavLink to={'/login'} className="success__button button button--fw"><span>Log in</span></NavLink>
        </div>
    )
}
