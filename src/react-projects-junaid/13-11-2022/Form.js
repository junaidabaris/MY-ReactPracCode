import { useState } from "react"

function FormSection() {
    const obj = {
        name: 'john',
        age: "50"
    }
    const [state, setState] = useState(obj)

    const onChange = (e) => {
        const newobj = { ...state }
        newobj[e.target.name] = e.target.value
        setState(newobj)
    }
    const dataSet = () => {
        console.log(state);
    }


    return (
        <form  >
            <input value={state.name} name='name' className="d-block mb-3 mt-3" onChange={onChange} />
            <input value={state.age} name='age' className="d-block mb-3" onChange={onChange} />
            <button onClick={dataSet} type='button' disabled={!state.name || !state.age } >Submit</button>
        </form>
    )
}
export default FormSection