function Tabular({ data }) {
    // console.log(data);
    return (
        <div className="table">
            <table border={1}>
                <thead>
                    <tr>
                        {data.colums.map((col) => {
                            return <th key={col.cell}>{col.header}</th>
                        })}
                    </tr>
                </thead>
                <tbody>

                    {data.rows.map((row, i) => {
                        return <tr key={i}>
                            {data.colums.map((col) => {
                                return <td key={col.cell}>{row[col.cell]} </td>
                            })}
                        </tr>
                    })}
                    {/* {data.rows.map((row) => {
                        return <tr key={row.id}>
                            <td>{row.id}</td>
                            <td>{row.name}</td>
                            <td>{row.age}</td>
                        </tr>
                    })} */}
                </tbody>
            </table>
        </div>
    )
}
export default Tabular