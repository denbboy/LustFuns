import React, { SetStateAction, useEffect, useRef, useState } from 'react'
import Icon from './../../../assets/img/icons/image.svg'
import VideoIc from './../../../assets/img/icons/video.svg'
import MoneyIc from './../../../assets/img/icons/monney.svg'
import MoneyIc2 from './../../../assets/img/icons/money-02.svg'
import AudioIc from './../../../assets/img/icons/audio.svg'
import FileIc from './../../../assets/img/icons/file.svg'
import { NavLink } from 'react-router-dom'
import { toast } from 'react-toastify'
import { IComment, IUser } from '../../../models'
import { PostItemCommentsItem } from './PostItemCommentsItem'
import { useSelector } from 'react-redux'

interface IPostitemCommentsProps {
    mockComments: IComment[]
    setMockComments: React.Dispatch<SetStateAction<IComment[]>>
}

export const PostitemComments: React.FC<IPostitemCommentsProps> = ({ mockComments, setMockComments }) => {

    const user: IUser = useSelector((state: any) => state.toolkit.user)
    const [messageValue, setMessageValue] = useState<string>('')

    const leaveComment = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        if(!messageValue) return toast.error('Write anything please')

        const newComment: IComment = {
            user: user,
            date: new Date(),
            comment: messageValue,
        }
        setMockComments(prev => [...prev, newComment])
        
        setMessageValue('')
    }

    const scrollingBlock: any = useRef(null)

    useEffect(() => {
        scrollingBlock.current?.scrollTo(0, 9999)
    }, [mockComments])

    return (
        <div className="comments-post">
            <div ref={scrollingBlock} className="comments-post__content">

                {
                    !!mockComments.length ? mockComments?.map(item => (
                        <PostItemCommentsItem
                            user={item.user}
                            date={item.date}
                            comment={item.comment}
                        />
                    )) : "Not found any comments"
                }

            </div>
            <form className="comments-post__bottom bottom-comments-post" onSubmit={leaveComment}>
                <div className="comments-post__input-body input input-main">
                    <input placeholder='Comment' onChange={e => setMessageValue(e.target.value)} value={messageValue} type="text" />
                    <button type="submit" className='comments-post__input-body-send'>
                        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M28.983 14.25L7.98299 2.26378C7.62876 2.06437 7.22219 1.97763 6.81743 2.01512C6.41267 2.0526 6.02894 2.21254 5.71737 2.47361C5.40579 2.73468 5.18117 3.08449 5.07342 3.47644C4.96566 3.86839 4.9799 4.28387 5.11423 4.66753L8.94299 16L5.11423 27.3338C5.00768 27.6354 4.97502 27.9581 5.01898 28.2749C5.06295 28.5918 5.18226 28.8934 5.36691 29.1546C5.55156 29.4158 5.79616 29.6289 6.08019 29.776C6.36421 29.9231 6.67938 29.9999 6.99924 30C7.34674 29.9993 7.68817 29.9089 7.99049 29.7375L28.9805 17.7313C29.2901 17.5578 29.548 17.3052 29.7277 16.9992C29.9074 16.6932 30.0024 16.3448 30.003 15.99C30.0037 15.6351 29.9099 15.2865 29.7313 14.9798C29.5527 14.6732 29.2957 14.4196 28.9867 14.245L28.983 14.25ZM6.99924 28C6.99977 27.995 6.99977 27.99 6.99924 27.985L10.7167 17H17.9992C18.2645 17 18.5188 16.8947 18.7063 16.7071C18.8939 16.5196 18.9992 16.2652 18.9992 16C18.9992 15.7348 18.8939 15.4805 18.7063 15.2929C18.5188 15.1054 18.2645 15 17.9992 15H10.7167L7.00674 4.02003C7.00551 4.01295 7.00296 4.00616 6.99924 4.00003L27.9992 15.9788L6.99924 28Z" fill="#838383" />
                        </svg>
                    </button>
                </div>
                <div className="comments-post__actions actions-comments-post">
                    <p className="actions-comments-post__text">Add to your comment</p>
                    <div className="actions-comments-post__items">

                        <button type='button' onClick={_ => toast.error("This modal is developing")} className="actions-comments-post__item">
                            <img src={Icon} alt="Icon" />
                        </button>
                        <button type='button' onClick={_ => toast.error("This modal is developing")} className="actions-comments-post__item">
                            <img src={VideoIc} alt="Icon" />
                        </button>
                        <button type='button' onClick={_ => toast.error("This modal is developing")} className="actions-comments-post__item">
                            <img src={MoneyIc} alt="Icon" />
                        </button>
                        <button type='button' onClick={_ => toast.error("This modal is developing")} className="actions-comments-post__item">
                            <img src={AudioIc} alt="Icon" />
                        </button>
                        <button type='button' onClick={_ => toast.error("This modal is developing")} className="actions-comments-post__item">
                            <img src={FileIc} alt="Icon" />
                        </button>
                        <button type='button' onClick={_ => toast.error("This modal is developing")} className="actions-comments-post__item">
                            <img src={MoneyIc2} alt="Icon" />
                        </button>
                    </div>
                </div>

            </form>
        </div>
    )
}
