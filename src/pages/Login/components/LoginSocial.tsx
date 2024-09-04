
import GoogleIc from '../../../assets/img/icons/google.svg';
import AppleIc from '../../../assets/img/icons/apple.svg';
import FacebookIc from '../../../assets/img/icons/facebook.svg';

import { GoogleLogin } from '@react-oauth/google'
import FacebookLogin from 'react-facebook-login';
import AppleSignin from 'react-apple-signin-auth';


export const LoginSocial = () => {

    const responseGoogle = (credentialResponse: any) => {
        console.log('Google Login Successful:', credentialResponse);
    }

    const responseFacebook = (response: any) => {
        console.log('facebook', response.accessToken);
    }

    const responseApple = (response: any) => {
        console.log('apple', response.credential);
    }

    return (
        <div className="main-registration__socials socials-main-registration">
            <button className="socials-main-registration__item item-socials-main-registration">
                <div className="item-socials-main-registration__image">
                    <img src={GoogleIc} alt="Icon" />
                </div>
                <p className="item-socials-main-registration__text">Google</p>
                <div className='auth'>
                    <GoogleLogin
                        onSuccess={responseGoogle}
                        onError={() => {
                            console.log('Login Failed');
                        }}
                    />;
                </div>
            </button>

            <button className="socials-main-registration__item item-socials-main-registration">
                <div className="item-socials-main-registration__image">
                    <img src={AppleIc} alt="Icon" />
                </div>
                <p className="item-socials-main-registration__text">Apple</p>
                <div className='auth'>
                    <AppleSignin
                        authOptions={{
                            clientId: '8FDM6UTX9',
                            scope: 'email name',
                            redirectURI: 'https://develop.8FDM6UTX9.com/',
                            state: '',
                            nonce: 'nonce',
                            usePopup: true,
                        }}
                        uiType="dark"
                        className="apple-auth-btn"
                        onError={(e: any) => {
                            console.log(e)
                        }}
                        onSuccess={responseApple}
                    />
                </div>
            </button>

            <button className="socials-main-registration__item item-socials-main-registration">
                <div className="item-socials-main-registration__image">
                    <img src={FacebookIc} alt="Icon" />
                </div>
                <p className="item-socials-main-registration__text">Facebook</p>
                <div className="auth">
                    <FacebookLogin
                    appId="YOUR_FACEBOOK_APP_ID"
                        autoLoad={false}
                        fields="name,email,picture"
                        callback={responseFacebook}
                        icon="fa-facebook"
                    />,
                </div>
            </button>
        </div>
    )
}
