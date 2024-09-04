import SuccessIc from '../../../assets/img/icons/success.svg'
import { NavLink } from 'react-router-dom'

export const RegistrationSuccess = () => {
    return (
        <div className="success">
            <div className="success__image">
                <img className="ibg" src={SuccessIc} alt="Icon"/>
            </div>
            <div className="success__body">
                <h2 className="success__title title title--medium">You have successfully registered!</h2>
                <p className="success__text">Please check your email to confirm registration.</p>
            </div>
            <NavLink to={'/login'} className="success__button button button--fw"><span>Log in</span></NavLink>
        </div>
    )
}
