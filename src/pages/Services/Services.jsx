import React from 'react';
import ImageEditor from '../../assets/camera-viewfinder.png';
import CvBuilder from '../../assets/cv.png';
import CanvasDrawer from '../../assets/diagram-lean-canvas.png';
import VoiceOver from '../../assets/microphone.png';
import NoteEditor from '../../assets/note-medical.png';
import VideoEditor from '../../assets/scissors.png';

import './Services.scss'

const Data = [
  {
    id:1,
    name: "Get Started",
    title: "Premium Resume & Cv Builder",
    img: ImageEditor,
    desc: "Take advantage of our new Resume & Cv Builder To Convince Employers.",
    link: "#"
},

{
    id:2,
    name: "Build CV",
    title: "Premium Resume & Cv Builder",
    img: CvBuilder,
    desc: "Take advantage of our new Resume & Cv Builder To Convince Employers.",
    link: "#"
},

{
    id:3,
    name: "Learn More",
    title: "Custom Canvas Drawer & Downloader",
    img: CanvasDrawer,
    desc: "If you are a freelacer then we got your back Lorem ipsum dolor sit.",
    link: "#"
},

{
    id:4,
    name: "Edit Now",
    title: "Voice Over & Voice Editing",
    img: VoiceOver,
    desc: "See how Katie Sowers, Asst. Coach for the 49ers, uses Surface Pro 7.",
    link: "#"
},

{
    id:5,
    name: "Note Down",
    title: "Pdf Note Editor & Downloader",
    img: NoteEditor,
    desc: "If you are a freelacer then we got your back Lorem ipsum dolor sit.",
    link: "#"
},

{
    id:6,
    name: 'Get Editing',
    title: "Advanced Video Editing Tools",
    img: VideoEditor,
    desc: "See how Katie Sowers, Asst. Coach for the 49ers, uses Surface Pro 7.",
    link: "#"
},
{
  id:1,
  name: "Get Started",
  title: "Premium Resume & Cv Builder",
  img: ImageEditor,
  desc: "Take advantage of our new Resume & Cv Builder To Convince Employers.",
  link: "#"
},

{
  id:2,
  name: "Build CV",
  title: "Premium Resume & Cv Builder",
  img: CvBuilder,
  desc: "Take advantage of our new Resume & Cv Builder To Convince Employers.",
  link: "#"
},

{
  id:3,
  name: "Learn More",
  title: "Custom Canvas Drawer & Downloader",
  img: CanvasDrawer,
  desc: "If you are a freelacer then we got your back Lorem ipsum dolor sit.",
  link: "#"
},

{
  id:4,
  name: "Edit Now",
  title: "Voice Over & Voice Editing",
  img: VoiceOver,
  desc: "See how Katie Sowers, Asst. Coach for the 49ers, uses Surface Pro 7.",
  link: "#"
},

{
  id:5,
  name: "Note Down",
  title: "Pdf Note Editor & Downloader",
  img: NoteEditor,
  desc: "If you are a freelacer then we got your back Lorem ipsum dolor sit.",
  link: "#"
},

{
  id:6,
  name: 'Get Editing',
  title: "Advanced Video Editing Tools",
  img: VideoEditor,
  desc: "See how Katie Sowers, Asst. Coach for the 49ers, uses Surface Pro 7.",
  link: "#"
},
        ]
export default function Services() {


  function Service({item}) {
  return (
    <div className='service'>
    <img src={item.img} alt="" />
    <h3>{item.title}</h3>
    <p>
      {item.desc}
    </p>
    <a href="#">{item.name}<i className="fas fa-chevron-right"></i></a>
  </div>)};
  
  
  return (
    <div className='services'>
      <div className="post-container">
        {
          Data.map(item => {
            return <Service item={item} />
          })
        }
      </div>
    </div>
  )
}
