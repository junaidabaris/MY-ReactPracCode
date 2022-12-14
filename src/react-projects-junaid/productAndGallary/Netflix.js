import { useContext } from "react"
import { NetContaxt } from "./NetflixFile"
import './All.css'

function NetFlix() {
    const contaxt = useContext(NetContaxt)
    // console.log(contaxt);
    return (
        <div className="main">
            <h1>{contaxt.title}</h1>
            <p>{contaxt.para}</p>

            <table border='1'>
                <thead>
                    <tr>
                        <th>id</th>
                        <th>name</th>
                        <th>product</th>
                    </tr>
                </thead>
                <tbody>

                    {contaxt.tableData.map((item, i) => {
                        return <tr key={i}>
                            <td >{item.id}</td>
                            <td >{item.name}</td>
                            <td >{item.prod}</td>
                        </tr>

                    })}
                </tbody>
            </table>

            <div>
                <h2>{contaxt.features.title}</h2>
                <div className="imgsection">
                {contaxt.features.data.map((item, i) => {
                    return <div key={i} className='imgbox'>
                        <img className="img" src={item.url}/>
                        <div>{item.img}</div>
                    </div>
                })}
                </div>
              
            </div>
        </div>
    )
}
export default NetFlix