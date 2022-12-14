import React, { createContext, useState } from "react"
import CompB from "./CompB"


const stData = [
    { id: 1, name: 'Junaid Akhtar', age: 20, },
    { id: 2, name: 'Sanaya hussain', age: 8, },
    { id: 3, name: 'Anaya Hussain', age: 3, },
    { id: 4, name: 'Shakir hussain', age: 32, }
]

export const contaxtApi = createContext()
function CompA() {
    
    const [sData, setSData] = useState(stData)
    const removeItem = (id) => {
        const filterd = [...sData].filter((item) => {
            return item.id !== id
        })
        setSData(filterd)
    }

    return (
        <div>
            <contaxtApi.Provider value={{sData: sData, removeItem: removeItem}}>
                <CompB />
            </contaxtApi.Provider>
        </div>
    )
}

export default CompA
