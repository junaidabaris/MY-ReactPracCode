function Acordian(props) {
    console.log(props.value.item);

    const finding = props.value.allData.filter((item) => {
        // console.log(props.value.item);
        return item.id === props.value.item.id;
    });
    // console.log(finding);    

    return (
        <div className="accordion arrows">
            <input type="radio" name="accordion" id={`cb${props.value.item.id}`} />
            <section className="box">
                <label className="box-title" htmlFor={`cb${props.value.item.id}`}>
                    {props.value.item.country}
                </label>
                <label className="box-close" htmlFor="acc-close"></label>
                <ul className="box-content">
                    {finding.map((item, i) => {
                        return <li key={i}>{item.country}</li>
                    })}
                </ul>
            </section>
            <input type="radio" name="accordion" id={`cb${props.value.item.id}`} />
            <input type="radio" name="accordion" id="acc-close" />
        </div>
    )
}
export default Acordian;
