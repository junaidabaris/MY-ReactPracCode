import CompC from "./CompC";

function CompB ({data}){
//   console.log(data);
    return (
        <div>
            hello its B comp = {data && data[0].id}
            <CompC data={data}/>
        </div>
    )
}
export default CompB