import './App.css';
import Header from './components/header/Header';
import TaskCard from './components/taskCard/TaskCard';

function App() {
  return (
    <div className="App container-content">
      <Header />
      <div className='taskContainer'>
      <TaskCard /> 
      <TaskCard /> 
      <TaskCard /> 
      <TaskCard /> 
      <TaskCard /> 
      <TaskCard /> 
      <TaskCard /> 
      </div>
      
    </div>
  );
}

export default App;
