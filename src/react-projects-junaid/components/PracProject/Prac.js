import axios from "axios"
import { useEffect, useState } from "react"

function Prac(props) {
  const [num , setNum] =  useState(1)
  const [name , setname] =  useState()
  const [moves , setMovies] =  useState()
  
  useEffect(()=>{
    async function getData(){
        const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${num}`)
        // console.log(response.data.name);
        setname(response.data.name)
        setMovies(response.data.moves.length)
        // console.log(response.data.moves);
    }
    getData()
  })
    return (
        <div>
            <h2>hello</h2>
            {props.data.map((item, i) => {
                return (
                    <h3 key={i}>{item}</h3>
                )
            })}

            <h2>you select <span style={{color:'red '}}>{num}</span> number</h2>
            <h2>name <span style={{color:'red '}} >{name}</span></h2>
            <h2>movies <span style={{color:'red '}} >{moves}</span></h2>

            <select value={num} onChange={(event)=>{
                setNum(event.target.value)
                }} >
                <option value={'1'} >1</option>
                <option value={'25'}>25</option>
                <option value={'3'}>3</option>
                <option value={'4'}>4</option>
                <option value={'5'}>5</option>
            </select>
        </div>

    )
}
export default Prac




function getData() {

    // const promise = fetch('https://jsonplaceholder.typicode.com/users')
    // promise.then((res)=>{
    //     // console.log(res)
    //     return res.json()
    // }).then((data)=>{
    //     console.log(data)
    // })

    // console.log(promise)

    // const promise = new Promise((resolve,reject)=>{
    //    setTimeout(()=>{
    //     resolve(['a', 'b','c'])
    //    }, 3000)
    // })

    // promise.then((item)=>{
    //     console.log(item)
    // })

    // console.log(promise);




}
getData()
