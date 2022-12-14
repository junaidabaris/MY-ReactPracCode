import { Link, Navigate, Route, Routes, useNavigate, useParams } from "react-router-dom"
import GallaryInfo from "./Gallary/GallaryInfo"
import ProductInfo from "./Products/ProductInfo"
import 'bootstrap/dist/css/bootstrap.min.css';
import './Params.css'
import { createContext, useState } from "react"
import ParamsInfo from "./ParamsInfo";
import FormSub from "./FormSub";
import TvCom from "./Products/TvCom";
import LaptopCom from "./Products/LaptopCom";
import MobileCom from "./Products/MobileCom";
import ProductProvivder from "./Products/ProductProvider";
import TablePage from "./Tabular/TablePage";

const allData = {
    gallary: [
        {
            id: 1,
            price: '100$',
            discription: 'Insulex',
            img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSk0gm5pcT5X-3pIFxHZW7t7_tfquVz_BFbw&usqp=CAU'
        },
        {
            id: 2,
            price: '120$',
            discription: 'Whey',
            img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJIP_rhZie0262SW-fShxUXNG33T1I0Q5FyQ&usqp=CAU'
        },
        {
            id: 3,
            price: '190$',
            discription: 'Mass',
            img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdLPal8ZneY05veI7gkUHCDm2FKfieu-gJJQ&usqp=CAU'
        },
        {
            id: 4,
            price: '200$',
            discription: 'Capcul',
            img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQR6PlGhNgQFa2CaZQiKKNSW1r4_ckkqj8-gdaUeJpiBqpftrHtT_Mn3m10rGb5TAr4l9o&usqp=CAU'
        },
        {
            id: 5,
            price: '220$',
            discription: 'All products',
            img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQe2Fk9wX5dBQuHzbUnrcBTo8CPv3T1R6RDKuv4TcwAAMpOOD1xXptHR4sbmevNbxfvwbE&usqp=CAU'
        },
        {
            id: 6,
            price: '260$',
            discription: 'Protein',
            img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS54td47er7-R6oNN_KmMsF5fUT6rziX_1nKw&usqp=CAU'
        },
    ],
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


export const gallaryContret = createContext()

function MainSection() {
    const navigate = useNavigate()

    const [proData, setProData] = useState(allData)

    const newData = (data) => {
        const newPropsData = { ...proData }
        const newVal = [...newPropsData.gallary]
        newVal.push(data)
        newPropsData.gallary = newVal
        setProData(newPropsData)
        navigate('/gallary')
    }

    return (
        <div>

            <h2>
                <Link to={'/gallary'}>Gallary</Link>
            </h2>
            <h2>
                <Link to={'/product'}>Product</Link>
            </h2>
            <h2>
                <Link to={'/tabular'}>Tabular</Link>
            </h2>
            <Routes>
                <Route path="/gallary" element={<gallaryContret.Provider value={proData}><GallaryInfo /></gallaryContret.Provider>} />
                <Route path="/product" element={<ProductProvivder />} >
                    <Route path="Tv" element={<TvCom />} />
                    <Route
                        path="/product"
                        element={<Navigate to="tv" replace />}
                    />
                    <Route path="laptop" element={<LaptopCom />} />
                    <Route path="mobile" element={<MobileCom />} />
                </Route>
                <Route path="/gallary/:id" element={<ParamsInfo data={proData.gallary} />} />
                <Route path="/gallary/form" element={<FormSub newData={newData} />} />
                <Route path="/tabular" element={<TablePage />} />
            </Routes>

        </div>
    )
}
export default MainSection