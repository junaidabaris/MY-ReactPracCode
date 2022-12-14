import { useContext } from "react"
import Buttons from "../Butoons/Buttons"
import { DataProvider } from "../MainReducer"

function Value() {
    const context = useContext(DataProvider)
    return (
        <div>
            <h1>Value🌔🥇</h1>
            <hr/>
            <h3>Value : {context.state.value}</h3>
            <Buttons head='value' />
        </div>
    )
}
export default Value