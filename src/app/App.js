import './App.css';
import * as React from 'react'
import Dashboard from './main/dashboard';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Provider } from 'react-redux';

import Header from './layout/Header';
import Projects from './main/projects';
import FacultyListing from './main/faculty/components/FacultyListing';
import HOD from './main/hod';
import Staff from './main/staff'
import Student from './main/student';
import FacultyDetails from './main/faculty/components/FacultyDetails';
import Login from './main/auth/login/Login';
import {store} from './main/auth/store/index'
import PageNotFound from './utils/PageNotFound';

function App() {
  
  return (
    <div className="App">
      
      {/* <Provider store={store}>
      <BrowserRouter> */}
                  
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
                <Route path='/login' element={<Login />} />
                <Route path='*' element={<PageNotFound />} />
              </Routes>
          </div>
        
      {/* </BrowserRouter>
      </Provider> */}
    </div>
  );
}

export default App;
