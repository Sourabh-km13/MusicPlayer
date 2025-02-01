import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import { MainLayout } from './Layout/MainLayout';
import Home from './Pages/Home';

import playerContext from './Context/playerContext';
import GradientWrapper from './Components/molecules/GradientWrapper';

function App() {
  const [playerstate, setPlayerstate] = useState({
    playing: false,
    index: 0,
    seek: 0.0,
    isSeeking: false,
    repeat: false,
    shuffle: false,
    duration: 0.0,
  });
  return(
  <playerContext.Provider value={{playerstate,setPlayerstate}}> 
    <Routes>
      <Route path='/' element={<MainLayout children={<Home/>}/>} />
      <Route path='/search' element={<MainLayout children={<GradientWrapper children={"search"}/>}/>} />
      <Route path='/Playlists' element={<MainLayout children={<GradientWrapper children={"playlist"}/>}/>} />
    </Routes>
  </playerContext.Provider>   
  )
  
}

export default App
