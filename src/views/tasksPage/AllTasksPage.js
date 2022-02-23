import './allTaskPage.css'
import TaskCard from "../../components/taskCard/TaskCard"
import { useEffect, useState } from 'react';
import {fetchData} from '../../utlis/fetchData';







const AllTasksPage = () => {

  const [list, setList] = useState([]); 

  // useEffect(() => {
  //   const token = '133|lQ6hiNPMLOOZPR1MgQG81VxiFRRBs8NO5xhj8DMC';
  //   const fetchData = async () => {
  //     const data = await axios.get('https://tasks-crud.academlo.com/api/tasks', {
  //       headers: {
  //         'Authorization': `Bearer ${token}`
  //       }
  //     })
  //     setList(data.data);
  //   }
  //   fetchData();

  // },[])  
 

   useEffect(() => {
   const getInfo = async () =>{
     const data = await fetchData();
     setList(data)
   }

   getInfo();
   },[])
 
    
  return (
    <div className='allTaskPage container-content'>
     {list.map(x => <TaskCard key={x.id} name={x.name} description={x.description} status_id={x.status_id}  />)}
    </div>
  )
}

export default AllTasksPage
