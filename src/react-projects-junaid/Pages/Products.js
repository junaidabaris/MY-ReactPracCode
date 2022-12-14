import { Link } from "react-router-dom"

function Products() {
    return (
        <div className="Products">
            <div>
                <h2>Products</h2>
                <h3><Link to='/'>Back to Home page</Link></h3>
            </div>
        </div>
    )
}
export default Products