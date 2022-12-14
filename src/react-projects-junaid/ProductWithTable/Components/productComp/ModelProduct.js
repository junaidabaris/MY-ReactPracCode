import React, { useContext, useState } from 'react';
import { Form } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useParams } from 'react-router-dom';
import { ProductDataProvider } from '../../Pages/productpage/ProductPage';
import './ProductComp.css'

function ModelProduct() {
    const context = useContext(ProductDataProvider)
    const param = useParams()
    const [show, setShow] = useState(false);

    const handleShow = () => setShow(true);

    const [formVal, setFormVal] = useState({
        type: '',
        id: Math.random(),
        productName: '',
        price: '',
        madeIn: '',
        discription: ' ',
        url:''
    })

    const changeHandler = (e) => {
        const updatedForm = { ...formVal }
        updatedForm[e.target.name] = e.target.value;
        setFormVal(updatedForm)
    }
    const submitForm = (e) => {
        e.preventDefault()
        context.dispatch({ type: param.type, paylode: formVal })
        setShow(false);
        setFormVal({
            type: '',
            id: Math.random(),
            productName: '',
            price: '',
            madeIn: '',
            discription: ' '
    
        })

    }

    return (
        <>
            <Button variant="primary" onClick={handleShow}>
                Add Card
            </Button>

            <Modal className='modelForm' show={show} >
                <Form>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Type</Form.Label>
                        <Form.Control type="text" placeholder="eg. tv ,laptop ,mobile" name="type" value={formVal.type} onChange={changeHandler} />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>productName</Form.Label>
                        <Form.Control type="text" placeholder="Enter productName" name="productName" value={formVal.productName} onChange={changeHandler} />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>price</Form.Label>
                        <Form.Control type="number" placeholder="Enter price" name="price" value={formVal.price} onChange={changeHandler} />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Img Url</Form.Label>
                        <Form.Control type="text" placeholder="Enter Url" name="url" value={formVal.url} onChange={changeHandler} />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>discription</Form.Label>
                        <Form.Control type="text" placeholder="Enter discription" name="discription" value={formVal.discription} onChange={changeHandler} />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Country</Form.Label>
                        <Form.Control type="text" placeholder="Enter Country name" name="madeIn" value={formVal.madeIn} onChange={changeHandler} />
                    </Form.Group>

                    <Button variant="primary" type="button" onClick={(e) => submitForm(e)}>
                        Submit
                    </Button>
                </Form>
            </Modal>
        </>
    );
}
export default ModelProduct