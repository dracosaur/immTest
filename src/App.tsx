import './App.css'
import { Footer } from './Components/Footer'
import { Form } from './Components/Form'

function App() {
  return (
    <>
    <div className='container'>
        <div className='content'>
          <img src='/imageLogo.png' className='imageLogo' />
          <Form />
        </div>
    </div>
    <Footer />
    </>

  )
}

export default App
