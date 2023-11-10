
import { Route, Routes} from 'react-router-dom';
import './App.css';
import Home from './Component/Home';
import Findjob from './Component/Findjob';
import About from './Component/About';
import Contact from './Component/Contact';
import Nav from './Nav';
import Create from './Component/Create';

function App() {
  
  return (
    <div className="App">

      <Nav />
      
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/findjob' element={<Findjob />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/create' element={<Create/>}/>
      </Routes>

    </div>
  );
}

export default App;
