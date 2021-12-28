import { Routes, Route } from 'react-router-dom';
import { Home, ConnectWallet } from './pages';
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/connect" element={<ConnectWallet />}></Route>
      </Routes>
    </>
  );
}

export default App;
