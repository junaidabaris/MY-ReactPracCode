import NavBar from "./NavBar"
import "./All.css"
import Dashbord from "./Dashbord"
import { useState } from "react"

const data = {
    login: {
        title: "Login",
        data: 'Dashbord'
    },
    logout: {
        title: "Logout"
    },
}


function Main() {
    const [value, setvalue] = useState(data.login)
    const logBtn = (val) => {
        if (val === "Login") {
            setvalue(data.logout)
        }else{
            setvalue(data.login)
        }
        
    }
    return (
        <div className="mainsection">
            <NavBar data={value} logBtn={logBtn} />
           {value.data ? <></> : <Dashbord />}
        </div>
    )
}
export default Main