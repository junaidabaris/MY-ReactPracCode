import { useContext } from "react"
import Buttons from "../Butoons/Buttons";
import { DataProvider } from "../MainReducer"

function Count() {
    const context = useContext(DataProvider)
    // console.log(context);
    return (
        <div>
            <h1>Count🌔🥇</h1>
            <hr/>
            <h3>Count : {context.state.count}</h3>
            <Buttons head='count' />
        </div>
    )
}
export default Count