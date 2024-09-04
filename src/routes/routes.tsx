import { AutoMessage } from '../pages/AutoMessage/AutoMessage'
import { ForgotPass } from '../pages/ForgotPass/ForgotPass'
import { History } from '../pages/History/History'
import { LiveStream } from '../pages/LiveStream/LiveStream'
import { Login } from '../pages/Login/Login'
import { Main } from '../pages/Main/Main'
import { Messages } from '../pages/Messages/Messages'
import { Models } from '../pages/Models/Models'
import { NotFound } from '../pages/NotFound/NotFound'
import { Payment } from '../pages/Payment/Payment'
import { PaymentAdd } from '../pages/PaymentAdd/PaymentAdd'
import { MyProfile } from '../pages/MyProfile/MyProfile'
import { Registration } from '../pages/Registration/Registration'
import { Subscribers } from '../pages/Subscribers/Subscribers'
import { Profile } from '../pages/Profile/Profile'
import { Statistic } from '../pages/Statistic/Statistic'
import { VideoStore } from '../pages/VideoStore/VideoStore'
import { AddStore } from '../pages/AddStore/AddStore'
import { Rules } from '../pages/Rules/Rules'
import getCookies from '../functions/getCookie'

export const routes = (sex?: string) => {
    
    console.log(sex);
    

    return [
        {
            path: '/LastFans',
            element: <Main/>,
            additionalClass: 'page-main'
        },
        {
            path: '/',
            element: !getCookies('access_token') ? <Login/> : <Main/>,
            additionalClass: !getCookies('access_token') ? 'page-login' : 'page-main',
            isNotNeedHeader: !getCookies('access_token'),
            isNotNeedMessage: !getCookies('access_token'),
            isNotNeedMenu: !getCookies('access_token'),
        },
        {
            path: '/registration',
            element: <Registration/>,
            isNotNeedHeader: true,
            isNotNeedMessage: true,
            isNotNeedMenu: true,
            additionalClass: 'page-registration'
        },
        {
            path: '/login',
            element: <Login/>,
            isNotNeedHeader: true,
            isNotNeedMessage: true,
            isNotNeedMenu: true,
            additionalClass: 'page-login'
        },
        {
            path: '/forgot',
            element: <ForgotPass/>,
            isNotNeedHeader: true,
            isNotNeedMessage: true,
            isNotNeedMenu: true,
            additionalClass: 'page-recovery'
        },
        {
            path: '/live',
            element: <LiveStream/>,
            isNotNeedMessage: true,
            additionalClass: 'page-live'
        },
        {
            path: '/auto-message',
            element: <AutoMessage/>
        },
        {
            path: '/history',
            element: <History/>
        },
        {
            path: '/messages',
            element: <Messages/>,
            isNotNeedMessage: true,
            additionalClass: 'messages-page'
        },
        {
            path: '/messages/:userId',
            element: <Messages/>,
            isNotNeedMessage: true,
            additionalClass: 'messages-page'
        },
        {
            path: '/models',
            element: <Models/>
        },
        {
            path: '/payment',
            element: <Payment/>
        },
        {
            path: '/payment-add',
            element: <PaymentAdd/>,
            additionalClass: 'page-payment'
        },
        {
            path: '/profile',
            element: <MyProfile/>,
            additionalClass: 'page-profile-model'
        },
        {
            path: '/profile/:userId',
            element: <Profile/>,
            additionalClass: 'page-profile-model'
        },
        {
            path: '/my-profile',
            element: <MyProfile/>,
            additionalClass: sex === 'man' ? 'page-profile-man' : 'page-profile'
        },
        {
            path: '/statistic',
            element: <Statistic/>,
            isNotNeedMessage: true,
        },
        {
            path: '/video-store',
            element: <VideoStore/>
        },
        {
            path: '/add-store',
            element: <AddStore/>
        },
        {
            path: '/subscribers',
            element: <Subscribers/>
        },
        {
            path: '/rules',
            element: <Rules/>,
            additionalClass: 'page-main'
        },
        {
            path: '/rules/:title',
            element: <Rules/>,
            additionalClass: 'page-main'
        },
        {
            path: '*',
            element: <NotFound/>,
            isNotNeedHeader: true,
            isNotNeedMessage: true,
            isNotNeedMenu: true,
            additionalClass: 'page-registration'
        },
    ]
}
