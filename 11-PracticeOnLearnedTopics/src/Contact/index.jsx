import { Link, Outlet } from "react-router-dom";


function ProductsPage(){
    return (
        <div>
            <h2>Thanks for visiting Product Page</h2>

            <nav>
                <Link to={"/Products/car"}>Car</Link> |{ " "}
                <Link to={"/Products/bike"}>Bike</Link>
            </nav>
            <Outlet />
        </div>
    )
}

export default ProductsPage;