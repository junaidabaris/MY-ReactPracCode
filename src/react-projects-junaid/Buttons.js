import { useEffect, useState } from "react"

function Buttons({ decVal, incVal }) {
    // const [value, setValue] = useState('post')
    // console.log("outside");
    // useEffect(()=>{
    //     console.log('render');
    // },[value])
    return (
        <div>
            <button onClick={decVal}>DEC</button>
            <button onClick={incVal}>INC</button>

          {/* <div>
            <button onClick={() => { setValue('post') }}>post</button>
            <button onClick={() => { setValue('comment') }}>comment</button>
            <button onClick={() => { setValue('ures') }} >ures</button>
            <h1>{value}</h1>
          </div> */}

        </div>
    )
}
export default Buttons