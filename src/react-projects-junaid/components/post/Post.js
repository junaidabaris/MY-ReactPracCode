function Post({data , onchenge}) {
    // console.log(data);
   return (
    <div>
       {!data ? <h1>Loading...</h1> : <div>
        {data.map((val)=>{
         return <h2 key={val.id}>{val.title}</h2>
        })}
        <button onClick={onchenge}>Next Data</button>
        </div>}
    </div>
   )
}
export default Post