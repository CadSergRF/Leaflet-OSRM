import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  routesList: [
    [
      {
        geotag: [59.84660399, 30.29496392],
        info: 'Начало маршрута'
      },
      {
        geotag: [59.82934196, 30.42423701],
        info: 'Шаверма'
      },
      {
        geotag: [59.83567701, 30.38064206],
        info: 'Пункт назначения'
      }
    ],
    [
      {
        geotag: [59.82934196, 30.42423701],
        info: 'Начало маршрута'
      },
      {
        geotag: [59.82761295, 30.41705607],
        info: 'Шаверма'
      },
      {
        geotag: [59.84660399, 30.29496392],
        info: 'Пункт назначения'
      }
    ],
    [
      {
        geotag: [59.83567701, 30.38064206],
        info: 'Начало маршрута'
      },
      {
        geotag: [59.84660399, 30.29496392],
        info: 'Шаверма'
      },
      {
        geotag: [59.82761295, 30.41705607],
        info: 'Пункт назначения'
      }
    ]
  ],
}

export const routesSlice = createSlice({
  name: 'routesList',
  initialState,
  reducers: {
    addRoute: (state, action) => {
      state.routesList.push(action.payload)
    },
  },
})

export const { addRoute } = routesSlice.actions

export default routesSlice.reducer