import { configureStore } from "@reduxjs/toolkit"
import { studentApi } from "../loginDashbord/studentApi"

export const studentStore = configureStore({
    reducer: {
        [studentApi.reducerPath]: studentApi.reducer
    },
    middleware: (getDefaultMiddleware) => {
        return getDefaultMiddleware().concat(studentApi.middleware)
    }
})