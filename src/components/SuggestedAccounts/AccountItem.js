import  PropTypes  from "prop-types";
import classNames from 'classnames/bind';
import styles from './SuggestedAccounts.module.scss';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faCheckCircle} from '@fortawesome/free-solid-svg-icons'
const cx = classNames.bind(styles);


function AccountItem() {
    return ( 
        <div className={cx('account-item')}>
            <img
                className={cx('avatar')}
                src="https://scontent.fhan14-2.fna.fbcdn.net/v/t39.30808-6/274348158_712682196766452_7462369539506109373_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=qK2sdjnIDKwAX8VIeTC&_nc_ht=scontent.fhan14-2.fna&oh=00_AfBWusLDLwbpoMUW_NR4TB1ajDFTXaxVuYRGZBfG5VR1wg&oe=641C09BD"
                alt=""
            />
            <div className={cx('item-info')}>
                <p className={cx('nickname')}>
                    <strong>@kiritoturbo</strong>
                    <FontAwesomeIcon className={cx('check')}  icon={faCheckCircle}/>
                </p>
                <p className={cx('name')}>Nguyễn Văn Trường</p>
            </div>
        </div>
    );
}

AccountItem.propTypes={
    
}

export default AccountItem;