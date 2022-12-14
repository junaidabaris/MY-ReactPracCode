import { useState } from "react"
import { Button, Form } from "react-bootstrap"
import "./Form.css"

function FormSec() {
    const [collectData, setCollectData] = useState({
        name: '',
        gmail: '',
        password: '',
        gender: '',
        comments: '',
        skills: [],

    })

    const { name, gmail, password, comments, gender, skills } = collectData

    const changeHandler = (e) => {
        const updatedForm = { ...collectData }
        updatedForm[e.target.name] = e.target.value;
        setCollectData(updatedForm)
    }

    const changeSkillsHandler = (str) => {
        const formD = { ...collectData }
        if (formD.skills.includes(str)) {
            formD.skills.splice(str, 1)
        }else{
            formD.skills.push(str)
        }
        setCollectData(formD)
    }

    const submitForm = (e) => {
        e.preventDefault()
        console.log(collectData)
    }
    return (
        <div className='container my-2'>
            <div className='col-6 m-auto'>
                <Form>
                    <Form.Group className="mb-3">
                        <Form.Label>User Name</Form.Label>
                        <Form.Control type="text" placeholder="Enter Name" name="name" value={name} onChange={changeHandler} />
                    </Form.Group>
                    <Form.Group className="mb-3" >
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="gmail" placeholder=" gmail" name="gmail" value={gmail} onChange={changeHandler} />
                    </Form.Group>
                    <Form.Group className="mb-3" >
                        <Form.Label>password</Form.Label>
                        <Form.Control type="password" placeholder="password" name="password" value={password} onChange={changeHandler} />
                    </Form.Group>
                    <Form.Group className="mb-3" >
                        <Form.Label>Gender</Form.Label>
                        <Form.Check type="radio" label="Male" name="gender" value="Male" onChange={changeHandler} />
                        <Form.Check type="radio" label="Female" name="gender" value="Femail" onChange={changeHandler} />
                    </Form.Group>
                    <Form.Group className="mb-3" >
                        <Form.Label>Skill</Form.Label>
                        <Form.Check type="checkbox" label="JavaScript" onClick={() => changeSkillsHandler('Javascript')} />
                        <Form.Check type="checkbox" label="React.js" onClick={() => changeSkillsHandler('React.js')} />
                        <Form.Check type="checkbox" label="TypeScript" onClick={() => changeSkillsHandler('Typescript')} />
                        <Form.Check type="checkbox" label="HTML" onClick={() => changeSkillsHandler('HTML')} />
                    </Form.Group>
                    <Form.Group className="mb-3" >
                        <Form.Label>Comments</Form.Label>
                        <Form.Control type="text" placeholder="comments" name="comments" value={comments} onChange={changeHandler} />
                    </Form.Group>

                    <Button variant="primary" type="button" disabled={!name || !gmail || !password || !gender || !skills.length} onClick={(e) => submitForm(e)}>
                        Submit
                    </Button>
                </Form>
            </div>
        </div>
    )
}
export default FormSec