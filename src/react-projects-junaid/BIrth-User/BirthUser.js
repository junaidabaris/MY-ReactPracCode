import axios from 'axios'
import { useEffect, useState } from 'react'
import './BirthAll.css'
import UsersData from './UsersData.js/UsersData'
function  BirthUser(){
   const [data , setData] = useState()
    const getData =()=>{
        axios.get("https://jsonplaceholder.typicode.com/users")
        .then((res)=>{
            setData(res.data.slice(0,5));
        })
    }
    useEffect(()=>{
        getData()
    },[])

    const removeitem =()=>{
        setData([])
    }
    const Reset = ()=>{
        getData()
    }   
    return (
        <div className="main-wrapper">
             <button onClick={Reset}>Reset-Data</button>
            {!data ?<></> : <h2>{data.length} birthdays today</h2>}
            <UsersData data={data}/>
            <button onClick={removeitem}>Clear All</button>
        </div>
    )
}
export default BirthUser