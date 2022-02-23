import './App.css';
import Header from './components/header/Header';
import TaskCard from './components/taskCard/TaskCard';
import LoginPage from './views/loginPage/LoginPage';
import AllTasksPage from './views/tasksPage/AllTasksPage';
import { HashRouter as Router, Routes, Route  } from 'react-router-dom';
import NotFoundPage from './views/notFoundPage/NotFoundPage';

function App() {
  return (
    <div className="App">
        <Routes>  
          <Route path='/' element={<><Header /><AllTasksPage /></>} />
          <Route path='login' element={<LoginPage />} /> 
          <Route path='*' element={<NotFoundPage />} />
        </Routes>
    </div>
  );
}

export default App;
