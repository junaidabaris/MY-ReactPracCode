import { useContext } from "react"
import { ContaxtData } from "./DataContaxtPrac"

function InnerData() {
    const contaxt = useContext(ContaxtData)
    console.log(contaxt);

    return (
        <div>
            <h1>data</h1>
        </div>
    )
}
export default InnerData