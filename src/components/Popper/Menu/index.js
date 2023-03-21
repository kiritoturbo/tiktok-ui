import Tippy from '@tippyjs/react/headless'; // different import path!s
import classNames from 'classnames/bind';
import styles from './Menu.module.scss'
import MenuItem from "./MenuItem";
import { Wrapper as PopperWrapper } from '~/components/Popper';
import Header from './Header';
import { useState } from 'react';
import PropTypes from "prop-types"


const cx = classNames.bind(styles);//hỗ trợ viết class có dấu gạch ngang kiểu post-item
const defaultFn=()=>{}

function Menu({children,items=[],hideOnClick=false,onChange=defaultFn}) {

    const [history, setHistory] = useState([{
        data: items
    }]);
    const current=history[history.length-1];



    const renderItems = () => {
        return current.data.map((item, index) => {

            const isParent =!!item.children;


            return <MenuItem key={index} data={item} onClick={()=>{
                if(isParent){
                    setHistory(prev=>[...prev, item.children]);//nextPage
                }
                else{
                    onChange(item);//onchange
                }
            }} />
        }
        )
    }

    const handleResetToFristPage=()=>{
        setHistory(prev=>prev.slice(0,1))
    }
    return ( 
        <Tippy
            // visible
            interactive
            delay={[0,800]}
            offset={[12,8]}
            hideOnClick={hideOnClick}
            // visible
            placement='bottom-end'
            render={(attrs)=>(
                <div className={cx('menu-lists')} tabIndex="-1" {...attrs}>
                        <PopperWrapper className={cx('menu-popper')}>
                            
                            {history.length>1 && 
                                <Header 
                                    title={current.title} 
                                    onBack={()=>{
                                    setHistory(prev=>prev.slice(0,prev.length-1));
                            }}/>}
                            <div className={cx('menu-body')}>{renderItems()}</div >
                        </PopperWrapper>
                    </div>
            )}
            onHide={handleResetToFristPage}
        >

            {children}
        </Tippy>
     );
}

Menu.propTypes={
    children:PropTypes.node.isRequired,
    items:PropTypes.array,
    hideOnClick:PropTypes.bool,
    onChange:PropTypes.func
}

export default Menu;