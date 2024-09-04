import lockLogo from './../../../assets/img/icons/logo.svg'
import PinIc from './../../../assets/img/icons/pin.svg'
import React, { useState, useEffect } from 'react'
import { IComment, IUser } from '../../../models'
import { Fancybox as NativeFancybox } from "@fancyapps/ui";
import "@fancyapps/ui/dist/fancybox/fancybox.css";
import { toast } from 'react-toastify';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { PostitemComments } from './PostItemComments';
import {
    EmailShareButton,
    FacebookShareButton,
    GabShareButton,
    HatenaShareButton,
    InstapaperShareButton,
    LineShareButton,
    LinkedinShareButton,
    LivejournalShareButton,
    MailruShareButton,
    OKShareButton,
    PinterestShareButton,
    PocketShareButton,
    RedditShareButton,
    TelegramShareButton,
    TumblrShareButton,
    TwitterShareButton,
    ViberShareButton,
    VKShareButton,
    WhatsappShareButton,
    WorkplaceShareButton,
} from "react-share";

import {
    FacebookShareCount,
    HatenaShareCount,
    OKShareCount,
    PinterestShareCount,
    RedditShareCount,
    TumblrShareCount,
    VKShareCount,
} from "react-share";
import { addModal } from '../../../redux/toolkitSlice';

interface IPostItemProps {
    user: IUser
    date: Date
    isPinned: boolean
    message: string
    images: string[]
}

interface ILikeType {
    smile: string;
    count: number;
    id: string;
}

