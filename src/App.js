import './App.css';
import { useState, useEffect } from 'react';

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
  return (
    <div className='mainContainer'>
    <header>My Store</header>
    <section>
      <nav>
        {results.map(result => {
          return <li key={result.id}>
            {result.title}
          </li>
        })}
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
