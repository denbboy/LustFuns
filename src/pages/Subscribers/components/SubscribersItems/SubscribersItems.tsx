// import UserBgPh from '../../../../assets/img/user/bg.jpg'
import UserPh from '../../../../assets/img/user/01.png'
import { SubscribersUser } from '../SubscribersUser'

export const SubscribersItems = () => {
    return (
        <div className="page-subscribers__items">
            
            <SubscribersUser
                user={{
                    username: "Alex",
                    usertag: "@alexxx",
                    photo: UserPh
                }}
                price={150}
                date='20.05.2020'
                isSubscriber={true}
            />
            <SubscribersUser
                user={{
                    username: "ASdsad",
                    usertag: "@asdasdad",
                    photo: UserPh
                }}
                price={1220}
                date='25.05.2020'
                isSubscriber={true}
            />
            
        </div>              
    )
}
