import { createContext } from "react"
import NetFlix from "./Netflix"

const netFlixData = {
    title: 'Netflix',
    para: 'hello  world this is netflix',
    tableData: [
        {
            id: 1,
            name: 'john',
            prod: 'A'
        }
    ],
    features: {
        title: 'Features',
        data: [
            {
                img: '/img1',
                url: 'https://images.indianexpress.com/2021/04/Asus-ROG-Phone-5-1200.jpg'
            },
            {
                img: '/img1',
                url: 'https://www.cnet.com/a/img/resize/cd82526e3b3b24cbbbdbd9b6cdbba2d15db33ee4/hub/2021/10/01/0dc5aad3-9dfe-4be1-b37d-2f643d85cd66/20210925-iphone-13-pro-03.jpg?auto=webp&fit=crop&height=528&width=940'
            }
        ]
    }

}

export const NetContaxt = createContext()

function NetflixFile() {
    return (
        <div>
            <NetContaxt.Provider value={netFlixData}>
                <NetFlix />
            </NetContaxt.Provider>

        </div>
    )
}
export default NetflixFile