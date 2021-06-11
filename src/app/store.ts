
import {configureStore} from '@reduxjs/toolkit'
import HomeSlice from '../pages/home/HomeSlice'
import DetailPostSlice from '../pages/detailPost/DetailPpstSlice'
import UserSlice from '../pages/user/UserSlice'
import ListPostSlice from '../pages/listPost/ListPostSlice'
const rootReducer = {
  HomePage: HomeSlice,
  DetailPostPage: DetailPostSlice,
  CurrentUser: UserSlice,
  ListPostPage: ListPostSlice
}
const store = configureStore({
  reducer:rootReducer
})
export type RootState = ReturnType<typeof store.getState>
export default store