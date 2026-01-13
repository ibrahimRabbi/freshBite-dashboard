import { configureStore } from '@reduxjs/toolkit'
import { baseApi } from './api/baseApi'
import { userSlice } from './features/user/userSlice'

export const store = configureStore({
    reducer: {
        users: userSlice.reducer ,
        [baseApi.reducerPath]: baseApi.reducer,

    },
    middleware: (getDefaultMiddleware) => {
        return getDefaultMiddleware().concat(baseApi.middleware)
    }

})



export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch