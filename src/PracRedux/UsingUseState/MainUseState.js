import Count from "./Components/Count"
import Value from "./Components/Value"
import './All.css'
function MainUseState() {
    return (
        <div className="d-flex main-box ">
            <Count/>
            <Value/>
        </div>
    )
}
export default MainUseState