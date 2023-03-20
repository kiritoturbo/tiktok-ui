//layout
import {HeaderOnly} from '~/layouts';

import Home from '~/pages/Home'
import Following from '~/pages/Following'
import Profile from '~/pages/Profile'
import Upload from '~/pages/Upload'
import Search from '~/pages/Search'



import config from '~/config'

//những chỗ ko cần đăng nhập vẫn vào được 
const publicRoutes=[
    { path:config.routes.home,component:Home},
    { path:config.routes.following,component:Following},
    { path:config.routes.profile,component:Profile},
    { path:config.routes.upload,component:Upload , layout:HeaderOnly},
    { path:config.routes.search,component:Search , layout:null},

]

//phải đăng nhập ms vào được ko thì lái người dùng sang login
const privateRoutes=[

]
 
export {publicRoutes,privateRoutes}