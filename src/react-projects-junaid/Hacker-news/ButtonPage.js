
function ButtonPage({ NextPage, PrevPage, count }) {

    return (
        <div style={{ margin: "20px 0" }}>
            <button onClick={PrevPage}>Prev</button>
            <span> {count} of 50 </span>
            <button onClick={NextPage}>Next</button>
        </div>
    )
}
export default ButtonPage