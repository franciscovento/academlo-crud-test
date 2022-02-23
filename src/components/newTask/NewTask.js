import './newTask.css';
import Button from '../button/Button'
import { useContext } from 'react';
import { UserContext } from '../../context/userContext';
import { useForm } from "react-hook-form";
import axios from 'axios';


const NewTask = ({getInfo}) => {

  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const { setToggle, userLogged } = useContext(UserContext);

  
  const onSubmit = data => {
    const sendData = async ( ) => {
      const dataTask = await axios.post('https://tasks-crud.academlo.com/api/tasks', {
        name: data.name,
        description: data.description
      }, {
        headers: {
          'Authorization': `Bearer ${userLogged}`
        }
      })
      
    }
    sendData();
    getInfo();
    setToggle((prev) => !prev)

  }


  const handleToggle = () => {
    setToggle(prev => !prev);
  }

  return (
    <div className='newTask'>
      <div className='newTask__Card'>
        <h3>Agregar Tarea</h3>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className='newTask__Name'>
            <label> Nombre de la tarea </label>
            <input className='input' type="text" placeholder='Escribe la tarea a realizar'  {...register("name")} />
          </div>
          <div className='newTask__Description'>
            <label>Description</label>
            <textarea className='input' type="text" placeholder='Describe la tarea a realizar'  rows={10}  {...register("description")}/>
          </div>
          <div className='newTask__Buttons'>
            <button onClick={handleToggle}>Cancelar</button>
            <Button>Guardar Cambios</Button>
          </div>
        </form>
        <div onClick={handleToggle} className='newTask__closeIcon'>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M18 6L6 18" stroke="#212121" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M6 6L18 18" stroke="#212121" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
      </div>
    </div>
  )
}

export default NewTask
