import { useContext } from "react"
import { DataProvider } from "../MainReducer"

function Buttons(props) {
    const context = useContext(DataProvider)

    const ActionData = (type, action) => {
        context.dispatch({ type, action })
    }
    
    return (
        <div>
            <button className="btn btn-success"  onClick={() => ActionData(props.head, 'INC')}>{props.head} ++</button>
            <button className="btn btn-danger" onClick={() => ActionData(props.head, 'DIC')}>{props.head} --</button>
        </div>
    )
}
export default Buttons