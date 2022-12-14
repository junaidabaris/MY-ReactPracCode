import { createContext, useReducer } from 'react'
import './All.css'
import Count from './Compo/Count'
import Value from './Compo/Value'

export const DataProvider = createContext()

const data = {
    count: 0,
    value: 0
}

const rootReducer = (state, action) => {

    const ActionValue = (data, click) => {
        if (click.action === 'INC') {
            data[action.type] = data[action.type] + 1
        }
        else {
            data[action.type] = data[action.type] - 1
        }
    }

    switch (action.type) {
        case 'count':
            const dataCount = { ...state }
            ActionValue(dataCount, action)
            return dataCount

        case 'value':
            const dataVal = { ...state }
            ActionValue(dataVal, action)
            return dataVal
    }
    return state
}

function MainReducer() {
    const [state, dispatch] = useReducer(rootReducer, data)
    return (
        <div className="div-box">
            <DataProvider.Provider value={{ state, dispatch }}>
                <Count />
                <Value />
            </DataProvider.Provider>

        </div>
    )
}
export default MainReducer