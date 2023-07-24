import './App.css';
import Home from './home';
import LoginForm from './login/loginform';
import Footer from './Footer';
import Thank from './thank';
import {
  BrowserRouter as Routers,
  Routes,
  Route
} from "react-router-dom";
function App() {
  return (
    <div className='App'>
    <Routers>
        <Routes>
          <Route   path="/" element={<LoginForm/>}/>
          <Route   path="/home" element={<Home/>}/>
          <Route   path="/footer" element={<Footer/>}/>
          <Route   path="/Thank" element={<Thank/>}/>
        </Routes>
        </Routers>
      </div>
  );
}

export default App;