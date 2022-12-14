import { useContext } from "react"
import { Link, Outlet } from "react-router-dom"
import { ContextData } from "../MainDom"

function Finance() {
    const context = useContext(ContextData)
    return (
        <div className="boxFix">
            <h2>{context.finance.title}</h2>
            <p>{context.finance.detail}</p>
            <Link to='/finance'>View Finance</Link>
            <Link to='history'>History</Link>
            <div className="outlet">
                <Outlet></Outlet>
            </div>
        </div>
    )
}
export default Finance