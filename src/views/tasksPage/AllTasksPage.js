import './allTaskPage.css'
import TaskCard from "../../components/taskCard/TaskCard"
import { useContext } from 'react';
import { UserContext } from '../../context/userContext';
import NewTask from '../../components/newTask/NewTask';



const AllTasksPage = () => {
   
  const { tasks, toggle } = useContext(UserContext);  
    
  return (
    <>
    <div className='allTaskPage container-content' >
     {tasks.map(x => <TaskCard key={x.id} name={x.name} description={x.description} status_id={x.status_id} id={x.id} />)}
    </div>
    {toggle? <NewTask  />: ""}
    </>
  )
}

export default AllTasksPage
