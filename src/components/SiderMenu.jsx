import React from 'react'
import { Layout, Menu } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { addCurrentPoints } from '../reducers/currentRoute.slice'
const { Sider } = Layout;

const SiderMenu = () => {

  const routesList = useSelector(state => state.routes)
  const dispatch = useDispatch();

  const chooseRoute = (points) => {
    dispatch(addCurrentPoints(points))
  }

  const onClick = (e) => {
    chooseRoute(routesList[e.key - 1])
  }

  return (
    <Sider style={{ background: 'white' }}>
      <Menu
        theme='light'
        mode='inline'
        onClick={onClick}
        items={routesList.map((route, index) => ({
          key: String(index + 1),
          label: `Маршрут ${index + 1}`,
        })
        )}
      />
    </Sider>
  )
}

export default SiderMenu