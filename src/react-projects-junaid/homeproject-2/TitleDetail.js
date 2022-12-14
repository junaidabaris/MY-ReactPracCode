
function TitleDetail({ data, onRight, onLeft }) {
    // console.log(data);
    return (
        <div>
            <table border={1}>
                <thead>
                    <tr>
                        <th>Title</th>
                        <th>Body</th>
                    </tr>
                </thead>

                {!data ? <></> : <tbody>
                    {data.map((val) => {
                        return <tr key={val.id} >
                            <td style={{ width: '300px' }} >{val.title}</td>
                            <td style={{ width: '500px' }}>{val.body}</td>
                        </tr>
                    })}
                </tbody>}
            </table>
            <button onClick={onLeft}>Left</button>
            <button onClick={onRight}>Right</button>
        </div>
    )
}
export default TitleDetail