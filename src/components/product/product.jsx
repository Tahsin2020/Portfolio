import React from 'react'
import './product.css'




const Product = ({Title, setTitle}) => {
  const onClick = () =>  setTitle(!Title)
  
  return (
    <div className="pr">
      <center>
      <h1 className="pr-name">Tahsin Hasan</h1>
      { Title ?
      <h2 className="pr-title">Full Stack Developer/<button className="Gray" onClick={onClick}>Game Designer</button></h2>
      :
      <h2 className="pr-title"><button className="Gray" onClick={(onClick)}>Full Stack Developer</button>/Game Designer</h2>
      }
      <h3 className="pr-title"><br/>A passionate programmer with a love<br/> for learning and building projects. </h3>
      </center>
    </div>
  )
}

export default Product