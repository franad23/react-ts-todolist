import './navbar.css'
import logo from '../../assets/iconlist.png'

function Navbar() {
  return (
    <div className='navbarMainContainer'>
      <img src={logo} alt="logoTodoList" className='logoImg'/>
      <h1>ReactTS TodoList</h1>
    </div>
  )
}

export default Navbar