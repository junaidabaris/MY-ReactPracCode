import { Table } from "react-bootstrap"

function InnerTable({inData}) {
    // console.log(inData);
    return (
        <Table striped bordered hover size="sm">
            <thead>
                <tr>
                    {inData.inColums.map((col, key)=>{
                        return <th key={col.key}>{col.header}</th>
                    })}
                </tr>
            </thead>
            <tbody>
               {inData.inRows.map((row)=>{
                return <tr key={row.id}>
                    {inData.inColums.map((col)=>{
                        return <td key={col.key}>{row[col.key]}</td>
                    })}
                </tr>
               })}
               
            </tbody>
        </Table>
    )
}
export default InnerTable