import { useContext } from "react"
import { ProductContaxt } from "./ProductProvider"
import Tabular from "./Tabular"
import '../All.css'

function Product() {
    const contaxt = useContext(ProductContaxt)
    // console.log(contaxt);
    return (
        <div className="product">
            <h1>{contaxt.title}</h1>
            <p>{contaxt.para}</p>
           <Tabular data={contaxt.tableData}/>
        </div>
    )
}
export default Product