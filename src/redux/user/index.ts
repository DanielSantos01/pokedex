/* eslint-disable prettier/prettier */
import {createSlice} from '@reduxjs/toolkit';

const slice = createSlice({
  name: 'user',
  initialState: {
    login: '',
    isLogged: false,
  },
  reducers: {
    logIn: (state, {payload}) => {
      return {...state, ...payload};
    },

    logOut: (state) => {
      return {...state, login: '', isLogged: false}
    },
  },
});

export const { logIn, logOut } = slice.actions;

export default slice.reducer;
