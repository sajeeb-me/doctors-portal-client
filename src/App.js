import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './Pages/About/About';
import Appointment from './Pages/Appointment/Appointment';
import ContactUs from './Pages/ContactUs/ContactUs';
import Home from './Pages/Home/Home';
import Login from './Pages/Login/Login/Login';
import Register from './Pages/Login/Register/Register';
import PageLoading from './Pages/PageLoading/PageLoading';
import RequireAuth from './Pages/RequireAuth/RequireAuth';
import Reviews from './Pages/Reviews/Reviews';
import Header from './Pages/Shared/Header/Header';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Dashboard from './Pages/Dashboard/Dashboard';
import MyAppointments from './Pages/Dashboard/MyAppointments';
import MyReviews from './Pages/Dashboard/MyReviews';
import ResetPassword from './Pages/Login/ResetPassword/ResetPassword';
import TreatmentHistory from './Pages/Dashboard/TreatmentHistory';
import AllUsers from './Pages/Dashboard/AllUsers';

function App() {
  return (
    <div className="max-w-screen-2xl mx-auto">
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/appointment' element={
          <RequireAuth>
            <Appointment />
          </RequireAuth>
        } />
        <Route path='/dashboard' element={
          <RequireAuth>
            <Dashboard />
          </RequireAuth>
        } >
          <Route index element={<MyAppointments />} />
          <Route path='review' element={<MyReviews />} />
          <Route path='history' element={<TreatmentHistory />} />
          <Route path='users' element={<AllUsers />} />
        </Route>
        <Route path='/reviews' element={<Reviews />} />
        <Route path='/contact' element={<ContactUs />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/resetpassword' element={<ResetPassword />} />
        <Route path='/loading' element={<PageLoading />} />
      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;
