import { useEffect, useRef, useState } from 'react'
function InChild({ data, addValue }) {

    const refName = useRef(null)
    const refAge = useRef(null)
    const marginRef = useRef(null)
    const submitForm = (event) => {
        event.preventDefault()
        const obj = { name: refName.current.value, age: refAge.current.value }
        addValue(obj)
        // if (!refName.current.value, !refAge.current.value) {
        //     alert('plz fill the Form')
        // }
        // else {
        //     const obj = { name: refName.current.value, age: refAge.current.value }
        //     addValue(obj)
        // }
    }
    useEffect(() => {
        marginRef.current.style.margin = '20px'
    }, [])


    //copyed code



    const [obj, setObj] = useState({})

    const onChange = (e) => {
        setObj({
            ...obj,
            [e.target.id]: e.target.value
        })
        console.log(obj);
    }



    // class work
    const [val, setVal] = useState('')
    const [num, setNum] = useState()
    return (
        <>
            <table ref={marginRef} >
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>age</th>
                    </tr>
                </thead>
                <tbody>
                    {data.arr.map((item, i) => {
                        return <tr key={i}>
                            <td>{item.name}</td>
                            <td>{item.age}</td>
                        </tr>
                    })}
                </tbody>
            </table>

            <form onSubmit={submitForm}>
                <input ref={refName} name='name' placeholder='name' />
                <input ref={refAge} name='age' placeholder='age' type={'number'} />
                <button>Add</button>

                <input type={'text'} onChange={(e) => setVal(e.target.value)} /> = {val}
                <input type={'number'} onChange={(e) => setNum(e.target.value)} /> = {num}

            </form>
            <form>
                <input id="name" onChange={onChange} />  = {obj.name}
                <input id="age" type={'number'} onChange={onChange} /> = {obj.age}
            </form>
        </>
    )
}
export default InChild