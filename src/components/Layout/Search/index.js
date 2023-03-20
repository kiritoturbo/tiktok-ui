import { Wrapper as PopperWrapper } from '~/components/Popper';
import { useEffect, useState, useRef } from 'react';
import * as searchService from '~/apiServices/searchService'
import { faCircleXmark, faSpinner,faSearch, faSignIn, faEllipsisVertical, faEarthAsia, faQuestion, faKeyboard, faCloudArrowUp, faMessage, faUser, faCoins, faGear, faArrowCircleRight, faSignOut } from '@fortawesome/free-solid-svg-icons';
import HeadlessTippy from '@tippyjs/react/headless'; // different import path!s
import AccountItem from '~/components/AccountItem';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useDebounce } from '~/hooks';

import classNames from 'classnames/bind';
import styles from './Search.module.scss'
const cx = classNames.bind(styles);//hỗ trợ viết class có dấu gạch ngang kiểu post-item

// import { faArrowAltCircleLeft } from '@fortawesome/free-regular-svg-icons';



function Search() {

    const[searchValue, setSearchValue] = useState('');
    const [searchResult, setSearchResult] = useState([]);
    const[showResults, setShowResults]=useState(true);
    const[loading, setLoading]=useState(false);


    const debounced = useDebounce(searchValue,500)

    const inputRef = useRef();


    const handleHideResults=()=>{
        setShowResults(false);
        
    }


 

    const handleClear=()=>{
        // setSearchValue(' ') //làm trống ô text
                    // inputRef.current.focus();//focus trong ô input
        setSearchValue('')
        setSearchResult([])
        inputRef.current.focus();
    }
    
    useEffect(()=>{
        // setTimeout(() => {
        //     setSearchResult([1]);
        // },3000)
        
        if(!debounced.trim()){
        setSearchResult([])

            return
        }
        

        const fetchApi =async ()=>{
            setLoading(true)

            const result=await searchService.search(debounced);
            setSearchResult(result)

            setLoading(false)

        }
        fetchApi();


        
        


    },[debounced])
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
                        {searchResult.map(result=>(
                            <AccountItem key={result.id} data={result}/>
                        ))}
                        
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
                onChange={(e)=>{
                    if(e.target.value.startsWith(' ')){//ngăn ko cho người dùng nhập phím cách đầu tiên
                        setSearchValue('')
                    }else{
                        setSearchValue(e.target.value)
                    }
                }}
                onFocus={()=>setShowResults(true)}
            />
            {!!searchValue && !loading && (
                <button className={cx('clear')} onClick={handleClear}>
                    <FontAwesomeIcon icon={faCircleXmark} />
                </button>
            )}

            {loading && <FontAwesomeIcon icon={faSpinner} className={cx('loading')} />}
            {/* loading  */}

            
            <button className={cx('search-btn')} onMouseDown={e=>e.preventDefault()}>
                {/* search  */}
                <FontAwesomeIcon icon={faSearch} />
            </button>
        </div>
   </HeadlessTippy>
     );
}

export default Search;