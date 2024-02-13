import './App.css';
import { useState, useEffect } from 'react';
import Category from './components/Category';

function App() {
  const [results, setResults] = useState([])
  useEffect(() => {

      const fetchData = async () => {
        try{
        const response = await fetch('http://localhost:3001/categories');
        const data = await response.json();
        console.log(data);
        setResults(data);
        }catch(error){
          console.error('error!', error);
        }
      };

    fetchData();
  }, [])

  const renderCategories = () => {
    return results.map(result => {
      return <Category key={result.id} result={result}/>
    })
  }
  return (
    <div className='mainContainer'>
    <header>My Store</header>
    <section>
      <nav>
        {results && renderCategories()}
      </nav>
      <article>
        main area
      </article>
    </section>
    <footer>
      footer
    </footer>

    </div>
  )
}

export default App;
