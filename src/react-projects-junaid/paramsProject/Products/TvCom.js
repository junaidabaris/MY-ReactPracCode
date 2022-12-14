import { useContext, useState } from "react"
import { productContext } from "../MainSection"
import { ProductContext } from "./ProductProvider"


function TvCom() {

    const context = useContext(ProductContext)
    const filterdProduct = context.productDetail.filter((item) => {
        return item.type === 'tv'
    })
    const [searchData, setSearchData] = useState(filterdProduct)
    const [val, setVal] = useState()

    const searchHandle = (e) => {
        const value = e.target.value
        const searcheditems = searchData.filter((item) => {
            const pname = item.productName
            const data = pname.includes(value)
            return data
        })
        if (value.length === 0) {
            setSearchData(filterdProduct)
        }
        else {
            setSearchData(searcheditems)
        }

    }
    return (
        <div>
            <h1>Tv List</h1>
            <input className="itemInput" placeholder="search item" value={val} onChange={searchHandle} />
            <hr />
            <div className="myCard">
                {searchData.map((item) => {
                    return <div key={item.id} className="card">
                        <img src={item.url} />
                        <h5>productName : {item.productName}</h5>
                        <h6>price : {item.price}</h6>
                        <p>{item.discription}</p>
                        <div>MadeIn :  {item.madeIn}</div>
                    </div>
                })}
            </div>
        </div>
    )
}
export default TvCom