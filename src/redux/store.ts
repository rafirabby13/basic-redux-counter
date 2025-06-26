import { configureStore } from "@reduxjs/toolkit";
import { conterReducer } from "./features/counter/CounterSlice";



export const store = configureStore({
    reducer:{
        counterr : conterReducer

    }
})


export type RootState = ReturnType<typeof store.getState>;


export type AppDispatch = typeof store.dispatch;