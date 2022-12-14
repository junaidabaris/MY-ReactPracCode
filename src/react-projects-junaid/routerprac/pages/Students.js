import { Link, Outlet  } from "react-router-dom"
function Students(props) {

   
    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Roll</th>
                        <th>School-Name</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {props.data.map((item) => {
                        return <tr key={item.id}>
                            <td>{item.name}</td>
                            <td>{item.roll}</td>
                            <td>{item.schoolName}</td>
                            <td>
                                <button onClick={()=>props.removeData(item.id)}>remove</button>
                                <Link to={`edit/${item.id}`} onClick={()=>props.editStData(item.id)}>Edit</Link>
                            </td>
                        </tr>
                    })}

                </tbody>
            </table>
            <Outlet></Outlet>
        </div>
    )
}
export default Students