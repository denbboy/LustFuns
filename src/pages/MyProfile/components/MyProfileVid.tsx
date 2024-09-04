import { useState } from "react";
import { toast } from "react-toastify";
import { useClickOutside } from "../../../hooks/ClickOutside";

interface ITariff {
    id: number,
    minutes: string,
    pricePerMinute: string,
    billedAmount: string,
}

export const MyProfileVid = () => {
    const [minutes, setMinutes] = useState<string>('');
    const [pricePerMinute, setPricePerMinute] = useState<string>('');
    const [billedAmount, setBilledAmount] = useState<string>('');
    const [isOpenSelect, setIsOpenSelect] = useState(false);
    const [startTariff, setStartTariff] = useState<ITariff[]>([
        {id: 1, minutes: '5', pricePerMinute: '25', billedAmount: '50'},
        {id: 2, minutes: '15', pricePerMinute: '250', billedAmount: '500'},
    ]);

    const handleAddTariff = () => {
        if (!isTariffValid()) {
            toast.warning('Перевір поля тарифу');
            return;
        }

        const newTariff: ITariff = {
            id: new Date().getTime(),
            minutes,
            pricePerMinute,
            billedAmount,
        };

        setStartTariff([...startTariff, newTariff]);

        setMinutes('');
        setPricePerMinute('');
        setBilledAmount('');
    };

    const handleDeleteTariff = (id: number) => {
        setStartTariff(startTariff.filter(tariff => tariff.id !== id));
    }

    const isTariffValid = () => {
        return minutes && pricePerMinute && billedAmount;
    };

    const handleMinuteSelection = (selectedMinutes: string) => {
        setMinutes(selectedMinutes);
    };


    const {rootEl} = useClickOutside(setIsOpenSelect)

    return (
        <div className="profile__vid vid-profile">
            <h2 className="vid-profile__title title title--medium">Custom vid settings</h2>
            <div className="vid-profile__body">
                <p className="vid-profile__text">Package Selection</p>
                <div className="vid-profile__content">
                    <div className="vid-profile__block-add block-add-vid">
                        <div className="block-add-vid__content">
                            <div className="block-add-vid__minutes minutes-block-add-vid">
                                <p className="block-add-vid__text">Minutes</p>
                                <div className="block-add-vid__field field-block-add-vid">
                                <button ref={rootEl} onClick={_ => setIsOpenSelect(prev => !prev)} className={`field-block-add-vid__item spollers__item-main spollers__item input input-main ${isOpenSelect ? 'active' : ''}`}>
                                    <div className="field-block-add-vid__title spollers__title">
                                        {minutes || "Select"}
                                    </div>
                                    <div className="spollers__wrapper">
                                        <div className="field-block-add-vid__body spollers__body">
                                            {["5 min", "10 min", "15 min", "20 min", "25 min", "30 min"].map((time) => (
                                                <div
                                                    key={time}
                                                    className="field-block-add-vid__value"
                                                    onClick={() => handleMinuteSelection(time)}
                                                >
                                                    {time}
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </button>
                                </div>
                            </div>
                            <div className="block-add-vid__price">
                                <p className="block-add-vid__text">Price per minute</p>
                                <input type="number" placeholder="$" onChange={(e) => setPricePerMinute(e.target.value)} value={pricePerMinute} className="block-add-vid__input input input-main"/>
                            </div>
                            <div className="block-add-vid__billed">
                                <p className="block-add-vid__text">Billed in one payment of</p>
                                <input type="number" placeholder="$" onChange={(e) => setBilledAmount(e.target.value)} value={billedAmount} className="block-add-vid__input input input-main"/>
                            </div>
                        </div>
                        <button className="block-add-vid__button add-button" onClick={handleAddTariff}>
                            <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g clip-path="url(#clip0_380_7487)">
                                <path d="M12.5 0.71875C10.1699 0.71875 7.89211 1.40971 5.95469 2.70425C4.01728 3.99879 2.50724 5.83877 1.61555 7.99151C0.723855 10.1443 0.490547 12.5131 0.945129 14.7984C1.39971 17.0837 2.52177 19.183 4.1694 20.8306C5.81704 22.4782 7.91626 23.6003 10.2016 24.0549C12.4869 24.5095 14.8558 24.2761 17.0085 23.3845C19.1612 22.4928 21.0012 20.9827 22.2958 19.0453C23.5903 17.1079 24.2813 14.8301 24.2813 12.5C24.278 9.37643 23.0357 6.38174 20.827 4.17304C18.6183 1.96434 15.6236 0.722049 12.5 0.71875ZM12.5 22.4688C10.5284 22.4688 8.60102 21.8841 6.96166 20.7887C5.32231 19.6933 4.04459 18.1364 3.29008 16.3149C2.53557 14.4933 2.33816 12.4889 2.7228 10.5552C3.10745 8.62145 4.05688 6.84518 5.45103 5.45103C6.84519 4.05687 8.62145 3.10744 10.5552 2.7228C12.4889 2.33815 14.4933 2.53556 16.3149 3.29008C18.1364 4.04459 19.6933 5.32231 20.7887 6.96166C21.8841 8.60101 22.4688 10.5284 22.4688 12.5C22.4658 15.143 21.4145 17.6768 19.5457 19.5457C17.6768 21.4145 15.143 22.4658 12.5 22.4688ZM17.9375 12.5C17.9375 12.7404 17.842 12.9709 17.6721 13.1408C17.5021 13.3108 17.2716 13.4062 17.0313 13.4062H13.4063V17.0312C13.4063 17.2716 13.3108 17.5021 13.1408 17.6721C12.9709 17.842 12.7404 17.9375 12.5 17.9375C12.2597 17.9375 12.0291 17.842 11.8592 17.6721C11.6892 17.5021 11.5938 17.2716 11.5938 17.0312V13.4062H7.96876C7.7284 13.4062 7.49789 13.3108 7.32794 13.1408C7.15799 12.9709 7.06251 12.7404 7.06251 12.5C7.06251 12.2596 7.15799 12.0291 7.32794 11.8592C7.49789 11.6892 7.7284 11.5938 7.96876 11.5938H11.5938V7.96875C11.5938 7.7284 11.6892 7.49789 11.8592 7.32793C12.0291 7.15798 12.2597 7.0625 12.5 7.0625C12.7404 7.0625 12.9709 7.15798 13.1408 7.32793C13.3108 7.49789 13.4063 7.7284 13.4063 7.96875V11.5938H17.0313C17.2716 11.5938 17.5021 11.6892 17.6721 11.8592C17.842 12.0291 17.9375 12.2596 17.9375 12.5Z" fill="white"/>
                                </g>
                                <defs>
                                <clipPath id="clip0_380_7487">
                                <rect width="25" height="25" fill="white"/>
                                </clipPath>
                                </defs>
                            </svg>
                        </button>
                    </div>
                    <div className="vid-profile__tariffs">
                        <div className="vid-profile__items">
                            {startTariff.map(tariff => (
                                <div key={tariff.id} className="vid-profile__block block-vid" style={{marginBottom: '15px'}}>
                                    <div className="block-vid__content input input-main">
                                        <div className="block-vid__minutes">
                                            <p><span>{tariff.minutes}</span></p>
                                        </div>
                                        <div className="block-vid__price">
                                            <p>$ <span>{tariff.pricePerMinute}</span></p>

                                        </div>
                                        <div className="block-vid__billed">
                                            <p>$ <span>{tariff.billedAmount}</span></p>

                                        </div>
                                    </div>
                                    
                                    <button className="block-vid__button button-delete" onClick={() => handleDeleteTariff(tariff.id)}>
                                        <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M21.2891 2.92969H17.627V2.19727C17.627 0.985693 16.6413 0 15.4297 0H9.57031C8.35874 0 7.37305 0.985693 7.37305 2.19727V2.92969H3.71094C2.49937 2.92969 1.51367 3.91538 1.51367 5.12695C1.51367 6.1 2.14966 6.92681 3.02759 7.21489L4.33398 22.9852C4.42808 24.115 5.38989 25 6.52363 25H18.4764C19.6102 25 20.572 24.115 20.6661 22.9848L21.9724 7.21484C22.8503 6.92681 23.4863 6.1 23.4863 5.12695C23.4863 3.91538 22.5006 2.92969 21.2891 2.92969ZM8.83789 2.19727C8.83789 1.79341 9.16646 1.46484 9.57031 1.46484H15.4297C15.8335 1.46484 16.1621 1.79341 16.1621 2.19727V2.92969H8.83789V2.19727ZM19.2062 22.8636C19.1749 23.2401 18.8543 23.5352 18.4764 23.5352H6.52363C6.14575 23.5352 5.82515 23.2401 5.79385 22.8639L4.50654 7.32422H20.4935L19.2062 22.8636ZM21.2891 5.85938H3.71094C3.30708 5.85938 2.97852 5.53081 2.97852 5.12695C2.97852 4.7231 3.30708 4.39453 3.71094 4.39453H21.2891C21.6929 4.39453 22.0215 4.7231 22.0215 5.12695C22.0215 5.53081 21.6929 5.85938 21.2891 5.85938Z" fill="#3F79CF" />
                                            <path d="M9.56889 21.2925L8.83647 9.47612C8.81142 9.07236 8.46196 8.76528 8.06015 8.79043C7.65639 8.81548 7.34941 9.16304 7.37441 9.56675L8.10683 21.3832C8.1309 21.7715 8.45337 22.0703 8.83715 22.0703C9.26132 22.0703 9.59492 21.7131 9.56889 21.2925Z" fill="#3F79CF" />
                                            <path d="M12.5 8.78906C12.0955 8.78906 11.7676 9.11699 11.7676 9.52148V21.3379C11.7676 21.7424 12.0955 22.0703 12.5 22.0703C12.9045 22.0703 13.2324 21.7424 13.2324 21.3379V9.52148C13.2324 9.11699 12.9045 8.78906 12.5 8.78906Z" fill="#3F79CF" />
                                            <path d="M16.9398 8.79048C16.537 8.76543 16.1885 9.07241 16.1635 9.47617L15.431 21.2926C15.4061 21.6963 15.7131 22.0438 16.1168 22.0689C16.5207 22.0939 16.8681 21.7868 16.8931 21.3832L17.6255 9.5668C17.6505 9.16304 17.3435 8.81548 16.9398 8.79048Z" fill="#3F79CF" />
                                            </svg>
                                            
                                    </button>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
