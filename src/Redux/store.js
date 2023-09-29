import { ConfigureStore } from '@reduxjs/toolkit'
import{somethingReducer} from './somethingSlice/something'

const store = ConfigureStore({
  reducer: {
    something: somethingReducer
  },
})

export default store