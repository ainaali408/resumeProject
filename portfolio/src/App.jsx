import 'materialize-css/dist/css/materialize.min.css';
import 'materialize-css/dist/js/materialize.min.js';
import '@fortawesome/fontawesome-free/css/all.min.css';

import Home from './components/pages/Home';
import Skills from './components/pages/skills/Skills';
import Educations from './components/pages/educations/Educations';
import Experiences from './components/pages/experiences/Experiences';
import Portfolios from './components/pages/portfolios/Portfolios';
import Navbar from './components/navbar/Navbar';
import { Route,Routes} from 'react-router-dom'

import './App.css';
import Layout from './components/Layout';

function App() {
  return (
    <>
  <Layout/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/educations' element ={<Educations/>}/>
      <Route path='/skills' element={<Skills/>}/>
      <Route path='/portfolio' element ={<Portfolios/>}/>
      <Route path='/experiences' element= {<Experiences/>}/>
    </Routes>
    


       
    </>
  );
}

export default App;
