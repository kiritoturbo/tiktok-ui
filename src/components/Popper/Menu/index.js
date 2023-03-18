import Tippy from '@tippyjs/react/headless'; // different import path!s
import classNames from 'classnames/bind';
import styles from './Menu.module.scss'
import MenuItem from "./MenuItem";
import { Wrapper as PopperWrapper } from '~/components/Popper';


const cx = classNames.bind(styles);//hỗ trợ viết class có dấu gạch ngang kiểu post-item

function Menu({children,items=[]}) {

    const renderItems = () => {
        return items.map((item, index) => 
            <MenuItem key={index} data={item}/>
        )
    }
    return ( 
        <Tippy
            interactive
            delay={[0,800]}
            // visible
            placement='bottom-end'
            render={(attrs)=>(
                <div className={cx('menu-lists')} tabIndex="-1" {...attrs}>
                        <PopperWrapper className={cx('menu-popper')}>
                            {renderItems()}
                        </PopperWrapper>
                    </div>
            )}
        >
            {children}
        </Tippy>
     );
}

export default Menu;