import InChild from "./InChild"

function Child(props) {
    return (
        <>
       
            <InChild data={props} addValue={props.addValue} />
        </>
    )
}
export default Child