import UserPh from '../../assets/img/user/01.png'
import UserBgPh from '../../assets/img/user/bg.jpg'
import ImageIc from '../../assets/img/icons/image.svg'
import ProfileIc from '../../assets/img/icons/user.svg'
import StatsIc from '../../assets/img/icons/stats.svg'
import RenameIc from '../../assets/img/icons/user-menu/edit.svg'
import AudioMuteIc from '../../assets/img/icons/audio-mute.svg'
import PinIc from '../../assets/img/icons/pin-green.svg'
import BlockedUserIc from '../../assets/img/icons/blocked-user.svg'
import { useState } from 'react'
import { Chat } from './components/Chat/Chat'
import { toast } from 'react-toastify'
import { AsideMessagesItem } from '../../components/AsideMessages/components/AsideMessagesItem'
import { IUser } from '../../models'
import { useDispatch, useSelector } from 'react-redux'
import { addModal } from '../../redux/toolkitSlice'
import { NavLink } from 'react-router-dom'
import { MediaFiles } from './components/MediaFiles/MediaFiles'

export const Messages = () => {
    const groupStore = useSelector((state: any) => state.toolkit.newGroup)
    const [activeChat, setActiveChat] = useState<string>('allUser');
    const [chatTheme, setChatTheme] = useState<string>('green');
    const dispatch = useDispatch();
    const [openMass, setOpenMass] = useState<boolean>(false);
    const [searchValue, setSearchValue] = useState<string>("");
    const [showMediaFiles, setShowMediaFiles] = useState<boolean>(false);

    const handleModalOpen = (modalName: string) => {
        dispatch(addModal(`${modalName}`))
    }

    const user: IUser = useSelector((state: any) => state.toolkit.user)

    const handleChooseTheme = (theme: string) => {
        if (!theme) toast.error('Unfortunately, we do not have this color')

        setChatTheme(theme)
    }

    const handleGroupClick = (chatId: string) => {
        setActiveChat(chatId);
    };

    const handleOpenMass = () => {
        setOpenMass(!openMass)
    }

    const handleMediaFilesClick = () => {
        setShowMediaFiles(!showMediaFiles);
    };

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

    return (
        <div className="main-block">
            <div className="main-messages">
                <div className="main-messages__body">
                    <div className="main-messages__wrapper">
                        <div className="main-messages__top top-body-messages">
                            <h3 className="top-body-messages__title title title--small">Messages</h3>
                            <div onClick={handleOpenMass} className={`top-body-messages__actions actions field ${openMass ? 'field-active' : ''}`}>
                                <svg width="21" height="6" viewBox="0 0 21 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M15.8569 3.00003C15.8569 4.1835 16.8163 5.14289 17.9997 5.14289C19.1832 5.14289 20.1426 4.1835 20.1426 3.00003C20.1426 1.81657 19.1832 0.857178 17.9997 0.857178C16.8163 0.857178 15.8569 1.81657 15.8569 3.00003Z" fill="#93989A" />
                                    <path d="M7.99944 3.00003C7.99944 4.1835 8.95883 5.14289 10.1423 5.14289C11.3258 5.14289 12.2852 4.1835 12.2852 3.00003C12.2852 1.81657 11.3258 0.857178 10.1423 0.857178C8.95883 0.857178 7.99944 1.81657 7.99944 3.00003Z" fill="#93989A" />
                                    <path d="M0.142997 3.00003C0.142997 4.1835 1.10239 5.14289 2.28585 5.14289C3.46932 5.14289 4.42871 4.1835 4.42871 3.00003C4.42871 1.81657 3.46932 0.857178 2.28585 0.857178C1.10239 0.857178 0.142997 1.81657 0.142997 3.00003Z" fill="#93989A" />
                                </svg>
                                <div className="actions__popup popup-actions">
                                    <div className="popup-actions__wrapper">
                                        <div className="popup-actions__content">
                                            <div className="popup-actions__body body-popup-actions">
                                                <button onClick={() => handleModalOpen('massMessage')} data-popup="#popup-mass-message" className="body-popup-actions__item mass">Mass message</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="body-messages__search search">
                            <input type="text" onChange={e => setSearchValue(e.target.value)} value={searchValue} name="form[]" placeholder="Search by nickname" className="search__input input" />
                        </div>

                        {user.sex === "woman" && <>
                            <div className="groups__slider ">
                                <div onClick={() => handleGroupClick('allUser')} className={`groups__item item-groups groups__slide ${activeChat === 'allUser' ? 'active' : ''}`}>
                                    <div className="item-groups__body">
                                        <p className="item-groups__name">Все</p>
                                        <div className="item-groups__people">
                                            <div className="item-groups__people-icon">
                                                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <g clip-path="url(#clip0_239_14180)">
                                                        <path d="M10.6943 0.974121C9.71709 0.974121 8.88427 1.60179 8.57726 2.47463C8.11463 2.20178 7.57569 2.04494 7.00067 2.04494C6.42216 2.04494 5.88013 2.2037 5.41565 2.47963C5.10173 1.61968 4.27504 1.00401 3.30707 1.00401C2.06995 1.00401 1.06348 2.00955 1.06348 3.2455C1.06348 4.48145 2.06995 5.487 3.30707 5.487C3.5101 5.487 3.70891 5.45995 3.90009 5.40784C4.01805 6.85388 5.13096 8.02291 6.55199 8.22893V10.5752H7.44942V8.22893C8.88002 8.02154 9.99838 6.83809 10.1036 5.37856C10.294 5.43028 10.492 5.45714 10.6943 5.45714C11.9315 5.45714 12.9379 4.4516 12.9379 3.21565C12.9379 1.9797 11.9314 0.974121 10.6943 0.974121ZM1.96088 3.2455C1.96088 2.50392 2.56477 1.9006 3.30704 1.9006C4.00772 1.9006 4.58481 2.43829 4.6473 3.12234C4.33098 3.48772 4.09848 3.92728 3.97943 4.41094C3.77592 4.52872 3.54632 4.59043 3.30704 4.59043C2.56477 4.5904 1.96088 3.98708 1.96088 3.2455ZM7.00067 7.36479C5.78004 7.36479 4.787 6.37268 4.787 5.15318C4.787 3.93369 5.78004 2.94157 7.00067 2.94157C8.22131 2.94157 9.21435 3.93369 9.21435 5.15318C9.21435 6.37268 8.22131 7.36479 7.00067 7.36479ZM10.6943 4.56054C10.4516 4.56054 10.2189 4.49701 10.0133 4.37585C9.89146 3.90491 9.66166 3.47692 9.35192 3.11989C9.40128 2.42288 9.98429 1.87075 10.6943 1.87075C11.4365 1.87075 12.0404 2.47407 12.0404 3.21565C12.0404 3.95723 11.4366 4.56054 10.6943 4.56054Z" fill="#3F79CF" />
                                                        <path d="M10.1393 9.13323C9.97957 8.88964 9.79111 8.66432 9.5791 8.46354L10.1965 7.81287C10.4589 8.0614 10.6923 8.34035 10.89 8.64195L10.1393 9.13323Z" fill="#3F79CF" />
                                                        <path d="M11.1996 13.026H2.80051C2.5527 13.026 2.36328 12.814 2.36328 12.5665V11.1832C2.36328 9.89591 2.87273 8.699 3.80815 7.81299L4.42846 8.46366C3.6736 9.17862 3.26072 10.1445 3.26072 11.1832V12.1294H10.7394V11.1832C10.7394 10.778 10.6808 10.3796 10.5541 9.9992L11.4028 9.71609C11.56 10.188 11.6368 10.6816 11.6368 11.1832V12.5664C11.6368 12.814 11.4474 13.026 11.1996 13.026Z" fill="#3F79CF" />
                                                        <path d="M2.45299 8.72225H0.448718C0.200906 8.72225 0 8.53402 0 8.28645V7.34519C0 6.58835 0.262769 5.84869 0.739906 5.26245L1.4362 5.8281C1.08374 6.26115 0.897436 6.78573 0.897436 7.34516V7.82565H2.45299V8.72225Z" fill="#3F79CF" />
                                                        <path d="M13.5518 8.69239H11.5176V7.79576H13.103V7.31534C13.103 6.76766 12.9237 6.25179 12.5845 5.82344L13.2883 5.26709C13.7542 5.85542 14.0005 6.56367 14.0005 7.31534V8.2566C14.0005 8.5042 13.7996 8.69239 13.5518 8.69239Z" fill="#3F79CF" />
                                                    </g>
                                                    <defs>
                                                        <clipPath id="clip0_239_14180">
                                                            <rect width="14" height="14" fill="white" />
                                                        </clipPath>
                                                    </defs>
                                                </svg>
                                            </div>

                                            <span>16</span>
                                        </div>
                                    </div>
                                </div>
                                {groupStore?.map((group: any) => (
                                    <div  
                                        onClick={() => handleGroupClick(group.id)}
                                        className={`groups__item item-groups groups__slide ${activeChat === group.id ? 'active' : ''}`}
                                        key={group.id}
                                    >
                                        <div className="item-groups__body">
                                            <p className="item-groups__name">{group}</p>
                                            <div className="item-groups__people">
                                                <div className="item-groups__people-icon">
                                                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <g clip-path="url(#clip0_239_14180)">
                                                            <path d="M10.6943 0.974121C9.71709 0.974121 8.88427 1.60179 8.57726 2.47463C8.11463 2.20178 7.57569 2.04494 7.00067 2.04494C6.42216 2.04494 5.88013 2.2037 5.41565 2.47963C5.10173 1.61968 4.27504 1.00401 3.30707 1.00401C2.06995 1.00401 1.06348 2.00955 1.06348 3.2455C1.06348 4.48145 2.06995 5.487 3.30707 5.487C3.5101 5.487 3.70891 5.45995 3.90009 5.40784C4.01805 6.85388 5.13096 8.02291 6.55199 8.22893V10.5752H7.44942V8.22893C8.88002 8.02154 9.99838 6.83809 10.1036 5.37856C10.294 5.43028 10.492 5.45714 10.6943 5.45714C11.9315 5.45714 12.9379 4.4516 12.9379 3.21565C12.9379 1.9797 11.9314 0.974121 10.6943 0.974121ZM1.96088 3.2455C1.96088 2.50392 2.56477 1.9006 3.30704 1.9006C4.00772 1.9006 4.58481 2.43829 4.6473 3.12234C4.33098 3.48772 4.09848 3.92728 3.97943 4.41094C3.77592 4.52872 3.54632 4.59043 3.30704 4.59043C2.56477 4.5904 1.96088 3.98708 1.96088 3.2455ZM7.00067 7.36479C5.78004 7.36479 4.787 6.37268 4.787 5.15318C4.787 3.93369 5.78004 2.94157 7.00067 2.94157C8.22131 2.94157 9.21435 3.93369 9.21435 5.15318C9.21435 6.37268 8.22131 7.36479 7.00067 7.36479ZM10.6943 4.56054C10.4516 4.56054 10.2189 4.49701 10.0133 4.37585C9.89146 3.90491 9.66166 3.47692 9.35192 3.11989C9.40128 2.42288 9.98429 1.87075 10.6943 1.87075C11.4365 1.87075 12.0404 2.47407 12.0404 3.21565C12.0404 3.95723 11.4366 4.56054 10.6943 4.56054Z" fill="#3F79CF" />
                                                            <path d="M10.1393 9.13323C9.97957 8.88964 9.79111 8.66432 9.5791 8.46354L10.1965 7.81287C10.4589 8.0614 10.6923 8.34035 10.89 8.64195L10.1393 9.13323Z" fill="#3F79CF" />
                                                            <path d="M11.1996 13.026H2.80051C2.5527 13.026 2.36328 12.814 2.36328 12.5665V11.1832C2.36328 9.89591 2.87273 8.699 3.80815 7.81299L4.42846 8.46366C3.6736 9.17862 3.26072 10.1445 3.26072 11.1832V12.1294H10.7394V11.1832C10.7394 10.778 10.6808 10.3796 10.5541 9.9992L11.4028 9.71609C11.56 10.188 11.6368 10.6816 11.6368 11.1832V12.5664C11.6368 12.814 11.4474 13.026 11.1996 13.026Z" fill="#3F79CF" />
                                                            <path d="M2.45299 8.72225H0.448718C0.200906 8.72225 0 8.53402 0 8.28645V7.34519C0 6.58835 0.262769 5.84869 0.739906 5.26245L1.4362 5.8281C1.08374 6.26115 0.897436 6.78573 0.897436 7.34516V7.82565H2.45299V8.72225Z" fill="#3F79CF" />
                                                            <path d="M13.5518 8.69239H11.5176V7.79576H13.103V7.31534C13.103 6.76766 12.9237 6.25179 12.5845 5.82344L13.2883 5.26709C13.7542 5.85542 14.0005 6.56367 14.0005 7.31534V8.2566C14.0005 8.5042 13.7996 8.69239 13.5518 8.69239Z" fill="#3F79CF" />
                                                        </g>
                                                        <defs>
                                                            <clipPath id="clip0_239_14180">
                                                                <rect width="14" height="14" fill="white" />
                                                            </clipPath>
                                                        </defs>
                                                    </svg>
                                                </div>

                                                <span>16</span>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            <button onClick={() => handleModalOpen('createGroup')} data-popup="#popup-add-group" className="groups__add button button--fw button--transparent"><span>Add new group</span></button>
                        </>}
                    </div>

                    <div className="content-body-messages">

                        <div className="body-messages__items">

                            {
                                mockUsers?.filter(item => item.user.username.toLowerCase().includes(searchValue.toLowerCase())).length
                                    ? mockUsers
                                        ?.filter(item => item.user.username.toLowerCase().includes(searchValue.toLowerCase()))
                                        ?.map(item => (
                                            <AsideMessagesItem
                                                user={item.user}
                                                isOnline={item.isOnline}
                                            />
                                        ))
                                    : <p style={{ marginLeft: "25px" }}>Users not found</p>
                            }

                        </div>

                    </div>

                    {user.sex === "man" && <div className="body-messages__button-wrapper">
                        <button onClick={_ => toast.error('This function is developing')} className="body-messages__button button button--transparent button--fw"><span>Read all messages</span></button>
                    </div>}

                </div>
            </div>

            <Chat
                chatTheme={chatTheme}
            />

            <div className="messages-user">
                <div className="messages-user__body">
                    <div className="messages-user__body-wrapper">

                        <div className="messages-user__top top-messages-user">
                            <div className="user-item">
                                <div className="user-item__image">
                                    <img className="user-photo" src={UserPh} alt="User ph" />
                                </div>
                                <NavLink to={`/profile/${'123'}`} className="user-item__body">
                                    <button className="user-item__name">Boob007</button>
                                    <button className="user-item__username">@Boob007</button>

                                </NavLink>
                            </div>
                        </div>

                        <div className="messages-user__block">
                            {!showMediaFiles &&
                                <>
                                    <div className="messages-user__actions actions-messages-user">
                                        {user.sex === "man" && <button onClick={() => toast.error('This function is developing')} className="actions-messages-user__item item-actions-messages-user">
                                            <div className="item-actions-messages-user__icon">
                                                <img src={ProfileIc} alt="Icon" />
                                            </div>
                                            <p className="item-actions-messages-user__text">Timeline</p>
                                        </button>}
                                        {user.sex === "woman" && <NavLink to={`/profile/${'123'}`} className="actions-messages-user__item item-actions-messages-user">
                                            <div className="item-actions-messages-user__icon">
                                                <img src={ProfileIc} alt="Icon" />
                                            </div>
                                            <p className="item-actions-messages-user__text">Profile</p>
                                        </NavLink>}
                                        {user.sex === "woman" && <NavLink to={`/statistic`} className="actions-messages-user__item item-actions-messages-user">
                                            <div className="item-actions-messages-user__icon">
                                                <img src={StatsIc} alt="Icon" />
                                            </div>
                                            <p className="item-actions-messages-user__text">Stats</p>
                                        </NavLink>}
                                        {user.sex === "woman" && <button onClick={() => toast.error('This function is developing')} className="actions-messages-user__item item-actions-messages-user">
                                            <div className="item-actions-messages-user__icon">
                                                <img src={RenameIc} alt="Icon" />
                                            </div>
                                            <p className="item-actions-messages-user__text">Rename</p>
                                        </button>}
                                        <button onClick={() => toast.error('This function is developing')} className="actions-messages-user__item item-actions-messages-user">
                                            <div className="item-actions-messages-user__icon">
                                                <img src={AudioMuteIc} alt="Icon" />
                                            </div>
                                            <p className="item-actions-messages-user__text">Mute</p>
                                        </button>
                                        {user.sex === "woman" && <button onClick={() => toast.error('This function is developing')} className="actions-messages-user__item item-actions-messages-user">
                                            <div className="item-actions-messages-user__icon">
                                                <img src={PinIc} alt="Icon" />
                                            </div>
                                            <p className="item-actions-messages-user__text">Pin</p>
                                        </button>}
                                        <button onClick={() => handleModalOpen('blockUser')} data-popup="#popup-block-user" className="actions-messages-user__item item-actions-messages-user block">
                                            <div className="item-actions-messages-user__icon">
                                                <img src={BlockedUserIc} alt="Icon" />
                                            </div>
                                            <p className="item-actions-messages-user__text">Block</p>
                                        </button>
                                    </div>
                                    {user.sex === "woman" && <button onClick={() => handleModalOpen('addUserGroup')} data-popup="#popup-user-group" className="messages-user__add button button--fw"><span>Add to group</span></button>}
                                    <div className="messages-user__themes themes-messages-user">
                                        <div className="themes-messages-user__title">Themes</div>
                                        <div className="themes-messages-user__items">
                                            <div onClick={_ => handleChooseTheme('')} style={{ background: 'linear-gradient(90deg, #ff9a9e 0%, #fad0c4 99%, #fad0c4 100%)' }} className={`themes-messages-user__item ${chatTheme === "none" ? "active" : ""}`}></div>
                                            <div onClick={_ => handleChooseTheme('purple')} style={{ background: 'linear-gradient(90deg, #a18cd1 0%, #fbc2eb 100%)' }} className={`themes-messages-user__item ${chatTheme === "purple" ? "active" : ""}`}></div>
                                            <div onClick={_ => handleChooseTheme('')} style={{ background: 'linear-gradient(90deg, #fad0c4 0%, #fad0c4 1%, #ffd1ff 100%)' }} className={`themes-messages-user__item ${chatTheme === "none" ? "active" : ""}`}></div>
                                            <div onClick={_ => handleChooseTheme('')} style={{ background: 'linear-gradient(90deg, #ffecd2 0%, #fcb69f 100%)' }} className={`themes-messages-user__item ${chatTheme === "none" ? "active" : ""}`}></div>
                                            <div onClick={_ => handleChooseTheme('')} style={{ background: 'linear-gradient(90deg, #ffecd2 0%, #fcb69f 100%)' }} className={`themes-messages-user__item ${chatTheme === "none" ? "active" : ""}`}></div>
                                            <div onClick={_ => handleChooseTheme('red')} style={{ background: 'linear-gradient(90deg, #ff8177 0%, #ff867a 0%, #ff8c7f 21%, #f99185 52%, #cf556c 78%, #b12a5b 100%)' }} className={`themes-messages-user__item ${chatTheme === "red" ? "active" : ""}`}></div>
                                            <div onClick={_ => handleChooseTheme('')} style={{ background: 'linear-gradient(90deg, #ff9a9e 0%, #fecfef 99%, #fecfef 100%)' }} className={`themes-messages-user__item ${chatTheme === "none" ? "active" : ""}`}></div>
                                            <div onClick={_ => handleChooseTheme('')} style={{ background: 'linear-gradient(90deg, #fbc2eb 0%, #a6c1ee 100%)' }} className={`themes-messages-user__item ${chatTheme === "none" ? "active" : ""}`}></div>
                                            <div onClick={_ => handleChooseTheme('blue')} style={{ background: 'linear-gradient(90deg, #a1c4fd 0%, #c2e9fb 100%)' }} className={`themes-messages-user__item ${chatTheme === "blue" ? "active" : ""}`}></div>
                                            <div onClick={_ => handleChooseTheme('green')} style={{ background: 'linear-gradient(90deg, #d4fc79 0%, #96e6a1 100%)' }} className={`themes-messages-user__item ${chatTheme === "green" ? "active" : ""}`}></div>

                                        </div>

                                    </div>
                                    {user.sex === "woman" && <div className="messages-user__notes notes-messages-user">
                                        <div className="notes-messages-user__title">Private notes</div>
                                        <p className="notes-messages-user__text">
                                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
                                        </p>
                                        <p className="notes-messages-user__text">
                                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
                                        </p>
                                    </div>}
                                </>
                            }

                            {user.sex === "woman" && 
                                <>
                                    {!showMediaFiles && 
                                        <button onClick={handleMediaFilesClick} className="messages-user__media button button--fw button--transparent">
                                            <img src={ImageIc} alt="Icon" />
                                            <span>Media files</span>
                                        </button>
                                    }

                                    {showMediaFiles && <MediaFiles handleClose={handleMediaFilesClick}/>}
                                </>
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
