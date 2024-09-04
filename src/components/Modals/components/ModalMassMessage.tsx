import { toast } from 'react-toastify'
import GroupIc from '../../../assets/img/icons/group-add-white.svg'
import LogoIc from '../../../assets/img/icons/logo-white.svg'
import MoneyIc from '../../../assets/img/icons/money-white.svg'
import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { removeModal } from '../../../redux/toolkitSlice'

export const ModalMassMessage = () => {
    const dispatch = useDispatch();
    const [searchValue, setSearchValue] = useState<string>("");
    const [sendTo, setSendTo] = useState<string>("");
    const [sendAt, setSendAt] = useState<string>("");
    const [exclude, setExclude] = useState<any[]>([]);
    const [message, setMessage] = useState<string>("");
    const [amount, setAmount] = useState<number | undefined>();

    console.log(exclude);
    
    const [mockUsers] = useState([
        {
            user: {
                username: "Tomik",
                usertag: "@tommm",
                photo: 'https://goldenglobes.com/wp-content/uploads/2023/10/17-tomcruiseag.jpg'
            },
            isOnline: true
        },
        {
            user: {
                username: "Robertik",
                usertag: "@robbb",
                photo: 'https://ca-times.brightspotcdn.com/dims4/default/4c31853/2147483647/strip/false/crop/3000x2000+0+0/resize/1486x991!/quality/75/?url=https%3A%2F%2Fcalifornia-times-brightspot.s3.amazonaws.com%2Ff6%2Ff2%2Fada36e394ddeaa69bf4706fd378a%2Firon-man-robert-downey-jr.jpg'
            },
            isOnline: true
        },
        {
            user: {
                username: "Danilyok",
                usertag: "@dan",
                photo: 'https://www.okino.ua/media/var/cache/a0/1d/a01d08309b6f5ed71c78c393033b7c19.jpg'
            },
            isOnline: true
        }
    ])

    // 1) посмотри что ты принимаешь. Вопрос, что приходит в параметрах этой функции addExcludeUser?
    const addExcludeUser = (user: any) => {

        // Ну и теперь главный вопрос, что ты тут сравниваешь?
        // Что такое (u) переданое в параметрах стрелочной функции?
        if (!exclude.some((u) => u.user.usertag === user.user.usertag)) {
            setExclude([...exclude, user]);
        }
    };

    const handleSubmit = () => {
        if (!sendTo || !sendAt || !message || amount === undefined) {
            toast.error("Please fill out all fields");
            return;
        }

        toast.success('Form submitted successful')
        dispatch(removeModal('massMessage'))
        // Submit the form
        console.log("Form submitted", { sendTo, sendAt, exclude, message, amount });
    };

    const removeExcludeUser = (usertag: string) => {
        setExclude(exclude.filter((user) => user !== usertag));
    };

    return (
        <div className="popup-mass-message__body popup__body">
            <div className="popup-mass-message__block">

                <h4 className="popup-mass-message__title popup-title">MASS MESSAGE</h4>
                <div className="input-box">
                    <label>Send to</label>
                    <input  type="text" placeholder="Everyone" className="input-box__input input input-main"
                        value={sendTo}
                        onChange={(e) => setSendTo(e.target.value)}
                    />
                </div>
                <div className="input-box">
                    <label>Send at</label>
                    <label className="input-block input-block-calendar input input-main">
                        <input  id="post-date" placeholder="Immidiately" className="input-box__input post-date" 
                            value={sendAt}
                            onChange={(e) => setSendAt(e.target.value)}
                        />
                        <svg width="22" height="24" viewBox="0 0 22 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M19.75 2.5H17.125V1.625C17.125 1.39294 17.0328 1.17038 16.8687 1.00628C16.7046 0.842187 16.4821 0.75 16.25 0.75C16.0179 0.75 15.7954 0.842187 15.6313 1.00628C15.4672 1.17038 15.375 1.39294 15.375 1.625V2.5H6.625V1.625C6.625 1.39294 6.53281 1.17038 6.36872 1.00628C6.20462 0.842187 5.98206 0.75 5.75 0.75C5.51794 0.75 5.29538 0.842187 5.13128 1.00628C4.96719 1.17038 4.875 1.39294 4.875 1.625V2.5H2.25C1.78587 2.5 1.34075 2.68437 1.01256 3.01256C0.684374 3.34075 0.5 3.78587 0.5 4.25V21.75C0.5 22.2141 0.684374 22.6592 1.01256 22.9874C1.34075 23.3156 1.78587 23.5 2.25 23.5H19.75C20.2141 23.5 20.6592 23.3156 20.9874 22.9874C21.3156 22.6592 21.5 22.2141 21.5 21.75V4.25C21.5 3.78587 21.3156 3.34075 20.9874 3.01256C20.6592 2.68437 20.2141 2.5 19.75 2.5ZM4.875 4.25V5.125C4.875 5.35706 4.96719 5.57962 5.13128 5.74372C5.29538 5.90781 5.51794 6 5.75 6C5.98206 6 6.20462 5.90781 6.36872 5.74372C6.53281 5.57962 6.625 5.35706 6.625 5.125V4.25H15.375V5.125C15.375 5.35706 15.4672 5.57962 15.6313 5.74372C15.7954 5.90781 16.0179 6 16.25 6C16.4821 6 16.7046 5.90781 16.8687 5.74372C17.0328 5.57962 17.125 5.35706 17.125 5.125V4.25H19.75V7.75H2.25V4.25H4.875ZM19.75 21.75H2.25V9.5H19.75V21.75Z" fill="#B5CBED" ></path>
                        </svg>

                    </label>
                </div>
                <div className="input-box">
                    <label>Exclude</label>
                    <div className="input-box__exclude exclude-input-box input input-main">
                        <div className="exclude-input-box__items">
                        {exclude.map((user, index) => (
                                <div key={index} className="exclude-input-box__item item-exclude-input-box">
                                    <div className="item-exclude-input-box__name">{user}</div>
                                    <div className="item-exclude-input-box__username">{user}</div>
                                    <button
                                        className="item-exclude-input-box__delete"
                                        onClick={() => removeExcludeUser(user)}
                                    >
                                        <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M9.21112 8.5886C9.2434 8.62088 9.26901 8.6592 9.28648 8.70138C9.30395 8.74356 9.31294 8.78877 9.31294 8.83443C9.31294 8.88008 9.30395 8.9253 9.28648 8.96747C9.26901 9.00965 9.2434 9.04797 9.21112 9.08025C9.17884 9.11253 9.14052 9.13814 9.09834 9.15561C9.05617 9.17308 9.01095 9.18207 8.9653 9.18207C8.91965 9.18207 8.87443 9.17308 8.83225 9.15561C8.79008 9.13814 8.75176 9.11253 8.71948 9.08025L6.00101 6.36177L3.28253 9.08025C3.24992 9.11231 3.2112 9.13765 3.16886 9.15497C3.12652 9.17229 3.08108 9.18128 3.03518 9.1816C2.98928 9.18192 2.94358 9.16354 2.90402 9.12874C2.86446 9.09394 2.8324 9.04467 2.81126 8.98513C2.79011 8.9256 2.78074 8.8585 2.7841 8.79199C2.78745 8.72549 2.80348 8.66131 2.83114 8.60577C2.85879 8.55023 2.89749 8.50501 2.94448 8.47404L5.66295 5.75556L2.94448 3.03708C2.8975 3.0061 2.8588 2.96088 2.83114 2.90534C2.80348 2.8498 2.78745 2.78562 2.7841 2.71911C2.78074 2.65261 2.79011 2.58551 2.81126 2.52598C2.8324 2.46644 2.86446 2.41717 2.90402 2.38237C2.94358 2.34757 2.98928 2.32919 3.03518 2.32951C3.08108 2.32983 3.12652 2.33882 3.16886 2.35614C3.2112 2.37346 3.24992 2.3988 3.28253 2.43086L6.00101 5.14934L8.71948 2.43086C8.75176 2.39858 8.79008 2.37297 8.83225 2.3555C8.87443 2.33803 8.91965 2.32904 8.9653 2.32904C9.01095 2.32904 9.05617 2.33803 9.09834 2.3555C9.14052 2.37297 9.17884 2.39858 9.21112 2.43086C9.2434 2.46314 9.26901 2.50146 9.28648 2.54364C9.30395 2.58582 9.31294 2.63103 9.31294 2.67669C9.31294 2.72234 9.30395 2.76756 9.28648 2.80973C9.26901 2.85191 9.2434 2.89023 9.21112 2.92251L6.49265 5.641L9.21112 8.35947C9.24314 8.39175 9.26875 8.43007 9.28622 8.47225C9.3037 8.51442 9.31269 8.55963 9.31269 8.60529C9.31269 8.65094 9.3037 8.69616 9.28622 8.73834C9.26875 8.78051 9.24314 8.81883 9.21112 8.85111Z" fill="#3F79CF" ></path>
                                        </svg>
                                    </button>
                                </div>
                            ))}

                        </div>
                        <button className="exclude-input-box__add">
                            <div className="exclude-input-box__add-icon">
                                <img src={GroupIc} alt="Icon"/>
                            </div>
                        </button>
                    </div>
                </div>
                <div className="input-box">
                    <div className="subscription-body-profile__field">
                        <div className="subscription-body-profile__image-input">
                            <img src={MoneyIc} alt="Icon"/>
                        </div>
                        <input min="0"  type="number" placeholder="" className="subscription-body-profile__input input input-main"
                            value={amount}
                            onChange={(e: any) => setAmount(e.target.value)}
                        />
                    </div>
                </div>
                <div className="footer-chat__input input-chat input-main">
                    <div className="input-chat__box">
                        <input  type="text" placeholder="Your Message" className="input-chat__input input"
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                        />
                    </div>
                    <div className="input-chat__block">
                        <div className="input-chat__actions actions-input-chat">
                            <button className="actions-input-chat__item actions-input-chat__item--image">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M21.9996 9.25C21.8015 9.25259 21.6123 9.33244 21.4722 9.47254C21.3321 9.61263 21.2522 9.80189 21.2496 10V16L17.0696 11.22C16.8041 10.9373 16.4834 10.7119 16.1274 10.5579C15.7713 10.4039 15.3875 10.3244 14.9996 10.3244C14.6117 10.3244 14.2279 10.4039 13.8719 10.5579C13.5159 10.7119 13.1952 10.9373 12.9296 11.22L10.0596 14.5L9.11964 13.36C8.86061 13.0493 8.53645 12.7993 8.1701 12.6277C7.80375 12.4562 7.40416 12.3673 6.99964 12.3673C6.59511 12.3673 6.19552 12.4562 5.82917 12.6277C5.46282 12.7993 5.13866 13.0493 4.87964 13.36L2.74964 15.93V6C2.75227 5.13886 3.09553 4.31374 3.70445 3.70482C4.31337 3.09589 5.13849 2.75264 5.99964 2.75H13.9996C14.1985 2.75 14.3893 2.67098 14.53 2.53033C14.6706 2.38968 14.7496 2.19891 14.7496 2C14.7496 1.80109 14.6706 1.61032 14.53 1.46967C14.3893 1.32902 14.1985 1.25 13.9996 1.25H5.99964C4.73986 1.25 3.53168 1.75045 2.64088 2.64124C1.75008 3.53204 1.24964 4.74022 1.24964 6V18C1.24491 18.0163 1.24491 18.0337 1.24964 18.05C1.26281 19.3011 1.76906 20.4965 2.65843 21.3765C3.54781 22.2565 4.74847 22.7501 5.99964 22.75H17.9996C19.2456 22.7475 20.4408 22.2555 21.3274 21.3801C22.2141 20.5047 22.7213 19.3159 22.7396 18.07V10C22.7371 9.80359 22.6587 9.61578 22.5207 9.47596C22.3827 9.33613 22.196 9.25515 21.9996 9.25ZM17.9996 21.25H5.99964C5.18275 21.2474 4.3968 20.9373 3.79826 20.3813C3.19971 19.8254 2.83247 19.0645 2.76964 18.25L5.99964 14.32C6.12062 14.1852 6.26863 14.0774 6.43403 14.0036C6.59943 13.9298 6.77852 13.8917 6.95964 13.8917C7.14075 13.8917 7.31984 13.9298 7.48524 14.0036C7.65065 14.0774 7.79865 14.1852 7.91964 14.32L9.42964 16.14C9.49889 16.2242 9.58589 16.2921 9.68443 16.3388C9.78297 16.3854 9.8906 16.4098 9.99964 16.41C10.2156 16.3981 10.4191 16.3053 10.5696 16.15L14.0096 12.21C14.132 12.0811 14.2794 11.9785 14.4427 11.9083C14.606 11.8382 14.7819 11.802 14.9596 11.802C15.1374 11.802 15.3133 11.8382 15.4766 11.9083C15.6399 11.9785 15.7872 12.0811 15.9096 12.21L21.1796 18.21C21.1294 19.0239 20.7741 19.789 20.1847 20.3524C19.5952 20.9159 18.815 21.2365 17.9996 21.25Z" fill="#B5CBED"  />
                                    <path d="M4.25 7C4.25 7.5439 4.41128 8.07558 4.71346 8.52782C5.01563 8.98005 5.44512 9.33253 5.94762 9.54067C6.45012 9.74881 7.00305 9.80327 7.5365 9.69716C8.06995 9.59105 8.55995 9.32914 8.94454 8.94454C9.32914 8.55995 9.59105 8.06995 9.69716 7.5365C9.80327 7.00305 9.74881 6.45012 9.54067 5.94762C9.33253 5.44512 8.98005 5.01563 8.52782 4.71346C8.07558 4.41128 7.5439 4.25 7 4.25C6.27065 4.25 5.57118 4.53973 5.05546 5.05546C4.53973 5.57118 4.25 6.27065 4.25 7ZM8.25 7C8.25 7.24723 8.17669 7.4889 8.03934 7.69446C7.90199 7.90002 7.70676 8.06024 7.47835 8.15485C7.24995 8.24946 6.99861 8.27421 6.75614 8.22598C6.51366 8.17775 6.29093 8.0587 6.11612 7.88388C5.9413 7.70907 5.82225 7.48634 5.77402 7.24386C5.72579 7.00139 5.75054 6.75005 5.84515 6.52165C5.93976 6.29324 6.09998 6.09801 6.30554 5.96066C6.5111 5.82331 6.75277 5.75 7 5.75C7.33152 5.75 7.64946 5.8817 7.88388 6.11612C8.1183 6.35054 8.25 6.66848 8.25 7Z" fill="#B5CBED"  />
                                    <path d="M16 5.75H18.25V8C18.25 8.19891 18.329 8.38968 18.4697 8.53033C18.6103 8.67098 18.8011 8.75 19 8.75C19.1989 8.75 19.3897 8.67098 19.5303 8.53033C19.671 8.38968 19.75 8.19891 19.75 8V5.75H22C22.1989 5.75 22.3897 5.67098 22.5303 5.53033C22.671 5.38968 22.75 5.19891 22.75 5C22.75 4.80109 22.671 4.61032 22.5303 4.46967C22.3897 4.32902 22.1989 4.25 22 4.25H19.75V2C19.75 1.80109 19.671 1.61032 19.5303 1.46967C19.3897 1.32902 19.1989 1.25 19 1.25C18.8011 1.25 18.6103 1.32902 18.4697 1.46967C18.329 1.61032 18.25 1.80109 18.25 2V4.25H16C15.8011 4.25 15.6103 4.32902 15.4697 4.46967C15.329 4.61032 15.25 4.80109 15.25 5C15.25 5.19891 15.329 5.38968 15.4697 5.53033C15.6103 5.67098 15.8011 5.75 16 5.75Z" fill="#B5CBED"  />
                                </svg>

                            </button>
                            <button className="actions-input-chat__item actions-input-chat__item--audio">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M12 16.5C13.1931 16.4988 14.337 16.0243 15.1806 15.1806C16.0243 14.337 16.4988 13.1931 16.5 12V6C16.5 4.80653 16.0259 3.66193 15.182 2.81802C14.3381 1.97411 13.1935 1.5 12 1.5C10.8065 1.5 9.66193 1.97411 8.81802 2.81802C7.97411 3.66193 7.5 4.80653 7.5 6V12C7.50124 13.1931 7.97575 14.337 8.81939 15.1806C9.66303 16.0243 10.8069 16.4988 12 16.5ZM9 6C9 5.20435 9.31607 4.44129 9.87868 3.87868C10.4413 3.31607 11.2044 3 12 3C12.7956 3 13.5587 3.31607 14.1213 3.87868C14.6839 4.44129 15 5.20435 15 6V12C15 12.7956 14.6839 13.5587 14.1213 14.1213C13.5587 14.6839 12.7956 15 12 15C11.2044 15 10.4413 14.6839 9.87868 14.1213C9.31607 13.5587 9 12.7956 9 12V6ZM12.75 19.4625V21.75C12.75 21.9489 12.671 22.1397 12.5303 22.2803C12.3897 22.421 12.1989 22.5 12 22.5C11.8011 22.5 11.6103 22.421 11.4697 22.2803C11.329 22.1397 11.25 21.9489 11.25 21.75V19.4625C9.40091 19.2743 7.68728 18.4072 6.44048 17.0288C5.19368 15.6504 4.50228 13.8586 4.5 12C4.5 11.8011 4.57902 11.6103 4.71967 11.4697C4.86032 11.329 5.05109 11.25 5.25 11.25C5.44891 11.25 5.63968 11.329 5.78033 11.4697C5.92098 11.6103 6 11.8011 6 12C6 13.5913 6.63214 15.1174 7.75736 16.2426C8.88258 17.3679 10.4087 18 12 18C13.5913 18 15.1174 17.3679 16.2426 16.2426C17.3679 15.1174 18 13.5913 18 12C18 11.8011 18.079 11.6103 18.2197 11.4697C18.3603 11.329 18.5511 11.25 18.75 11.25C18.9489 11.25 19.1397 11.329 19.2803 11.4697C19.421 11.6103 19.5 11.8011 19.5 12C19.4977 13.8586 18.8063 15.6504 17.5595 17.0288C16.3127 18.4072 14.5991 19.2743 12.75 19.4625Z" fill="#B5CBED"  />
                                </svg>


                            </button>

                            <button className="actions-input-chat__item actions-input-chat__item--emoji">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M19.7783 4.22187C17.7006 2.14422 14.9382 1 12 1C9.06178 1 6.29947 2.14422 4.22182 4.22187C2.14418 6.29951 1 9.06186 1 12.0001C1 14.9383 2.14418 17.7007 4.22182 19.7783C6.29947 21.856 9.06182 23.0002 12 23.0002C14.9382 23.0002 17.7006 21.856 19.7783 19.7783C21.8559 17.7007 23.0001 14.9383 23.0001 12.0001C23.0001 9.06186 21.8559 6.29951 19.7783 4.22187ZM12 21.7111C6.64537 21.7111 2.28907 17.3548 2.28907 12.0001C2.28907 6.64541 6.64537 2.28907 12 2.28907C17.3547 2.28907 21.711 6.64541 21.711 12.0001C21.711 17.3548 17.3547 21.7111 12 21.7111Z" fill="#B5CBED"  />
                                    <path d="M7.85818 7.21326C6.3608 7.21326 5.14258 8.43152 5.14258 9.92895C5.14258 10.2849 5.43116 10.5735 5.78711 10.5735C6.14307 10.5735 6.43165 10.2849 6.43165 9.92895C6.43165 9.14231 7.07159 8.50233 7.85818 8.50233C8.64477 8.50233 9.28471 9.14231 9.28471 9.92895C9.28471 10.2849 9.57329 10.5735 9.92925 10.5735C10.2852 10.5735 10.5738 10.2849 10.5738 9.92895C10.5738 8.43152 9.35557 7.21326 7.85818 7.21326Z" fill="#B5CBED"  />
                                    <path d="M16.1414 7.21326C14.644 7.21326 13.4258 8.43152 13.4258 9.92895C13.4258 10.2849 13.7144 10.5735 14.0703 10.5735C14.4263 10.5735 14.7149 10.2849 14.7149 9.92895C14.7149 9.14231 15.3548 8.50233 16.1414 8.50233C16.928 8.50233 17.5679 9.14231 17.5679 9.92895C17.5679 10.2849 17.8565 10.5735 18.2125 10.5735C18.5684 10.5735 18.857 10.2849 18.857 9.92895C18.857 8.43152 17.6388 7.21326 16.1414 7.21326Z" fill="#B5CBED"  />
                                    <path d="M18.072 13.4633C17.7365 13.3447 17.3682 13.5206 17.2496 13.8562C16.4647 16.0768 14.3543 17.5687 11.9981 17.5687C9.6418 17.5687 7.53138 16.0768 6.74655 13.8562C6.62795 13.5206 6.25962 13.3447 5.92407 13.4633C5.58844 13.5819 5.41253 13.9502 5.53116 14.2858C6.49771 17.0204 9.09657 18.8578 11.9981 18.8578C14.8995 18.8578 17.4984 17.0204 18.4649 14.2858C18.5836 13.9502 18.4077 13.5819 18.072 13.4633Z" fill="#B5CBED"  />
                                </svg>


                            </button>

                        </div>
                    </div>
                </div>

                <div className="popup-mass-message__actions">
                    <button onClick={handleSubmit} className="popup-mass-message__button button button--fw"><span>Send</span></button>
                    <button onClick={() => dispatch(removeModal('massMessage'))} className="popup-mass-message__button button button--fw button--transparent"><span>Cancel</span></button>

                </div>
            </div>
            <div className="popup-mass-message__excluding excluding">
                <button className="excluding__back">Back</button>
                <div className="excluding__search">
                    <div className="body-messages__search search">
                        <input  type="text" name="form[]" placeholder="Search by nickname" className="search__input input"
                            onChange={e => setSearchValue(e.target.value)} value={searchValue}
                        />
                    </div>
                </div>
                <div className="excluding__items">

                    {
                        mockUsers?.filter(item => item.user.username.toLowerCase().includes(searchValue.toLowerCase())).length
                            ? mockUsers
                                ?.filter(item => item.user.username.toLowerCase().includes(searchValue.toLowerCase()))
                                ?.map(item => (
                                    <div className="excluding__item item-message">
                                        <div className="item-message__user user-item user-item--stories">
                                            <div className="user-item__image user-item__image--decoration">
                                                <picture><source srcSet={item?.user?.photo} type="image/webp"/><img className="user-photo" src={item?.user?.photo} alt="User image"/></picture>
                                                <div className="user-item__image-icon">
                                                    <img src={LogoIc} alt="ph"/>
                                                </div>
                                            </div>
                                            <div className="user-item__body">
                                                <NavLink to={`/messages/${item?.user?.usertag}`} className="user-item__name">{item?.user?.username}</NavLink>
                                                <span className="user-item__status online">
                                                    <svg className="online-status" width="8" height="9" viewBox="0 0 8 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <circle cx="4" cy="4.5" r="4" fill="#3DD598" ></circle>
                                                    </svg>

                                                    {item?.isOnline}
                                                </span>
                                            </div>
                                        </div>

                                        {/* // Посмотри, что ты сюда передаешь и дальше (1). Ну и вопрос, что ты передаешь в эту функцию addExcludeUser? */}
                                        <button onClick={() => addExcludeUser(item?.user?.usertag)} className="exclude-button button"><span>Exclude</span></button>
                                    </div>
                                ))
                            : <p style={{ marginLeft: "25px" }}>Users not found</p>
                    }

                </div>
            </div>
        </div>
    )
}
