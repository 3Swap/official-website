import { Routes, Route } from 'react-router-dom';
import Select from './components/Select';
import { Home, ConnectWallet } from './pages';
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/connect" element={<ConnectWallet />}></Route>
        <Route path="/swap" element={<Select />}></Route>
      </Routes>
    </>
  );
}

export default App;
