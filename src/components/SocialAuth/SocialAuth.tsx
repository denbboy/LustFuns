import GoogleIc from '../../assets/img/icons/google.svg'
import AppleIc from '../../assets/img/icons/apple.svg'
import FacebookIc from '../../assets/img/icons/facebook.svg'
import { toast } from 'react-toastify'

export const SocialAuth = () => {
    return (
        <div className="main-registration__socials socials-main-registration">
            <button onClick={_ => toast.error('This element is developing')} className="socials-main-registration__item item-socials-main-registration">
                <div className="item-socials-main-registration__image">
                    <img src={GoogleIc} alt="Icon"/>
                </div>
                <p className="item-socials-main-registration__text">Google</p>
            </button>
            <button onClick={_ => toast.error('This element is developing')} className="socials-main-registration__item item-socials-main-registration">
                <div className="item-socials-main-registration__image">
                    <img src={AppleIc} alt="Icon"/>
                </div>
                <p className="item-socials-main-registration__text">Apple</p>
            </button>
            <button onClick={_ => toast.error('This element is developing')} className="socials-main-registration__item item-socials-main-registration">
                <div className="item-socials-main-registration__image">
                    <img src={FacebookIc} alt="Icon"/>
                </div>
                <p className="item-socials-main-registration__text">Facebook</p>
            </button>
        </div>  
    )
}
