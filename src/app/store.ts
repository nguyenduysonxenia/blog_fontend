
import {configureStore} from '@reduxjs/toolkit'
import HomeSlice from '../pages/home/HomeSlice'
import DetailPostSlice from '../pages/detailPost/DetailPpstSlice'
import UserSlice from '../pages/user/UserSlice'
import ListPostSlice from '../pages/listPost/ListPostSlice'
import EditPostSlice from '../pages/editPost/EditPostSlice'
import AdminHomeSlice from '../pages/adminHome/AdminHomeSlice'
import AdminUserSlice from '../pages/adminUser/AdminUserSlice'
const rootReducer = {
  HomePage: HomeSlice,
  DetailPostPage: DetailPostSlice,
  CurrentUser: UserSlice,
  ListPostPage: ListPostSlice,
  EditPostPage: EditPostSlice,
  AdminHomeSlice: AdminHomeSlice,
  AdminUserSlice:AdminUserSlice
}
const store = configureStore({
  reducer:rootReducer
})
export type RootState = ReturnType<typeof store.getState>
export default store