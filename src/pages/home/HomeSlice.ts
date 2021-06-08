import {createSlice} from '@reduxjs/toolkit'

const Home = createSlice({
  name: 'homePage',
  initialState: {
    listPost: {},
    listPostNew: [],
    listPostHot:[],
    listPostSearch:[],
  },
  reducers:{
    getListPost: (state,action)=>{
      state.listPost = action.payload
    },
    getlistPostNew: (state,action)=>{
      state.listPostNew = action.payload
    },
    getListPostHot: (state,action)=>{
      state.listPostHot = action.payload
    },
    getListPostSearch: (state,action)=>{
      state.listPostSearch = action.payload
    }
  }
})

const {reducer, actions} = Home;
export const {getListPost,getlistPostNew,getListPostHot,getListPostSearch} = actions;
export default reducer;
