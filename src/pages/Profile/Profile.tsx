import UserPh from '../../assets/img/user/01.png'
import ProfilePh from '../../assets/img/user/profile-top.jpg'
import StoryPh from '../../assets/img/story/story.jpg'
import PinIc from '../../assets/img/icons/pin.svg'
import MessageIc from '../../assets/img/icons/user-menu/message.svg'
import VideoIc from '../../assets/img/icons/video.svg'
import FolderIc from '../../assets/img/icons/folder.svg'
import { NavLink } from 'react-router-dom'
// import { IUser } from '../../models'
// import { useSelector } from 'react-redux'
import { Highlights } from '../../components/Highlights/Highlights'
import { PostItem } from '../Main/components/PostItem'
import { useState } from 'react'


export const Profile = () => {

    const [isSubscibed, setIsSubscibed] = useState(false)
    const [isActiveFolder, setIsActiveFolder] = useState('body1')
    const [selectedTab, setSelectedTab] = useState('timeline')
    const [selectedTabPosts, setSelectedTabPosts] = useState('POSTS')

    return (
        <div className="profile">
            <div className="profile__container">
                <div className="profile__body body-profile">
                    <div className="body-profile__block">
                        <div className="body-profile__top-image">
                            <img className="ibg" src={ProfilePh} alt="ph" />
                        </div>
                        <div className="body-profile__wrapper">
                            <div className="body-profile__top top-body-profile">
                                <div className="top-body-profile__user">
                                    <div className="top-body-profile__image">
                                        <img className="ibg" src={UserPh} alt="ph" />
                                    </div>
                                    <div className="top-body-profile__user-info">
                                        <p className="top-body-profile__name">darkangeel</p>
                                        <p className="top-body-profile__username">@darkangeel</p>
                                    </div>
                                </div>
                                <div className="top-body-profile__actions">
                                    <NavLink to={"/messages"} className="top-body-profile__button top-body-profile__button--message button">
                                        <svg width="18" height="14" viewBox="0 0 18 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M17.25 0.296875H0.75C0.613248 0.296875 0.482096 0.3512 0.385398 0.447898C0.2887 0.544596 0.234375 0.675748 0.234375 0.8125V12.5C0.234375 12.8191 0.361133 13.1251 0.586762 13.3507C0.812392 13.5764 1.11841 13.7031 1.4375 13.7031H16.5625C16.8816 13.7031 17.1876 13.5764 17.4132 13.3507C17.6389 13.1251 17.7656 12.8191 17.7656 12.5V0.8125C17.7656 0.675748 17.7113 0.544596 17.6146 0.447898C17.5179 0.3512 17.3868 0.296875 17.25 0.296875ZM15.9248 1.32812L9 7.67547L2.07516 1.32812H15.9248ZM16.5625 12.6719H1.4375C1.39192 12.6719 1.3482 12.6538 1.31597 12.6215C1.28373 12.5893 1.26562 12.5456 1.26562 12.5V1.98469L8.65625 8.75484C8.7513 8.8418 8.87547 8.89003 9.0043 8.89003C9.13313 8.89003 9.25729 8.8418 9.35234 8.75484L16.7344 1.98469V12.5C16.7344 12.5456 16.7163 12.5893 16.684 12.6215C16.6518 12.6538 16.6081 12.6719 16.5625 12.6719Z" fill="white" />
                                        </svg>

                                        <span>Message</span>
                                    </NavLink>
                                    <NavLink to={"/messages"} className="top-body-profile__button top-body-profile__button--gift button button--transparent">
                                        <svg width="18" height="20" viewBox="0 0 18 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M0.875009 7.63114V17.1624C0.875008 17.4395 0.929694 17.7139 1.03593 17.9699C1.14217 18.2258 1.29788 18.4583 1.49412 18.6539C1.69037 18.8496 1.9233 19.0046 2.17956 19.1101C2.43583 19.2156 2.71039 19.2695 2.98751 19.2686H15.0188C15.5774 19.2686 16.1131 19.0467 16.5081 18.6517C16.9031 18.2567 17.125 17.721 17.125 17.1624V7.63114C17.125 7.07195 16.9033 6.53557 16.5085 6.13958C16.1137 5.74359 15.5779 5.52029 15.0188 5.51864H13.6813C13.8657 5.32839 14.0291 5.11885 14.1688 4.89364C14.436 4.44606 14.5833 3.93711 14.5965 3.41598C14.6096 2.89484 14.4881 2.37912 14.2438 1.91864C14.0312 1.54743 13.7218 1.2409 13.3487 1.03176C12.9755 0.822622 12.5526 0.718718 12.125 0.731139C11.6567 0.716213 11.1908 0.8029 10.7592 0.985237C10.3277 1.16757 9.94072 1.44123 9.62501 1.78739C9.37528 2.05179 9.1648 2.35067 9.00001 2.67489C8.84485 2.35258 8.64496 2.0538 8.40626 1.78739C8.09055 1.44123 7.7036 1.16757 7.27204 0.985237C6.84047 0.8029 6.37453 0.716213 5.90626 0.731139C5.47849 0.718311 5.0552 0.821306 4.68115 1.02924C4.30709 1.23717 3.99617 1.5423 3.78126 1.91239C3.53689 2.37287 3.41541 2.88859 3.42854 3.40973C3.44168 3.93086 3.589 4.43981 3.85626 4.88739C3.99587 5.11261 4.15931 5.32214 4.34376 5.51239H2.98751C2.70957 5.51239 2.43435 5.56724 2.17764 5.67379C1.92094 5.78034 1.68778 5.93651 1.49153 6.13333C1.29529 6.33016 1.13981 6.56378 1.03402 6.8208C0.928222 7.07782 0.874187 7.3532 0.875009 7.63114ZM15.875 7.63114V17.1624C15.875 17.2748 15.8529 17.3862 15.8098 17.4901C15.7668 17.5939 15.7037 17.6883 15.6242 17.7678C15.5447 17.8474 15.4503 17.9104 15.3464 17.9535C15.2425 17.9965 15.1312 18.0186 15.0188 18.0186H9.62501L9.66876 6.76864H15.0375C15.2619 6.77515 15.4749 6.86888 15.6313 7.02993C15.7877 7.19098 15.8751 7.40666 15.875 7.63114ZM12.125 2.00614C12.3336 1.99208 12.5419 2.03674 12.7264 2.13506C12.9109 2.23338 13.0641 2.38142 13.1688 2.56239C13.3062 2.83222 13.3709 3.13319 13.3567 3.43565C13.3424 3.73812 13.2497 4.03166 13.0875 4.28739C12.8188 4.75614 12.1125 5.53739 10.4125 5.53739H9.62501C9.62501 4.78114 9.76876 3.43739 10.4938 2.64364C10.6991 2.41862 10.9521 2.24235 11.2344 2.12772C11.5166 2.0131 11.8209 1.96301 12.125 1.98114V2.00614ZM4.91876 4.26239C4.75661 4.00666 4.66385 3.71312 4.6496 3.41065C4.63535 3.10819 4.70011 2.80722 4.83751 2.53739C4.94166 2.35741 5.09392 2.21002 5.27718 2.11177C5.46044 2.01351 5.66747 1.96828 5.87501 1.98114C6.17108 1.96296 6.46756 2.00945 6.74386 2.11738C7.02016 2.22531 7.26965 2.39209 7.47501 2.60614C8.20626 3.41864 8.33751 4.76239 8.37501 5.51864H7.59376C5.87501 5.51864 5.18751 4.73114 4.91876 4.26239ZM2.12501 7.63114C2.12501 7.40239 2.21588 7.18301 2.37763 7.02126C2.53938 6.85951 2.75876 6.76864 2.98751 6.76864H8.37501L8.33126 18.0186H2.98751C2.87454 18.0195 2.76252 17.9979 2.65792 17.9553C2.55331 17.9126 2.45818 17.8497 2.378 17.7701C2.29783 17.6905 2.2342 17.5958 2.19078 17.4915C2.14736 17.3872 2.12501 17.2754 2.12501 17.1624V7.63114Z" fill="#3F79CF" />
                                        </svg>

                                        <span>Send a gift</span>
                                    </NavLink>
                                    {/* <a href="" className="top-body-profile__button top-body-profile__button--vid button button--transparent">
                                        <svg width="20" height="14" viewBox="0 0 20 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <g clip-path="url(#clip0_380_6883)">
                                            <path d="M19.7718 2.7392C19.7726 2.48234 19.7104 2.22946 19.5912 2.00487C19.4719 1.78026 19.2994 1.59137 19.0901 1.45657L19.09 1.45649L19.7218 2.73904M19.7718 2.7392L19.7218 2.73904M19.7718 2.7392V2.73904H19.7218M19.7718 2.7392V11.2598C19.7717 11.5164 19.7092 11.7688 19.5901 11.9932C19.4709 12.2175 19.299 12.4065 19.0904 12.5419C18.8817 12.6773 18.6434 12.7547 18.398 12.7663C18.1526 12.778 17.9085 12.7237 17.6889 12.6086L17.6817 12.6047L17.6821 12.6042L14.2162 9.99203M19.7218 2.73904V11.2598C19.7217 11.5083 19.6612 11.7526 19.5459 11.9697C19.4306 12.1868 19.2645 12.3693 19.0631 12.5C18.8618 12.6306 18.632 12.7051 18.3956 12.7164C18.1592 12.7277 17.9239 12.6753 17.7121 12.5643L14.2162 9.92942V9.99203M14.2162 9.99203L14.1662 9.95434M14.2162 9.99203L14.1662 9.95434M14.1662 9.95434V10.889C14.1655 11.5334 13.9214 12.1512 13.4874 12.6068C13.0535 13.0625 12.4651 13.3188 11.8514 13.3196L14.1662 9.95434ZM12.7969 11.8852C13.0482 11.6214 13.1899 11.2631 13.1903 10.8889V3.11127C13.1899 2.7371 13.0482 2.37884 12.7969 2.11497C12.5456 1.85118 12.2055 1.70329 11.8514 1.70289H2.59222C2.23803 1.70329 1.89794 1.85118 1.64672 2.11497C1.39542 2.37883 1.25367 2.73707 1.25327 3.11122C1.25327 3.11124 1.25327 3.11125 1.25327 3.11127M12.7969 11.8852L1.20327 3.11122L1.25327 3.11127M12.7969 11.8852C12.5456 12.149 12.2055 12.2969 11.8514 12.2973H2.59222C2.23803 12.2969 1.89794 12.149 1.64672 11.8852C1.39542 11.6214 1.25367 11.2631 1.25327 10.889M12.7969 11.8852L1.25327 10.889M1.25327 3.11127V10.8889M1.25327 3.11127V10.8889M1.25327 10.8889L1.25327 10.889M1.25327 10.8889L1.25327 10.889M14.2162 4.06909L14.1662 4.10688V4.04421L14.2162 4.00641V4.06909ZM18.7459 11.2592C18.7446 11.3286 18.7283 11.3967 18.6983 11.4582C18.6682 11.5198 18.6252 11.5731 18.5727 11.6143C18.5202 11.6553 18.4596 11.6832 18.3957 11.6957C18.3346 11.7077 18.2719 11.7055 18.2117 11.6894L14.2162 8.67044V5.32926L18.1526 2.34663C18.2145 2.31497 18.2828 2.30016 18.3513 2.30342C18.4212 2.30674 18.4892 2.32874 18.549 2.36755C18.6088 2.40638 18.6585 2.46078 18.693 2.52583C18.7276 2.59088 18.7458 2.66429 18.7459 2.73906V11.2592Z" fill="#3F79CF" stroke="#3F79CF" style="fill:#3F79CF;fill:color(display-p3 0.2471 0.4733 0.8125);fill-opacity:1;stroke:#3F79CF;stroke:color(display-p3 0.2471 0.4733 0.8125);stroke-opacity:1;" stroke-width="0.1"/>
                                            </g>
                                            <defs>
                                            <clipPath id="clip0_380_6883">
                                            <rect width="20" height="14" fill="white" />
                                            </clipPath>
                                            </defs>
                                        </svg>
                                            
                                            
                                        <span>Custom vids</span>
                                    </a> */}
                                </div>
                            </div>
                            <div className="body-profile__info info-body-profile">
                                <div className="info-body-profile__item">
                                    <p className="info-body-profile__text">Type</p>
                                    <span>Model/Producer</span>
                                </div>
                                <div className="info-body-profile__item">
                                    <p className="info-body-profile__text">Location</p>
                                    <span>Florida Beaches</span>
                                </div>
                                <div className="info-body-profile__item info-body-profile__item--fans">
                                    <p className="info-body-profile__text">FANS</p>
                                    <span>9K</span>
                                </div>
                            </div>
                            <div data-showmore="size" className="body-profile__about about-body-profile">
                                <div data-showmore-content="24" className="about-body-profile__content">
                                    <p>Glad to have you as my new kinky friend! Now that I've got you where I want you, let's have a little fun!Glad to have you as my new kinky friend! Now that I've got you where I want you, let's have a little fun!Glad to have you as my new kinky friend! Now that I've got you where I want you, let's have a little fun!</p>
                                </div>
                                <button hidden data-showmore-button type="button" className="about-body-profile__more">
                                    <span>View more</span>
                                    <span>View less</span>
                                </button>
                            </div>
                            <div className="main__highlights highlights-main">
                                <Highlights />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="profile__tabs tabs-profile">
                    <div onClick={_ => setSelectedTab('timeline')} className={`tabs-profile__item ${selectedTab === 'timeline' ? 'active' : ''} timeline`}>
                        <div className="tabs-profile__image">
                            <img src={MessageIc} alt="Icon" />
                        </div>
                        <p className="tabs-profile__name">Timeline</p>
                    </div>
                    <div onClick={_ => setSelectedTab('video-store')} className={`tabs-profile__item ${selectedTab === 'video-store' ? 'active' : ''} video-store`}>
                        <div className="tabs-profile__image">
                            <img src={VideoIc} alt="Icon" />
                        </div>
                        <p className="tabs-profile__name">Video Store</p>
                    </div>
                    <div onClick={_ => setSelectedTab('folders')} className={`tabs-profile__item ${selectedTab === 'folders' ? 'active' : ''} folders`}>
                        <div className="tabs-profile__image">
                            <img src={FolderIc} alt="Icon" />
                        </div>
                        <p className="tabs-profile__name">Folders</p>
                    </div>
                </div>
                <div className="profile__block">
                    {!isSubscibed ? <div className="profile__promotional promotional-profile">
                        <div className="promotional-profile__title title title--medium">PROMOTIONAL CAMPAIGN</div>
                        <p className="promotional-profile__text">Welcome, I hope you enjoy your stay and extend it! LOYALFANS is the ONLY platform I'm on!! Can't wait to connect with you in my DMs! XXX & OH! Nyssa</p>
                        <button onClick={_ => setIsSubscibed(true)} data-popup="#popup-successfull" className="promotional-profile__button button-subscribe button">
                            <div className="button-subscribe__block">
                                <p>Subscribe (<span>60%</span>off)</p>
                            </div>
                            <div className="button-subscribe__price">
                                <p>
                                    <span className="button-subscribe__value">$10</span>
                                    <span className="button-subscribe__discount">$25.00</span>(per month)</p>
                            </div>
                        </button>
                    </div> :
                    <div className="profile__folders folders-profile">
                        <div onClick={_ => setIsActiveFolder('body1')} className={`folders-profile__item ${isActiveFolder === 'body1' ? 'active' : ''}`}>
                            <p>Тело</p>
                        </div>
                        <div onClick={_ => setIsActiveFolder('ass1')} className={`folders-profile__item ${isActiveFolder === 'ass1' ? 'active' : ''}`}>
                            <p>Попа</p>
                        </div>
                        <div onClick={_ => setIsActiveFolder('tits1')} className={`folders-profile__item ${isActiveFolder === 'tits1' ? 'active' : ''}`}>
                            <p>Сиськи</p>
                        </div>
                        <div onClick={_ => setIsActiveFolder('body2')} className={`folders-profile__item ${isActiveFolder === 'body2' ? 'active' : ''}`}>
                            <p>Тело</p>
                        </div>
                        <div onClick={_ => setIsActiveFolder('ass2')} className={`folders-profile__item ${isActiveFolder === 'ass2' ? 'active' : ''}`}>
                            <p>Попа</p>
                        </div>
                        <div onClick={_ => setIsActiveFolder('tits2')} className={`folders-profile__item ${isActiveFolder === 'tits2' ? 'active' : ''}`}>
                            <p>Сиськи</p>
                        </div>
                    </div>}
                </div>
                <div className="profile__content content-profile">
                    <div className="content-profile__tabs tabs-content-profile">
                        <button onClick={_ => setSelectedTabPosts('POSTS')} className={`tabs-content-profile__item ${selectedTabPosts === 'POSTS' ? 'active' : ''}`}>
                            <p className="tabs-content-profile__name">
                                <span>2379</span> Posts</p>
                        </button>
                        <button onClick={_ => setSelectedTabPosts('MEDIA')} className={`tabs-content-profile__item ${selectedTabPosts === 'MEDIA' ? 'active' : ''}`}>
                            <p className="tabs-content-profile__name">
                                <span>6419</span> MEDIA</p>
                        </button>

                    </div>
                    <div className="main__content content-main">

                        <PostItem
                            user={{
                                username: "Kolya",
                                usertag: "@kolik",
                                photo: 'https://static01.nyt.com/images/2012/08/19/t-magazine/19well-emma-2/19well-emma-2-superJumbo.jpg'
                            }}
                            date={new Date('Sun Jun 09 2024 11:52:54 GMT+0300 (Восточная Европа, летнее время)')}
                            isPinned={false}
                            message={'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptate cumque accusantium et, autem perferendis deleniti ducimus temporibus eum ratione cupiditate a molestias odio aliquam enim quidem repellat optio fuga id?'}
                            images={['https://i.guim.co.uk/img/media/235decf96980ee9351d2b2613e40463ce870a1f5/0_0_2800_3806/master/2800.jpg?width=465&dpr=1&s=none', 'https://i2-prod.mylondon.news/incoming/article24910140.ece/ALTERNATES/s1200b/1_CaptureJPG.jpg']}
                        />
                        <PostItem
                            user={{
                                username: "Kolya 2",
                                usertag: "@kolik2",
                                photo: 'https://static01.nyt.com/images/2012/08/19/t-magazine/19well-emma-2/19well-emma-2-superJumbo.jpg'
                            }}
                            date={new Date('Sun Jun 09 2024 11:51:54 GMT+0300 (Восточная Европа, летнее время)')}
                            isPinned={false}
                            message={'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptate cumque accusantium et, autem perferendis deleniti ducimus temporibus eum ratione cupiditate a molestias odio aliquam enim quidem repellat optio fuga id?'}
                            images={['https://img.freepik.com/premium-photo/autumn-mountains-autumn-mountains-beautiful-autumn-landscape-mountains_912214-54541.jpg', 'https://media.wired.com/photos/5fb70f2ce7b75db783b7012c/master/w_2560%2Cc_limit/Gear-Photos-597589287.jpg']}
                        />
                        <PostItem
                            user={{
                                username: "Kolya 1",
                                usertag: "@kolik4",
                                photo: 'https://static01.nyt.com/images/2012/08/19/t-magazine/19well-emma-2/19well-emma-2-superJumbo.jpg'
                            }}
                            date={new Date('Sun Jun 09 2024 11:55:54 GMT+0300 (Восточная Европа, летнее время)')}
                            isPinned={false}
                            message={'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptate cumque accusantium et, autem perferendis deleniti ducimus temporibus eum ratione cupiditate a molestias odio aliquam enim quidem repellat optio fuga id?'}
                            images={['https://iso.500px.com/wp-content/uploads/2019/07/stock-photo-maderas-312058103.jpg', 'https://static.toiimg.com/thumb/msid-101699570,width-748,height-499,resizemode=4,imgsize-230446/.jpg', 'https://i.insider.com/5fbe98c550e71a0011557672?width=700']}
                        />

                    </div>
                </div>

            </div>
        </div>
    )
}
