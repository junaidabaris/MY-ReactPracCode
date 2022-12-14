import { useEffect, useState } from "react"
import axios from "axios"
import Details from "./Details"
import UserList from "./UserList"

function UserData() {
    const [oldData, setOldData] = useState(null)
    const [newData, setnewData] = useState(null)

    const ShowDetail = (index) => {
        setnewData(oldData[index])
    }
    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/users')
            .then((value) => {
                setOldData(value.data)
                //  console.log(value.data);
            })
    }, [])
    return (
        <div>
            <UserList data={oldData} ShowDetail={ShowDetail} />
            <Details data={newData} />
        </div>
    )
}
export default UserData