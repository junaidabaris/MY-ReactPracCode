function UsersData({ data }) {
    console.log(data);
    return (
        <div className="flex-box">
            
            {!data ? <></> : data.map((item) => {
                return <div className="item-set" key={item.id}>
                    <div className="box-section"></div>
                    <div>
                        <div>Name: {item.name}</div>
                        <div>Email: {item.email}</div>
                    </div>
                </div>
            })}
        </div>
    )
}
export default UsersData