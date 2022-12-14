import { useContext, useEffect, useState } from "react"
import { useParams } from "react-router-dom";
import { ProductDataProvider } from "../../Pages/productpage/ProductPage"
import './ProductComp.css'

function RightProduct() {
    const context = useContext(ProductDataProvider)
    const paramas = useParams();

    const { productDetail } = context.state

    useEffect(() => {
        context.dispatch({ type: paramas.type })
    }, [paramas.type])

    return (
        <div>.
            <h1 className="heading">{paramas.type} Product</h1>
            <hr />
            <div className="rigthComp">
                {productDetail && productDetail.map((item) => {
                    console.log(item.productName);
                    return <div key={item.id} className="card" >
                        <img src={item.url} />
                        <div className="card-body">
                            <h5 className="card-title">Price : ${item.price}</h5>
                            <h5 className="card-title">Name : {item.productName}</h5>
                            <h6  className="card-title"> </h6>
                            <hr />
                            <p className="card-text">Discription : {item.discription}</p>
                            <span>Made in : {item.madeIn}</span>

                        </div>
                    </div>
                })}
            </div>
        </div>
    )
}
export default RightProduct