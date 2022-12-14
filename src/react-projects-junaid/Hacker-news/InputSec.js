function InputSec({getValue}){
   
    return(
        <div>
            <h1>Search Hacker News</h1>
            <input style={{padding:'15px',width:'400px'}} placeholder="Input News" type="text" onChange={getValue}/>
        </div>
    )
}
export default InputSec