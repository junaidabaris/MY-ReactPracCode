import './All.css'
function Details({ data }) {
    // console.log(data);
    return (
        <div>
            {!data ? <h2>After click</h2> : <div  className="details-sec">
                <h3>Name :{data.name}</h3>
                <h3>Email :{data.email}</h3>
            </div>
            }
        </div>
    )
}
export default Details