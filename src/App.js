import { Routes, Route } from 'react-router-dom';
import SwapTokenDemo from './components/Swap';
import { Home } from './pages';
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/app" element={<SwapTokenDemo />}></Route>
      </Routes>
    </>
  );
}

export default App;
