import { Link, Route, Routes } from "react-router-dom"
import About from "../Pages/About"
import Dashbord from "../Pages/Dashbord"

function RoutPractice() {
    return (
        <div className="back-color">
            <h3>
                <Link to='/' >Dashbord</Link>
            </h3>
            <h3>
                <Link to='/About' >About</Link>
            </h3>

            <Routes>
                <Route path="/" element={<Dashbord />} />
                <Route path="/About" element={<About />} />
            </Routes>

        </div>
    )
}
export default RoutPractice