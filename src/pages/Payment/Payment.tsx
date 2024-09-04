import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Wallet from '../../assets/img/icons/payment/wallet.svg';
import WalletActive from '../../assets/img/icons/payment/active.svg';
import WalletChip from '../../assets/img/icons/payment/chip.svg';

export const Payment = () => {
    const paymentStore = useSelector((state: any) => state.toolkit.payment);
    const [activeCard, setActiveCard] = useState<number | null>(null); // State to track active card index

    // Handler to set active card index
    const handleSetActiveCard = (index: number) => {
        setActiveCard(index);
    };

    return (
        <div className="payment">
            <div className="payment__container">
                <div className="payment__header">
                    <h2 className="payment__title title title--medium">Payment Method</h2>
                </div>
                <div className="payment__body body-payment">
                    <div className="body-payment__items">
                        {paymentStore.map((card: any, index: number) => (
                            <div
                                key={index}
                                className={`body-payment__item item-body-payment ${activeCard === index ? 'active' : ''}`}
                                onClick={() => handleSetActiveCard(index)}
                            >
                                <div className="item-body-payment__logo logo-item-body-payment">
                                    <svg width="39" height="25" viewBox="0 0 39 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        {/* SVG Path for card logo */}
                                    </svg>
                                </div>
                                <div className="item-body-payment__content">
                                    <p className="item-body-payment__text">Credit Card</p>
                                    <div className="item-body-payment__num"><span>{card.cardNumber.slice(-4)}</span></div>
                                    <div className="item-body-payment__footer">
                                        <div className="item-body-payment__icon">
                                            <img src={WalletChip} alt="Icon" />
                                        </div>
                                        <div className="item-body-payment__expire">{card.expiry}</div>
                                    </div>
                                </div>
                                {activeCard === index && (
                                    <div className="item-body-payment__active active-item-body-payment">
                                        <div className="active-item-body-payment__image">
                                            <img src={WalletActive} alt="Icon" />
                                        </div>
                                    </div>
                                )}
                            </div>
                        ))}
                        <NavLink to={'/payment-add'} className="body-payment__add add-body-payment">
                            <div className="add-body-payment__image">
                                <img src={Wallet} alt="Icon" />
                            </div>
                            <div className="add-body-payment__text">Add payment card</div>
                        </NavLink>
                    </div>
                </div>
            </div>
        </div>
    );
};
