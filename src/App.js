// import css file
import './App.css';

// Import Pages
import LoginPage from './views/loginPage/LoginPage';
import AllTasksPage from './views/tasksPage/AllTasksPage';
import NotFoundPage from './views/notFoundPage/NotFoundPage';

// Import components
import Header from './components/header/Header';

// Import Router v6
import { Routes, Route, Navigate  } from 'react-router-dom';
import { useState } from 'react';

import UserProvider from './context/userContext';

function App() {

  const [logged, setLogged ] = useState(false)

  return (
    <UserProvider>
    <div className="App">
        <Routes>  
          <Route path='/' element={ logged ? <Navigate to="/login" /> : <Navigate to ="/allTask"/> } /> 
          <Route path='/login' element={ logged? <Navigate to="/allTask"/> : <LoginPage />} /> 
          <Route path='/allTask' element={logged? <><Header /><AllTasksPage /></> : <Navigate to='/login' />} />
          <Route path='*' element={<NotFoundPage />} />
        </Routes>
    </div>
    </UserProvider>
  );
}

export default App;
