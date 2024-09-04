import UserBgPh from '../../../../assets/img/user/bg.jpg'
import UserPh from '../../../../assets/img/user/01.png'
import { SubscribersUser } from '../SubscribersUser'

export const Followers = () => {
    return (
        <div className="page-subscribers__items followers">
            
            
            <SubscribersUser
                user={{
                    username: "ASdsad",
                    usertag: "@asdasdad",
                    photo: UserPh
                }}
                price={1220}
                date='25.05.2020'
                isFollower={true}
            />
            <SubscribersUser
                user={{
                    username: "Anastasia",
                    usertag: "@anast",
                    photo: UserPh
                }}
                price={1220}
                date='25.05.2020'
                isFollower={true}
            />

        </div>
    )
}
