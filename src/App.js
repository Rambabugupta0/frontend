import React from 'react';
import { Layout } from 'antd';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from './redux/reducers';
import Header from './components/Header';
import MapComponent from './components/MapComponent';
import Footer from './components/Footer';
import FloatingControls from './components/FloatingControls'; // Check this import statement
import RegionInfoCard from './components/RegionInfoCard';

const { Content } = Layout;
const store = createStore(rootReducer);

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Header />
        <Layout>
          <Content style={{ padding: '20px', height: '100vh', position: 'relative' }}>
            <MapComponent />
            <RegionInfoCard />
            <FloatingControls />
          </Content>
        </Layout>
        <Footer />
      </div>
    </Provider>
  );
}

export default App;
