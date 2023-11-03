import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home/Home'
import Bet from './pages/Bet/Bet';
import Layout from './pages/Layout/Layout';

function App() {
  return (
    <BrowserRouter>
        <Routes>
          <Route path="/" element={
            <Layout
            />
          }>
            <Route path="/" element={<Home />} />
            <Route path="/:id" element={
              <Bet              
              />} 
            />
          </Route>
        </Routes>
      </BrowserRouter>
  );
}

export default App;