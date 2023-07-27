import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  [
    {
      geotag: [59.84660399, 30.29496392],
      info: '1 Начало маршрута'
    },
    {
      geotag: [59.82934196, 30.42423701],
      info: '1 Шаверма'
    },
    {
      geotag: [59.83567701, 30.38064206],
      info: '1 Пункт назначения'
    }
  ],
  [
    {
      geotag: [59.82934196, 30.42423701],
      info: '2 Начало маршрута'
    },
    {
      geotag: [59.82761295, 30.41705607],
      info: '2 Шаверма'
    },
    {
      geotag: [59.84660399, 30.29496392],
      info: '2 Пункт назначения'
    }
  ],
  [
    {
      geotag: [59.83567701, 30.38064206],
      info: '3 Начало маршрута'
    },
    {
      geotag: [59.84660399, 30.29496392],
      info: '3 Шаверма'
    },
    {
      geotag: [59.82761295, 30.41705607],
      info: '3 Пункт назначения'
    }
  ]
]

// Можно использовать в будущем для формирования списка сохраненных маршрутов

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