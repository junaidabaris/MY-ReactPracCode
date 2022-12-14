function NavBar ({data,logBtn}){
    return <div className="navBar">
        <button onClick={()=>{logBtn(data.title)}}>{data.title}</button>
    </div>
}
export default NavBar