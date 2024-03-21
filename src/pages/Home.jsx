import Sidebar from '../layouts/Sidebar';
import Header from '../layouts/Header';
import Dashboard from '../layouts/Dashboard';
import Map from '../layouts/Map';
import Livechat from '../components/Livechat';

function Home() {
  return (
    <div className="App">
      <Sidebar />
      <div className='main'>
        <Header />
        <Dashboard />
        <Map />
      </div>
      <Livechat />
    </div>
  );
}

export default Home;
