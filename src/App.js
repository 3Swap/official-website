import { Routes, Route } from 'react-router-dom';
import { Home } from './pages';
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        {/* <Route path="/app" element={<ConnectWallet />}></Route> */}
      </Routes>
    </>
  );
}

export default App;
