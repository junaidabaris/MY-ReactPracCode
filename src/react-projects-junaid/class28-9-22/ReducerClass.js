import { useContext } from "react"
import { contaxtCreation } from "../../App"

function ReduceClass() {
    const contaxt = useContext(contaxtCreation)
    const { title, data } = contaxt.state
    // console.log(contaxt);
    return (
        <div>
            <h1>{title}</h1>
            {data.map((item, i) => {
                return <h2 key={i}>{item}</h2>
            })}
            <button onClick={() => contaxt.handller(`ABC ${data.length - 2}`)}>ADD</button>
        </div>
    )
}
export default ReduceClass