import './AllNews.css'
function NewsItem({data,removeItem ,index}) {
    // console.log(data);       
 return (
    <div  className="item-box">
        <h3>{data.title}</h3>
        <div>{data.points} points by {data.author} | {data.num_comments} comments</div>
        <div>
            <a href="#">read more</a>
            <button style={{margin:'10px'}} onClick={()=>{removeItem(data.objectID)}} >remove</button>
        </div>
    </div>
 )
}
export default NewsItem