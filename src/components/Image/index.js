import { useState,forwardRef } from "react";
import images from "~/assets/images";
import styles from "./Image.module.scss"
import classNames from "classnames";
// console.log(images.noImage);

const Image=forwardRef(({src,alt,className,fallback: customFallback=images.noImage,...props },ref) =>{
    const[fallBack,setFallBack]=useState('');

    const handleError=()=>{
        setFallBack(customFallback);
    }
    return <img ref={ref} className={classNames(styles.wrapper, className)} src={fallBack || src} alt={alt} {...props} onError={handleError}/>
})

export default Image;