import { useContext } from "react"
import { createCont } from "./MainCompRoute"

function Gallery() {
    const contaxtData = useContext(createCont)
    return <div className="boxClass">
        <h3>{contaxtData.gallery.title}</h3>
        <ul className="ulClass">
            {contaxtData.gallery.GalData.map((item, i) => {
                return <li key={i}><h3>{item.name}</h3></li>
            })}
        </ul>
    </div>
}
export default Gallery