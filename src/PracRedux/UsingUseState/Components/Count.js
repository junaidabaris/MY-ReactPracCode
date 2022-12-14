import { useState } from "react"
import Buttons from "../Buttons/Buttons"

function Count() {
    const [count, setCount] = useState(0)
    return (
        <div>
            <h1>Count🌵🌵</h1>
            <hr />
            <h4> Count : {count}</h4>
            <Buttons name='Count' chenge={setCount} data={count} />
        </div>
    )
}
export default Count