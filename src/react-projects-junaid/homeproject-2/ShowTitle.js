import { useEffect, useState } from "react"
import TitleDetail from "./TitleDetail"
import axios from "axios"

let First = 0
let End = 5
function ShowTile() {
    const [olddata, setOlddata] = useState(null)
    const [currentdata, setcurrentdata] = useState(null)
    
    const onRight = () => {
        if (First === 100) {
            First = 0
            End = 5
        }
        else{
            First = First + 5
            End = First + 5
        }
        let print = currentdata.slice(First, End)
        setOlddata(print);
        // console.log(First, End);
    }
    const onLeft = () => {
        if (First === 0) {
            First = 95
            End = 100
        }
        else{
            First = First - 5
            End = End - 5
        }
        let print = currentdata.slice(First, End)
        setOlddata(print);
        console.log(First , End); 
    }
    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/posts')
            .then((value) => {
                const currentval = value.data.slice(0, 5)
                setOlddata(currentval);
                setcurrentdata(value.data)
            })
    }, [])
    return (
        <div>
            <TitleDetail data={olddata} onRight={onRight} onLeft={onLeft} />
        </div>
    )
}
export default ShowTile