import './App.css';
import { useState, useEffect } from 'react';
import Category from './components/Category';
import { fetcher } from './fetcher';

function App() {
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);
  useEffect(() => {

      const fetchedData = async () => {
        try{
          const data = await fetcher('categories');
          setCategories(data);
        }catch(error){
          console.error('error!', error);
        }
      };

    fetchedData();
  }, []);

  const renderCategories = () => {
    return categories.map(category => {
      return <Category key={category.id} category={category} onCategoryClick={() => handleCategoryClick(category.id)}/>
    })
  }

  const renderProducts = () => {
    return products.map(product => {
      return <li key={product.id}>{product.title}</li>
    })
  }

  const handleCategoryClick = async (id) => {
    console.log(id)
    // return alert('dfskfjsf', id)
    const response = await fetch(`http://localhost:3001/products?catId=${id}`)
    const data = await response.json();
    console.log(data);
    setProducts(data);
  }
  return (
    <div className='mainContainer'>
    <header>My Store</header>
    <section>
      <nav>
        {categories && renderCategories()}
        
      </nav>
      <article>
        {products.length>1 && <h1>Products</h1>}
        {products.length<1 && <h1>No Products Found!</h1>}
        {products && renderProducts()}
      </article>
    </section>
    <footer>
      footer
    </footer>

    </div>
  )
}

export default App;
