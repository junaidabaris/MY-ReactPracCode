import { useState } from "react"
import { useParams } from "react-router-dom"
import Form from "../Comps/Form"

function FormPage({ data, updateObj }) {

    const params = useParams()
    // console.log('param', params.id);
    const editData = data.filter((items) => {
        // console.log('index',index);
        return items.id === +params.id
    })
    // console.log('form data',editData);
    return (
        <div className="form_section">
            <h3> Correction Form ID: {params.id}</h3>
            <Form stData={editData} updateObj={updateObj} onSubmitHandler={updateObj} />
        </div>
    )
}
export default FormPage