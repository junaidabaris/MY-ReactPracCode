import { useContext } from "react"
import { ContextData } from "../MainDom"
import TableComp from "./TableComp"

function Cards() {
    const context = useContext(ContextData)
    return (
        <div className="boxFix">
            <h2>{context.card.title}</h2>
            <p>{context.card.detail}</p>
           <TableComp data={context.card}/>
        </div>
    )
}
export default Cards