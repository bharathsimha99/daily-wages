import { createSlice } from "@reduxjs/toolkit";

const workerData = [{}]
const detailSlice = createSlice({
    name :'workers',
    initialState:{
        value:workerData,
    },
    reducers:{
        addDetails:(state,action)=>{
            state.value.push(action.payload)
        }
    }
})
export default detailSlice.reducer

export const {addDetails} = detailSlice.actions