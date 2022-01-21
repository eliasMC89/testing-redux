import { createSlice } from '@reduxjs/toolkit'

export const counterASlice = createSlice({
  name: 'counterA',
  initialState: {
    value: {
      value: {
        value: 0,
      },
    },
  },
  reducers: {
    increment: (state) => {
      state.value.value.value += 1
    },
    decrement: (state) => {
      state.value.value.value -= 1
    },
    incrementByAmount: (state, action) => {
      state.value.value.value += action.payload
    },
  },
})

export const { increment, decrement, incrementByAmount } = counterASlice.actions

export default counterASlice.reducer