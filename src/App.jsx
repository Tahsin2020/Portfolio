import React, {useState} from 'react'

import Product from "./components/product/product";
import ProductList from "./components/productList/ProductList";
import Intro from './components/intro/Intro';

import projects from './projects';

const App = () => {
  console.log(projects)

  const [Title, setTitle] = useState(true)
  return (
  <div>
    <Product 
      Title ={Title}
      setTitle ={setTitle}
    />
    <Intro/>
    { Title ?
    <>
    {projects.map((project)=>{
      return <ProductList
      Title={project.Title}
      Description={project.Description}
      Technologies={project.Technologies}
      src={project.src}
      live ={project.live}
      github={project.github}
      />
    })}
        </>
        :
        <div></div>
        }
  </div>);
};

export default App;