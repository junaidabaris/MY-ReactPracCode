import { Link, Route, Routes } from "react-router-dom"
import Gallery from "./Gallery"
import './AllContact.css'
import Product from "./Product"
import { createContext } from "react"

const AllData ={

    products:{
        title:'products page',
        ProData:[
            {name:'bat'},
            {name:'cap'},
            {name:'cell'}
        ]
    },

    gallery:{
        title:'gallery page',
        GalData:[
            {name:'Photo'},
            {name:'Frame'},
            {name:'Hanger'}
        ]
    }
    
}

export const createCont = createContext(AllData)


function MainCompRoute(){
    return <div>
        <h2>
            <Link to='/'>Product</Link>
        </h2>
        <h2>
            <Link to='/gallery'>Gallery</Link>
        </h2>
        <Routes>
            <Route path="/" element={<Product/>}/>
            <Route path="/gallery" element={<Gallery/>}/>
        </Routes>
    </div>
}
export default MainCompRoute