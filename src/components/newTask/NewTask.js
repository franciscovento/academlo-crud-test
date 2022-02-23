import './newTask.css';
import Button from '../button/Button'
import { useContext } from 'react';
import { UserContext } from '../../context/userContext';
import { useForm } from "react-hook-form";
import axios from 'axios';


const NewTask = () => {

  const { register, handleSubmit, formState: { errors } } = useForm();
  const { setToggle, userLogged, setApiInfo } = useContext(UserContext);

  
  const onSubmit = data => {
    const sendData = async ( ) => {
      await axios.post('https://tasks-crud.academlo.com/api/tasks', {
        name: data.name,
        description: data.description
      }, {
        headers: {
          'Authorization': `Bearer ${userLogged}`
        }
      })
      
    }
    sendData();
    setApiInfo((prev) => !prev);
    setToggle((prev) => !prev);

  }


  const handleToggle = () => {
    setToggle(prev => !prev);
  }

  const errorMessage = <p style={{color: '#FF4949', fontSize:'10px', margin: '0px'}}>*Este campo es obligatorio</p>;


  return (
    <div className='newTask'>
      <div className='newTask__Card'>
        <h3>Agregar Tarea</h3>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className='newTask__Name'>
            <label> Nombre de la tarea </label>
            <input className='input' type="text" placeholder='Escribe la tarea a realizar'  {...register("name", {required: true})} />
            {errors.name ? errorMessage : ''}
          </div>
          <div className='newTask__Description'>
            <label>Description</label>
            <textarea className='input' type="text" placeholder='Describe la tarea a realizar'  rows={10}  {...register("description", {required: true})}/>
            {errors.description ? errorMessage : ''}
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
