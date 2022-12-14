import axios from "axios"
import { useEffect, useState } from "react";
import TourItem from "./TourItem";

function ToursGetData (){
    const [data ,setData] = useState(null)
    const ApiData = async()=>{
        const res = await axios.get('https://course-api.com/react-tours-project')
        setData(res.data);
    }
    useEffect(()=>{
        ApiData()
     },[])
     const removeItem =(index)=>{
        const val = [...data]
        val.splice(index , 1)
        setData(val)
     }
    return(
        <div>
            {!data ? <h2>wait</h2> : data.map((item ,i)=>{
                return <TourItem key={item.id} data={item} index={i} removeItem={removeItem}/>
            })} 
        </div>
    )
}
export default ToursGetData