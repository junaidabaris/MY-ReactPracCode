import './Tours.css'
import ToursGetData from './ToursGetData'

function ToursShow(){
    return (
        <div className="Print-box">
            <h1>Our Tours</h1>
            <ToursGetData/>
        </div>
    )
}
export default ToursShow