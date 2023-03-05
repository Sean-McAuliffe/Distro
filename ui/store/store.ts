import { configureStore } from '@reduxjs/toolkit'
import createReportReducer from './reducers/createReportReducer';

export const store = configureStore({
    reducer: {
        createReport: createReportReducer
    },
    devTools: true,
});


export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
