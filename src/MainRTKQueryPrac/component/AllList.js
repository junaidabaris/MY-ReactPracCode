import { Button } from 'react-bootstrap';
import Table from 'react-bootstrap/Table';
import { Link } from 'react-router-dom';
import { useDeleteListMutation, useFetchContactsQuery } from '../../storeRTK/store';

function AllList() {
    const { data } = useFetchContactsQuery()

    const [functionDelete] = useDeleteListMutation()

    const deleteList = (id) => {
        functionDelete(id)
    }

    return (<>
        <Table striped bordered hover>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Address</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                {data && data.map((item) => {
                    return <tr key={item.id}>
                        <td>{item.id}</td>
                        <td>{item.name}</td>
                        <td>{item.email}</td>
                        <td>{item.addres}</td>
                        <td>
                            <Link to={`/list/edit/${item.id}`}><Button variant="warning">Update</Button></Link>
                            <Link to={`/list/view/${item.id}`}><Button variant="info" className='mx-3'>View</Button></Link>
                            <Button variant="danger" onClick={() => deleteList(item.id)}>Delete</Button>
                        </td>
                    </tr>
                })}


            </tbody>
        </Table>
        <Link to={'/list/add'}><Button size="lg mx-4">AddList</Button></Link>
    </>
    );
}

export default AllList;