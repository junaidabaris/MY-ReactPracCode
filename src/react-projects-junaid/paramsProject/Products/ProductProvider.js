import { createContext } from "react"
import ProductInfo from "./ProductInfo"

const productData = {
    title: 'product',
    product: {
        productList: [
            { id: 1, type: 'tv', },
            { id: 2, type: 'laptop', },
            { id: 3, type: 'mobile', },
        ],

        productDetail: [
            { type: 'tv', id: 1, productName: 'panasonic', price: 12000, madeIn: 'Japan', discription: ' text of the printing and typesetting industry.  ever since the 1500s,', url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUyv__ebWM5NMIIrSLH_yXRxsQucWrUGg3LQ&usqp=CAU' },

            { type: 'tv', id: 2, productName: 'asus', price: 16000, madeIn: 'Koria', discription: ' text of the printing and typesetting industry.  ever since the 1500s,', url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSreOas1g_HGAnB-EqxpywdfxR-3Rcd2ufTLg&usqp=CAU' },

            { type: 'tv', id: 3, productName: 'redmi', price: 14000, madeIn: 'America', discription: ' text of the printing and typesetting industry.  ever since the 1500s,', url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSreOas1g_HGAnB-EqxpywdfxR-3Rcd2ufTLg&usqp=CAU' },

            { type: 'tv', id: 4, productName: 'vu', price: 19000, madeIn: 'Brazil', discription: ' text of the printing and typesetting industry.  ever since the 1500s,', url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBJZzQWZev4wycTLrSYbDrWUg2KEUMaIHjWQ&usqp=CAU' },

            { type: 'laptop', id: 5, productName: 'panasonic', price: 60000, madeIn: 'UAE', discription: ' text of the printing and typesetting industry.  ever since the 1500s,', url: 'https://m.media-amazon.com/images/I/81KoSSAwH2L._SL1500_.jpg' },

            { type: 'laptop', id: 6, productName: 'asus', price: 36000, madeIn: 'Pakistan', discription: ' text of the printing and typesetting industry.  ever since the 1500s,', url: 'https://www.91-cdn.com/hub/wp-content/uploads/2022/07/Top-laptop-brands-in-India.jpg' },

            { type: 'laptop', id: 7, productName: 'redmi', price: 64000, madeIn: 'India', discription: ' text of the printing and typesetting industry.  ever since the 1500s,', url: 'https://www.cnet.com/a/img/resize/33d64d1623f1dc132165ef8393fbe5e7be9b763a/hub/2021/10/28/e92175f9-bcbf-4361-9c4a-3bfaf656ac27/hp-pavilion-aero-13-09.jpg?auto=webp&fit=crop&height=528&width=940' },

            { type: 'laptop', id: 8, productName: 'vu', price: 39000, madeIn: 'England', discription: ' text of the printing and typesetting industry.  ever since the 1500s,', url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrOMvcQLnnCC319qnva-J2TBwkv2sN7bkW_A&usqp=CAU' },

            { type: 'mobile', id: 9, productName: 'apple', price: 95000, madeIn: 'USA', discription: ' text of the printing and typesetting industry.  ever since the 1500s,', url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMspuawv8gcYjV-aarLS7pEdSo_fVhM9AsKw&usqp=CAU' },

            { type: 'mobile', id: 10, productName: 'nokia', price: 30000, madeIn: 'India', discription: ' text of the printing and typesetting industry.  ever since the 1500s,', url: 'https://motorolain.vtexassets.com/arquivos/ids/157173-400-400?v=1751792413&width=400&height=400&aspect=true' },

            { type: 'mobile', id: 11, productName: 'redmi', price: 50000, madeIn: 'Sri Lanka', discription: ' text of the printing and typesetting industry.  ever since the 1500s,', url: 'https://www.trustedreviews.com/wp-content/uploads/sites/54/2021/09/iphone-13-9-scaled.jpeg' },

            { type: 'mobile', id: 12, productName: 'realme', price: 35000, madeIn: 'Bangladesh', discription: ' text of the printing and typesetting industry.  ever since the 1500s,', url: 'https://images.indianexpress.com/2021/04/Asus-ROG-Phone-5-1200.jpg' },
        ]
    }
}
export const ProductContext = createContext()
function ProductProvivder(props) {
    return (
        <div>
            <ProductContext.Provider value={productData.product}>
                <ProductInfo/>
            </ProductContext.Provider>

        </div>
    )
}
export default ProductProvivder