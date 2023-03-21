import classNames from 'classnames/bind';
import config from '~/config';
import styles from './Sidebar.module.scss';

import {HomeIcon,HomeActiveIcon,UserGroupIcon,UserGroupActiveIcon,LiveIcon,LiveActiveIcon}from '~/components/Icons'

import Menu,{MenuItem} from './Menu'

const cx = classNames.bind(styles);

function Sidebar() {
    return (
        <aside className={cx('wrapper')}>
            <Menu>
                <MenuItem title="For you" to={config.routes.home} 
                    icon={<HomeIcon/>} activeIcon={<HomeActiveIcon/>}/>
                <MenuItem title="Following" to={config.routes.following} 
                    icon={<UserGroupIcon/>} activeIcon={<UserGroupActiveIcon/>}/>
                <MenuItem title="Live" to={config.routes.live} 
                    icon={<LiveIcon/>} activeIcon={<LiveActiveIcon/>}/>
            </Menu>
        </aside>
    )  
      
}

export default Sidebar;