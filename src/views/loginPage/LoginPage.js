import './loginPage.css';
import { useContext } from 'react';
import { UserContext } from '../../context/userContext'
import { useForm } from "react-hook-form";
import { userLoggin } from '../../utlis/fetchData';

const LoginPage = () => {
  
  const { register, handleSubmit, formState: { errors } } = useForm();
  const {  setUserLogged } = useContext(UserContext)
  
  const onSubmit = (data) => {
    const { email, password } = data; 
    const getToken = async () => {
      const token = await userLoggin(email, password);
      if(token){
        localStorage.setItem('token', token);
        setUserLogged(token);   
      }  
    }
    getToken()
  }

  const errorMessage = <p style={{color: '#FF4949', fontSize:'10px'}}>*Este campo es obligatorio</p>;


  return (
    <div className="loginPage">
      <div className='loginPage__imgTop'>
        <svg width="532" height="397" viewBox="0 0 532 397" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M528.597 -0.772376C577.618 406.469 -8.52945e-06 326 -0.000564509 390C-0.00112048 454 -0.000333886 -0.772429 -0.000333886 -0.772429L528.597 -0.772376Z" fill="#2EC76D"/>
        </svg>
      </div>
      <div className='loginPage__Card'>
        <div className='loginPage__Card__Top'>
          <button >Iniciar Sesión</button>
          <button>Registrarme</button>
        </div>
        <div className='loginPage__Card__Bottom'>
          <p>Inicio de Sesión</p>
          <form onSubmit={handleSubmit(onSubmit)} className='Form' action="">
            <div className='email'>
              <label htmlFor="">Correo Electrónico</label>
              <input className='input' name ='email' type="email" placeholder='Escriba su correo electrónico' {...register("email", {required: true})} />
              {errors.email ? errorMessage : ''}
            </div>
            <div className='password'>
              <label htmlFor="">Constraseña</label>
              <input className='input' name = 'password' type="password" placeholder='Al menos 8 caractéres' {...register("password", {required: true})} />
              {errors.password ? errorMessage : ''}
              <span>Olvidé mi constraseña</span>
            </div>
            <div className='submitButton'> 
              <button className='mainButton' type='submit'>Aceptar</button>
              <span>{errors.inValidUser? 'El correo o contrasena no son validos': ""}</span>
          </div>
          </form>
        </div>
      </div>
        <div className='loginPage__imgBottom'>
          <svg width="1277" height="1009" viewBox="0 0 1277 1009" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M4.63935 1009C-76.4403 240.624 935.016 787.392 712.614 -13H1277V1009H4.63935Z" fill="#0F0F2D"/>
          </svg>  
        </div>    
    </div>
  )
}

export default LoginPage
