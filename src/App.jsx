/* eslint-disable no-unused-vars */
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Layout from './Layout';
import LandingPage from './pages/LandingPage';
import RegisterPage from './pages/RegisterPage';
import LoginPage from './pages/LoginPage';
import CreateEvent from './pages/CreateEvent';
import EventPage from './pages/EventPage';
import CalendarView from './pages/CalendarView';
import EventsPage from './pages/EventsPage';
import UserAccountPage from './pages/UserAccountPage';
import axios from 'axios';
import { UserContextProvider } from './UserContext';
import { ToastContainer } from 'react-toastify';

// Configure Axios
axios.defaults.baseURL = 'http://localhost:4000/';
axios.defaults.withCredentials = true;

function App() {
  return (
    <UserContextProvider>
      <ToastContainer position="top-right" autoClose={3000} />
      <Routes>
        {/* Nested Routes with Layout */}
        <Route path="/" element={<Layout />}>
          <Route index element={<LandingPage />} />
          <Route path="createevent" element={<CreateEvent />} />
          <Route path="event/:id" element={<EventPage />} />
          <Route path="calendar" element={<CalendarView />} />
          <Route path="useraccount" element={<UserAccountPage />} />
          <Route path="events" element={<EventsPage />} />
        </Route>

        {/* Standalone Routes */}
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </UserContextProvider>
  );
}

export default App;
