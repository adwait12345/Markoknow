import logo from './logo.svg';
import './App.css';
import Page1 from './components/Page1/Page1';
import Page2 from './components/Page2/Page2';

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";



function App() {
  return (

<>

<Router>
  <Routes>

    <Route path="/"  element={<Page1/>} /> 
    <Route path="/:city"  element={<Page2 />}/>  



</Routes>
</Router>
</>
  );
}

export default App;
