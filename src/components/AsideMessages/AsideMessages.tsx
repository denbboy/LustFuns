// import UserPhoto2 from '../../assets/img/user/02.jpg'
// import LogoWhiteIc from '../../assets/img/icons/logo-white.svg'
import { NavLink } from 'react-router-dom'
import { AsideMessagesItem } from './components/AsideMessagesItem'
import { useState } from 'react'
import { addModal } from '../../redux/toolkitSlice'
import { useDispatch } from 'react-redux'
import { useClickOutside } from '../../hooks/ClickOutside'

export const AsideMessages = () => {

    const mockUsers = [
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
        },
    ]

    const dispatch = useDispatch()

    const [searchValue, setSearchValue] = useState<string>('')
    const [isOpenPopup, setIsOpenPopup] = useState<boolean>(false)

    const {rootEl} = useClickOutside(setIsOpenPopup)

    return (
        <aside className="page-messages">
            <div className="page-messages__body body-messages">
                <div className="body-messages__top top-body-messages">
                    <div className="top-body-messages__block">

                        <h3 className="top-body-messages__title title title--small">Messages</h3>
                        <div ref={rootEl} className={`top-body-messages__actions actions field ${isOpenPopup ? 'field-active' : ''}`}>
                            <button onClick={_ => setIsOpenPopup(prev => !prev)}>
                                <svg width="21" height="6" viewBox="0 0 21 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M15.8569 3.00003C15.8569 4.1835 16.8163 5.14289 17.9997 5.14289C19.1832 5.14289 20.1426 4.1835 20.1426 3.00003C20.1426 1.81657 19.1832 0.857178 17.9997 0.857178C16.8163 0.857178 15.8569 1.81657 15.8569 3.00003Z" fill="#93989A" style={{ fill: '#93989A', fillOpacity: '1' }} />
                                    <path d="M7.99944 3.00003C7.99944 4.1835 8.95883 5.14289 10.1423 5.14289C11.3258 5.14289 12.2852 4.1835 12.2852 3.00003C12.2852 1.81657 11.3258 0.857178 10.1423 0.857178C8.95883 0.857178 7.99944 1.81657 7.99944 3.00003Z" fill="#93989A" style={{ fill: '#93989A', fillOpacity: '1' }} />
                                    <path d="M0.142997 3.00003C0.142997 4.1835 1.10239 5.14289 2.28585 5.14289C3.46932 5.14289 4.42871 4.1835 4.42871 3.00003C4.42871 1.81657 3.46932 0.857178 2.28585 0.857178C1.10239 0.857178 0.142997 1.81657 0.142997 3.00003Z" fill="#93989A" style={{ fill: '#93989A', fillOpacity: '1' }} />
                                </svg>
                            </button>
                            <div className="actions__popup popup-actions">
                                <div className="popup-actions__wrapper">
                                    <div className="popup-actions__content">
                                        <div className="popup-actions__body body-popup-actions">
                                            <button onClick={() => dispatch(addModal('massMessage'))} className="body-popup-actions__item mass">Mass message</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="body-messages__search search">
                        <input onChange={e => setSearchValue(e.target.value)} value={searchValue} type="text" name="form[]" placeholder="Search by nickname or hashtags " className="search__input input" />
                    </div>
                </div>
                <div className="body-messages__content content-body-messages">
                    
                    <div className="body-messages__items">

                        {
                            mockUsers
                                ?.filter(item => item.user.username.toLowerCase().includes(searchValue.toLowerCase()))
                                ?.map(item => (
                                    <AsideMessagesItem
                                        user={item.user}
                                        isOnline={item.isOnline}
                                    />
                                ))
                        }

                        {
                            !mockUsers?.filter(item => item.user.username.toLowerCase().includes(searchValue.toLowerCase())).length
                            && "Users not found"
                        }

                    </div>

                </div>
                <div className="body-messages__footer">

                    <NavLink to={"/messages"} className="body-messages__button button button--transparent button--fw"><span>Read all messages</span></NavLink>
                </div>
            </div>
        </aside>
    )
}
