function Buttons(props) {
    return (
        <div>
            <button className="btn btn-success" onClick={() => { props.chenge(props.data + 1) }}>{props.name}++</button>
            <button className="btn btn-danger" onClick={() => { props.chenge(props.data - 1) }}>{props.name}--</button>
        </div>
    )
}
export default Buttons