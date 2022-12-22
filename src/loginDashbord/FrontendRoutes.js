import { Button } from "react-bootstrap"
import { Provider } from "react-redux"
import { Link, Route, Routes, useNavigate } from "react-router-dom"
import { studentStore } from "../storeRTK/studentsStore"
import ContactForm from "./components/ContactForm"
import ContactList from "./components/ContactList"
import Dashbord from "./components/Dashbord"
import LoginForm from "./components/LoginForm"

function FrontendRoutes() {
    
    const navigate = useNavigate()
    const goLogin = () => {
        navigate('/login')
    }

    return <>
        <Provider store={studentStore}>
            <Routes>
                <Route path="/" element={<Button variant="success" onClick={goLogin}>Login</Button>} />
                <Route path="/dashbord" element={<Dashbord />} >
                    <Route path="" element={<ContactList />} />
                    <Route path="contactCreate" element={<ContactForm />} />
                    <Route path="students" element={<h2>No page Found</h2>} />
                </Route>
                <Route path="/login" element={<LoginForm />} />
            </Routes>
        </Provider>
    </>
}
export default FrontendRoutes