import './App.css';
import AllBlogs from './components/AllBlogs';
import { Routes, Route } from "react-router-dom";
import FourOFour from './components/FourOFour';
import Update from './components/Update';


function App() {
  return (
    <div className="app">
      <Routes>
        <Route path='/' element={<AllBlogs/>}/>
        <Route path='/update/:id' element={<Update/>}/>
        <Route path='*' element={<FourOFour/>}/>
      </Routes>
    </div>
  );
}

export default App;
