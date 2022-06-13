import Intro from "./components/intro/Intro";
import About from "./components/about/about";
import Product from "./components/product/product";
import ProductList from "./components/productList/ProductList";

const App = () => {
  return (
  <div>
    <Product/>
    <About/>
    <ProductList
      Title="Goals and Company Ticket Organisers"
      Description="THis was a pain to code"
      Technologies="I'm still learning CSS"
      />
  </div>);
};

export default App;