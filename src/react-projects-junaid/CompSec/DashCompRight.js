import { useState } from "react"

function DashCompRight({data}) {
    const [isActive ,setActive] = useState(false)
    
    return (
        <div className="DashCompRight">
           
            <div>
                <h3>{data.title}</h3>
                <button className="btn" onClick={()=> setActive(!isActive)} > {!isActive ? '+': '-' }</button>
            </div>
            <div className={'content '+(!isActive && 'hide')}>
                <p>{data.content}</p>
            </div>
        </div>
    )
}
export default DashCompRight
