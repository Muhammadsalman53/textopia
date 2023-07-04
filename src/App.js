import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';

import { Final } from './components/final/Final';
import { GeneratingVideo } from './components/generatingVideo/GeneratingVideo';
import { TextopiaHeader } from './components/header/Header';
import { Home } from './components/home/Home';
import { SelectAvtar } from './components/selectAvtar/SelectAvtar';
import { SelectVoice } from './components/selectVoice/SelectVoice';
import { VideoScript } from './components/videoScript/VideoScript';

function App() {
  return (
    <div className="App">
     <BrowserRouter>
     <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/video-script" element={<VideoScript/>}/>
      <Route path="/select-avatar" element={<SelectAvtar/>}/>
      <Route path="/select-voice" element={<SelectVoice/>}/>
      <Route path="/generation-video" element={<GeneratingVideo/>}/>
      <Route path="/final" element={<Final/>}/>

     </Routes>
     </BrowserRouter>


       {/* <Home/> */}
       {/* <TextopiaHeader/>   */}
       {/* <VideoScript/>  */}

       {/* <SelectAvtar/> */}
      {/* <SelectVoice/> */}
    
      {/* <Final/> */}
      {/* <GeneratingVideo/> */}
      

    </div>
  );
}

export default App;
