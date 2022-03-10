import './App.scss';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from './pages/Main/Main';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' exact element={ <Main/> } />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
