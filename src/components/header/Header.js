import Button from '../button/Button';
import './header.css';
import searchIcon from '../../assets/search 1.svg'

const Header = () => {
  return (
    <div className='header'>
      <h1 className='header__title'>Tareas</h1>
      <div className='header__right'>
       <div className='header__rigth__search'>
       <input type="text" placeholder='Buscar tarea'/>
       <img src={searchIcon} alt="" />
       </div>
        <Button> + Crear una nueva tarea</Button>
      </div>
    </div>
  )
}

export default Header
