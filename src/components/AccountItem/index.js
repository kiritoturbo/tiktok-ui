import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classNames from "classnames/bind";
import styles from './AccountItem.module.scss'
import Image from "~/components/Image";

const cx = classNames.bind(styles);

function AccountItem() {
    return (  
        <div className={cx('wrapper')}>
            <Image  src="https://scontent.fhan14-3.fna.fbcdn.net/v/t39.30808-6/299785096_827988428569161_6546429883641088462_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=730e14&_nc_ohc=UqzyeFm85_4AX-7-Fbz&_nc_ht=scontent.fhan14-3.fna&oh=00_AfCLu0ePokPwg5RekP_pUICYQMKGfDewIh6094WSLJvM4g&oe=641AB708" className={cx('avatar')} alt="trường"/>
            <div className={cx('info')}>
                <h4 className={cx('name')}>
                    <span>Nguyễn Văn Trường</span>
                    <FontAwesomeIcon className={cx('check')} icon={faCheckCircle}/>
                </h4>
                <span className={cx('username')}>@kiritoturbo</span>
            </div>
        </div>
    );
}

export default AccountItem;