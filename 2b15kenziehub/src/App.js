import './App.css';
import { Toaster } from "react-hot-toast";
import Routes from './Routes';

function App() {
  
  return (
    <div className="App">
        <Routes />
        <Toaster position="top-center" reverseOrder={false} />
    </div>
  );
}

export default App;
