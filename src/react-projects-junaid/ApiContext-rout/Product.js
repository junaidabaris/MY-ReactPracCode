import { useContext } from "react"
import { createCont } from "./MainCompRoute"

function Product() {
    const contaxtData = useContext(createCont)
    console.log(contaxtData);
    return <div className="boxClass">
        <h3>{contaxtData.products.title}</h3>
        <ul className="ulClass">
            {contaxtData.products.ProData.map((item, i) => {
                return <li key={i}><h3>{item.name}</h3></li>
            })}
        </ul>

    </div>
}
export default Product