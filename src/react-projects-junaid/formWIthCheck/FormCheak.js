
import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

export const FormCheak = () => {
    const [formVal, setFormVal] = useState({
        name: '',
        fullName: '',
        age: '',
        skills: [],
        gender: ''
    })


    const changeHandler = (e) => {
        const updatedForm = { ...formVal }
        updatedForm[e.target.name] = e.target.value;
        setFormVal(updatedForm)
    }
    const changeSkillsHandler = (str) => {
        const formD = { ...formVal }
        formD.skills.push(str)
        setFormVal(formD)
    }
    const submitForm = (e) => {
        e.preventDefault()
        console.log(formVal)
    }
    return (
        <div className='container my-2'>
            <div className='col-6 m-auto'>
                <Form>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Name</Form.Label>
                        <Form.Control type="text" placeholder="Enter Name" name="name" value={formVal.name} onChange={changeHandler} />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Full Name</Form.Label>
                        <Form.Control type="text" placeholder="Enter Full Name" name="fullName" value={formVal.fullName} onChange={changeHandler} />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Age</Form.Label>
                        <Form.Control type="number" placeholder="Enter Age" name="age" value={formVal.age} onChange={changeHandler} />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicCheckbox">
                        <Form.Label>Skill</Form.Label>
                        <Form.Check type="checkbox" label="JavaScript"  onClick={() => changeSkillsHandler('Javascript')} />
                        <Form.Check type="checkbox" label="TypeScript"  onClick={() => changeSkillsHandler('Typescript')} />
                        <Form.Check type="checkbox" label="HTML"  onClick={() => changeSkillsHandler('HTML')} />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicCheckbox">
                        <Form.Check type="radio" label="Male" name="gender" value="Male" onChange={changeHandler} />
                        <Form.Check type="radio" label="Female" name="gender" value="Femail" onChange={changeHandler} />
                    </Form.Group>
                    <Button variant="primary" type="button" disabled={!formVal.name || !formVal.age || !formVal.skills.length || !formVal.gender} onClick={(e) => submitForm(e)}>
                        Submit
                    </Button>
                </Form>
            </div>
        </div>
    )
}
    export default FormCheak