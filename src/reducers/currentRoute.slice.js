import { createSlice } from "@reduxjs/toolkit";

const initialState = []

export const currentRouteSlice = createSlice({
  name: 'currentRoute',
  initialState,
  reducers: {
    addCurrentRoute: (state, action) => {
      console.log('добавить маршрут' + action.payload)
      state = [action.payload]
      console.log('Текущий роут' + typeof (state))
    },
  },
})

export const { addCurrentRoute } = currentRouteSlice.actions

export default currentRouteSlice.reducer