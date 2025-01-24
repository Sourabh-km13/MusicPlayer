
import { Route, Routes } from 'react-router-dom';
import { MainLayout } from './Layout/MainLayout';
import Home from './Pages/Home';

function App() {
  return(
    <Routes>
      <Route path='/' element={<MainLayout children={<Home/>}/>} />
      <Route path='/search' element={<MainLayout children={"Search"}/>} />
      <Route path='/Playlists' element={<MainLayout children={"Playlists"}/>} />

      
    </Routes>
  )
  
}

export default App
