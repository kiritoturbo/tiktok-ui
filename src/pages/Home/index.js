

import React,{useRef,useState ,useEffect,useMemo } from "react";
import {AiFillHeart} from 'react-icons/ai'
import {FaCommentDots,FaShare} from 'react-icons/fa'
import {FiPlay} from 'react-icons/fi'
import {BsMusicNoteBeamed} from 'react-icons/bs'
import img  from "../../assets/video/image2.jpg";
import img2  from "../../assets/images/bin.jpeg";
import img1  from "../../assets/images/2.jpeg";
import img3  from "../../assets/images/3.jpeg";
import img4  from "../../assets/images/5.jpeg";
import img6  from "../../assets/images/6.jpeg";
import video  from "../../assets/video/Download.mp4";
import video1  from "../../assets/video/1.mp4";
import video2  from "../../assets/video/2.mp4";
import video3  from "../../assets/video/3.mp4";
import video4 from "../../assets/video/4.mp4";
import video6 from "../../assets/video/6.mp4";

import classNames from 'classnames/bind';
import styles from './home.module.scss'
const cx = classNames.bind(styles);


const Data=[
    {
        id:1,
        imgSrc:img,
        name:'trường nguyễn',
        descrition:'hay lắm nhé',
        music:'nhạc hay remix ',
        video:video

    },
    {
        id:2,
        imgSrc:img2,
        name:'binyetvlog',
        descrition:'Khi đôi môi em còn đỏ mộng yah sureee trả bài nào',
        music:' nhạc nền  - ⚜️ 𝓥𝓪̆𝓷 𝓗𝓾𝔂 ⚜️ ',
        video:video1

    },
    {
        id:3,
        imgSrc:img1,
        name:'08_thg1',
        descrition:'🌝',
        music:'nhạc nền - đỗ đại học - một mét sáu ',
        video:video2

    },
    {
        id:4,
        imgSrc:img3,
        name:'chau2412_',
        descrition:' mấy nay lên cân quá',
        music:' The Next Episode _ HaoZi Remix - Gà EDM 🎶 ',
        video:video3

    },
    {
        id:5,
        imgSrc:img4,
        name:'queenanna2001',
        descrition:'  thích như nào nào 😉😉😉 ',
        music:' nhạc nền  - mhg ',
        video:video4

    },
    {
        id:6,
        imgSrc:img6,
        name:'quynhanhtran.._',
        descrition:'',
        music:'The Next Episode _ HaoZi Remix - Gà EDM 🎶',
        video:video6

    }



] 


const Video=(props)=>{
    //auto lướt playing video
    const videoRef=useRef();
    const options = {
        root: null,
        rootMargin: '0px',
        threshold: 0.3
    }
    const isVisibile = useElementOnScreen(options, videoRef)
    useEffect(() => {
        if (isVisibile) {
          if (!playing) {        
            videoRef.current.play();
            setPlaying(true)
          }
        }
        else {
          if (playing) {        
            videoRef.current.pause();
            setPlaying(false)
          }
        }
      }, [isVisibile])
    
    const [playing,setPlaying]=useState(false);
    const handleVideo=()=>{
        if(playing){
            videoRef.current.pause();
            setPlaying(false);
        }else{
            videoRef.current.play();
            setPlaying(true);
        }
    }
    // console.log(props)
    return(
        <div className={cx('videoHead')}>
            <div className={cx('containerVideo')}>
                <video 
                    ref={videoRef}
                    onClick={handleVideo}
                 className={cx('contentVideo')} src={props.videoContent}  loop typeof="video/mp4"></video>
                {/* <div className={cx('overlay')}>
                    <FiPlay className={cx('icon')}/>
                </div> */}
            </div>

            <div className={cx('videoFoo')}>
                <div   className={cx('descri')}>
                    <div className={cx('borderComm')}><AiFillHeart className={cx('icon')}/></div>
                    <span>565.5k</span>
                </div>

                <div  className={cx('descri')}>
                    <div className={cx('borderComm')}><FaCommentDots className={cx('icon')}/></div>
                    <span>565.5k</span>

                </div>

                <div  className={cx('descri')}>
                    <div className={cx('borderComm')}><FaShare className={cx('icon')}/></div>
                    <span>565.5k</span>

                </div>
            </div>
        </div>
    )
}

function Home() {

        // const [videos,setVideos]=useState([]);
        // useEffect(()=>{
        //     db.collection('videos')
        //         .get()
        //         .then((querySnapshot)=>{
        //             setVideos(querySnapshot.docs.map((doc) => doc.data()))
        //     })
        // },[])
    
    return (
        <>
            {
                Data.map(({id,imgSrc,name,descrition,music,video})=>{
                    return(
                   <>
                        <div className={cx('home')}>
                            <div className={cx('container')}>
                                <img src={imgSrc} className={cx('avatar')} alt=""/>
                
                                <div className={cx('desImg')}>
                                    <div className={cx('desFirst')}>
                                        <a href='' className={cx('nameTitle')}>{name}</a>
                                        <span className={cx('namedes')}>Tư vấn nam khoa</span>
                                    </div>
                                    
                                    <div className={cx('description')}>
                                        <p className={cx('nameTitle')}>{descrition}</p>
                                        <span className={cx('namedes')}>#xuhuongtiktok</span>
                                        <span className={cx('namedes')}>#xuhuongtiktok</span>
                                    </div>
                
                                    <div className={cx('desMusic')}>
                                        <BsMusicNoteBeamed className={cx('icon')}/>
                                        <a href="" className={cx('nameTitle')}>{music}</a>
                                    </div>
                                </div>
                            </div>
                            
                
                            <div>
                                <button className={cx('btn')}>Follow</button>
                            </div>
                            
                        </div>
                        <Video videoContent={video}/>
                   </>
                    )
                })
            }

            
        </>

        

        
    );
}


export const useElementOnScreen = (options, targetRef) => {
    const [isVisibile, setIsVisible] = useState()
    const callbackFunction = entries => {
        const [entry] = entries //const entry = entries[0]
        setIsVisible(entry.isIntersecting)
    }
    const optionsMemo = useMemo(() => {
        return options
    }, [options])
    useEffect(() => {
        const observer = new IntersectionObserver(callbackFunction, optionsMemo)
        const currentTarget = targetRef.current
        if (currentTarget) observer.observe(currentTarget)

        return () => {
        if(currentTarget) observer.unobserve(currentTarget)
        }
    }, [targetRef, optionsMemo])
    return isVisibile
}

export default Home;