export const PostItem: React.FC<IPostItemProps> = ({ user, date, message, images, ...props }) => {

    const dateWithZeroSymbol = (number: number) => {
        return +number < 10 ? "0" + number : number
    }

    const userState: IUser = useSelector((state: any) => state.toolkit.user)

    user = userState.sex === "woman" ? userState : { ...user, sex: "man" }

    const [isOpenCommetns, setisOpenCommetns] = useState(false)
    const [chosenLike, setChosenLike] = useState<ILikeType>()
    const [isOpenEditor, setIsOpenEditor] = useState<boolean>(false)
    const [isPinned, setisPinned] = useState(props.isPinned)

    const [smiles, setSmiles] = useState<ILikeType[]>([{
        smile: '🚀',
        count: 2,
        id: '1'
    }, {
        smile: '🤣',
        count: 2,
        id: '2'
    }, {
        smile: '💪',
        count: 2,
        id: '3'
    }, {
        smile: '😘',
        count: 2,
        id: '4'
    }, {
        smile: '🤘',
        count: 2,
        id: '5'
    }, {
        smile: '🥶',
        count: 2,
        id: '6'
    }])

    const allSmilesAmount = smiles.reduce((sum, curr) => sum += curr.count, 0)

    const handleLike = (like?: ILikeType) => {

        if (chosenLike?.id === like?.id || !like) {
            setChosenLike(undefined)
            setSmiles(prev => prev.map(item => item.id === chosenLike?.id ? { ...item, count: --item.count } : item))
            return
        } else if (chosenLike?.id && like) {
            setSmiles(prev => prev.map(item => item.id === chosenLike.id ? { ...item, count: --item.count } : item))
        }

        setChosenLike(like)
        setSmiles(prev => prev.map(item => item.id === like.id ? { ...item, count: ++item.count } : item))
    }


    useEffect(() => {
        NativeFancybox.bind("[data-fancybox]", {});
        return () => {
            NativeFancybox.unbind("[data-fancybox]");
            NativeFancybox.close();
        };
    }, []);

    const handlePinned = () => {
        setisPinned(prev => !prev)
    }

    const [mockComments, setMockComments] = useState<IComment[]>([
        {
            user: {
                username: 'asd',
                usertag: '@asd',
                photo: 'https://play-lh.googleusercontent.com/a018MxY7Wc8PrvaWGlZHGcAo27NzU__aE29b2NgnWC2hKA9nXe_YsQvj0sJA2kgs4hE'
            },
            comment: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facere, ratione adipisci corrupti blanditiis repellendus, obcaecati aperiam veritatis, laborum reiciendis est esse. Maxime id, voluptate consectetur nostrum quidem distinctio. Vitae, deleniti.',
            date: new Date()
        },
        {
            user: {
                username: 'asd',
                usertag: '@asd',
                photo: 'https://play-lh.googleusercontent.com/a018MxY7Wc8PrvaWGlZHGcAo27NzU__aE29b2NgnWC2hKA9nXe_YsQvj0sJA2kgs4hE'
            },
            comment: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facere, ratione adipisci corrupti blanditiis repellendus, obcaecati aperiam veritatis, laborum reiciendis est esse. Maxime id, voluptate consectetur nostrum quidem distinctio. Vitae, deleniti.',
            date: new Date()
        },
    ])

    const [isOpenShare, setIsOpenShare] = useState(false)

    const dispatch = useDispatch()

    return (
        <div className={`content-main__post post pin main__item ${user.sex === "man" ? "locked" : ""}`}>
            <div className="post__top top-post">
                <div className="top-post__user user-item user-item--stories online">
                    <div className="user-item__image user-item__image--decoration">
                        <img className="user-photo" src={user.photo} alt="ph" />
                        <div className="user-item__image-status">
                            <svg className="online-status" width="8" height="9" viewBox="0 0 8 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <circle cx="4" cy="4.5" r="4" fill="#3DD598" style={{ fill: '#3DD598', fillOpacity: '1' }} />
                            </svg>
                        </div>
                    </div>
                    <div className="user-item__body">
                        <NavLink to={`/profile/${user.usertag}`} className="user-item__name">
                            {user.username}
                        </NavLink>
                        <div className="user-item__block">
                            <div className="user-item__post-time">
                                <span>
                                    {dateWithZeroSymbol(date.getDate())}.{dateWithZeroSymbol(date.getMonth() + 1)}.{date.getFullYear()}
                                </span>
                                {dateWithZeroSymbol(date.getHours())}:{dateWithZeroSymbol(date.getMinutes())}
                                <span></span>
                            </div>
                            {isPinned && <div className="user-item__post-pin pin-icon">
                                <img src={PinIc} alt="Icon" />
                            </div>}
                        </div>
                    </div>
                </div>
                {userState.sex === "woman" && <div onClick={_ => setIsOpenEditor(prev => !prev)} className={`top-post__actions actions field ${isOpenEditor ? "field-active" : ""}`}>
                    <svg width="21" height="6" viewBox="0 0 21 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M15.8569 3.00003C15.8569 4.1835 16.8163 5.14289 17.9997 5.14289C19.1832 5.14289 20.1426 4.1835 20.1426 3.00003C20.1426 1.81657 19.1832 0.857178 17.9997 0.857178C16.8163 0.857178 15.8569 1.81657 15.8569 3.00003Z" fill="#93989A" style={{ fill: '#93989A', fillOpacity: '1' }} />
                        <path d="M7.99944 3.00003C7.99944 4.1835 8.95883 5.14289 10.1423 5.14289C11.3258 5.14289 12.2852 4.1835 12.2852 3.00003C12.2852 1.81657 11.3258 0.857178 10.1423 0.857178C8.95883 0.857178 7.99944 1.81657 7.99944 3.00003Z" fill="#93989A" style={{ fill: '#93989A', fillOpacity: '1' }} />
                        <path d="M0.142997 3.00003C0.142997 4.1835 1.10239 5.14289 2.28585 5.14289C3.46932 5.14289 4.42871 4.1835 4.42871 3.00003C4.42871 1.81657 3.46932 0.857178 2.28585 0.857178C1.10239 0.857178 0.142997 1.81657 0.142997 3.00003Z" fill="#93989A" style={{ fill: '#93989A', fillOpacity: '1' }} />
                    </svg>
                    <div className="actions__popup popup-actions">
                        <div className="popup-actions__wrapper">
                            <div className="popup-actions__content">
                                <div className="popup-actions__body body-popup-actions">
                                    <button onClick={handlePinned} className="body-popup-actions__item mass">
                                        {isPinned ? "Unpin post" : "Pin post"}
                                    </button>
                                </div>
                                <div className="popup-actions__body body-popup-actions">
                                    <button onClick={_ => dispatch(addModal('timeLinePost'))} className="body-popup-actions__item mass">Edit</button>
                                </div>
                                <div className="popup-actions__body body-popup-actions">
                                    <button onClick={_ => toast.error("This element is developing")} className="body-popup-actions__item mass">Delete</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>}
            </div>
            <div className="post__body">
                <div data-showmore="size" className="post-text text-post">
                    <div data-showmore-content="24" className="text-post__content">
                        <p>
                            {message}
                        </p>
                    </div>
                    <button hidden data-showmore-button type="button" className="text-post__more">
                        <span>See more</span>
                        <span>See less</span>
                    </button>
                </div>
                <div className="post__content content-post">
                    <div data-gallery className={`content-post__images gallery ${images.length === 2 ? 'two-photo' : ''} ${images.length === 3 ? 'three-photo' : ''}`}>

                        {
                            images.map(item => (
                                <a href={item} data-fancybox={`gallery-${date.getTime()}`} className="content-post__image gallery__image">
                                    <img src={item} alt="" className="ibg gallery__preview" />
                                    {user.sex === "man" && <div className="content-post__image-unlock unlock">
                                        <div className="unlock__body">
                                            <div className="unlock__image">
                                                <img src={lockLogo} alt="Icon" />
                                            </div>
                                            <NavLink to={`/profile/${user.usertag}`} className="unlock__button button button--fw"><span>Follow to unlock</span></NavLink>
                                        </div>
                                    </div>}
                                </a>
                            ))
                        }

                    </div>
                </div>
            </div>
            <div className="post__footer footer-post">
                <div className="footer-post__block">
                    <div className="footer-post__reactions reactions">

                        {
                            smiles.map(item => <div className="reactions__item">{item.smile} <span>{item.count}</span></div>)
                        }

                    </div>
                </div>
                <div className="footer-post__body">
                    <div className="footer-post__content">
                        <button className="footer-post__like like-footer-post">
                            <div onClick={_ => handleLike()} className="like-footer-post__body">
                                <div className="like-footer-post__icon" style={{ fontSize: "25px" }}>
                                    {chosenLike?.id ? chosenLike.smile : <svg width="22" height="20" viewBox="0 0 22 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M9.83191 18.0065L9.83083 18.0055C7.00698 15.4472 4.72355 13.3741 3.13731 11.4352C1.55929 9.50633 0.75 7.80226 0.75 5.99455C0.75 3.04245 3.05268 0.75 6 0.75C7.67171 0.75 9.2884 1.53139 10.3402 2.75575L10.9091 3.418L11.478 2.75575C12.5298 1.53139 14.1465 0.75 15.8182 0.75C18.7655 0.75 21.0682 3.04245 21.0682 5.99455C21.0682 7.80226 20.2589 9.50633 18.6809 11.4352C17.0946 13.3741 14.8112 15.4472 11.9874 18.0055L11.9863 18.0065L10.9091 18.9862L9.83191 18.0065Z" fill="transparent" stroke="#838383" stroke-width="1.5" />
                                    </svg>}
                                </div>
                                <span>
                                    {allSmilesAmount}
                                </span>
                            </div>
                            <div className="reactions-popup">
                                <div className="reactions-popup__body">

                                    {
                                        smiles.map(item => <div onClick={_ => handleLike(item)} className="reactions-popup__item">{item.smile}</div>)
                                    }

                                </div>
                            </div>
                        </button>
                        <button onClick={_ => setisOpenCommetns(prev => !prev)} className="footer-post__comments comments-footer-post">
                            <div className="comments-footer-post__body">
                                <div className="comments-footer-post__icon">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M11.9545 23.9998C9.94249 24.0127 7.96028 23.5133 6.19455 22.5486C6.15918 22.5339 6.12124 22.5263 6.08293 22.5263C6.04461 22.5263 6.00667 22.5339 5.9713 22.5486L2.03086 23.6649C1.78969 23.7416 1.5321 23.7508 1.28609 23.6913C1.04008 23.6319 0.815083 23.5061 0.635551 23.3278C0.456019 23.1494 0.32883 22.9252 0.267813 22.6796C0.206796 22.434 0.214288 22.1763 0.289473 21.9347L1.47272 17.9719C1.49842 17.9035 1.49842 17.8282 1.47272 17.7598C0.262574 15.548 -0.220201 13.0113 0.0929184 10.5096C0.406038 8.00794 1.49914 5.66844 3.21709 3.82316C4.93503 1.97787 7.19054 0.720561 9.66348 0.229669C12.1364 -0.261223 14.7011 0.0392451 16.9937 1.08843C19.2862 2.13761 21.19 3.8822 22.4349 6.07459C23.6798 8.26699 24.2026 10.7958 23.929 13.3021C23.6554 15.8084 22.5994 18.1649 20.9108 20.037C19.2222 21.9092 16.9868 23.202 14.5219 23.7318C13.6773 23.9074 12.8172 23.9972 11.9545 23.9998ZM6.04944 20.7961C6.38084 20.8006 6.70628 20.8848 6.99827 21.0416C8.44285 21.8339 10.056 22.2689 11.7031 22.3104C13.3501 22.352 14.9831 21.9987 16.4658 21.2803C17.9485 20.5619 19.2377 19.4991 20.2258 18.1807C21.2139 16.8624 21.8721 15.3267 22.1456 13.702C22.4191 12.0773 22.2998 10.4107 21.7977 8.84155C21.2956 7.27236 20.4253 5.8461 19.2595 4.68191C18.0937 3.51772 16.6662 2.6494 15.0964 2.14948C13.5265 1.64956 11.8598 1.53256 10.2355 1.80826C8.608 2.07865 7.06926 2.73589 5.74866 3.72471C4.42807 4.71353 3.36423 6.00501 2.64663 7.49054C1.92903 8.97606 1.57864 10.6122 1.62495 12.2613C1.67125 13.9104 2.11289 15.5243 2.91271 16.9672C3.03848 17.195 3.11801 17.4454 3.14674 17.704C3.17548 17.9626 3.15285 18.2244 3.08015 18.4742L2.04202 21.9235L5.4913 20.8854C5.67196 20.8284 5.86002 20.7983 6.04944 20.7961Z" fill="#838383" style={{ fill: '#838383', fillOpacity: '1' }} />
                                    </svg>
                                </div>
                                <span>
                                    {mockComments?.length}
                                </span>
                            </div>

                        </button>
                        <div className="footer-post__reactions reactions">
                            {
                                smiles.map(item => <div className="reactions__item">{item.smile} <span>{item.count}</span></div>)
                            }
                        </div>

                    </div>
                    <button onClick={_ => setIsOpenShare(prev => !prev)} className={`footer-post__share share ${isOpenShare ? 'active' : ''}`}>
                        <svg width="22" height="24" viewBox="0 0 22 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M17.5074 16.1435C16.3575 16.1435 15.3214 16.64 14.6024 17.43L8.13493 13.4243C8.3076 12.9823 8.40337 12.5022 8.40337 12C8.40337 11.4975 8.3076 11.0174 8.13493 10.5756L14.6024 6.56981C15.3214 7.35973 16.3575 7.85649 17.5074 7.85649C19.6735 7.85649 21.4357 6.09429 21.4357 3.92815C21.4357 1.76202 19.6735 0 17.5074 0C15.3412 0 13.579 1.7622 13.579 3.92834C13.579 4.43059 13.675 4.9107 13.8474 5.35271L7.38017 9.35832C6.66112 8.5684 5.62511 8.07164 4.47521 8.07164C2.30908 8.07164 0.546875 9.83403 0.546875 12C0.546875 14.1661 2.30908 15.9283 4.47521 15.9283C5.62511 15.9283 6.66112 15.4317 7.38017 14.6416L13.8474 18.6472C13.675 19.0893 13.579 19.5694 13.579 20.0718C13.579 22.2377 15.3412 24 17.5074 24C19.6735 24 21.4357 22.2377 21.4357 20.0718C21.4357 17.9057 19.6735 16.1435 17.5074 16.1435ZM15.0114 3.92834C15.0114 2.55212 16.1311 1.43243 17.5074 1.43243C18.8836 1.43243 20.0033 2.55212 20.0033 3.92834C20.0033 5.30455 18.8836 6.42424 17.5074 6.42424C16.1311 6.42424 15.0114 5.30455 15.0114 3.92834ZM4.47521 14.4959C3.09881 14.4959 1.97912 13.3762 1.97912 12C1.97912 10.6238 3.09881 9.50407 4.47521 9.50407C5.85143 9.50407 6.97093 10.6238 6.97093 12C6.97093 13.3762 5.85143 14.4959 4.47521 14.4959ZM15.0114 20.0716C15.0114 18.6954 16.1311 17.5757 17.5074 17.5757C18.8836 17.5757 20.0033 18.6954 20.0033 20.0716C20.0033 21.4478 18.8836 22.5675 17.5074 22.5675C16.1311 22.5675 15.0114 21.4478 15.0114 20.0716Z" fill="#838383" style={{ fill: '#838383', fillOpacity: '1' }} />
                        </svg>
                        <div className="share-content">
                                <div className="share-content__body">

                                    <div className="share-item">
                            <FacebookShareButton url={'https://google.com'}>
                                FCB
                            </FacebookShareButton>
                            <FacebookShareCount url={'asd'} />
                                    </div>
                                    <div className="share-item">
                                        <EmailShareButton url={'https://google.com'}>
                                            EML
                                        </EmailShareButton>
                                    </div>
                                    <div className="share-item">
                                        <PinterestShareButton url={'https://google.com'} media={'https://i.guim.co.uk/img/media/235decf96980ee9351d2b2613e40463ce870a1f5/0_0_2800_3806/master/2800.jpg?width=465&dpr=1&s=none'}>
                                            PNT
                                        </PinterestShareButton>
                                    </div>
                                    <div className="share-item">
                                        <TelegramShareButton url={'https://google.com'}>
                                            TG
                                        </TelegramShareButton>
                                    </div>
                                    <div className="share-item">
                                        <TwitterShareButton url={'https://google.com'}>
                                            TW
                                        </TwitterShareButton>
                                    </div>
                                    <div className="share-item">
                                        <ViberShareButton url={'https://google.com'}>
                                            VIB
                                        </ViberShareButton>
                                    </div>
                                    <div className="share-item">
                                        <WhatsappShareButton url={'https://google.com'}>
                                            WA
                                        </WhatsappShareButton>
                                    </div>

                                </div>
                        </div>
                    </button>

                    
                </div>

            </div>

            {isOpenCommetns && <PostitemComments mockComments={mockComments} setMockComments={setMockComments} />}
        </div>
    )
}
