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


// Import context
import { useContext } from 'react';
import { UserContext } from './context/userContext'
import NewTask from './components/newTask/NewTask';



function App() {
  const { userLogged} = useContext(UserContext);
  
  return (
   
    <div className="App">
        <Routes>  
          <Route path='/' element={ userLogged ? <Navigate to="/login" /> : <Navigate to ="/allTask"/> } /> 
          <Route path='/login' element={ userLogged? <Navigate to="/allTask"/> : <LoginPage />} /> 
          <Route path='/allTask' element={userLogged? <><Header /><AllTasksPage /></> : <Navigate to='/login' />} />
          <Route path='/newTask' element={ userLogged? <NewTask /> : <Navigate to='/login' />} />
          <Route path='*' element={<NotFoundPage />} />
        </Routes>
    </div>
   
  );
}

export default App;
