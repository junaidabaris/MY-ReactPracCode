import { useContext } from "react"
import { creatingContext } from "./ReducePrac";

function InnerReducer() {
    const contaxtVal = useContext(creatingContext)
    console.log(contaxtVal);

    return(
        <div>
            <h2> title : {contaxtVal.state.title}</h2>
            <button onClick={contaxtVal.chengeHandller}>click</button>
            <h3>hello111</h3>
        </div>
    )
}
export default InnerReducer