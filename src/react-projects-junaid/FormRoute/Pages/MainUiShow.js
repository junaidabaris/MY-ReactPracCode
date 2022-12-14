import { useState } from "react"
import { Link, Route, Routes, useNavigate } from "react-router-dom"
import Products from "./Products"
import Students from "./Students"
import '../Pages/All.css'
import FormPage from "./FormPage"

const students = [
    { id: 1, name: 'junaid', age: 20, profile: 'UI Developer' },
    { id: 2, name: 'shagufta', age: 22, profile: 'UI Deginer' },
    { id: 3, name: 'Bittu', age: 24, profile: 'PHP Developer' },
    { id: 4, name: 'Daud', age: 25, profile: 'Maneger' },
    { id: 5, name: 'soaib', age: 23, profile: 'React Devoloper' }
]

function MainUiShow() {
    const navigate = useNavigate()
    const [stData, setStData] = useState(students)

    const removeItem = (id) => {
        // console.log(id);
        const newArr = stData.filter((item) => {
            return item.id !== id
        })
        // console.log(newArr);
        setStData(newArr)
    }

    const editSt = (id) => {
        navigate(`Edit/${id}`)
       
    }

    const updateObj = (obj) => {
        const FinalPost = [...stData]
        const updated = FinalPost.map(item => {
            if (item.id === obj.id) {
                return { ...obj }
            } else {
                return { ...item }
            }
        })
        setStData(updated)
        // FinalPost[indexNum] = obj
        // console.log(obj);
        // console.log(FinalPost);

    }

    return (
        <div className="main_sec">
            <h3>
                <Link to='/'>Students</Link>
            </h3>
            <h3>
                <Link to='/Products'>Products</Link>
            </h3>
            <Routes>
                <Route path="/" element={<Students data={stData} removeItem={removeItem} editSt={editSt} />} >
                    <Route path="Edit/:id" element={<FormPage data={stData} updateObj={updateObj}/>} />
                </Route>
                <Route path="/Products" element={<Products />} />
            </Routes>
        </div>
    )
}
export default MainUiShow