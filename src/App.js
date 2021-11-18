
import './App.css';
import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
import Home from './Pages/Home/Home/Home';
import Navigation from './Pages/Shared/Navigation/Navigation';
import Appointment from './Pages/Appointment/Appointment/Appointment';
import Login from './Pages/Login/Login/Login';
import Register from './Pages/Login/Register/Register';
import AuthProvider from './Contexts/AuthProvider';
import PrivateRoute from './Pages/Shared/PrivateRoute/PrivateRoute';
import Dashboard from './Pages/Dashboard/Dashboard/Dashboard';
import DashboardHome from './Pages/Dashboard/DashboardHome/DashboardHome';
import Payment from './Pages/Dashboard/Payment/Payment';
import AdminPanale from './Pages/Dashboard/AdminPanale/AdminPanale';
import AddDoctor from './Pages/Dashboard/AddDoctor/AddDoctor';
import AdminRoute from './Pages/Shared/AdminRoute/AdminRoute';

function App() {
  return (
    <div className="App">
    <AuthProvider>
    <Router>
       <Navigation></Navigation>
     <Routes>
     <Route exact path="/" element={<Home />}/>
          <Route exact path="/home" element={<Home />}/>
          <Route path="/appointment" element={<PrivateRoute>{<Appointment />}</PrivateRoute>}/>
          <Route path="/dashboard" element={<PrivateRoute>{<Dashboard />}</PrivateRoute>}>
          <Route path='/dashboard' element={<DashboardHome />}/>
          <Route path='/dashboard/payment/:appointmentId' element={<Payment />}/>
          <Route path='/dashboard/adminpanale' element={<AdminRoute>{<AdminPanale />}</AdminRoute>}/>
          <Route path='/dashboard/adddoctore' element={<AdminRoute>{<AddDoctor />}</AdminRoute>}/>
          </Route>
          <Route exact path="/login" element={<Login />}/>
          <Route exact path="/register" element={<Register />}/>         
        </Routes>
     </Router>
    </AuthProvider>
    </div>
  );
}

export default App;
