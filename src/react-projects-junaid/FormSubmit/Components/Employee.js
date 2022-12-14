import { Outlet } from "react-router-dom"

function Employee(props) {

    return (
        <div style={{display:'flex'}}>
            <table >
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Age</th>
                        <th>profile</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {props.data.map((item) => {
                        return <tr key={item.id}>
                            <td>{item.name}</td>
                            <td>{item.age}</td>
                            <td>{item.profile}</td>
                            <td>
                                <button onClick={() => props.DeleteItem(item.id)}>Delete</button>
                                <button onClick={() => props.EditItem(item.id)}>Edit</button>
                            </td>
                        </tr>
                    })}
                </tbody>
            </table>
            <Outlet></Outlet>
        </div>
    )
}
export default Employee