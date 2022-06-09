import Sidebar from './components/sidebar/Sidebar';
import './App.scss';
import Header from './components/header/Header';
import Dashboard from './components/dashboard/Dashboard';

function App() {
  return (
    <div className='App'>
      <Header />
      <div className="dashboard--section">
        <Sidebar />
        <Dashboard />
      </div>
    </div >
  );
}

export default App;
