import UserBgPh from '../../../../assets/img/user/bg.jpg'
import UserPh from '../../../../assets/img/user/01.png'
import BlockedUserIc from '../../../../assets/img/icons/blocked-user.svg'
import { SubscribersUser } from '../SubscribersUser'

export const BlockedUsers = () => {
    return (
        <div className="page-subscribers__items blocked-users">
            
            <SubscribersUser
                user={{
                    username: "Anastasia",
                    usertag: "@anast",
                    photo: UserPh
                }}
                date='25.05.2020'
                isBlocked={true}
            />
            <SubscribersUser
                user={{
                    username: "Anastasi123a",
                    usertag: "@anast",
                    photo: UserPh
                }}
                date='25.05.2020'
                isBlocked={true}
            />
            <SubscribersUser
                user={{
                    username: "Anastasasdia",
                    usertag: "@anast",
                    photo: UserPh
                }}
                date='25.05.2020'
                isBlocked={true}
            />

        </div>
    )
}
