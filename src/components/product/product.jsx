import React from 'react'
import './product.css'




const Product = ({Title, setTitle}) => {
  const onClick = () =>  setTitle(!Title)
  
  return (
    <div class="pr">
      <center>
      <h1 class="pr-name">Tahsin Hasan</h1>
      { Title ?
      <h2 class="pr-title">Full Stack Developer/<button class="Gray" onClick={onClick}>Game Designer</button></h2>
      :
      <h2 class="pr-title"><button class="Gray" onClick={(onClick)}>Full Stack Developer</button>/Game Designer</h2>
      }
      <h3 class="pr-title"><br/>A passionate programmer with a love<br/> for learning and building projects. </h3>
      </center>
    </div>
  )
}

export default Product