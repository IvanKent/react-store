import './App.css';
import { useState, useEffect } from 'react';
import { getCategories  } from './fetcher';

//import components
import ProductDetail from './components/ProductDetail';
import Basket from './components/Basket';
import Checkout from './components/Checkout';
import Category from './components/Category';
import Layout from './components/Layout';
import Home from './components/Home';
import OrderConfirmation from './components/OrderConfirmation';

import {
  BrowserRouter,
  Routes, 
  Route
} from "react-router-dom"


function App() {
  const [categories, setCategories] = useState({errorMessage: '', data: []});
  useEffect(() => {
      const fetchedData = async () => {
          const responseObject = await getCategories();
          setCategories(responseObject);
      };

    fetchedData();
  }, []);



  return (
    <>
      <BrowserRouter>
        <Routes> 
          <Route path='/' element={<Layout categories={categories}/>}>
            <Route index element={<Home/>}/>
            <Route path='/basket' element={<Basket/>}/>
            <Route path='/checkout' element={<Checkout/>}/>
            <Route path='/orderconfirmation' element={<OrderConfirmation/>}/>
            <Route path='/categories/:id' element={<Category/>}/>
            <Route path='/products/:id' element={<ProductDetail/>}/>

          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App;
