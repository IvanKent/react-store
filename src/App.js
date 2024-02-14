import './App.css';
import { useState, useEffect } from 'react';
import Category from './components/Category';
import { getCategories, getProducts  } from './fetcher';

function App() {
  const [categories, setCategories] = useState({errorMessage: '', data: []});
  const [products, setProducts] = useState({errorMessage: '', data: []});
  useEffect(() => {
      const fetchedData = async () => {
          const responseObject = await getCategories();
          setCategories(responseObject);
      };

    fetchedData();
  }, []);

  const renderCategories = () => {
    return categories.data.map(category => {
      return <Category key={category.id} category={category} onCategoryClick={() => handleCategoryClick(category.id)}/>
    })
  }

  const renderProducts = () => {
    return products.data.map(product => {
      return <li key={product.id}>{product.title}</li>
    })
  }

  const handleCategoryClick = async (id) => {
    const responseObject = await getProducts(id);
    setProducts(responseObject);
  }
  return (
    <div className='mainContainer'>
    <header>My Store</header>
    <section>
      <nav>
        {categories.data && renderCategories()}
        {categories.errorMessage && <div>Error: {categories.errorMessage}</div>}
      </nav>
      <article>
        {products.data.length>1 && <h1>Products</h1>}
        {/* {products.data.length<1 && <h1>No Products Found!</h1>} */}
        {products.data && renderProducts()}
        {products.errorMessage && <div>Error: {products.errorMessage}</div>}
      </article>
    </section>
    <footer>
      footer
    </footer>

    </div>
  )
}

export default App;
