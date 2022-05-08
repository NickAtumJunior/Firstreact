import './App.css';
import { BrowserRouter as Router, Link, Route, Routes,} from 'react-router-dom';
import Home from './Pages/Home';
import About from './Pages/About';
import Profile from './Pages/Profile';
import ErrorPage from './Pages/ErrorPage';



function App() {

 
  return (
     <Router className='route'>
       
        <nav className='navigation'>
          <Link to='/' className='ui primary button' > <span> {""}<i className="shield alternate icon"></i></span> Home </Link>
           <Link to='/about' className='ui primary button'> <span> {""}<i className="user icon"></i></span> About</Link>
         <Link to='/profile' className='ui primary button'> <span> {""}<i className="envelope icon"></i> </span>Contact</Link>
         
        </nav>
      <Routes>
          <Route path='/'  element={<Home/>}/>
          <Route path='/about'  element={<About/>}/>
          <Route path='/profile'  element={<Profile/>}/>
          <Route path='*' element={<ErrorPage/>}/>
      </Routes>
     </Router>
  );
}

export default App;
