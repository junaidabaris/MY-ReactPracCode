import { createContext } from "react"

export const ProductContaxt = createContext()
const data = {
    title: 'Product title',
    para: 'Dear Customer, we are pleased to inform you that your Welcome Kit has been dispatched on 03-OCT-22 through BLUEDART vide AWB No. 30971228540. The expected date',
    tableData: {
        colums: [
            { header: 'ID', cell: 'id' },
            { header: 'NAME', cell: 'name' },
            { header: 'AGE', cell: 'age' },
        ],
        rows: [
            { id: '1', name: 'junaid', age: 20 },
            { id: '2', name: 'akhtar', age: 22 },
            { id: '3', name: 'sanaya', age: 10 },
        ]
    }
}
const ProductProvider = (props) => {
    // console.log(props);
    return (
        <ProductContaxt.Provider value={data}>
            {props.children}
        </ProductContaxt.Provider>

    )
}
export default ProductProvider