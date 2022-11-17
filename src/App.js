import './App.css';
import Login from './Login';
import Register from './Register';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Dashboard from './Dashboard';

function App() {

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<Login/>} />
          <Route path='/register' element={<Register/>}/>
          <Route path='/dashboard' element={<Dashboard/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
