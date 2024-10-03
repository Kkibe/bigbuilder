import React from 'react';
import ImageEditor from '../../assets/camera-viewfinder.png';
import CvBuilder from '../../assets/cv.png';
import CanvasDrawer from '../../assets/diagram-lean-canvas.png';
import VoiceOver from '../../assets/microphone.png';
import NoteEditor from '../../assets/note-medical.png';
import VideoEditor from '../../assets/scissors.png';
import './Featured.scss';
import { NavLink } from 'react-router-dom';


const Featured = () => {
    return (
    <section className="featured">
            <h1>Build Like A Pro</h1>
            <h2>Build Your Art In Just A Few Clicks</h2>
        <div className="wrapper">
            <NavLink to={'#'} className="item">
                <img src={ImageEditor} />
                <h3 >Image Snipping</h3>
            </NavLink>
            <NavLink to={'#'} className="item">
                <img src={CvBuilder} />
                <h3 >Cv Builder</h3>
                </NavLink>
            <NavLink to={'#'} className="item">
                <img src={CanvasDrawer} />
                <h3 >Canvas Drawer</h3>
            </NavLink>
            <NavLink to={'/about'} className="item">
                <img src={VoiceOver} />
                <h3 >Voice Over</h3>
            </NavLink>

            <NavLink to={'#'} className="item">
                <img src={NoteEditor} />
                <h3 >Note Editor</h3>
            </NavLink>
            <NavLink to={'#'} className="item">
                <img src={VideoEditor} />
                <h3 >Video Editor</h3>
            </NavLink>
            <NavLink to={'#'} className="item">
                <img src={VideoEditor} />
                <h3 >Video Editor</h3>
            </NavLink>
            <NavLink to={'#'} className="item">
                <img src={VideoEditor} />
                <h3 >Video Editor</h3>
            </NavLink>
        </div>
    </section>
    );
}
export default Featured;