import React from 'react'
import './about.css'
import Award from '../../img/email.png'

const about = () => {
  return (
    <div className='a'>
        <div className="a-left">
            <div className="a-card bg"></div>
            <div className="a-card">
                <img src="https://images.unsplash.com/photo-1526512340740-9217d0159da9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dmVydGljYWx8ZW58MHx8MHx8&w=1000&q=80"
                    alt=""
                  className="a-img" />
            </div>
        </div>
        <div className="a-right">
    
        <h1 className="a-title">About Me</h1>
        <p className="a-sub">
          I am a 3rd Year Computer Engineering Student at UBC with a passion for projects for social good with many personal projects as shown below:
        </p>
        <p className="a-desc">
        I design and develop services for customers of all sizes and I specialize in creating stylish modern websites/apps and web services to improve productivity.
        Furthermore I am working to develop game engines using C++, Python, and Artificial Intelligence
        </p>
        <div className="a-award">
            <img src={Award} alt="" className="a-award-img" />
            <div className="a-award-texts">
            <h4 className="a-award-title">To reach a form to contact me click here</h4>
            <p className="a-award-desc">
              To see my resume click here
            </p>
          </div>
        </div>
        </div>
    </div>
  )
}

export default about
