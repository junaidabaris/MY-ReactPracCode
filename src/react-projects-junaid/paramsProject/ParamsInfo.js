
import { Button, Card } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom"

function ParamsInfo({ data }) {
    const params = useParams()
    console.log(data);
    const navigate = useNavigate()
    // const fixBugNavigate = useNavigate()
    const backToGallary = () => {
        navigate('/gallary')
    }
    const filterdData = data.find((item) => {
        const id = +item.id
        return id === +(params.id)
    })

    return (
        <div>
            <Card style={{ width: '18rem' }}>
                <img src={filterdData.img} />
                <Card.Body>
                    <Card.Title> ID :{filterdData.id}</Card.Title>
                    <Card.Title> Price :{filterdData.price}</Card.Title>
                    <Card.Text>
                        <h3>Product : {filterdData.discription}</h3>
                    </Card.Text>
                </Card.Body>
                <Button onClick={backToGallary} variant="info">Back to Gallary</Button>
            </Card>

        </div>
    )
}
export default ParamsInfo