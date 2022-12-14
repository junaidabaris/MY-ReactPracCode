import CompD from "./CompD"

function CompC ({data}){
    return (
        <div>
            hello its C comp = {data && data[0].title}
            <CompD data={data}/>
        </div>
    )
}
export default CompC