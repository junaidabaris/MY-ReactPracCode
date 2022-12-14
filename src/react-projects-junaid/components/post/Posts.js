import { useEffect, useState } from "react"
import Post from "./Post"
import axios from 'axios'

let first = 0
let last = 0
function Posts() {
    const [olddata, setOlddata] = useState(null)
    const [currentdata, setcurrentdata] = useState(null)

    const onchenge = () => {
        if (first === 95) {
            first = 0
            last = 5
        }
        else{
            first = first + 5
            last = first + 5
        }
       
        let print = currentdata.slice(first, last)
        setOlddata(print);
        console.log(first , last);
    }
    useEffect(() => {
       setTimeout(() => {
        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then((value) => {
            const currentval = value.data.slice(0, 5)
            setOlddata(currentval);
            setcurrentdata(value.data)
        })
       }, 1000);
    }, [])
    return (
        <div>
            <Post data={olddata} onchenge={onchenge} />
        </div>
    )
}
export default Posts
