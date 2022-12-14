function TableComp({ data }) {
    // console.log(data);
    return (
        <>
            <table border={1}>
                <thead>
                    <tr>
                        {data.columns.map((column, i) => {
                            return <th key={i}>{column.header}</th>
                        })}
                    </tr>
                </thead>
                <tbody>
                    {data.rows.map((row, i) => {
                        return <tr key={i}>
                            {data.columns.map((column, i)=>{
                                return <td key={i}>{row[column.cell]}</td>
                            })}
                        </tr>
                    })}
                </tbody>
            </table>
        </>
    )
}
export default TableComp