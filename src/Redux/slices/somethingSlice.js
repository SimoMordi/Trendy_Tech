import { createSlice } from "@reduxjs/toolkit";



const somethingSlice = createSlice({
    name: "counter",
    initialState: 0,
    reducers: {
        doSomething: (currentState) => currentState + 1
       
        }
})

export const {doSomething } = somethingSlice.actions
export default somethingSlice.reducer