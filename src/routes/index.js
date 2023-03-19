//layout
import {HeaderOnly} from '~/components/Layout';

import Home from '~/pages/Home'
import Following from '~/pages/Following'
import Profile from '~/pages/Profile'
import Upload from '~/pages/Upload'
import Search from '~/pages/Search'


//những chỗ ko cần đăng nhập vẫn vào được 
const publicRoutes=[
    { path:'/',component:Home},
    { path:'/following',component:Following},
    { path:'/:nickname',component:Profile},
    { path:'/upload',component:Upload , layout:HeaderOnly},
    { path:'/search',component:Search , layout:null},

]

//phải đăng nhập ms vào được ko thì lái người dùng sang login
const privateRoutes=[

]
 
export {publicRoutes,privateRoutes}