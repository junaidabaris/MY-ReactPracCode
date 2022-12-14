import { useContext } from "react"
import { ContextData } from "../MainDom"

function Home (){
    const context = useContext(ContextData)
    return (
        <div className="boxFix">
            <h1>{context.home.title}</h1>
        </div>
    )
}
export default Home