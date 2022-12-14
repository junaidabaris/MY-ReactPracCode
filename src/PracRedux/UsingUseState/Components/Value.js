import { useState } from "react"
import Buttons from "../Buttons/Buttons"

function Value() {
    const [value, setValue] = useState(0)
    return (
        <div>
            <h1>Value🌵🌵</h1>
            <hr />
            <h4> Value : {value}</h4>
            <Buttons name='Value' chenge={setValue} data={value} />
        </div>
    )
}
export default Value