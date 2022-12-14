import { useState } from "react"
import { Link, Route, Routes, useNavigate } from "react-router-dom"
import Contact from "../Components/Contact"
import EditForm from "../Components/EditForm"
import Employee from "../Components/Employee"

const employee = [
    { id: '1', name: 'Rahul', age: 20, profile: 'UI Developer' },
    { id: '2', name: 'Jhon', age: 22, profile: 'UI Deginer' },
    { id: '3', name: 'Bittu', age: 24, profile: 'PHP Developer' },
    { id: '4', name: 'Arman', age: 25, profile: 'Maneger' },
    { id: '5', name: 'Jorden', age: 33, profile: 'React Devoloper' },
    { id: '6', name: 'Samyak', age: 26, profile: 'HR' }
]

function MainPage() {
    const [empData, setEmpData] = useState(employee)
    const navigate = useNavigate()

    const DeleteItem = (id) => {
        const empCopy = [...empData]
        const newArr = empCopy.filter((item) => {
            return item.id !== id
        })
        setEmpData(newArr)
        navigate('/')

    }

    const EditItem = (id) => {
        navigate(`edit/${id}`)
    }

    const onSubmitBtn = (obj) => {
        const newData = empData.map((item) => {
            if (item.id === obj.id) {
                return { ...obj }
            } else {
                return { ...item }
            }
        })
        setEmpData(newData)
    }

    return (
        <div>
            <h3>
                <Link to='/'>Employee</Link>
            </h3>
            <h3>
                <Link to='/contact'>Contact</Link>
            </h3>
            <Routes>
                <Route path="/" element={<Employee data={empData} DeleteItem={DeleteItem} EditItem={EditItem} />} >
                    <Route path="edit/:id" element={<EditForm data={empData} onSubmitBtn={onSubmitBtn} />} />
                </Route>
                <Route path="/contact" element={<Contact />} />
            </Routes>
        </div>
    )
}
export default MainPage