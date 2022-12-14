function Company ({company ,getIndex}){
    
    return (
        <div className="company-sec">
            {company.map((item , i)=>{
                return <div key={i}><button onClick={()=>getIndex(i)} >{item}</button></div>
            })}
        </div>
    )
}
export default Company