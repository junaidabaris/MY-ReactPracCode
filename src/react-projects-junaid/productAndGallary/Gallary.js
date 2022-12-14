import { useContext } from "react"
import { GallaryContaxt } from "./Main"
function Gallary() {
    const contaxt = useContext(GallaryContaxt)
    // console.log(contaxt);
    const { title, data } = contaxt
    return (
        <div>
            <h2>{title}</h2>
            {data.map((item, i) => {
                return <h3 key={i}>{item}</h3>
            })}
        </div>
    )
}
export default Gallary