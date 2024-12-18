import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Hero from "./components/hero_page/hero";
import Login from "./components/login/login";
import SignUpPage from "./components/register/register";
import HospitalRegistration from "./components/hospital-form/hform";
import DonorRegistration from "./components/DR-form/drform";
import AppLayout from "./layouts/al1";
import HospitalLayout from "./layouts/HospitalLayout.jsx";
import ProtectedRoute from "./ProtectedRoute.jsx"; 
import UserHeader from "./userdashboard/components/userheader.jsx";
import UserInfoCard from "./userdashboard/components/userhomepage.jsx";
import HospitalInfo from "./hospitaldashboard/components/hospitalhomepage";
import HospitalEditProfile from "./hospitaldashboard/components/heditprofile.jsx";
import ViewRating from "./hospitaldashboard/components/viewrating.jsx";
import Reviews from "./hospitaldashboard/components/viewreviews.jsx";

import DonationHistory from "./userdashboard/components/udonationshistory.jsx";
import HospitalCards from "./userdashboard/components/viewpulsehospitals.jsx";
import GiveRating from "./userdashboard/components/giverating.jsx";
import ForgotPassword from "./components/Forgot-Password/ForgotPassword.jsx";
import ResetPassword from "./components/Reset-Password/resetPassword.jsx";
import ViewRequests from "./hospitaldashboard/components/viewrequests.jsx";
import HospitalHeader from "./hospitaldashboard/components/hospitalheader.jsx";
import ManageBloodBank from "./hospitaldashboard/components/managebloodbank.jsx";
import BloodInventory from "./hospitaldashboard/components/bloodbank.jsx";
import RegistrationForm from "./userdashboard/components/usereditprofile.jsx";


function App() {
  return (

    <Router>
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<AppLayout><Hero /></AppLayout>} />
        <Route path="/login" element={<AppLayout><Login /></AppLayout>} />
        <Route path="/forgot-password" element={<AppLayout><ForgotPassword /></AppLayout>} />
        <Route path="/Reset-password" element={<AppLayout><ResetPassword /></AppLayout>} />
        <Route path="/signup" element={<AppLayout><SignUpPage /></AppLayout>} />
        <Route path="/hospital-registration" element={<AppLayout><HospitalRegistration /></AppLayout>} />
        <Route path="/donor-registration" element={<AppLayout><DonorRegistration /></AppLayout>} />

        <Route
  path="/hospital-dashboard"
  element={
    // <ProtectedRoute requiredRole='hospital'>
      <HospitalLayout>
        <HospitalInfo />
      </HospitalLayout>
    // </ProtectedRoute>
  }
/>

<Route
  path="/edit-profile"
  element={
    // <ProtectedRoute requiredRole='hospital'>
      <HospitalLayout>
        <HospitalEditProfile />
      </HospitalLayout>
    // </ProtectedRoute>
  }
/>
<Route
  path="/Blood-inventory"
  element={
    // <ProtectedRoute requiredRole='hospital'>
      <HospitalLayout>
        <BloodInventory />
      </HospitalLayout>
    // </ProtectedRoute>
  }
/>
<Route
  path="/view-reviews"
  element={
    // <ProtectedRoute requiredRole='hospital'>
      <HospitalLayout>
        <Reviews />
      </HospitalLayout>
    // </ProtectedRoute>
  }
/>

<Route
  path="/view-requests"
  element={
    // <ProtectedRoute requiredRole='hospital'>
      <HospitalLayout>
        <ViewRequests />
      </HospitalLayout>
    // </ProtectedRoute>
  }
/>
<Route
  path="/view-bloodbank"
  element={
    // <ProtectedRoute requiredRole='hospital'>
      <HospitalLayout>
        <ManageBloodBank />
      </HospitalLayout>
    // </ProtectedRoute>
  }
/>

{/* Donor Routes */}
<Route
  path="/donor-dashboard"
  element={
    <ProtectedRoute requiredRole='donor'>
      <UserInfoCard />
    </ProtectedRoute>
  }
/>
<Route
  path="/donor-editprofile"
  element={
     <ProtectedRoute requiredRole='donor'>
      <RegistrationForm/>
     </ProtectedRoute>
  }
/>

<Route
  path="/Give-rating"
  element={
     <ProtectedRoute requiredRole='donor'>
      <GiveRating />
    </ProtectedRoute>
  }
/>

<Route
  path="/Pulse-Verified-Hospitals"
  element={
     <ProtectedRoute requiredRole='donor'>
      <HospitalCards />
     </ProtectedRoute>
  }
/>

<Route
  path="/Donation-history"
  element={
    <ProtectedRoute requiredRole='donor'>
      <HospitalLayout>
        <DonationHistory />
      </HospitalLayout>
     </ProtectedRoute>
  }
/>

      </Routes>
    </Router>
  );
}

export default App;
