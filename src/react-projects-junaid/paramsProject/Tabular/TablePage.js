import { createContext } from "react"
import MainTable from "./MainTable"

const tableData = {
    colums: [
        { header: 'ID', key: 'id' },
        { header: 'Name', key: 'name' },
        { header: 'Product', key: 'product' }
    ],

    rows: [
        {
            id: '1',
            name: {
                title: 'john',
                description: 'hello my name is john and.I am a good boy',
                action: false
            },
            product: {
                inColums: [
                    { header: 'A', key: 'id' },
                    { header: 'B', key: 'name' },
                    { header: 'C', key: 'product' }
                ],
                inRows: [
                    { id: '1', name: 'aaa', product: 'Aa' },
                    { id: '2', name: 'bbb', product: 'Bb' },
                ]
            }
        },

        {
            id: '2',
            name: 'victor',
            product: 'Sam',
        },

        {
            id: '3',
            name: {
                title: 'junaid',
                description: 'hello my name is junaid',
                action: true
            },
            product: {
                title: 'Apple',
                description: 'good poroduct ever'
            }
        }
    ]
}

export const tableProvider = createContext()

function TablePage() {
    return (
        <div>
            <tableProvider.Provider value={tableData}>
                <MainTable />
            </tableProvider.Provider>
        </div>
    )
}
export default TablePage