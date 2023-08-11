import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from './external-component/Navbar'
import LeftBar from './external-component/LeftBar'
import Footer from './external-component/Footer'
import HomePage from './pages/HomePage';
import About from './pages/About';
import Contact from './pages/Contact';
import NoPage from './pages/NoPage';
import Registration from './user-process/Registration';
import Login from './user-process/Login';
import ForgotPassword from './user-process/ForgotPassword';
import Dashboard from './pages/Dashboard';
import Profile from './pages/Profile';
import UserDetails from './pages/UserDetails';
import AddUser from './pages/AddUser';
import AssignTask from './pages/AssignTask';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navbar />}>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/registration" element={<Registration />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/login" element={<Login />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/forgotpassword" element={<ForgotPassword />} />
            <Route path="/dashboard/userdetails" element={<UserDetails />} />
            <Route path="/dashboard/adduser" element={<AddUser />} />
            <Route path="/dashboard/assigntask" element={<AssignTask />} />
            <Route path="*" element={<NoPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
