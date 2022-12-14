import { useContext } from "react"
import { ProductContaxt } from "./Main"

function Product() {
    const contaxt = useContext(ProductContaxt)
    const { title, data } = contaxt
    // console.log(title);
    return (
        <div>
            <h2>{title}</h2>
            {data.map((item,i) => {
                return <h3 key={i}>{item}</h3>
            })}
        </div>
    )
}
export default Product