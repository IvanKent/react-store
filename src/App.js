import './App.css';
import { useState, useEffect } from 'react';
import CategoryProduct from './components/CategoryProduct';
import { getCategories, getProducts  } from './fetcher';

import { Link } from 'react-router-dom';

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
      return <li key={category.id}><Link to={`/categories/${category.id}`}>{category.title}</Link></li>
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
        <ul>
          {categories.data && renderCategories()}
        </ul>

        {categories.errorMessage && <div>Error: {categories.errorMessage}</div>}
      </nav>
      <article>

      </article>
    </section>
    <footer>
      footer
    </footer>

    </div>
  )
}

export default App;
