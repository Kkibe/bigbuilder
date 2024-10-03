import { ArrowLeftOutlined, ArrowRightOutlined  } from '@mui/icons-material';
import {useState} from 'react';
import './Slider.scss'
//slides
import ImageEditor from '../../assets/camera-viewfinder.png';
import CvBuilder from '../../assets/cv.png';
import NoteEditor from '../../assets/note-medical.png';

const slides = [
    {
        id: 1,
        img: ImageEditor,
        title: "AI Image Editor",
        description: "Land Cruiser 2023 Verdict ZX Diesel",
        link: ""
    },
    {
        id: 2,
        img: CvBuilder,
        title: "Resume & CV Builder",
        description: "Find out more about our custom resume and cv builder",
        link: ""
    },
    {
        id: 3,
        img: NoteEditor,
        title: "Custom Note Editor",
        description: "Edit your notes and download as PDF files.",
        link: ""
    }
    
]

export default function Slider() {
    const [slideIndex, setSlideIndex] = useState(0);
    const handleClick = (direction) => {
        if(direction === "left") {
            setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 2)
        } else {
            setSlideIndex(slideIndex < 2 ? slideIndex + 1 : 0)
        }
    }
    return (
        <div className="slider">
                
        <div className="arrow"  onClick={() => handleClick("left")}>
           <ArrowLeftOutlined />
        </div>
           
           <div className="wrapper" style={{transform: `translateX(${slideIndex * -100}vw)`}}>
            {
                slides && slides.map(slide => {
                    return (
                        <div className="slider">
                            <div className="image-container">
                                <img src={slide.img} alt="" />
                            </div>
                            <div className="info">
                                <h1>{slide.title}</h1>
                                <p>{slide.description}</p>
                               <a className='btn'>BUY NOW</a>
                            </div>
                        </div>
                    )
                })
            }
           </div>
        
        <div className="arrow" onClick={() => handleClick("right")}>
           <ArrowRightOutlined />
        </div>
    </div>
    );
}