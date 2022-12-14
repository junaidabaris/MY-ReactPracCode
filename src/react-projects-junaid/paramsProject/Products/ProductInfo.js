import { useContext } from "react"
import { Link, Outlet } from "react-router-dom";
import { ProductContext } from "./ProductProvider";


function ProductInfo() {
    const context = useContext(ProductContext)
    console.log(context);
    return (
        <div className="dataBar">
            <div className="d-flex flex-column flex-shrink-0 p-3 text-white bg-dark myProduct" >
                <div className="nav nav-pills flex-column mb-auto linkClass">
                    {context.productList.map((item, i) => {
                        return <Link key={i} to={`${item.type}`}>
                            <h4>{item.type}</h4>
                        </Link>
                    })}
                </div>

            </div>
            <div className="outlet">
                <Outlet></Outlet>
            </div>
        </div>
    )
}
export default ProductInfo