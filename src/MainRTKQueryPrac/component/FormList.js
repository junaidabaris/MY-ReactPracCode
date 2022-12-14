import { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"
import { useFetchContactsQuery, useUpdateListMutation } from "../../storeRTK/store"

function FormList({ type }) {
    const { data } = useFetchContactsQuery()
    const [updateList] = useUpdateListMutation()
    const [state, setState] = useState({
        id: Math.random(),
        name: "",
        email: "",
        addres: ""
    })
    const params = useParams()

    const sendData = () => {
        updateList(state)
    }

    const onChengeHandle = (e) => {
        const clone = { ...state }
        clone[e.target.name] = e.target.value
        setState(clone)
    }

    useEffect(() => {
        if (type.name === "Add-Contact") {
            return
        }
        else if (data) {
            const findItem = data.find((item) => {
                return item.id === +params.id
            })
            setState(findItem)
        } else {
            return
        }
    }, [params.id])

    return <form className="w-50 p-3">
        <div className="mb-3">
            <label htmlFor="ID" className="form-label">ID</label>
            <input type="number" disabled name='id' className="form-control" placeholder="You can neither create nor update ID" id="exampleInputEmail1" aria-describedby="emailHelp" onChange={onChengeHandle} />
        </div>
        <div className="mb-3">
            <label htmlFor="name" className="form-label">Name</label>
            <input type="text" name='name' value={state.name} onChange={onChengeHandle} className="form-control" id="exampleInputPassword1" />
        </div>
        <div className="mb-3">
            <label htmlFor="email" className="form-label">Email</label>
            <input type="text" name='email' value={state.email} onChange={onChengeHandle} className="form-control" id="exampleInputPassword1" />
        </div>
        <div className="mb-3">
            <label htmlFor="addres" className="form-label">Addres</label>
            <input type="text" name='addres' value={state.addres} onChange={onChengeHandle} className="form-control" id="exampleInputPassword1" />
        </div>

        <Link to={'/lists'}><button type="button" onClick={sendData} className={`btn ${type.color}`}>{type.name}</button></Link>
    </form>
}
export default FormList