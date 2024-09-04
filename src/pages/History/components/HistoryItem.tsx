import React from 'react'

interface IHistoryItemProps {
    session: string
    cost: Number
    fee: number
    date: string
    paymentMethod: string
    status: string
    email: string
}

export const HistoryItem: React.FC<IHistoryItemProps> = ({ session, cost, fee, date, paymentMethod, status, email }) => {

    const statusTypes: {[key: string]: string} = {
        "PAID": "Paid"
    }

    return (
        <div className="body-earnings__item item-body-earnings">
            <div className="item-body-earnings__session item-body-earnings__cell">
                <p className="item-body-earnings__text">Session</p>
                <div className="item-body-earnings__date">
                    {session}
                </div>
            </div>
            <div className="item-body-earnings__payout item-body-earnings__cell">
                <p className="item-body-earnings__text">Payout</p>

                <p className="item-body-earnings__value">$<span>
                    {cost.toString()}
                </span></p>
            </div>
            <div className="item-body-earnings__fee item-body-earnings__cell">
                <p className="item-body-earnings__text">Processing Fee</p>
                <p className="item-body-earnings__value">$<span>
                    {fee.toString()}
                </span></p>
            </div>
            <div className="item-body-earnings__at item-body-earnings__cell">
                <p className="item-body-earnings__text">Processing At</p>
                <div className="item-body-earnings__date">
                    {date}
                </div>
            </div>
            <div className="item-body-earnings__payment-method item-body-earnings__cell">
                <p className="item-body-earnings__text">Payment Method</p>
                <p className="item-body-method">
                    {paymentMethod}
                </p>
            </div>
            <div className="item-body-earnings__payment-status paid item-body-earnings__cell">
                <p className="item-body-earnings__text">Payment Status</p>
                <p className="item-body-earnings__status">
                    {statusTypes[status]}
                </p>
            </div>
            <div className="item-body-earnings__invoice item-body-earnings__cell">
                <a href={`mailto:${email}`} className="item-body-earnings__link button button--fw"><span>Send email</span></a>
            </div>
        </div>
    )
}
