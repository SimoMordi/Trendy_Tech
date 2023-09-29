import { createSlice } from "@reduxjs/toolkit";



const somethingSlice = createSlice({
    name: "something",
    initialState:"" ,
    reducers: {
        showSomething: (currentState) => currentState = "Hello"
    }
})

export const {showSomething } = somethingSlice.actions
export default somethingSlice.reducer