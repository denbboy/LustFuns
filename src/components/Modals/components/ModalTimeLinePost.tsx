import UserPh from '../../../assets/img/user/01.png'
import ImgIch from '../../../assets/img/icons/image.svg'
import VideoIc from '../../../assets/img/icons/video.svg'
import MoneyIc from '../../../assets/img/icons/monney.svg'
import AudioIc from '../../../assets/img/icons/audio.svg'
import FileIc from '../../../assets/img/icons/file.svg'
import MoneyIc2 from '../../../assets/img/icons/money-02.svg'
import { useState } from 'react'
import { toast } from 'react-toastify'
import { useDispatch } from 'react-redux'
import { removeModal } from '../../../redux/toolkitSlice'
import { useClickOutside } from '../../../hooks/ClickOutside'

export const ModalTimeLinePost = () => {
    const dispatch = useDispatch();
    const [title, setTitle] = useState<string>('');
    const [folder, setFolder] = useState<string>('');
    const [recipient, setRecipient] = useState<string>('Subscribers');
    const [isRecipientDropdownOpen, setIsRecipientDropdownOpen] = useState<boolean>(false);
    const [isFolderDropdownOpen, setIsFolderDropdownOpen] = useState<boolean>(false);

    const handlePost = () => {
        if (title && folder) {
            toast.success('Пост відправлено');

            // Відправка посту
            console.log('Пост відправлено', { title, folder, recipient });

            dispatch(removeModal('timeLinePost'))
        } else {
            toast.error('Будь ласка, заповніть всі обов’язкові поля.');
        }
    };

    const recipientDropdown = useClickOutside(setIsRecipientDropdownOpen)
    const folderDropdown = useClickOutside(setIsFolderDropdownOpen)


    return (
        <div className="popup-timeline-post__body popup__body">
            <h4 className="popup-timeline-post__title">Create timeline post</h4>
            <div className="popup-timeline-post__top top-popup-timeline-post">
                <div className="top-post__user user-item">
                    <div className="user-item__image">
                        <picture><source srcSet={UserPh} type="image/webp"/><img className="user-photo" src={UserPh} alt="User ph"/></picture>
                    </div>
                    <div data-spollers className="user-item__body">
                        <a href="#" className="user-item__name">Boob007</a>

                        <button ref={recipientDropdown.rootEl} className={`field-block-add-vid__item spollers__item-main spollers__item input input-main ${isRecipientDropdownOpen ? 'active' : ''}`}
                            onClick={() => setIsRecipientDropdownOpen(!isRecipientDropdownOpen)}
                        >
                            <div data-spoller-close className="field-block-add-vid__title spollers__title">{recipient}</div>
                                <div className="spollers__wrapper">
                                    <div className="field-block-add-vid__body spollers__body">
                                        {['Subscribers', 'Fans', 'All'].map((option) => (
                                            <div
                                                key={option}
                                                className="field-block-add-vid__value"
                                                onClick={() => {
                                                    setRecipient(option);
                                                    setIsRecipientDropdownOpen(false);
                                                }}
                                            >
                                                {option}
                                            </div>
                                        ))}
                                    </div>
                                </div>
                         
                            {/* <div className="spollers__wrapper">


                                <div className="field-block-add-vid__body spollers__body">
                                    <div className="field-block-add-vid__value">Subscribers</div>
                                    <div className="field-block-add-vid__value">Fans</div>
                                    <div className="field-block-add-vid__value">All</div>
                                </div>
                            </div> */}
                        </button>
                    </div>
                </div>
            </div>
            <div className="popup-timeline-post__body body-popup-timeline-post">
                <div className="body-popup-timeline-post__title input-box">
                    <label>Title</label>
                    
                    <input placeholder="Add title of your post" className="input-box__input input input-main"
                        required
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                    />
                </div>
                <div className="body-popup-timeline-post__description input-box">
                    <label>Description</label>
                    <textarea placeholder="Video description" className="input-box__input input input-main"></textarea>
                </div>
                <div data-spollers className="body-popup-timeline-post__folder input-box">
                    <label>Add post to folder</label>

                    <button ref={folderDropdown.rootEl} className={`spoller-input spollers__item-main ${isFolderDropdownOpen ? 'active' : ''}`}
                        onClick={() => setIsFolderDropdownOpen(!isFolderDropdownOpen)}
                    >
                        <div data-spoller-close className="spoller-input__title spollers__title">{folder || 'Choose folder'}</div>
                            <div className="spollers__wrapper">
                                <div className="spoller-input__body spollers__body">
                                    {[1, 2, 3].map((option) => (
                                        <div
                                            key={option}
                                            className="spollers__body-value"
                                            onClick={() => {
                                                setFolder(option.toString());
                                                setIsFolderDropdownOpen(false);
                                            }}
                                        >
                                            {option}
                                        </div>
                                    ))}
                                </div>
                            </div>

                        {/* <div className="spollers__wrapper">
                                
                            <div className="field-block-add-vid__body spollers__body">
                                <div className="field-block-add-vid__value">1</div>
                                <div className="field-block-add-vid__value">2</div>
                                <div className="field-block-add-vid__value">3</div>
                            </div>
                        </div> */}
                    </button>
                </div>
            </div>
            <div className="popup-timeline-post__actions actions-popup-timeline-post">
                <p className="actions-popup-timeline-post__text">Add to your post</p>
                <div className="actions-popup-timeline-post__content">
                    <div className="new-post-main__actions">
                        <button className="new-post-main__item">
                            <img src={ImgIch} alt="Icon"/>
                        </button>
                        <button className="new-post-main__item">
                            <img src={VideoIc} alt="Icon"/>
                        </button>
                        <button className="new-post-main__item">
                            <img src={MoneyIc} alt="Icon"/>
                        </button>
                        <button className="new-post-main__item">
                            <img src={AudioIc} alt="Icon"/>
                        </button>
                        <button className="new-post-main__item">
                            <img src={FileIc} alt="Icon"/>
                        </button>
                        <button className="new-post-main__item">
                            <img src={MoneyIc2} alt="Icon"/>
                        </button>
                    </div>
                </div>
            </div>
            <button className="popup-timeline-post__post button button--fw" onClick={handlePost}><span>Post</span></button>
        </div>
    )
}
