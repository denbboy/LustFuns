import MainDecor from '../../assets/img/registration/01.svg'
import LogoIc from '../../assets/img/icons/logo.svg'
import LogoWhiteIc from '../../assets/img/icons/logo-white.svg'
import { NavLink } from 'react-router-dom'

export const NotFound = () => {
    return (
        <main className="page page-registration">
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
                    <div className="not-found">
                        <div className="not-found__body">
                            4
                            <div className="not-found__image">
                                <img src={LogoWhiteIc} alt="Icon"/>
                            </div>
                            4
                        </div>
                        <div className="not-found__text">Page not found</div>
                        <NavLink to={'/'} className="not-found__button button"><span>Back to main</span></NavLink>
                    </div>
                </div>
            </div>
        </main>
    )
}
