import axios from "axios"
import { useEffect, useState } from "react"
import CompB from "./CompB"

function CompA (){
    const [data , setData] = useState(null)
    const getData = async( )=>{
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts/')
        setData(response.data.slice(0,1));
        // console.log(data[0]);
    }
    useEffect(()=>{
        getData()
    },[])
   
    return (
        <div>
            hello its  A comp = {data && data[0].userId}
            <CompB data={data} />
          
        </div>
    )
}
export default CompA