
import { useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { ProductDataProvider } from '../../Pages/productpage/ProductPage'
import ModelProduct from './ModelProduct';
import './ProductComp.css'

function LeftBarComp() {
    const navigate = useNavigate()
    const context = useContext(ProductDataProvider)
    const { title, productList } = context.state
    const handleType = (type) => {
        context.dispatch({ type })
        navigate(`${type}`)
    }
    return (
        <div className="leftBar">
            <h3>{title}</h3>
            {productList.map((item) => {
                return <h4 key={item.id}>
                    {/* <Link to={`${item.type}`}>{item.type}</Link> */}
                    <button onClick={() => handleType(item.type)}>
                        {item.type}
                    </button>
                </h4>
            })}
            <ModelProduct/>
        </div>
    )
}
export default LeftBarComp