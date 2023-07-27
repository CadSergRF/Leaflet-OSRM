import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  points: [],
  route: [],
  isLoading: false
}

export const currentRouteSlice = createSlice({
  name: 'currentRoute',
  initialState,
  reducers: {
    addCurrentPoints: (state, action) => {
      state.points = action.payload
      state.isLoading = true;
    },
    addCurrentRoute: (state, action) => {
      state.route = action.payload
      state.isLoading = false
    }
  },
})

export const { addCurrentPoints, addCurrentRoute } = currentRouteSlice.actions

export default currentRouteSlice.reducer