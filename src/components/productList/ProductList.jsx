import React from 'react'
import './productList.css'

const ProductList = (props) => {
  return (
    <div className='pL'>
      <div className='pL-left'>
        <div className='pL-left-info'>
          <h1 className="Bottom_Margin">
            {props.Title}
          </h1>
          <h2>{props.Description}</h2>
          <h2 className="Bottom_Margin">
          {props.Technologies}
          </h2>
          <div className='pL-left-buttons'>
            <div className='pL-left-live'>
              Live Version
            </div>
            <div className='pL-left-live'>
              Github
            </div>
          </div>
        </div>
      </div>
      <div className='pL-right'>
      </div>
    </div>
  )
}

export default ProductList