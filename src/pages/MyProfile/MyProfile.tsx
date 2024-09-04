import ProfilePh from '../../assets/img/user/profile-top.jpg';
import UserPh from '../../assets/img/user/01.png';
import MoneyIc from '../../assets/img/icons/money-white.svg';
import SaleIc from '../../assets/img/icons/sale.svg';
import EditIc from '../../assets/img/icons/edit.svg';
import { IUser } from '../../models';
import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { MyProfileVid } from './components/MyProfileVid';
import { toast } from 'react-toastify';

export const MyProfile = () => {
    const user: IUser = useSelector((state: any) => state.toolkit.user);

    const [usernameValue, setUsernameValue] = useState<string>(user.username);
    const [usernameError, setUsernameError] = useState<string>("Angelina");

    const [usertagValue, setUsertagValue] = useState<string>(user.usertag);
    const [usertagError, setUsertagError] = useState<string>("Angel");

    const [userPhoto, setUserPhoto] = useState<string>(UserPh);
    const [coverPhoto, setCoverPhoto] = useState<string>(ProfilePh);

    const [isFormValid, setIsFormValid] = useState<boolean>(false);

    const handleProfilePhotoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files[0]) {
            const reader = new FileReader();
            reader.onload = (e) => {
                if (e.target && e.target.result) {
                    setUserPhoto(e.target.result as string);
                }
            };
            reader.readAsDataURL(e.target.files[0]);
        }
    };

    const handleCoverPhotoChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (event.target.files && event.target.files[0]) {
            const reader = new FileReader();
            reader.onload = (e) => {
                if (e.target && e.target.result) {
                    setCoverPhoto(e.target.result as string);
                }
            };
            reader.readAsDataURL(event.target.files[0]);
        }
    };

    const handleUsernameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setUsernameValue(e.target.value);
        setUsernameError("");
    };

    const handleUsertagChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setUsertagValue(e.target.value);
        setUsertagError("");
    };

    const checkFormValidity = () => {
        let isValid = true;

        if (!usernameValue?.trim()) {
            setUsernameError("Please enter a display name");
            isValid = false;
        } else {
            setUsernameError("");
        }

        if (!usertagValue?.trim()) {
            setUsertagError("Please enter a username");
            isValid = false;
        } else {
            setUsertagError("");
        }

        setIsFormValid(isValid);

        return isValid;
    };

    useEffect(() => {
        setUsernameError("");
        setUsertagError("");
    }, []);

    const handleSaveChanges = () => {
        const isValid = checkFormValidity();

        if (isValid) {
            toast.success('Your data has been saved');
        } else {
            toast.error('Please fill out all required fields');
        }
    };

    return (
        <div className="profile">
            <div className="profile__container">
                <div className="profile__body body-profile">
                    <div className="body-profile__header">
                        <h2 className="body-profile__title title title--medium">My profile</h2>
                    </div>
                    <div className="body-profile__block">
                        {user.sex === "woman" && (
                            <div className="body-profile__top-image">
                                <img src={coverPhoto} alt="ph" />
                                <button className="edit" onClick={() => document.getElementById('coverPhotoInput')?.click()}>
                                    <img className="ibg" src={EditIc} alt="Icon" />
                                </button>
                                <input
                                    type="file"
                                    id="coverPhotoInput"
                                    style={{ display: 'none' }}
                                    accept="image/*"
                                    onChange={handleCoverPhotoChange}
                                />
                            </div>
                        )}
                        <div className="body-profile__wrapper">
                            <div className="body-profile__top top-body-profile">
                                <div className="top-body-profile__image">
                                    <img className="ibg" src={userPhoto} alt="ph" />
                                    <button className="edit" onClick={() => document.getElementById('profilePhotoInput')?.click()}>
                                        <img src={EditIc} alt="Icon" />
                                    </button>
                                    <input
                                        type="file"
                                        style={{ display: 'none' }}
                                        id="profilePhotoInput"
                                        accept="image/*"
                                        onChange={handleProfilePhotoChange}
                                    />
                                </div>
                                <div className="top-body-profile__actions">
                                    <button className="top-body-profile__button button button--transparent" onClick={() => document.getElementById('profilePhotoInput')?.click()}>
                                        <span>Edit profile photo</span>
                                    </button>

                                    {user.sex === "woman" && (
                                        <button className="top-body-profile__button button button--transparent" onClick={() => document.getElementById('coverPhotoInput')?.click()}>
                                            <span>Edit cover photo</span>
                                        </button>
                                    )}
                                </div>
                            </div>
                            <div className="body-profile__content content-body-profile">
                                <input
                                    type="text"
                                    value={usernameValue}
                                    onChange={handleUsernameChange}
                                    placeholder="Display name"
                                    className="content-body-profile__input input input-main"
                                />
                                {usernameError && <p className="error-message" style={{color: '#CB0000', marginTop: '-15px'}}>{usernameError}</p>}

                                <input
                                    type="text"
                                    value={usertagValue}
                                    onChange={handleUsertagChange}
                                    placeholder="Username"
                                    className="content-body-profile__input input input-main"
                                />
                                {usertagError && <p className="error-message" style={{color: '#CB0000', marginTop: '-15px'}}>{usertagError}</p>}

                                <textarea placeholder="About me" className="content-body-profile__about textarea"></textarea>
                            </div>
                            {user.sex === "woman" && (
                                <div className="body-profile__subscription subscription-body-profile">
                                    <div className="subscription-body-profile__price">
                                        <p className="subscription-body-profile__text">Subscription price</p>
                                        <div className="subscription-body-profile__field">
                                            <div className="subscription-body-profile__image-input">
                                                <img src={MoneyIc} alt="Icon" />
                                            </div>
                                            <input min="0" type="number" placeholder="" className="subscription-body-profile__input input input-main" />
                                        </div>
                                    </div>
                                    <div className="subscription-body-profile__sale">
                                        <p className="subscription-body-profile__text">Sale</p>
                                        <div className="subscription-body-profile__field">
                                            <div className="subscription-body-profile__image-input">
                                                <img src={SaleIc} alt="Icon" />
                                            </div>
                                            <input min="0" type="number" placeholder="" className="subscription-body-profile__input input input-main" />
                                        </div>
                                    </div>
                                </div>
                            )}
                            <button onClick={handleSaveChanges} className="body-profile__button button">
                                <span>Save changes</span>
                            </button>
                        </div>
                    </div>
                </div>

                {user.sex === "woman" && <MyProfileVid />}
            </div>
        </div>
    );
};

