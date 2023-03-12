import { configureStore } from '@reduxjs/toolkit'
import CatsSlice from '../features/Cats/CatsSlice'

export default configureStore({
  reducer: {
    cats:CatsSlice
  }
})