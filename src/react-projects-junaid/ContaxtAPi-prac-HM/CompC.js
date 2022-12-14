
import { useContext } from 'react';
import { contaxtApi } from './CopmA';

function CompC() {
    const contextValue = useContext(contaxtApi)
    console.log('contextValue', contextValue)
    return (
        <div>
            <table border='1'>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Age</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {contextValue.sData.map((item) => {
                        return <tr key={item.id}>
                            <td>{item.name}</td>
                            <td>{item.age}</td>
                            <td>
                                <button onClick={() => contextValue.removeItem(item.id)}>remove</button>
                            </td>
                        </tr>
                    })}

                </tbody>
            </table>
        </div>
    )
}
export default CompC