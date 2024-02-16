import { Outlet, Link } from "react-router-dom"

export default function Layout({categories, }){

    const renderCategories = () => {
        return categories.data.map(category => {
          return <li key={category.id}><Link to={`/categories/${category.id}`}>{category.title}</Link></li>
        })
      }

    return (
        <>
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
                <Outlet/>
            </article>
            </section>
            <footer>
            footer
            </footer>

            </div>
        </>
    )
}