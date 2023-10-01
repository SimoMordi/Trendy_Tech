import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
    name: "counter",
    initialState: 0,
    reducers: {
        increment: (currentState) => currentState + 1,
        decrement: (currentState) => currentState - 1,
        reset: () => 0        
    }
})

export const { increment, decrement, reset } = counterSlice.actions
export default counterSlice.reducer