import MainDecor from '../../assets/img/registration/01.svg'
import LogoIc from '../../assets/img/icons/logo.svg'
import LogoWhiteIc from '../../assets/img/icons/logo-white.svg'
import { NavLink } from 'react-router-dom'
import { ForgotPassSuccess } from './components/ForgotPassSuccess'
import { useState } from 'react'

export const ForgotPass = () => {
    const [email, setEmail] = useState<string>("");
    const [emailError, setEmailError] = useState<string | null>(null);
    const [isEmailSent, setIsEmailSent] = useState<boolean>(false);

    const validateEmail = () => {
        const emailRegex = /^[^\s@]+@[a-zA-Z0-9\-_.]+\.[a-z]{2,6}$/;
        if (!emailRegex.test(email)) {
            setEmailError("Please enter a valid email address");
            return false;
        }
        setEmailError(null);
        return true;
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (validateEmail()) {
            // Simulate email sending
            setTimeout(() => {
                setIsEmailSent(true);
            }, 1000);
        }
    };

    return (
        <div className="registration">
            <div className="registration__block block-registration">
                <div className="block-registration__body">
                    <div className="block-registration__logo logo">
                        <div className="logo__block">

                            <p className="logo__text">l</p>
                            <img className="logo__image" src={LogoIc} alt="ph"/>
                            <p className="logo__text">st</p>
                        </div>

                        <span className="logo__text">fans</span>
                    </div>
                </div>
                <div className="block-registration__decor">
                    <img src={MainDecor} alt="Decor"/>
                </div>
            </div>
            <div className="registration__main main-registration">
                <div className="main-registration__body">

                {isEmailSent ? (
                        <ForgotPassSuccess/>
                    ) : (
                        <>
                            <div className="main-registration__header header-main-registration">
                                <h1 className="header-main-registration__title title">Forgot password</h1>
                            </div>
                            <form onSubmit={handleSubmit} className="main-registration__form form-main-registration">
                                <div className="form-main-registration__body">
                                    <input 
                                        type="email" 
                                        name="email" 
                                        placeholder="Email address *" 
                                        className="form-main-registration__input input input-main" 
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                    />
                                    {emailError && <p className="error" style={{color: '#CB0000'}}>{emailError}</p>}
                                </div>
                                <button className="form-main-registration__button button button--fw" type="submit">
                                    <span>Send recovery link</span>
                                </button>
                            </form>
                            <div className="main-registration__footer footer-main-registration">
                                <p className="footer-main-registration__text">
                                    Do you remember the password?
                                    <NavLink to={'/login'}>Sign in</NavLink>
                                </p>
                            </div>
                        </>
                    )}
                </div>
                <div className="main-registration__decor">
                    <img src={LogoWhiteIc} alt="Decor"/>
                </div>
            </div>
        </div>
    )
}
