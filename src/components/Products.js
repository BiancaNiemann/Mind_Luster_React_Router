import { Link, Outlet } from "react-router-dom"


export const Products = () => {
    return (
        <>
            <div>
                <input type="search" placeholder="Search Products" />
            </div>
            <nav>
                <Link to="featured">Featured</Link>
                <Link to="new">New</Link>
            </nav>
            <Outlet />
        </>
    )
}

//no forward slash on to="" before the destination name