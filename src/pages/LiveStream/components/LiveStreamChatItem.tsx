import React, { useState } from 'react'
// import UserPhoto from './../../../assets/img/user/01.png'

interface ILiveStreamChatItemProps {
    user: { username: string; photo: string }
    message: string
    isSend: boolean
    isRead: boolean
    date: string
    isInterlocutor: boolean
}

export const LiveStreamChatItem: React.FC<ILiveStreamChatItemProps> = ({ user, message, isSend, isRead, date, isInterlocutor }) => {

    const [isFavorite, setIsFavorite] = useState(false)

    return (
        <div className={`content-chat__message chat-message ${isInterlocutor ? '' : 'chat-message--main'}`}>
            <div className="chat-message__block">
                <div className="chat-message__user user-item">
                    <div className="user-item__image">
                        <img className="user-photo" src={user.photo} alt="User ph" />
                    </div>
                </div>
                <div className="chat-message__content">
                    <div className="chat-message__body">
                        <div className="chat-message__text">
                            <p>
                                {message}
                            </p>
                        </div>
                        <div className="chat-message__actions actions-chat-message">

                            <button className="actions-chat-message__button like" onClick={_ => setIsFavorite(prev => !prev)}>
                                <svg width="22" height="20" viewBox="0 0 22 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M9.83191 18.0065L9.83083 18.0055C7.00698 15.4472 4.72355 13.3741 3.13731 11.4352C1.55929 9.50633 0.75 7.80226 0.75 5.99455C0.75 3.04245 3.05268 0.75 6 0.75C7.67171 0.75 9.2884 1.53139 10.3402 2.75575L10.9091 3.418L11.478 2.75575C12.5298 1.53139 14.1465 0.75 15.8182 0.75C18.7655 0.75 21.0682 3.04245 21.0682 5.99455C21.0682 7.80226 20.2589 9.50633 18.6809 11.4352C17.0946 13.3741 14.8112 15.4472 11.9874 18.0055L11.9863 18.0065L10.9091 18.9862L9.83191 18.0065Z" fill={isFavorite ? "#FF0000" : "transparent"} stroke={isFavorite ? "#FF0000" : "#838383"} stroke-width="1.5"/>
                                </svg>

                            </button>

                        </div>
                    </div>
                    <div className="chat-message__bottom">
                        {/* <p className="chat-message__edited">Edited</p> */}
                        <div className={`chat-message__status status-message ${isRead ? 'read' : ''} ${isSend && !isRead ? 'done' : ''} `}>
                            <div className="status-message__icon status-message__icon--done">
                                <svg width="12" height="9" viewBox="0 0 12 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M11.6884 1.19592L4.68837 8.07092C4.57147 8.1859 4.41407 8.25034 4.25009 8.25034C4.08612 8.25034 3.92871 8.1859 3.81181 8.07092L0.811812 5.12482C0.753282 5.06727 0.706661 4.99875 0.674611 4.92317C0.642562 4.8476 0.625711 4.76645 0.625022 4.68437C0.624333 4.60228 0.639818 4.52086 0.670594 4.44476C0.70137 4.36866 0.746834 4.29937 0.80439 4.24084C0.861946 4.18231 0.930467 4.13569 1.00604 4.10364C1.08161 4.07159 1.16276 4.05474 1.24485 4.05405C1.32693 4.05336 1.40835 4.06884 1.48445 4.09962C1.56055 4.1304 1.62984 4.17586 1.68837 4.23342L4.25009 6.74904L10.8126 0.303729C10.9309 0.18749 11.0905 0.12301 11.2564 0.124475C11.3385 0.125201 11.4197 0.142094 11.4953 0.174191C11.5709 0.206288 11.6394 0.252959 11.697 0.311541C11.7545 0.370123 11.8 0.439468 11.8307 0.515616C11.8615 0.591765 11.8769 0.673225 11.8762 0.755347C11.8755 0.837469 11.8586 0.918643 11.8265 0.994236C11.7944 1.06983 11.747 1.13836 11.6884 1.19592Z" fill="#6F767E" />
                                </svg>
                            </div>
                            <div className="status-message__icon status-message__icon--read" style={{width: '25px', height: '15px', flex: '0 0 15px'}}>
                                <svg viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M11.6884 6.69613L4.68837 13.5711C4.57147 13.6861 4.41407 13.7506 4.25009 13.7506C4.08612 13.7506 3.92871 13.6861 3.81181 13.5711L0.811812 10.625C0.753282 10.5675 0.706661 10.499 0.674611 10.4234C0.642562 10.3478 0.625711 10.2667 0.625022 10.1846C0.624333 10.1025 0.639818 10.0211 0.670594 9.94498C0.70137 9.86888 0.746834 9.79958 0.80439 9.74105C0.861946 9.68252 0.930467 9.6359 1.00604 9.60385C1.08161 9.5718 1.16276 9.55495 1.24485 9.55426C1.32693 9.55357 1.40835 9.56906 1.48445 9.59984C1.56055 9.63061 1.62984 9.67608 1.68837 9.73363L4.25009 12.2493L10.8126 5.80394C10.9309 5.6877 11.0905 5.62323 11.2564 5.62469C11.3385 5.62542 11.4197 5.64231 11.4953 5.67441C11.5709 5.7065 11.6394 5.75317 11.697 5.81176C11.7545 5.87034 11.8 5.93968 11.8307 6.01583C11.8615 6.09198 11.8769 6.17344 11.8762 6.25556C11.8755 6.33768 11.8586 6.41886 11.8265 6.49445C11.7944 6.57004 11.7477 6.63858 11.6892 6.69613H11.6884ZM19.1962 5.81176C19.1387 5.75313 19.0701 5.70642 18.9945 5.6743C18.9189 5.64217 18.8378 5.62526 18.7556 5.62454C18.6735 5.62381 18.592 5.63928 18.5159 5.67007C18.4397 5.70085 18.3704 5.74634 18.3118 5.80394L11.7493 12.2493L10.2782 10.8039C10.1599 10.6878 10.0003 10.6234 9.83453 10.625C9.66875 10.6265 9.51037 10.6938 9.39423 10.8121C9.2781 10.9305 9.21372 11.0901 9.21526 11.2558C9.21679 11.4216 9.28413 11.58 9.40244 11.6961L11.311 13.5711C11.4279 13.6861 11.5853 13.7506 11.7493 13.7506C11.9133 13.7506 12.0707 13.6861 12.1876 13.5711L19.1876 6.69613C19.2463 6.63865 19.293 6.57017 19.3252 6.4946C19.3574 6.41903 19.3744 6.33786 19.3752 6.25573C19.376 6.17359 19.3606 6.0921 19.3299 6.01592C19.2992 5.93974 19.2537 5.87037 19.1962 5.81176Z" fill="#329993" />
                                </svg>
                            </div>
                        </div>
                        <p className="chat-message__time">
                            {date}
                        </p>
                    </div>
                </div>

            </div>
        </div>
    )
}
