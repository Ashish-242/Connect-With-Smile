import './App.css';

// import { BrowserRouter as Routes, Route} from "react-router-dom";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Join from './component/Join/join';
import Chat from './component/chat/Chat';


function App() {
  
 
  return (
    <div className="App">
  <BrowserRouter>
<Routes>
<>
  <Route  path="/" element={<Join/>} exact/>
  <Route path="/chat" element={<Chat/>}/>
  </>
</Routes>
</BrowserRouter>

    </div>
  );
}

export default App;
