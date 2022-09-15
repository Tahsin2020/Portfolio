import React, {useEffect} from 'react'
import './productList.css'

const ProductList = (props) => {
  console.log("props")
  const observer = new IntersectionObserver((entries)=>{
    entries.forEach((entry)=>{
      console.log(entry)
      if(entry.isIntersecting){
        entry.target.classList.add('show');
      } else {
        entry.target.classList.remove('show');
      }
    });
  });

  useEffect(() => {

  const hiddenElements = document.querySelectorAll('.hidden');
  hiddenElements.forEach((el)=>{observer.observe(el)})

  });

  return (
    <div className='pL hidden'>
      <div className='pL-left '>
        <div className='pL-left-info'>
          <h1 className="bottom_margin">{props.Title}</h1>
          <h2 className="bottom_margin">{props.Description}</h2>
          <h2 className="bottom_margin">{props.Technologies}</h2>
          <div className='pL-left-buttons'>
            {
            !props.live ? <h3 className='Props'> Live version is <br/> still in development. </h3> :
            <div className='pL-left-live'>
              <a href={props.live}>Live Version</a>
            </div>
            }
            {
            !props.github ? <h3 className='Props'> Github Repository <br/> hasn't been set up. </h3> :
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