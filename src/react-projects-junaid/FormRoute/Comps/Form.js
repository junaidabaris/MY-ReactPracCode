import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import '../Pages/All.css'
function Form({ stData, updateObj }) {
    const params = useParams()
    // console.log(stData);
    // console.log(stData[0].id);

    const [inputval, setInputval] = useState({ id: '', name: '', age: '', profile: '' })
    useEffect(() => {
        setInputval({ id: stData[0].id, name: stData[0].name, age: stData[0].age, profile: stData[0].profile })
    }, [params.id])

    const onChangeHandler = (e) => {
        const obj = { ...inputval }
        const val = e.target.value
        obj[e.target.name] = val
        setInputval(obj)
        // console.log(e.target.name ,e.target.value );
        // console.log(e.target);
    }

    const updateForm = (e) => {
        e.preventDefault()
        // console.log(e)
        updateObj(inputval)
    }

    return (
        <div className='correction'>
            <form onSubmit={updateForm}>
                <input name='name' placeholder="name" value={inputval.name} onChange={onChangeHandler} />
                <input name='age' placeholder="age" value={inputval.age} onChange={onChangeHandler} />
                <input name='profile' placeholder="profile" value={inputval.profile} onChange={onChangeHandler} />
                <button onClick={() => { updateObj(inputval) }}>Submit-Form</button>
            </form>

        </div>
    )
}
export default Form