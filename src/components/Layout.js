//main layout
import { Outlet, Link } from "react-router-dom"
import { HomeIcon, CartIcon } from "./Icons"
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
                        <Link to='/'><HomeIcon width={40}/></Link>
                        <Link to='/basket'><CartIcon width={40}></CartIcon></Link>
                        {/* <span class="navbar-brand mb-0 h1 text-start">My Store</span> */}
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