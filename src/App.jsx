import React from "react";
import GalleryApp from "./Components/GalleryApp";
import {Routes,Route} from 'react-router-dom'
import ImageDetails from "./Components/ImageDetails";
function App(){
  return (
    <Routes>
      <Route path="/" element={< GalleryApp/>}/>
      <Route path="/gallery/:id" element={<ImageDetails/>}/>
   
    </Routes>
  )

}

export default App;