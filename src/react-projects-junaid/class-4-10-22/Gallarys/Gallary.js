import { useContext } from "react"
import Tabular from "../Products/Tabular";
import { GallaryContaxt } from "./GarllaryProvider";
import '../All.css'

function Gallary() {
    const contaxt = useContext(GallaryContaxt)
    // console.log(contaxt);
    return (
        <div>
            <div className="product">
                <h1>{contaxt.title}</h1>
                <p>{contaxt.para}</p>
                <Tabular data={contaxt.tableData} />
                <div className="imgsec">
                    {contaxt.imgSection.map((item, i) => {
                        return <div key={i} className='img'>
                            <img src={item.img}/>
                            <h3>{item.phone}</h3>
                        </div>
                    })}
                </div>
            </div>
        </div>
    )
}
export default Gallary