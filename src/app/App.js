import './App.css';
import * as React from 'react'
import Dashboard from './main/dashboard';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Header from './layout/Header';
import Projects from './main/projects';
import FacultyListing from './main/faculty/components/FacultyListing';
import HOD from './main/hod';
import Staff from './main/staff'
import Student from './main/student';
import FacultyDetails from './main/faculty/components/FacultyDetails';
import Login from './main/auth/Login';

function App() {
  const [isLoggedIn, setIsLoggedIn] = React.useState(false)

  const manageIsLoggedIn = (bool) => setIsLoggedIn(bool)
  
  return (
    <div className="App">
      <BrowserRouter>
        {/* {isLoggedIn ? 
          <>
          <Header />
          <div style={{marginLeft: 300}}>
              <Routes>
                <Route path='/students' element={<Student />} />
                <Route path='/employee/faculties' element={<FacultyListing />} />
                <Route path='/employee/faculties/:id' element={<FacultyDetails />} />
                <Route path='/employee/hod' element={<HOD />} />
                <Route path='/employee/staff' element={<Staff />} />
                <Route path='/projects' element={<Projects />} />
                <Route path='/' element={<Dashboard />} />
              </Routes>
          </div>
        </>
        :
          <Login manageIsLoggedIn={manageIsLoggedIn} /> 
          
          
          } */}
          {!isLoggedIn && <Login manageIsLoggedIn={manageIsLoggedIn} />}
          <Header manageIsLoggedIn={manageIsLoggedIn} isLoggedIn={isLoggedIn}/>
          <div style={{marginLeft: 300}}>
              <Routes>
                <Route path='/students' element={<Student />} />
                <Route path='/employee/faculties' element={<FacultyListing />} />
                <Route path='/employee/faculties/:id' element={<FacultyDetails />} />
                <Route path='/employee/hod' element={<HOD />} />
                <Route path='/employee/staff' element={<Staff />} />
                <Route path='/projects' element={<Projects />} />
                <Route path='/' element={<Dashboard />} />
              </Routes>
          </div>
        
        
        
      </BrowserRouter>
    </div>
  );
}

export default App;
