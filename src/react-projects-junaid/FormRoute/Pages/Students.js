import { Outlet } from "react-router-dom"
import Table from "../Comps/Table"

function Students({ data, removeItem, editSt }) {
    return (
        <div>
            <h2>students page</h2>
            <Table data={data} removeItem={removeItem} editSt={editSt} />
            <Outlet></Outlet>
        </div>
    )
}
export default Students