import './App.css';
import {Routes, Route} from 'react-router-dom';

import {Home} from './Home';
import {LoginForm}  from './LoginPage'

function App() {
  return (
    <Routes>
      <Route path='/login' element={<LoginForm />} />
      <Route exact path='/' element={<Home />} />
    </Routes>
   
  );
}

export default App;
