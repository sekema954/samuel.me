import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './Pages/HomePage';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import About from './Pages/About';
import ContactSection from './Pages/Contact';
import Services from './Pages/Services';
import Projects from './Pages/Projects';

function App() {
  return (
    <Router>
      <Navbar></Navbar>
        <div className="App"></div>
        <Routes>
          <Route path='/' element={<HomePage></HomePage>}></Route>
          <Route path='/about' element={<About></About>}></Route>
          <Route path='/projectList' element={<Projects></Projects>}></Route>
          <Route path='/services' element={<Services></Services>}></Route>
          <Route path='/contact' element={<ContactSection></ContactSection>}></Route>
        </Routes>
        <Footer></Footer>
    </Router>
  );
}

export default App;
