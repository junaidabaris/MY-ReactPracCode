import { useContext } from "react"
import { Card } from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";
import { gallaryContret } from "../MainSection"


function GallaryInfo() {
    const context = useContext(gallaryContret)
    // console.log(context);
    return (
        <div className="gallary">
            
            {context.gallary.map((item) => {
                return <NavLink key={item.id} to={`/gallary/${item.id}`}>
                    <Card className="imgSection" style={{ width: '18rem' }} >
                        <img src={item.img} />
                        <Card.Body>
                            <Card.Title>{item.discription}</Card.Title>
                        </Card.Body>
                    </Card>
                </NavLink>
            })}
            <h5><Link to={'/gallary/form'}>Add Card</Link></h5>.
        </div>
    )
}
export default GallaryInfo
