import Button from '../button/Button';
import './header.css';
import searchIcon from '../../assets/search 1.svg'

const Header = () => {
  return (
    <>
    <div className='header container-content'>
      <div className='header__top'>
        <svg width="35" height="35" viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M29.1666 30.625V27.7083C29.1666 26.1612 28.552 24.6775 27.458 23.5835C26.3641 22.4896 24.8803 21.875 23.3333 21.875H11.6666C10.1195 21.875 8.63576 22.4896 7.5418 23.5835C6.44783 24.6775 5.83325 26.1612 5.83325 27.7083V30.625" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M17.4998 16.0417C20.7215 16.0417 23.3332 13.43 23.3332 10.2083C23.3332 6.98667 20.7215 4.375 17.4998 4.375C14.2782 4.375 11.6665 6.98667 11.6665 10.2083C11.6665 13.43 14.2782 16.0417 17.4998 16.0417Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>        
      </div>
      <div className='header__bottom'>
        <h1 className='header__title'>Tareas</h1>
        <div className='header__right'>
          <div className='header__rigth__search'>
          <input type="text" placeholder='Buscar tarea'/>
          <img src={searchIcon} alt="" />
          </div>
          <Button> + Crear una nueva tarea</Button>
        </div>
      </div>
    </div>
    </>
  )
}

export default Header
