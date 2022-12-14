import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"


function Forms(props) {
    const [inputval, setInputval] = useState({ id: '', name: '', roll: '', schoolName: '' })
    const params = useParams()

    const filterdStData = props.data.filter((item) => {
        return item.id === params.id
    })

    useEffect(() => {
        setInputval({ id: filterdStData[0].id, name: filterdStData[0].name, roll: filterdStData[0].roll, schoolName: filterdStData[0].schoolName })
    }, [params.id])

    const formSubmit = (e) => {
        e.preventDefault()
    }

    const onchangeHandller = (v) => {
        const obj = { ...inputval }
        const val = v.target.value
        obj[v.target.name] = val
        setInputval(obj)
    }

    return (
        <div>
            <form onSubmit={formSubmit}>
                <h3> Correction Form ID: </h3>
                <input name='name' value={inputval.name} placeholder="name" onChange={onchangeHandller} />
                <input name='roll' value={inputval.roll} placeholder="roll" onChange={onchangeHandller} />
                <input name='schoolName' value={inputval.schoolName} placeholder="schoolName" onChange={onchangeHandller} />
                <button onClick={() => props.resetData(inputval)}>Submit-Form</button>
            </form>
        </div>
    )
}
export default Forms