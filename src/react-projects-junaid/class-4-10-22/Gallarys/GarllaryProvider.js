import { createContext } from "react";


const data = {
    title: 'Gallary title',
    para: 'hello gallary Customer, we are pleased to inform you that your Welcome Kit has been dispatched on 03-OCT-22 through BLUEDART vide AWB No. 30971228540. The expected date',
    tableData: {
        colums: [
            { header: 'ID', cell: 'id' },
            { header: 'NAME', cell: 'name' },
            { header: 'AGE', cell: 'age' },
            { header: 'CLASS', cell: 'class' },
        ],
        rows: [
            { id: '111', name: 'salman', age: 20, class: 10 },
            { id: '222', name: 'sharuk', age: 22, class: 9 },
            { id: '333', name: 'sohail', age: 10, class: 8 },
            { id: '444', name: 'arbaz', age: 15, class: 11 },
            { id: '555', name: 'rahul', age: 10, class: 12 },
        ]
    },
    imgSection: [
        { phone: 'Iphone 13', img: 'https://fdn.gsmarena.com/imgroot/reviews/20/apple-iphone-12-pro-max/lifestyle/-1200w5/gsmarena_006.jpg' },
        { phone: 'Iphone 12', img:'https://m.media-amazon.com/images/I/71xkMA+gvYL._SX522_.jpg' }
    ]
}

export const GallaryContaxt = createContext()
const GarllaryProvider = (props) => {
    return (
        <div>
            <GallaryContaxt.Provider value={data}>
                {props.children}
            </GallaryContaxt.Provider>
        </div>
    )
}
export default GarllaryProvider