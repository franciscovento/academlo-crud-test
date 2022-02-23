import './taskCard.css';
import editIcon from '../../assets/edit-2 1.svg'
import { useEffect, useState } from 'react';
import dropdownIcon from '../../assets/down-arrow.png'

const TaskCard = ({name = 'Tarea 1', status_id = 1, description = ' Lorem ipsum'}) => {

  const [statusValue, setStatusValue] = useState([status_id])
  const [statusColor, setStatusColor] = useState("red");

  const statusChangue = (e) => {
    setStatusValue(e.target.value);
  }

  useEffect(() => {

    if(statusValue == 1)
      setStatusColor("#17FF83")
    if(statusValue == 2)
      setStatusColor("#46FFF0")
    if(statusValue == 3)
      setStatusColor("#FF8235")
    
  },[statusValue])

  return (
    <div className='taskCard' style={{borderBottom: `4px solid ${statusColor}`}}>
      <div className='taskCard__top'>
        <h3>{name}</h3>
        <img src={editIcon} alt="" />
      </div>
      <hr />
      <div className='taskCard__description'>
      <h4 >Descripción</h4>
      <p>{description}</p>
      </div>
      <div className='taskCard_select'>
      <select onChange={statusChangue} name="" id="">
        <option value="1">Terminada</option>
        <option value="2">Iniciada</option>
        <option value="3">En pausa</option>
      </select>
      <img src={dropdownIcon} alt="" />
      </div>
    </div>
  )
}

export default TaskCard
