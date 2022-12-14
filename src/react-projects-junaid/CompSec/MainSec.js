import { useState } from "react"
import { Link, Route, Routes } from "react-router-dom"
import Home from "../Pages/Home"
import Products from "../Pages/Products"
import FootSec from "./FootSec"
import './Routing.css' 

function MainSec() {
    const [count, setCount] = useState(0)
    return (
        <div>
            <div className="navigation">
                <Link to="/">Home</Link>
                <Link to="/products">products</Link>
            </div>
            <Routes>
                <Route path="/" element={<Home data={count} setCount={setCount} />} />
                <Route path="/products" element={<Products />} />
            </Routes>
            <footer>
                <div className="footer">
                    <FootSec />
                    <FootSec />
                    <FootSec />
                </div>
            </footer>
        </div>
    )
}
export default MainSec
