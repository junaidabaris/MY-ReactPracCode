function TourItem ({data ,index ,removeItem}){
    // console.log(data);
    return(
        <div className="items">
            <div className="img-section">
                <img src={data.image}/>
            </div>
            <div className="text-section">
                <div className="flex-div">
                    <h4>{data.name}</h4>
                    <span>$ {data.price}</span>
                </div>
                <p>{data.info}</p>
                <button onClick={()=>{removeItem(index)}}>Not Interested</button>
            </div>
           
        </div>
    )
}
export default TourItem