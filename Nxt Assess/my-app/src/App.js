import './App.css';
import {Routes, Route} from 'react-router-dom';

import {Home} from './Home';
import {LoginForm}  from './LoginPage';
import {Navbar} from './Navbar';
import {Assessment} from './Assessment'

function App() {
  return (
    <Routes>
      <Route path='/login' element={<LoginForm /> } />
      <Route exact path='/' element={<><Navbar/><Home /></>} />
      <Route exact path='/assessment' element={<><Navbar/><Assessment/></>} />
    </Routes>
   
  );
}

export default App;
