import {createSlice} from "@reduxjs/toolkit";

export interface FormDataState {
    searchParam: string;
}

const initialState: FormDataState = {
    searchParam: '',
}

export const formDataSlice = createSlice({
    name: 'formData',
    initialState,
    reducers: {
        logger:(state) => {
            console.log(state.searchParam)
        }
    }
})

export const {logger} = formDataSlice.actions
export default formDataSlice.reducer