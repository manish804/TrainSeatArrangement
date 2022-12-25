import './App.css';
import Seat from './Seat';
import { ToastContainer } from 'react-toastify';

function App() {
  return (
    <div className="App">
      <ToastContainer />
      <Seat />
    </div>
  );
}

export default App;
