import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios';
import { nanoid } from '@reduxjs/toolkit';

export const fetchCats = createAsyncThunk('cats/fetchCats', async () => {
    const response = await axios.get('https://api.thecatapi.com/v1/images/search?limit=10')
    return response.data
  })

export const catsSlice = createSlice({
    name: 'cats',
    initialState:{
        cats:[],
        status:'idle',
        error: null,
    },
  reducers: {
    deleteCat:(state, action)=>{
        const catFound = state.cats.find(cat => action.payload === cat.id)
        if(catFound){
            state.cats.splice(state.cats.indexOf(catFound), 1)
        }},
    addCat: (state, action)=>{
        state.cats.push({ ...action.payload, id: nanoid() })
        },
    editCat: (state, action)=>{
      const {id, url, height, width} = action.payload;
      console.log(id);
      const foundCat = state.cats.find(cat => cat.id === id);
      if (foundCat){
        foundCat.url = url;
        foundCat.width = width;
        foundCat.height = height;
      }

    }
    
  },
  extraReducers: builder => {
    builder
      .addCase(fetchCats.pending, (state, action) => {
        state.status = 'loading'
      })
      .addCase(fetchCats.fulfilled, (state, action) => {
        const newEntities = {}
        action.payload.forEach(cat => {
          newEntities[cat.id] = cat 
        })
        state.entities = newEntities
        state.cats = action.payload;
        state.status = 'idle'
      })
    }
})

// Action creators are generated for each case reducer function
//export const { increment, decrement, incrementByAmount } = counterSlice.actions
export const {deleteCat, addCat, editCat} = catsSlice.actions
export default catsSlice.reducer