import './App.css';
import * as React from 'react'
import Dashboard from './main/dashboard';
import { Route, Routes } from 'react-router-dom'

import Header from './layout/Header';
import Projects from './main/projects';
import FacultyListing from './main/faculty/components/FacultyListing';
import HOD from './main/hod';
import Staff from './main/staff'
import Student from './main/student';
import FacultyDetails from './main/faculty/components/FacultyDetails';
import Login from './main/auth/login/Login';
import PageNotFound from './utils/PageNotFound';
import { useSelector } from 'react-redux';
import CustomToast from './utils/customToast';

function App() {

  const {loggingSuccess} = useSelector(state => state.login)
  
  return (
    <div className="App">
      <>
        { !loggingSuccess ? <Login/> 
          : 
          <>
           <Header/>
           <div style={{marginLeft: 300}}>
              <Routes>
                <Route path='/students' element={<Student />} />
                <Route path='/employee/faculties' element={<FacultyListing />} />
                <Route path='/employee/faculties/:id' element={<FacultyDetails />} />
                <Route path='/employee/hod' element={<HOD />} />
                <Route path='/employee/staff' element={<Staff />} />
                <Route path='/projects' element={<Projects />} />
                <Route path='/' element={<Dashboard />} />
                <Route path='*' element={<PageNotFound />} />
              </Routes>
          </div>
          </>
        }
        <CustomToast />
      </>
    </div>
  );
}

export default App;
