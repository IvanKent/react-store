//main layout
import { Outlet, Link } from "react-router-dom"

export default function Layout({categories, }){

    const renderCategories = () => {
        return categories.data.map(category => {
          return <li key={category.id}><Link to={`/categories/${category.id}`}>{category.title}</Link></li>
        })
      }

    return (
        <>
            <div className='container-fluid'>
                <nav class="navbar bg-body-tertiary">
                    <div class="container-fluid">
                        <span class="navbar-brand mb-0 h1">My Store</span>
                    </div>
                </nav>
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
            <Link to='/'>Home</Link> | <Link to='/basket'>Basket</Link>
            </footer>

            </div>
        </>
    )
}