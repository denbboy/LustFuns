import MainDecor from '../../assets/img/registration/01.svg'
import LogoIc from '../../assets/img/icons/logo.svg'
import LogoWhiteIc from '../../assets/img/icons/logo-white.svg'

import { SocialAuth } from '../../components/SocialAuth/SocialAuth'
import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { RegistrationSuccess } from './components/RegistrationSuccess'

export const Registration = () => {
    const [isModelState, setIsModelState] = useState(true)
    const [password, setPassword] = useState<string>("");
    const [email, setEmail] = useState<string>("");
    const [emailError, setEmailError] = useState<string | null>(null);
    const [passwordError, setPasswordError] = useState<string | null>(null);
    const [isRegistered, setIsRegistered] = useState<boolean>(false);

    const validateForm = () => {
        let isValid = true;

        const emailRegex = /^[^\s@]+@[a-zA-Z0-9\-_.]+\.[a-z]{2,6}$/;
        const isValidEmail = emailRegex.test(email);

        if (!isValidEmail) {
            setEmailError("Введіть дійсні значення для електронної пошти");
            isValid = false;
        } else {
            setEmailError(null);
        }

        if (password === '') {
            setPasswordError("Пароль не може бути порожнім");
            isValid = false;
        } else {
            setPasswordError(null);
        }

        return isValid;
    };

    const resetForm = () => {
        setEmail("");
        setPassword("");
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (validateForm()) {
            setIsRegistered(true);
            resetForm();
        }
    };

    const handleSwitchChange = () => {
        setIsModelState(!isModelState);
    };

    return (
        <div className="registration model">
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

                    {isRegistered ? (
                        <RegistrationSuccess/>
                    ) : (
                        <>
                            <div className="main-registration__header header-main-registration">
                                <h1 className="header-main-registration__title title">Registration</h1>

                                <div className="header-main-registration__switch switch-registration">
                                    <p className="switch-registration__text">Model</p>
                                    <div className="switch-registration__body">
                                        <input 
                                            type="checkbox" 
                                            id="switch" 
                                            className="switch-registration__input"
                                            checked={!isModelState}
                                            onChange={handleSwitchChange}
                                        />
                                        <label htmlFor="switch" className="switch-registration__button"></label>
                                    </div>
                                    <p className="switch-registration__text">Man</p>
                                </div>
                            </div>

                            {isModelState ? (
                                <form onSubmit={handleSubmit} className="main-registration__form form-main-registration">
                                    <div className="form-main-registration__body">
                                        <input 
                                            required
                                            type="text" 
                                            name="fullName" 
                                            placeholder="Full name *" 
                                            className="form-main-registration__input form-main-registration-email input input-main"
                                        />
                                        <input 
                                            required
                                            type="text" 
                                            name="passportNumber" 
                                            placeholder="Passport number *" 
                                            className="form-main-registration__input form-main-registration-nickname input input-main"
                                        />
                                        <input 
                                            type="text" 
                                            name="passportSeries" 
                                            placeholder="Passport series *" 
                                            className="form-main-registration__input form-main-registration-nickname input input-main"
                                        />
                                        <input 
                                            required
                                            type="text" 
                                            name="idNumber" 
                                            placeholder="Identification number *" 
                                            className="form-main-registration__input form-main-registration-nickname input input-main"
                                        />
                                        <input 
                                            required
                                            type="email" 
                                            name="email" 
                                            placeholder="Email address *" 
                                            className="form-main-registration__input form-main-registration-nickname input input-main"
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                        />
                                        {emailError && <p className="error" style={{color: '#CB0000'}}>{emailError}</p>}
                                        <input 
                                            type="password" 
                                            name="password" 
                                            placeholder="Password *" 
                                            className="form-main-registration__input form-main-registration-password input input-main"
                                            value={password}
                                            onChange={(e) => setPassword(e.target.value)}
                                        />
                                        {passwordError && <p className="error" style={{color: '#CB0000'}}>{passwordError}</p>}
                                    </div>

                                    <div className="form-block">
                                        <label>
                                            <input type="checkbox" name="conditions" className="real-checkbox"/>
                                            <span className="custom-checkbox"></span>
                                            <p className="form-block__text">By clicking on Create Free Account, I acknowledge that I am 18+ years old and I accept the <a href="#">Terms & Conditions</a></p>
                                        </label>
                                    </div>
                                    <button className="form-main-registration__button button button--fw" type="submit">
                                        <span>Create account</span>
                                    </button>
                                </form>
                            ) : (
                                <>
                                    <form onSubmit={handleSubmit} className="main-registration__form form-main-registration">
                                        <div className="form-main-registration__body">
                                            <input 
                                                type="email" 
                                                name="email" 
                                                placeholder="Email address *" 
                                                className="form-main-registration__input form-main-registration-email input input-main"
                                                value={email}
                                                onChange={(e) => setEmail(e.target.value)}
                                            />
                                            {emailError && <p className="error" style={{color: '#CB0000'}}>{emailError}</p>}
                                            <input 
                                                required
                                                type="text" 
                                                name="nickname" 
                                                placeholder="Nickname *" 
                                                className="form-main-registration__input form-main-registration-nickname input input-main"
                                            />
                                            <input 
                                                type="password" 
                                                name="password" 
                                                placeholder="Password *" 
                                                className="form-main-registration__input form-main-registration-password input input-main"
                                                value={password}
                                                onChange={(e) => setPassword(e.target.value)}
                                            />
                                            {passwordError && <p className="error" style={{color: '#CB0000'}}>{passwordError}</p>}
                                        </div>
                                        <div className="form-block">
                                            <label>
                                                <input type="checkbox" name="conditions" className="real-checkbox"/>
                                                <span className="custom-checkbox"></span>
                                                <p className="form-block__text">By clicking on Create Free Account, I acknowledge that I am 18+ years old and I accept the <a href="#">Terms & Conditions</a></p>
                                            </label>
                                        </div>
                                        <button className="form-main-registration__button button button--fw" type="submit">
                                            <span>Create account</span>
                                        </button>
                                    </form>
                                    <SocialAuth/>
                                </>
                            )}
                            <div className="main-registration__footer footer-main-registration">
                                <p className="footer-main-registration__text">
                                    Already have an account? 
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

