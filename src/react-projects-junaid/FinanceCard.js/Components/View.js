import { useContext } from "react"
import { ContextData } from "../MainDom"
import TableComp from "./TableComp";

function View() {
    const context = useContext(ContextData)
    console.log(context.finance.viewData.tableData1);
    return (
        <div className="table">
            <div>
                <h5>{context.finance.viewData.tableData1.heading}</h5>
                <TableComp data={context.finance.viewData.tableData1} />
            </div>
            <div>
                <h5>{context.finance.viewData.tableData2.heading}</h5>
                <TableComp data={context.finance.viewData.tableData2} />
            </div>
        </div>
    )
}
export default View 