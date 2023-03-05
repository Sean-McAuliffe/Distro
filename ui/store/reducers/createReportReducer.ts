import { createAction, createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit'

interface CreateReportState {
    id: string,
    category: string,
    datasources: Array<string>,
    prep: Array<object>,
    analysis: Array<object>,
    export_name: string,
    export_filetype: string
}

const initialState = {
    id: '',
    category: "",
    datasources: [],
    prep: [{ id: 0 }],
    analysis: [{ id: 0 }],
    export_name: '',
    export_filetype: ''
} as CreateReportState



export const createReportSlice = createSlice({
    name: 'createReport',
    initialState,
    reducers: {
        changeName: (state, action: PayloadAction<string>) => {
            let newObj = {
                ...state,
                id: action.payload
            }

            return newObj
        },
        changeCategory: (state, action: PayloadAction<string>) => {
            let newObj = {
                ...state,
                category: action.payload
            }

            return newObj
        },
        addDataSource: (state, action: PayloadAction<Array<string>>) => {
            let newObj = {
                ...state,
                datasources: action.payload
            }

            return newObj
        },

        addPrep: (state, action: PayloadAction<Array<object>>) => {
            let newObj = {
                ...state,
                prep: action.payload
            }

            return newObj
        },
        addAnalysis: (state, action: PayloadAction<Array<object>>) => {
            //@ts-ignore
            let newObj = {
                ...state,
                analysis: action.payload
            }

            return newObj
        },
        removeAnalysis: (state, action: PayloadAction<number>) => {
            //@ts-ignore
            let newAnalysis = state.analysis.filter(ds => ds.id !== action.payload)

            return {
                ...state,
                analysis: newAnalysis
            }
        },
        editExportName: (state, action: PayloadAction<string>) => {
            let newObj = {
                ...state,
                export_name: action.payload
            }

            return newObj
        },
        editExportFiletype: (state, action: PayloadAction<string>) => {
            let newObj = {
                ...state,
                export_filetype: action.payload
            }

            return newObj
        },
        resetState: (state) => {
            return initialState
        }

    }
})

export const { changeName, 
            changeCategory, 
            addDataSource,
            addPrep, 
            addAnalysis, 
            removeAnalysis, 
            editExportName, 
            editExportFiletype } = createReportSlice.actions

export default createReportSlice.reducer; 