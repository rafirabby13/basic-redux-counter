import { configureStore } from "@reduxjs/toolkit";
import { conterReducer } from "./features/counter/CounterSlice";
import logger from "./middlewares/logger";



export const store = configureStore({
    reducer:{
        counter : conterReducer

    },
    middleware: (getDefaultMiddleware)=>getDefaultMiddleware().concat(logger)
})


export type RootState = ReturnType<typeof store.getState>;


export type AppDispatch = typeof store.dispatch;