import classNames from 'classnames/bind';
import styles from './Header.module.scss'


const cx = classNames.bind(styles);//hỗ trợ viết class có dấu gạch ngang kiểu post-item

function Header() {
    return <header className={cx('wrapper')}>
        <div className={cx('inner')}>
            
        </div>
    </header>;
}

export default Header;