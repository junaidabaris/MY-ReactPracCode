import { createContext } from "react"
import InnerData from "./InnerData"

const data = [
   { id: 1,
    name: 'jordan',
    age: 20,
    school: 'DAV',
    dipartment: 'science'}
]

export const ContaxtData = createContext()
const newData = data.map((item) => {
    return { id: item.id, name: item.name, school: item.school }
    
})
function DataContaxtPrac() {
    return (
        <div>
            <ContaxtData.Provider value={newData}>
                <InnerData />
            </ContaxtData.Provider>

        </div>
    )
}
export default DataContaxtPrac