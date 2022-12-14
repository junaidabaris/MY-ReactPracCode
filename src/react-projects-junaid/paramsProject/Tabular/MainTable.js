import { useContext } from "react"
import { Table } from "react-bootstrap"
import InnerTable from "./InnerTable";
import { tableProvider } from "./TablePage"

function MainTable() {
    const context = useContext(tableProvider)
    // console.log(context);
    return (
        <div className="tabularSection">
            <Table striped bordered hover size="sm">
                <thead>
                    <tr>
                        {context.colums.map((col, i) => {
                            return <th key={i}>{col.header}</th>
                        })}
                    </tr>
                </thead>
                <tbody>
                    {context.rows.map((row) => {
                        return <tr key={row.id}>
                            {context.colums.map((col,) => {
                                const store = row[col.key];
                                if (typeof store === 'string') {
                                    return <td key={col.key}>{store}</td>
                                }
                                else if (typeof store === 'object') {
                                    if (store.inColums) {
                                        return <InnerTable inData={store} />
                                    }
                                    else {
                                        return <td key={col.key}>
                                            <h5>{store.title}</h5>
                                            <p>{store.description}</p>
                                            {store.action ? <button>More..</button> : <></>}
                                        </td>
                                    }
                                }
                            })}
                        </tr>

                    })}

                </tbody>
            </Table>

        </div>
    )
}
export default MainTable
