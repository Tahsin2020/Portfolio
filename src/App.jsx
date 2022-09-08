import React, {useState} from 'react'

import Product from "./components/product/product";
import ProductList from "./components/productList/ProductList";

import Ticket from './img/CSharp_ASP.NET.png';
import Extension from './img/Chrome_Summarizer.png';
import Intro from './components/intro/Intro';

const App = () => {
  const [Title, setTitle] = useState(true)
  return (
  <div>
    <Product 
      Title ={Title}
      setTitle ={setTitle}
    />
    <Intro/>
    { Title ?
    <div>
    <ProductList
      Title="Goals and Company Ticket Organisers"
      Description="A Website with user and admin functionality, where one can add personal goals or public tickets."
      Technologies="C#, ASP.NET, MSQL, JQuery, Bootstrap"
      src={Ticket}
      />
      <ProductList
        Title="Web Page Summarizing Chrome Extension"
        Description="An Extension to summarize a whole page or find the most important key words."
        Technologies="Chrome-Developer API's, JavaScript, CSS, HTML"
        src={Extension}
        />
        </div>
        :
        <div></div>
        }
  </div>);
};

export default App;