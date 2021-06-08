
import {configureStore} from '@reduxjs/toolkit'
import HomSlice from '../pages/home/HomeSlice'
const rootReducer = {
  HomePage: HomSlice
}
const store = configureStore({
  reducer:rootReducer
})
export type RootState = ReturnType<typeof store.getState>
export default store