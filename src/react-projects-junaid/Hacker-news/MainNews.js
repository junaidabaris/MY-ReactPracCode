import NewsItem from "./NewsItem"

function MainNews({data ,loader ,removeItem}) {
    // console.log(data);
    if(loader){
        return <h1>loading News...</h1>
    }
   
    return (
        <div className="News-set">
            {/* <NewsItem/> */}
            {data && data.hits.map((item, index) => {
                return <NewsItem removeItem={removeItem} key={index} data={item} index={index} />
            })}
        </div>
    )
}
export default MainNews