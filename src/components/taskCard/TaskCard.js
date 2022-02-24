import './taskCard.css';
import editIcon from '../../assets/edit-2 1.svg'
import { useContext, useEffect, useState } from 'react';
import dropdownIcon from '../../assets/down-arrow.png'
import axios from 'axios';
import { UserContext } from '../../context/userContext';


const TaskCard = ({name, status_id, description, id}) => {

  
  const { userLogged, setToggle, setApiInfo } = useContext(UserContext)
  const [statusValue, setStatusValue] = useState(status_id)
  const [statusColor, setStatusColor] = useState("red");


  
  const statusChangue = (e) => {
    setStatusValue(e.target.value)
    const status = +e.target.value;
    

    const postData = async () => {
      const resp = await axios.post(`https://tasks-crud.academlo.com/api/tasks/${id}/status/${status}`, {}, {
        headers: {
          'Authorization': `Bearer ${userLogged}`,
          'Content-Type': 'application/json'
        },
      })
      return resp.data;
    }

    postData();
  }

  useEffect(() => {
    
    if(statusValue === "null" || statusValue == null)
      setStatusColor("gray")
    if(statusValue === "1" || statusValue === 1)
      setStatusColor("#17FF83")
    if(statusValue === "2" || statusValue === 2)
      setStatusColor("#46FFF0")
    if(statusValue === "3" || statusValue === 3)
      setStatusColor("#FF8235")
    
  },[statusValue])

  const handleEdit =  () => {
    setToggle(true); 
  }

  const handleDelete = async () => {
    await axios.delete(`https://tasks-crud.academlo.com/api/tasks/${id}`, {
      headers: {
        'Authorization': `Bearer ${userLogged}`
      }
    })

    setApiInfo(prev => (!prev));
  }

  return (
    <>
    <div className='taskCard' style={{borderBottom: `4px solid ${statusColor}`}}>
      <div className='taskCard__top'>
        <h3>{name}</h3>
        <img onClick={() => handleEdit()} src={editIcon} alt="" />
      </div>
      <hr />
      <div className='taskCard__description'>
      <h4 >Descripción</h4>
      <p>{description}</p>
      </div>
      <div className='taskCard_select'>
      <select onChange={statusChangue} name="" id="" defaultValue={status_id}>
        <option value='null'>selecciona status</option>
        <option value="1"  >Terminada</option>
        <option value="2" >Iniciada</option>
        <option value="3" >En pausa</option>
      </select>
      <img src={dropdownIcon} alt="" />
      </div>
      <button className='TaskCard__delete' onClick={handleDelete} >Delete</button>
    </div>
    </>
  )
}

export default TaskCard
