import { useState } from 'react'
import VideoIc from '../../../assets/img/icons/video.svg'
import PostPh from '../../../assets/img/post/01.jpg'
import { toast } from 'react-toastify';
import { useDispatch } from 'react-redux';
import { removeModal } from '../../../redux/toolkitSlice';

export const ModalAddVid = () => {
    const dispatch = useDispatch();

    const [selectedFile, setSelectedFile] = useState<File | null>(null);
    const [showPhotoUpload, setShowPhotoUpload] = useState<boolean>(false);
    const [videoPreview, setVideoPreview] = useState<string | null>(null);
    const [photoPreview, setPhotoPreview] = useState<string | null>(null);

    const [tags, setTags] = useState<string[]>([]);
    const [newTagValue, setNewTagValue] = useState<string>('');

    const [title, setTitle] = useState<string>('');
    const [description, setDescription] = useState<string>('');
    const [price, setPrice] = useState<string>('');
    const [sale, setSale] = useState<string>('');
    // const [schedule, setSchedule] = useState<string>('');
    const [allowDownload, setAllowDownload] = useState<boolean>(false);
    const [disableComments, setDisableComments] = useState<boolean>(false);

    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (event.target.files && event.target.files[0]) {
            setSelectedFile(event.target.files[0]);
            setVideoPreview(URL.createObjectURL(event.target.files[0]));
        }
    };

    const handlePhotoChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (event.target.files && event.target.files[0]) {
            setPhotoPreview(URL.createObjectURL(event.target.files[0]));
            setShowPhotoUpload(true);
        }
    };

    const handleRemoveVideo = () => {
        setSelectedFile(null);
        setVideoPreview(null);
        setPhotoPreview(null);
    };

    const handleRemovePhoto = () => {
        setPhotoPreview(null);
        setShowPhotoUpload(false);
    };

    const handleAddNewTag = () => {
        if (newTagValue.trim() === '') {
            toast.error('Your tag is ampty');
            return;
        }

        setTags([...tags, newTagValue.trim()]);
        setNewTagValue('');
    } 

    const handleRemoveTag = (removeTag: string) => {
        setTags(tags.filter(tag => tag !== removeTag))
    }

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();

        if (!title || !description || !tags || !price || !sale || !selectedFile || !photoPreview || !allowDownload || !disableComments) {
            toast.error('Please fill in all required fields');
            return;
        }

        const formData = {
            title,
            description,
            tags,
            price,
            sale,
            // schedule,
            selectedFile,
            photoPreview,
            allowDownload,
            disableComments,
        };

        console.log('Form Data:', formData);

        toast.success('Form Data success');

        dispatch(removeModal('addVideo'));
    };

    return (
        <div  className="popup-add-vid__body popup__body">
            <h4  className="popup-add-vid__title">Add video to my store</h4>
            <form className='popup-add-vid__form' onSubmit={handleSubmit}>
                <div  className="popup-add-vid__block">
                    <div  className="input-box">
                        <label>Title</label>
                        <input type="text" placeholder="Video title" value={title} onChange={(e) => setTitle(e.target.value)} required className="input-box__input input input-main"/>
                    </div>
                    <div  className="input-box">
                        <label>Description</label>
                        <input type="text" placeholder="Video description" value={description} onChange={(e) => setDescription(e.target.value)} className="input-box__input input input-main"/>
                    </div>

                    <div  className="input-box">
                        <label>Add tag</label>
                        <div  className="add-tag select-custom input input-main">
                            <div  className="add-tag__content">
                                {tags.map(tag => (
                                    <div key={tag} className="add-tag__item item-tag">
                                        <p className="item-tag__text">{tag}</p>
                                        <button onClick={() => handleRemoveTag(tag)} className='item-tag__delete'>
                                            <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M9.24703 8.62797C9.28768 8.66862 9.31992 8.71687 9.34192 8.76998C9.36392 8.82309 9.37524 8.88001 9.37524 8.9375C9.37524 8.99498 9.36392 9.05191 9.34192 9.10502C9.31992 9.15813 9.28768 9.20638 9.24703 9.24703C9.20638 9.28768 9.15813 9.31992 9.10502 9.34192C9.05191 9.36392 8.99498 9.37524 8.9375 9.37524C8.88001 9.37524 8.82309 9.36392 8.76998 9.34192C8.71687 9.31992 8.66862 9.28768 8.62797 9.24703L5 5.61851L1.37203 9.24703C1.28994 9.32912 1.1786 9.37524 1.0625 9.37524C0.946402 9.37524 0.835061 9.32912 0.752968 9.24703C0.670875 9.16494 0.624756 9.0536 0.624756 8.9375C0.624756 8.8214 0.670875 8.71006 0.752968 8.62797L4.38148 5L0.752968 1.37203C0.670875 1.28994 0.624756 1.1786 0.624756 1.0625C0.624756 0.946402 0.670875 0.835061 0.752968 0.752968C0.835061 0.670875 0.946402 0.624756 1.0625 0.624756C1.1786 0.624756 1.28994 0.670875 1.37203 0.752968L5 4.38148L8.62797 0.752968C8.71006 0.670875 8.8214 0.624756 8.9375 0.624756C9.0536 0.624756 9.16494 0.670875 9.24703 0.752968C9.32912 0.835061 9.37524 0.946402 9.37524 1.0625C9.37524 1.1786 9.32912 1.28994 9.24703 1.37203L5.61851 5L9.24703 8.62797Z" fill="#3F79CF" />
                                            </svg>
                                        </button>
                                    </div>
                                ))}
                            </div>
                            <div className="add-tag__block">
                                <input type="text" placeholder='Add tag' maxLength={11} className='input' value={newTagValue} onChange={(e) => setNewTagValue(e.target.value)}/>
                                <button type='button' className="add-tag__button button" onClick={handleAddNewTag}><span>Add tag</span></button>
                            </div>

                        </div>
                    </div>

                    <div  className="input-box-block">
                        <div  className="input-box">
                            <label>Price</label>
                            <div  className="input-block input input-main">
                                <input type="number" placeholder="Price" value={price} onChange={(e) => setPrice(e.target.value)} className="input-box__input"/>

                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <g clip-path="url(#clip0_219_7917)">
                                        <path d="M12.7031 11.3676V7.19906C13.5215 7.48931 14.1094 8.27086 14.1094 9.1875H15.5156C15.5156 7.48973 14.3059 6.06928 12.7031 5.74261V4.5H11.2969V5.74261C9.69412 6.06923 8.48438 7.48969 8.48438 9.1875C8.48438 10.8853 9.69412 12.3057 11.2969 12.6324V16.8009C10.4785 16.5107 9.89062 15.7291 9.89062 14.8125H8.48438C8.48438 16.5103 9.69412 17.9307 11.2969 18.2574V19.5H12.7031V18.2574C14.3059 17.9308 15.5156 16.5103 15.5156 14.8125C15.5156 13.1147 14.3059 11.6943 12.7031 11.3676ZM11.2969 11.1759C10.4785 10.8857 9.89062 10.1041 9.89062 9.1875C9.89062 8.27086 10.4785 7.48931 11.2969 7.19906V11.1759ZM12.7031 16.8009V12.8241C13.5215 13.1143 14.1094 13.8959 14.1094 14.8125C14.1094 15.7291 13.5215 16.5107 12.7031 16.8009Z" fill="#B5CBED" />
                                        <path d="M12 0C5.37258 0 0 5.37258 0 12C0 18.6274 5.37258 24 12 24C18.6274 24 24 18.6274 24 12C24 5.37258 18.6274 0 12 0ZM12 22.5938C6.14925 22.5938 1.40625 17.8507 1.40625 12C1.40625 6.14925 6.14925 1.40625 12 1.40625C17.8507 1.40625 22.5938 6.14925 22.5938 12C22.5938 17.8507 17.8507 22.5938 12 22.5938Z" fill="#B5CBED"  />
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_219_7917">
                                            <rect width="24" height="24" fill="white" />
                                        </clipPath>
                                    </defs>
                                </svg>

                            </div>
                        </div>
                        <div  className="input-box">
                            <label>Sale</label>
                            <div  className="input-block input input-main">
                                <input type="number" placeholder="Sale" value={sale} onChange={(e) => setSale(e.target.value)} className="input-box__input"/>
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <g clip-path="url(#clip0_371_8625)">
                                        <path d="M22.4039 12.3108C22.3074 12.1133 22.3074 11.8867 22.4039 11.6891L23.299 9.85799C23.7974 8.83841 23.4025 7.62319 22.4001 7.0913L20.5996 6.13599C20.4054 6.03296 20.2722 5.84959 20.2342 5.63307L19.8821 3.62548C19.686 2.5077 18.652 1.75658 17.5286 1.91553L15.5105 2.201C15.2927 2.23175 15.0773 2.16172 14.9193 2.00886L13.4544 0.591743C12.6387 -0.197346 11.3609 -0.197393 10.5453 0.591743L9.08035 2.009C8.92229 2.16191 8.7069 2.2318 8.48912 2.20114L6.47102 1.91567C5.3472 1.75663 4.31361 2.50784 4.11753 3.62562L3.76541 5.63312C3.7274 5.84968 3.59422 6.03301 3.40002 6.13609L1.59956 7.09139C0.597101 7.62323 0.202228 8.83855 0.700601 9.85813L1.59567 11.6892C1.69224 11.8868 1.69224 12.1134 1.59567 12.3109L0.700554 14.1421C0.202182 15.1616 0.597054 16.3769 1.59952 16.9087L3.39998 17.864C3.59422 17.9671 3.7274 18.1505 3.76541 18.367L4.11753 20.3746C4.29603 21.3921 5.16856 22.1057 6.17135 22.1056C6.27011 22.1056 6.37033 22.0987 6.47107 22.0845L8.48917 21.799C8.7068 21.7681 8.92233 21.8383 9.0804 21.9911L10.5453 23.4083C10.9532 23.8028 11.4764 24.0001 11.9998 24C12.5231 24 13.0466 23.8027 13.4543 23.4083L14.9193 21.9911C15.0773 21.8383 15.2927 21.7684 15.5105 21.799L17.5286 22.0845C18.6525 22.2435 19.686 21.4923 19.8821 20.3745L20.2342 18.367C20.2723 18.1505 20.4054 17.9671 20.5996 17.864L22.4001 16.9087C23.4025 16.3769 23.7974 15.1616 23.299 14.142L22.4039 12.3108ZM21.7513 15.6859L19.9508 16.6412C19.3768 16.9459 18.9831 17.4876 18.8708 18.1278L18.5187 20.1353C18.4524 20.5135 18.1027 20.7675 17.7225 20.7138L15.7044 20.4284C15.0608 20.3372 14.4239 20.5443 13.9568 20.9962L12.4919 22.4132C12.216 22.6801 11.7837 22.6801 11.5077 22.4132L10.0428 20.9961C9.648 20.6142 9.13191 20.4073 8.59313 20.4073C8.49442 20.4073 8.3949 20.4142 8.29524 20.4283L6.27715 20.7138C5.89718 20.7675 5.54726 20.5135 5.48089 20.1353L5.12872 18.1277C5.0164 17.4876 4.62275 16.9457 4.04867 16.6412L2.24822 15.6859C1.90903 15.5059 1.77544 15.0948 1.94405 14.7498L2.83917 12.9187C3.12454 12.3348 3.12454 11.6651 2.83917 11.0813L1.94405 9.25011C1.77544 8.90516 1.90903 8.49403 2.24822 8.31407L4.04867 7.35877C4.6227 7.05413 5.0164 6.51235 5.12867 5.87223L5.48079 3.86468C5.54717 3.48649 5.89676 3.23243 6.27705 3.28615L8.29515 3.57162C8.93851 3.66269 9.57558 3.45565 10.0427 3.00382L11.5076 1.58671C11.7835 1.3198 12.2158 1.3198 12.4918 1.58671L13.9567 3.00382C14.4238 3.4557 15.0608 3.66269 15.7043 3.57162L17.7224 3.28615C18.1024 3.23238 18.4523 3.48649 18.5186 3.86468L18.8707 5.87227C18.9831 6.5124 19.3767 7.05422 19.9508 7.35877L21.7512 8.31407C22.0904 8.49403 22.224 8.90516 22.0554 9.25011L21.1603 11.0812C20.8749 11.6651 20.8749 12.3348 21.1603 12.9186L22.0554 14.7497C22.2241 15.0948 22.0905 15.506 21.7513 15.6859Z" fill="#B5CBED"  />
                                        <path d="M17.0571 6.94288C16.7869 6.6726 16.3486 6.6726 16.0783 6.94288L6.94294 16.0783C6.67266 16.3486 6.67266 16.7868 6.94294 17.0571C7.07808 17.1922 7.25522 17.2598 7.43232 17.2598C7.60941 17.2598 7.7866 17.1923 7.92169 17.0571L17.0571 7.92172C17.3274 7.65139 17.3274 7.21321 17.0571 6.94288Z" fill="#B5CBED"  />
                                        <path d="M9.23111 5.77103C7.83181 5.77103 6.69336 6.90947 6.69336 8.30878C6.69336 9.70808 7.83181 10.8465 9.23111 10.8465C10.6304 10.8465 11.7689 9.70808 11.7689 8.30878C11.7689 6.90947 10.6304 5.77103 9.23111 5.77103ZM9.23111 9.46227C8.59507 9.46227 8.07762 8.94482 8.07762 8.30873C8.07762 7.67269 8.59507 7.15524 9.23111 7.15524C9.86715 7.15524 10.3847 7.67269 10.3847 8.30873C10.3846 8.94482 9.86715 9.46227 9.23111 9.46227Z" fill="#B5CBED"  />
                                        <path d="M14.7682 13.1535C13.3689 13.1535 12.2305 14.292 12.2305 15.6913C12.2305 17.0906 13.3689 18.229 14.7682 18.229C16.1675 18.229 17.306 17.0906 17.306 15.6913C17.306 14.292 16.1675 13.1535 14.7682 13.1535ZM14.7682 16.8447C14.1322 16.8447 13.6147 16.3273 13.6147 15.6913C13.6147 15.0552 14.1321 14.5378 14.7682 14.5378C15.4043 14.5378 15.9217 15.0552 15.9217 15.6913C15.9217 16.3273 15.4043 16.8447 14.7682 16.8447Z" fill="#B5CBED"  />
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_371_8625">
                                            <rect width="24" height="24" fill="white" />
                                        </clipPath>
                                    </defs>
                                </svg>

                            </div>
                        </div>
                        <div  className="input-box">
                            <label>Schedule</label>
                            <div  className="input-block input input-main">
                                <input id="post-date" placeholder="Post it later"  className="input-box__input post-date"/>
                                <svg width="22" height="24" viewBox="0 0 22 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M19.75 2.5H17.125V1.625C17.125 1.39294 17.0328 1.17038 16.8687 1.00628C16.7046 0.842187 16.4821 0.75 16.25 0.75C16.0179 0.75 15.7954 0.842187 15.6313 1.00628C15.4672 1.17038 15.375 1.39294 15.375 1.625V2.5H6.625V1.625C6.625 1.39294 6.53281 1.17038 6.36872 1.00628C6.20462 0.842187 5.98206 0.75 5.75 0.75C5.51794 0.75 5.29538 0.842187 5.13128 1.00628C4.96719 1.17038 4.875 1.39294 4.875 1.625V2.5H2.25C1.78587 2.5 1.34075 2.68437 1.01256 3.01256C0.684374 3.34075 0.5 3.78587 0.5 4.25V21.75C0.5 22.2141 0.684374 22.6592 1.01256 22.9874C1.34075 23.3156 1.78587 23.5 2.25 23.5H19.75C20.2141 23.5 20.6592 23.3156 20.9874 22.9874C21.3156 22.6592 21.5 22.2141 21.5 21.75V4.25C21.5 3.78587 21.3156 3.34075 20.9874 3.01256C20.6592 2.68437 20.2141 2.5 19.75 2.5ZM4.875 4.25V5.125C4.875 5.35706 4.96719 5.57962 5.13128 5.74372C5.29538 5.90781 5.51794 6 5.75 6C5.98206 6 6.20462 5.90781 6.36872 5.74372C6.53281 5.57962 6.625 5.35706 6.625 5.125V4.25H15.375V5.125C15.375 5.35706 15.4672 5.57962 15.6313 5.74372C15.7954 5.90781 16.0179 6 16.25 6C16.4821 6 16.7046 5.90781 16.8687 5.74372C17.0328 5.57962 17.125 5.35706 17.125 5.125V4.25H19.75V7.75H2.25V4.25H4.875ZM19.75 21.75H2.25V9.5H19.75V21.75Z" fill="#B5CBED"  />
                                </svg>

                            </div>
                        </div>
                    </div>
                </div>
                <div  className="popup-add-vid__files files-add-vid">
                    {selectedFile &&
                        <div className="files-add-vid__content">
                            <div className="files-add-vid__items">
                                <div className="files-add-vid__item item-files-add-vid">
                                    <div className="item-files-add-vid__body">
                                        {videoPreview ? (
                                            <video width="100%">
                                                <source src={videoPreview} type={selectedFile.type} />
                                                Your browser does not support the video tag.
                                            </video>
                                        ) : (
                                            <picture>
                                                <source srcSet={PostPh} type="image/webp" />
                                                <img src={PostPh} alt="ph" />
                                            </picture>
                                        )}
                                    </div>
                                    <div className="item-files-add-vid__delete">
                                        <button className="item-files-add-vid__delete-btn" onClick={handleRemoveVideo}>
                                            <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <rect x="0.5" y="0.5" width="39" height="39" rx="9.5" stroke="white" />
                                                <path d="M26.3281 13.1094H23.6914V12.582C23.6914 11.7097 22.9817 11 22.1094 11H17.8906C17.0183 11 16.3086 11.7097 16.3086 12.582V13.1094H13.6719C12.7995 13.1094 12.0898 13.8191 12.0898 14.6914C12.0898 15.392 12.5478 15.9873 13.1799 16.1947L14.1205 27.5493C14.1882 28.3628 14.8807 29 15.697 29H24.303C25.1193 29 25.8118 28.3628 25.8796 27.5491L26.8201 16.1947C27.4522 15.9873 27.9102 15.392 27.9102 14.6914C27.9102 13.8191 27.2005 13.1094 26.3281 13.1094ZM17.3633 12.582C17.3633 12.2913 17.5998 12.0547 17.8906 12.0547H22.1094C22.4002 12.0547 22.6367 12.2913 22.6367 12.582V13.1094H17.3633V12.582ZM24.8285 27.4618C24.8059 27.7329 24.5751 27.9453 24.303 27.9453H15.697C15.4249 27.9453 15.1941 27.7329 15.1716 27.462L14.2447 16.2734H25.7553L24.8285 27.4618ZM26.3281 15.2188H13.6719C13.3811 15.2188 13.1445 14.9822 13.1445 14.6914C13.1445 14.4006 13.3811 14.1641 13.6719 14.1641H26.3281C26.6189 14.1641 26.8555 14.4006 26.8555 14.6914C26.8555 14.9822 26.6189 15.2188 26.3281 15.2188Z" fill="white" />
                                                <path d="M17.8896 26.3307L17.3623 17.8229C17.3443 17.5322 17.0927 17.3111 16.8034 17.3292C16.5126 17.3472 16.2916 17.5974 16.3096 17.8881L16.837 26.396C16.8543 26.6756 17.0865 26.8907 17.3628 26.8907C17.6682 26.8907 17.9084 26.6335 17.8896 26.3307Z" fill="white" />
                                                <path d="M20 17.3281C19.7088 17.3281 19.4727 17.5642 19.4727 17.8555V26.3633C19.4727 26.6545 19.7088 26.8906 20 26.8906C20.2912 26.8906 20.5273 26.6545 20.5273 26.3633V17.8555C20.5273 17.5642 20.2912 17.3281 20 17.3281Z" fill="white" />
                                                <path d="M23.1967 17.3292C22.9067 17.3111 22.6557 17.5321 22.6377 17.8229L22.1104 26.3307C22.0924 26.6213 22.3135 26.8716 22.6041 26.8896C22.895 26.9076 23.1451 26.6865 23.1631 26.3959L23.6904 17.8881C23.7084 17.5974 23.4874 17.3472 23.1967 17.3292Z" fill="white" />
                                            </svg>
                                        </button>
                                    </div>
                                </div>
                            </div>

                            {showPhotoUpload && 
                                <div className="files-add-vid__items">
                                    <div className="files-add-vid__item item-files-add-vid">
                                        <div className="item-files-add-vid__body">
                                            {photoPreview ? (
                                                <picture>
                                                    <source srcSet={photoPreview} type="image/webp" />
                                                    <img src={photoPreview} alt="Preview" />
                                                </picture>
                                            ) : (
                                                <picture>
                                                    <source srcSet={PostPh} type="image/webp" />
                                                    <img src={PostPh} alt="ph" />
                                                </picture>
                                            )}
                                        </div>
                                        <div className="item-files-add-vid__delete">
                                            <button className="item-files-add-vid__delete-btn" onClick={handleRemovePhoto}>
                                                <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <rect x="0.5" y="0.5" width="39" height="39" rx="9.5" stroke="white" />
                                                    <path d="M26.3281 13.1094H23.6914V12.582C23.6914 11.7097 22.9817 11 22.1094 11H17.8906C17.0183 11 16.3086 11.7097 16.3086 12.582V13.1094H13.6719C12.7995 13.1094 12.0898 13.8191 12.0898 14.6914C12.0898 15.392 12.5478 15.9873 13.1799 16.1947L14.1205 27.5493C14.1882 28.3628 14.8807 29 15.697 29H24.303C25.1193 29 25.8118 28.3628 25.8796 27.5491L26.8201 16.1947C27.4522 15.9873 27.9102 15.392 27.9102 14.6914C27.9102 13.8191 27.2005 13.1094 26.3281 13.1094ZM17.3633 12.582C17.3633 12.2913 17.5998 12.0547 17.8906 12.0547H22.1094C22.4002 12.0547 22.6367 12.2913 22.6367 12.582V13.1094H17.3633V12.582ZM24.8285 27.4618C24.8059 27.7329 24.5751 27.9453 24.303 27.9453H15.697C15.4249 27.9453 15.1941 27.7329 15.1716 27.462L14.2447 16.2734H25.7553L24.8285 27.4618ZM26.3281 15.2188H13.6719C13.3811 15.2188 13.1445 14.9822 13.1445 14.6914C13.1445 14.4006 13.3811 14.1641 13.6719 14.1641H26.3281C26.6189 14.1641 26.8555 14.4006 26.8555 14.6914C26.8555 14.9822 26.6189 15.2188 26.3281 15.2188Z" fill="white" />
                                                    <path d="M17.8896 26.3307L17.3623 17.8229C17.3443 17.5322 17.0927 17.3111 16.8034 17.3292C16.5126 17.3472 16.2916 17.5974 16.3096 17.8881L16.837 26.396C16.8543 26.6756 17.0865 26.8907 17.3628 26.8907C17.6682 26.8907 17.9084 26.6335 17.8896 26.3307Z" fill="white" />
                                                    <path d="M20 17.3281C19.7088 17.3281 19.4727 17.5642 19.4727 17.8555V26.3633C19.4727 26.6545 19.7088 26.8906 20 26.8906C20.2912 26.8906 20.5273 26.6545 20.5273 26.3633V17.8555C20.5273 17.5642 20.2912 17.3281 20 17.3281Z" fill="white" />
                                                    <path d="M23.1967 17.3292C22.9067 17.3111 22.6557 17.5321 22.6377 17.8229L22.1104 26.3307C22.0924 26.6213 22.3135 26.8716 22.6041 26.8896C22.895 26.9076 23.1451 26.6865 23.1631 26.3959L23.6904 17.8881C23.7084 17.5974 23.4874 17.3472 23.1967 17.3292Z" fill="white" />
                                                </svg>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            }

                            {!showPhotoUpload &&
                                <label className="files-add-vid__preview button button--fw">
                                    <input style={{display: 'none'}} type="file" accept="image/*" onChange={handlePhotoChange}/>
                                    <span>Choose preview</span>
                                </label>
                            }
                        </div>
                    }

                    {!selectedFile && 
                        <label className="popup-add-vid__upload button button--transparent button--fw">
                            <input style={{display: 'none'}} type="file" accept="video/*" onChange={handleFileChange}/>
                            <img src={VideoIc} alt="Icon"/>
                            <span>Upload file</span>
                        </label>
                    }


                </div>
                <div  className="popup-add-vid__actions actions-popup-add-vid">
                    <div  className="actions-popup-add-vid__block">
                        <div  className="actions-popup-add-vid__item">
                            <p>Allow Download</p>
                            <div  className="switch">
                                <div  className="switch__body">
                                    <input type="checkbox" onChange={(e) => setAllowDownload(e.target.checked)} id="switch-download"  className="switch__input"/>
                                    <label htmlFor="switch-download"  className="switch__button"></label>
                                </div>
                            </div>
                        </div>
                        <div  className="actions-popup-add-vid__item">
                            <p>Disable comments</p>
                            <div  className="switch">
                                <div  className="switch__body">
                                    <input type="checkbox" id="switch-comments" onChange={(e) => setDisableComments(e.target.checked)} className="switch__input"/>
                                    <label htmlFor="switch-comments"  className="switch__button"></label>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div  className="actions-popup-add-vid__select select-preview">
                        <p  className="select-preview__text">Please select how you would like the video to be previewed</p>
                        <div  className="select-preview__items">
                            <div  className="select-preview__item">
                                <div  className="radio">
                                    <label>
                                        <input type="radio" name="preview" id="show-preview"  className="real-radio"/>
                                        <span  className="custom-radio"></span>
                                        Show preview

                                    </label>
                                </div>
                            </div>
                            <div  className="select-preview__item">
                                <div  className="radio">
                                    <label>
                                        <input type="radio" name="preview" id="show-frame"  className="real-radio"/>
                                        <span  className="custom-radio"></span>
                                        Show single frame

                                    </label>
                                </div>
                            </div>
                            <div  className="select-preview__item">
                                <div  className="radio">
                                    <label>
                                        <input type="radio" name="preview" id="show-locked"  className="real-radio"/>
                                        <span  className="custom-radio"></span>
                                        Show locked screen

                                    </label>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <button  className="popup-add-vid__post button button--fw"><span>Post to Video Store</span></button>
            </form>
        </div>
    )
}


