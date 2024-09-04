import { Editor } from 'react-draft-wysiwyg';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import { AutoMessageStyled } from './AutoMessage.styled';


export const AutoMessage = () => {
    return (
        <AutoMessageStyled className="profile">
            <div className="profile__container">
                <div className="profile__body body-profile">
                    <div className="body-profile__header">
                        <h2 className="body-profile__title title title--medium">Automated messages</h2>
                    </div>
                    <div className="automated">
                        <div className="automated__body">
                            <div className="automated__block">
                                <label className="automated__label">Fan type</label>
                                <div data-spollers className="automated__body">
                                    <button className=" spoller-input spollers__item-main">
                                        <div data-spoller-close className="spoller-input__title spollers__title">Non Follower</div>
                                        <div className="spollers__wrapper">

                                            <div className="spoller-input__body spollers__body">
                                                <p className='pollers__body-value'>option 1</p>
                                                <p className='pollers__body-value'>option 2</p>
                                                <p className='pollers__body-value'>option 3</p>
                                            </div>
                                        </div>
                                    </button>
                                </div>
                            </div>
                            <div className="automated__block">
                                <label className="automated__label">Action</label>
                                <div data-spollers className="automated__body">
                                    <button className="spoller-input spollers__item-main">
                                        <div data-spoller-close className="spoller-input__title spollers__title">Follows</div>
                                        <div className="spollers__wrapper">

                                            <div className="spoller-input__body spollers__body">
                                                <p className='pollers__body-value'>option 1</p>
                                                <p className='pollers__body-value'>option 2</p>
                                                <p className='pollers__body-value'>option 3</p>
                                            </div>
                                        </div>
                                    </button>
                                </div>
                            </div>
                            <div className="automated__block">
                                <label className="automated__label">Your message</label>
                                <div className="automated__textarea-body">
                                    {/* <textarea id="editor" className="automated__textarea textarea"></textarea> */}
                                    <Editor />
                                </div>
                            </div>
                            <div className="automated__bottom">
                                <div className="automated__delay delay-automated">
                                    <div className="automated__block">
                                        <label className="automated__label">Add delay</label>
                                        <div className="delay-automated__body">
                                            <p className="delay-automated__text">Send after</p>
                                            <input min="0" type="number" className="delay-automated__input input input-main"/>
                                            <p className="delay-automated__text">sec</p>
                                        </div>
                                    </div>
                                </div>
                                <button className="automated__button button"><span>Save changes</span></button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </AutoMessageStyled>
    )
}
