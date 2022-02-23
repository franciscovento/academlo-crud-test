import './allTaskPage.css'
import TaskCard from "../../components/taskCard/TaskCard"
import { useEffect, useState, useContext } from 'react';
import {fetchData} from '../../utlis/fetchData';
import { UserContext } from '../../context/userContext';
import NewTask from '../../components/newTask/NewTask';







const AllTasksPage = () => {

  const [list, setList] = useState([]); 
  
 
  const { userLogged, toggle } = useContext(UserContext);




   useEffect(() => {
    const getInfo = async () =>{
      const data = await fetchData(userLogged);
      setList(data)
    }
   getInfo();
   },[ userLogged ])

  
   
  
    
  return (
    <>
    <div className='allTaskPage container-content' >
     {list.map(x => <TaskCard key={x.id} name={x.name} description={x.description} status_id={x.status_id} id={x.id} />)}
    </div>
    {toggle? <NewTask  />: ""}
    
    </>
  )
}

export default AllTasksPage
