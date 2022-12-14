
import { createRef, useEffect, useRef, useState } from "react"
import Child from "./Child"

const arr = [
    { name: 'Junaid', age: '20' },
    { name: 'Sanaya', age: '9' },
    { name: 'Anaya', age: '4' }
]

// const firstName = createContext()
// console.log(firstName);
function Parent() {
    const [val, setVal] = useState(arr)
    const addValue = (item) => {
        const newData = [...val]
        newData.push(item)
        setVal(newData)
    }

    return (
        <>

            <Child arr={val} addValue={addValue} />

        </>
    )
}
export default Parent