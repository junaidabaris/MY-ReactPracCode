import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import '../Components/FormPages.css'
function EditForm(props) {
    const [val, setVal] = useState({ id: '', name: '', age: '', profile: '' })
    const params = useParams()

    const selectedData = props.data.filter((item) => {
        return item.id === params.id
    })
    useEffect(() => {
        setVal({ id: selectedData[0].id, name: selectedData[0].name, age: selectedData[0].age, profile: selectedData[0].profile })
    }, [params.id])
    // console.log(params.id);

    const onchangeHandler = (e) => {
        const obj = { ...val }
        const value = e.target.value
        obj[e.target.name] = value
        setVal(obj)

    }

    const updateForm = (e) => {
        e.preventDefault()
    }
    return (
        <div>

            <form onSubmit={updateForm}>
                <h3>Edit Form Id :{params.id}</h3>

                <label>Name : </label>
                <input placeholder="Name" name='name' value={val.name} onChange={onchangeHandler} /><br />

                <label>Age : </label>
                <input placeholder="Age" name='age' value={val.age} onChange={onchangeHandler} /><br />

                <label>Profile : </label>
                <input placeholder="profile" name='profile' value={val.profile} onChange={onchangeHandler} /><br />

                <button onClick={() => props.onSubmitBtn(val)}>Submit</button>
            </form>
        </div>
    )
}
export default EditForm