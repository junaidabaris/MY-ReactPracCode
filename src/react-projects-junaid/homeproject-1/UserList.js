import './All.css'
function UserList({ data , ShowDetail}) {
    // console.log(data);
    return (
        <table border={1}>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>UserName</th>
                    <th>Email</th>
                    <th>Action</th>
                </tr>
            </thead>
            {!data ? <></> :data.map((value , i) => {
                return <tbody key={i}>
                    <tr>
                        <td>{value.name}</td>
                        <td>{value.username}</td>
                        <td>{value.email}</td>
                        <td> <button onClick={()=>{ShowDetail(i)}}>Details</button></td>
                    </tr>
                </tbody>
            })}
        </table>
    )
}
export default UserList