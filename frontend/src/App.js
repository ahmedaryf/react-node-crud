import {Route, Routes, BrowserRouter} from 'react-router-dom';
import './App.css';
import Home from './Home';
import Create from './Create';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/create' element={<Create />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
