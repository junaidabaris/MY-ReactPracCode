
function Details({ TabsData }) {
    // console.log(TabsData);
    return (
        <div className="Detail-sec">
            <h2>{TabsData.title}</h2>
            <h4>{TabsData.company}</h4>
            <div>{TabsData.dates}</div>
            <ul>
                {TabsData.duties.map((item, i) => {
                    return <li key={i}>{item}</li>
                })}
            </ul>
        </div>
    )
}
export default Details