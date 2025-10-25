import { Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import UserDetails from './pages/UserDetails';
import AddUser from './pages/AddUser';
function App() {
  

  return (
   <Routes>
  <Route path="/" element={<Home />} />
  <Route path="/add" element={<AddUser />} />
  <Route path="/users/:id" element={<UserDetails />} />
</Routes>
  )
}

export default App
