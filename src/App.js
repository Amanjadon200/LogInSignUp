import logo from './logo.svg';
import './App.css';
import SignUp from './components/SignUp';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LogIn from './components/LogIn';
import Home from './components/Home';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
       
          <Route exact path='/'  element={<SignUp/>} />
          <Route exact path='/LogIn'  element={<LogIn/>} />
          <Route exact path='/Home' element={<Home/>}></Route>
       
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
