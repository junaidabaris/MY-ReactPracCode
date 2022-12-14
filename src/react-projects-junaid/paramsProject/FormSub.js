import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function FormSub(props) {

    const [newData, SetData] = useState({
        id: '',
        price: '',
        discription: '',
        img: ''
    })

    const onchengehandller = (e) => {
        const updatedForm = { ...newData }
        updatedForm[e.target.name] = e.target.value;
        SetData(updatedForm)
    }


    return (
        <div className='btnBody'>
            <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>ID :</Form.Label>
                    <Form.Control type="number" placeholder="ID" name='id' value={newData.id} onChange={onchengehandller} />

                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>IMG :</Form.Label>
                    <Form.Control type="text" placeholder="IMG URL" name='img' value={newData.name} onChange={onchengehandller} />

                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Description :</Form.Label>
                    <Form.Control type="text" placeholder="Description" name='discription' value={newData.discription} onChange={onchengehandller} />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Price :</Form.Label>
                    <Form.Control type="number" placeholder="Price in doller ($)" name='price' value={newData.price} onChange={onchengehandller} />
                </Form.Group>
                <Button variant="success" onClick={() => { props.newData(newData) }}>Submit</Button>
            </Form>

        </div>
    );
}

export default FormSub