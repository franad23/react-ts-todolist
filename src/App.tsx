import './App.css'

//Components
import Navbar from './components/navbar/Navbar'
import Form from './components/form/Form'

function App() {

  return (
    <div className='appMainContainer'>
      <Navbar/>
      <div className='formContainer'>
        <Form/>
      </div>
    </div>
  )
}

export default App
