import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './Pages/HomePage';
import StartPage from './Pages/StartPage';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';

function App() {
  return (
    <Router>
      <Navbar></Navbar>
        <div className="App"></div>
        <Routes>
          <Route path='/home' element={<HomePage></HomePage>}></Route>
          <Route path='/' element={<StartPage></StartPage>}></Route>
        </Routes>
        <Footer></Footer>
    </Router>
  );
}

export default App;
