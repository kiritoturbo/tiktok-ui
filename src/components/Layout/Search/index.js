import { Wrapper as PopperWrapper } from '~/components/Popper';
import { useEffect, useState, useRef } from 'react';

import { faCircleXmark, faSpinner,faSearch, faSignIn, faEllipsisVertical, faEarthAsia, faQuestion, faKeyboard, faCloudArrowUp, faMessage, faUser, faCoins, faGear, faArrowCircleRight, faSignOut } from '@fortawesome/free-solid-svg-icons';
import HeadlessTippy from '@tippyjs/react/headless'; // different import path!s
import AccountItem from '~/components/AccountItem';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import classNames from 'classnames/bind';
import styles from './Search.module.scss'
const cx = classNames.bind(styles);//hỗ trợ viết class có dấu gạch ngang kiểu post-item

// import { faArrowAltCircleLeft } from '@fortawesome/free-regular-svg-icons';



function Search() {

    const[searchValue, setSearchValue] = useState('');
    const [searchResult, setSearchResult] = useState([]);
    const[showResults, setShowResults]=useState(true);

    const inputRef = useRef();


    const handleHideResults=()=>{
        setShowResults(false);
    }

    const handleClear=()=>{
        setSearchValue(' ')
        setSearchResult([])
        inputRef.current.focus();
    }
    
    useEffect(()=>{
        setTimeout(() => {
            setSearchResult([1]);
        },3000)
    },[])
    return ( 
        <HeadlessTippy
        interactive
        visible={showResults && searchResult.length > 0}
        render={(attrs)=>(
            <div className={cx('search-result')} tabIndex="-1" {...attrs}>
                    <PopperWrapper>
                        <h4 className={cx('search-title')}>
                            Accounts
                        </h4>
                        <AccountItem/>
                        <AccountItem/>
                        <AccountItem/>
                        <AccountItem/>
                    </PopperWrapper>
                </div>
        )}
        onClickOutside={handleHideResults}
   >
        <div className={cx('search')}>
            <input  
                ref={inputRef}
                value={searchValue}
                placeholder='Search accounts and videos ' 
                spellCheck={false} 
                onChange={(e)=>setSearchValue(e.target.value)}
                onFocus={()=>setShowResults(true)}
            />
            {!!searchValue && (
                <button className={cx('clear')} onClick={()=>{
                    // setSearchValue(' ') //làm trống ô text
                    // inputRef.current.focus();//focus trong ô input
                    handleClear()
                }}>
                    <FontAwesomeIcon icon={faCircleXmark} />
                </button>
            )}

            {/* <FontAwesomeIcon icon={faSpinner} className={cx('loading')} /> */}
            {/* loading  */}

            
            <button className={cx('search-btn')}>
                {/* search  */}
                <FontAwesomeIcon icon={faSearch} />
            </button>
        </div>
   </HeadlessTippy>
     );
}

export default Search;