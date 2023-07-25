import React from 'react'
import { Layout, Menu } from 'antd';
import { useSelector } from 'react-redux';
const { Sider } = Layout;

const SiderMenu = () => {

  const routesList = useSelector(state => state.routes.routesList)
  console.log(routesList[0])

  return (
    <Sider>
      <Menu
        theme='dark'
        mode='inline'
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