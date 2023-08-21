import { createSlice } from "@reduxjs/toolkit";

const tableSlice = createSlice({
    name: 'table',
    initialState: [],
    reducers: {
        login: (state, action) =>{
            state = action.payload
        },
    }
})

export default tableSlice;