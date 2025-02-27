
import { Outlet } from 'react-router'
import './App.css'
import Header from './components/header/Header'
import Footer from './components/footer/Footer'

function App() {

  return (
    <div className='max-w-screen-2xl mx-auto'>
      <Header/>
      <div className='min-h-calc[(100vh-136px)]'>
        <Outlet/>
      </div>
      <Footer/>
    </div>
  )
}

export default App
