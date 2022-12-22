import Table from 'react-bootstrap/Table';
import { useFetchContactQuery } from '../studentApi';

function ContactList() {
  const { data } = useFetchContactQuery()
  return (
    <>
      {data && <Table striped bordered hover variant="dark" style={{ width: "700px", margin: "20px auto" }}>
        <thead>
          <tr>
            <th>Id</th>
            <th>Email</th>
            <th>Name</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => {
            return <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.email}</td>
              <td>{item.name}</td>
            </tr>
          })}
        </tbody>
      </Table>}
    </>
  );
}

export default ContactList;