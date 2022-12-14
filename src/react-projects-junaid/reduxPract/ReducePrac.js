import { createContext, useEffect, useReducer } from "react"
import InnerReducer from "./InnerReducer"

const data = {
    title: 'hello this is orignal title'
}

export const creatingContext = createContext()

const parentReducer = (state, action) => {
    // console.log(state);
    // console.log(action);
    if (action.type === 'UPDATE_TITLE') {
        return { ...state, title: "ding dong new title" }
    } else {
        return state
    }
}

function ReducerPrac() {
    const [state, dispatch] = useReducer(parentReducer, data)
    // console.log(state);

    const chengeHandller = () => {
        dispatch({ type: 'UPDATE_TITLE' })
    }

    return (
        <div>
            <h1>Main comp</h1>
            <creatingContext.Provider value={{ state, chengeHandller }}>
                <InnerReducer />
            </creatingContext.Provider>

        </div>
    )
}
export default ReducerPrac