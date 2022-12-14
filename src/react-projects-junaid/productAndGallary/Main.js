import { createContext, useReducer } from "react"
import Gallary from "./Gallary"
import Product from "./Product"

const gallarys = {
    title: 'gallary',
    data: ['A', 'B', 'C', 'D']
}
const products = {
    title: 'product',
    data: ['E', 'F', 'G', 'H']
}
export const GallaryContaxt = createContext()
export const ProductContaxt = createContext()

const parentReducer = (state, action) => {
    if (action) {
        return {}
    }
    else {
        return state
    }
}

function Main() {
    const [state, dispatch] = useReducer(parentReducer, gallarys)
    const [state1, dispatch1] = useReducer(parentReducer, products)
    return (
        <div>
            <GallaryContaxt.Provider value={state}>
                <Gallary />
            </GallaryContaxt.Provider>
            <ProductContaxt.Provider value={state1}>
                <Product />
            </ProductContaxt.Provider>



        </div>
    )
}
export default Main