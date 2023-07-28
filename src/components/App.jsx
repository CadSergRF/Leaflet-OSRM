
import './App.css';
import MapComponent from './MapComponent';
import { Layout } from 'antd';
import SiderMenu from './SiderMenu';

const App = () => {

  return (
    <Layout>
      <SiderMenu />
      <Layout>
        <MapComponent />
      </Layout>
    </Layout>
  );
}

export default App;
