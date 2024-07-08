import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import { Home } from './pages/Home'
import { Navbar } from './components/Navbar'
import { AddCreators } from './pages/AddCreators'
import { EditCreators } from './pages/EditCreators'
import { ViewCreators } from './pages/ViewCreators'

function App() {

  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/addcreator' element={<AddCreators />}/>
          <Route path='/editcreator' element={<EditCreators />}/>

           {/* Adding the /:name parameter to add this to the  */}
          <Route path='/viewcreator/:name' element={<ViewCreators/>}/>
        </Routes>
      
      </BrowserRouter>
    
    </div>
  )
}

export default App
