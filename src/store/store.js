import { configureStore } from '@reduxjs/toolkit'
import counterA from './counterA'
import counterB from './counterB'

export default configureStore({
  reducer: {
    counterA,
    counterB,
  },
})