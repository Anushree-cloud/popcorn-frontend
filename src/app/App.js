import './App.css';
import Dashboard from './main/dashboard';
import { BrowserRouter, Switch, Route, Routes } from 'react-router-dom'
import Header from './layout/Header';
import Projects from './main/projects';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <div style={{marginLeft: 300}}>
          <Routes>
            <Route path='/projects' element={<Projects />} />
            <Route path='/' element={<Dashboard />} />
          </Routes>
        </div>
        
        
      </BrowserRouter>
    </div>
  );
}

export default App;
