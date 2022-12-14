import { Link, Route, Routes, useSearchParams } from "react-router-dom"
import HackersNews from "../Hacker-news/HackersNews"
import Experience from "../Tabs-pro/Experience"
import Touriest from "../TourProject/Touriest"

function RoutPrac() {
    const [params] = useSearchParams()
    const id = params.get('id')
    console.log(id);
    return (
        <div className="hide">
            <h3>
                <Link to='/'>Home</Link>
            </h3>
            <h3>
                <Link to='/Experience'>Experience Show after click</Link>
            </h3>
            <Routes>
                <Route path="/" element={< Touriest />} />
                <Route path="/Experience" element={<Experience />} >
                    <Route path="Hackers" element={<HackersNews />} />
                </Route>
            </Routes>
        </div>
    )
}
export default RoutPrac