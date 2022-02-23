import './allTaskPage.css'
import TaskCard from "../../components/taskCard/TaskCard"


const AllTasksPage = () => {
  return (
    <div className='allTaskPage container-content'>
      <TaskCard /> 
      <TaskCard /> 
      <TaskCard /> 
      <TaskCard /> 
      <TaskCard /> 
      <TaskCard /> 
      <TaskCard />
    </div>
  )
}

export default AllTasksPage
