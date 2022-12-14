import { Link, Route, Routes, useNavigate } from "react-router-dom"
import Product from "./Product"
import Students from "./Students"
import Forms from "./Forms"
import { useState } from "react"

const studentData = [
    { id: '1', name: 'Tahseen', roll: 11, schoolName: 'Munam Public School' },
    { id: '2', name: 'Daud', roll: 22, schoolName: 'Shurekha School' },
    { id: '3', name: 'Dilkash', roll: 33, schoolName: 'Ananda School' },
    { id: '4', name: 'Sohail', roll: 44, schoolName: 'Delhi Public School' },
    { id: '5', name: 'Rahul', roll: 44, schoolName: 'stColumbus' }
]

function StudentsPages() {
    const [stData, setData] = useState(studentData)

    const removeData = (id) => {
        const copyStData = [...stData]
        const filterdArr = copyStData.filter((item)=>{
            return item.id !== id
        })
        setData(filterdArr);
    }

    const editStData =(id)=>{
        const filterdStData = stData.filter((item)=>{
            return item.id === id
        })
        
    }

    const resetData =(obj)=>{
        const copySt = [...stData]
        const updated = copySt.map((item)=>{
            if (item.id === obj.id) {
                return {...obj}
            }
            else{
                return {...item}
            }
            
        })
        setData(updated)
    }

    return (
        <div>
            <h2>
                <Link to='/'>Student</Link>
            </h2>
            <h2>
                <Link to='/product'>Product</Link>
            </h2>
            <Routes>
                <Route path="/" element={<Students data={stData} removeData={removeData} editStData={editStData} />}>
                    <Route path="edit/:id" element={<Forms data={stData} resetData={resetData}/>} />
                </Route>
                <Route path="/product" element={<Product />} />
            </Routes>
        </div>
    )
}
export default StudentsPages