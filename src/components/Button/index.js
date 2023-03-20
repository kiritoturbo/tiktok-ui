import classNames from "classnames/bind";
import { Link } from "react-router-dom";
import styles from './Button.module.scss'
import PropTypes from 'prop-types'
const cx = classNames.bind(styles);

function Button({
        to,
        disabled=false,
        href,
        text=false,
        leftIcon,
        rightIcon,
        rounded,
        className, 
        primary=false,
        children,
        large=false, 
        outline=false ,
        small=false, 
        onClick,
        ...passProps
    }) {
    let Comp='button';//Comp viết tắt của component
    const props={
        onClick,
        ...passProps
    }


    //remove event listener when button in disabled 
    if(disabled){
        // delete props.onClick;
        Object.keys(props).forEach((key)=>{
            if(key.startsWith('on')&&typeof props[key]!=='function'){
                delete props[key];
            }
        })
    }

    if(to){
        props.to=to;
        Comp=Link;
    }else if(href){
        props.href=href
        Comp='a'
    }

    const classes = cx('wrapper',{
        primary,
        outline,
        small,
        large,
        text,
        disabled,
        rounded,
        [className]: className
    });


    return ( 
        <Comp className={classes} {...props} >
            {leftIcon && <span className={cx('icon')}>{leftIcon}</span>}
            <span className={cx('title')}>{children}</span>
            {rightIcon && <span className={cx('icon')}>{rightIcon}</span>}

        </Comp>
     );
}

Button.propTypes={
    to:PropTypes.string,
    disabled:PropTypes.bool,
    href:PropTypes.string,
    text:PropTypes.bool,
    leftIcon:PropTypes.node,
    rightIcon:PropTypes.node,
    rounded:PropTypes.bool,
    className:PropTypes.string,
    primary:PropTypes.bool,
    children:PropTypes.node.isRequired,
    large:PropTypes.bool,
    outline:PropTypes.bool,
    small:PropTypes.bool,
    onClick:PropTypes.func,
}

export default Button;