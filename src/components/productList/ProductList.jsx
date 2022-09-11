import React from 'react'
import './productList.css'

const ProductList = (props) => {
  /*
  let callback = (entries, observer) => {
    entries.forEach(entry => {
  
    })
  }
  let options = {
    root: document.querySelector('.pL-right'),
    rootMargin: '0px',
    threshold: 1.0
  }
  
  let observer = new IntersectionObserver(callback, options);
  
  let target = document.querySelector('.pL-left');
  
  observer.observe(target); */

  return (
    <div className='pL'>
      <div className='pL-left'>
        <div className='pL-left-info'>
          <h1 className="Bottom_Margin">{props.Title}</h1>
          <h2 className="Bottom_Margin">{props.Description}</h2>
          <h2 className="Bottom_Margin">{props.Technologies}</h2>
          <div className='pL-left-buttons'>
            {
            !props.live ? <h3> Live version is <br/> still in development. </h3> :
            <div className='pL-left-live'>
              <a href={props.live}>Live Version</a>
            </div>
            }
            {
            !props.github ? <h3> Github Repository <br/> hasn't been set up. </h3> :
            <div className='pL-left-live'>
              <a href={props.github}>Github</a>
            </div>
            }
          </div>
        </div>
      </div>
      <div className='pL-right'>
        <img alt={props.src} src={props.src}></img>
      </div>
    </div>
  )
}

export default ProductList