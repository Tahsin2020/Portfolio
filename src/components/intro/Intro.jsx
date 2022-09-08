import React from 'react';

import Logo from "../../img/Logo.png"
import './intro.css'

const Intro = () => {
  return (
    <div className='i'>
    <div className='i-left'>
        <div className="i-left-wrapper">
            <h2 className="i-intro">Hello, My name is</h2>
            <h2 className="i-name">Tahsin Hasan</h2>
            <div className="i-title"> 
                <div className="i-title-wrapper"> 
                    <div className="i-title-item">Web Developer</div>
                    <div className="i-title-item">UI/UX Designer</div>
                    <div className="i-title-item">Game Developer</div>
                    <div className="i-title-item">Content Creator</div>
                </div>
            </div>
            <p className="i-desc">
                I design and develop services for customers of all sizes and I specialize in creating stylish modern websites/apps and web services to improve productivity.<br/>
                Furthermore, I am currently researching C++ and C# through game development projects.
            </p>
        </div>

    </div>
    <div className='i-right'>
        <div className='i-bg'></div>
        <img src={Logo} alt="" className='i-imag'/>
    </div>
    </div>
  )
}

export default Intro;