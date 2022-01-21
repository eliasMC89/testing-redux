import { combineReducers } from 'redux';
import { configureStore } from '@reduxjs/toolkit'
import { counterA } from './counterA';
import { counterB } from './counterB';

const reducer = combineReducers({
  counterA,
  counterB,
});

export default configureStore({
  reducer,
})
