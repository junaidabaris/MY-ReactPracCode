
import { useEffect } from 'react';
import { Button } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link, Outlet, useNavigate } from 'react-router-dom';
import { useFetchStudentsQuery, useLoginStatusMutation } from '../studentApi';

function Dashbord() {
    const { data } = useFetchStudentsQuery()
    const [logOut] = useLoginStatusMutation()
    const navigate = useNavigate()

    if (!data) {
        return
    }
    if (data.isLogin) {

    } else {
        navigate('/login')
    }

    const logOutStudent = () => {
        logOut({ name: data.name, password: data.password, isLogin: false })
        navigate('/login')
    }

    return (
        <>
            <Navbar bg="dark" variant="dark">
                <Container>
                    <Link to='/dashbord'>Dashbord</Link>
                    <Nav className="me-auto">
                        <Link to='/dashbord/students' className='mx-5 '>Students</Link>
                        <Link to='/dashbord/contactCreate'>Create-Contact</Link>
                    </Nav>
                    <Button variant="success" onClick={logOutStudent} type="button">LogOut</Button>
                </Container>
            </Navbar>
            <Outlet></Outlet>
        </>
    );
}

export default Dashbord;