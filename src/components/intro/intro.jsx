import React from 'react';
import './intro.css';
import bg from '../../assets/image.png';
import btnImg from '../../assets/hireme.png';
import { Link } from 'react-scroll';

const Intro = () => {
    return (
        <section id='intro'>
            <div className='introContent'>
                <span className='hello'>Hello,</span>
                <span className='introText'>I'm <span className='introName'>Graham</span> <br />Website Designer</span>
                <p className="introPara">I am a skilled web developer</p>
                <link><button className='btn'><img src='btnImg' alt='Hire Me' />Hire Me</button></link>
            </div>
            <img src={bg} alt='profile' className='bg' />
        </section>
    )
}

export default Intro;