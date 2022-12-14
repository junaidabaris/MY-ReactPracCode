import { Link, Navigate, Route, Routes } from "react-router-dom"
import './Container.css'
import GallaryPage from "./Pages/gallarypage/GallaryPage"
import ProductPage from "./Pages/productpage/ProductPage"
import TabulerDataPage from "./Pages/tabularpage/TabularDataPage"
function Container() {
    // console.log('Container--')
    return (
        <div className="container">
            <div className="row navBar">
                <div className="col ">
                    <Link to='/'>Gallary</Link>
                </div>
                <div className="col">
                    <Link to='/product'>Product</Link>
                </div>
                <div className="col">
                    <Link to='/tabularData'>TabulerData</Link>
                </div>
            </div>
            
            <Routes>
                <Route path='/' element={<GallaryPage />} />
                <Route path='/product' element={<ProductPage />} >
                    <Route path=':type' element={<ProductPage />} />
                    <Route path="/product" element={<Navigate to="product/all" replace />} />
                </Route>
                <Route path='/tabularData' element={<TabulerDataPage />} />
            </Routes>
        </div>
    )
}
export default Container