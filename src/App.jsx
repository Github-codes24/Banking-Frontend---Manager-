import { useState } from 'react'

import './App.css'
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import ProtectedRoute from './auth/ProtectedRoute'
import Agent from './pages/Agent'
import Payments from './pages/Payments'
import Layout from './components/Layout'
import LoginPage from './auth/LoginPage'
import ResetPassword from './auth/ResetPassword'
import ForgotOtpSend from './auth/ForgotOtpSend'
import VerifyOtp from './auth/VerifyOtp'
import AddAgent from './components/AddAgent';
import ViewAgent from './components/ViewAgent';
import EditAgent from './components/EditAgent';
import ViewCoustomer from './components/ViewCoustomer';
import PaymentDetails from './components/PaymentDetails';
import PaymentDetails1 from './components/PaymentDetails1';
import ProfilePage from './components/ProfilePage';


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Router>
        <Routes>
          {/* Public Routes */}
          <Route
            path="/login"
            element={
               <LoginPage />
            }
          />

          <Route path="/reset-password/:email" element={<ResetPassword/>} />
          <Route path="/send-otp" element={<ForgotOtpSend />} />
          <Route path="/otp-verify/:email" element={<VerifyOtp />} />
          <Route
            path="/"
            element={
              <ProtectedRoute>
                <Layout>
                  <Agent />
                </Layout>
              </ProtectedRoute>
            }
          />
          <Route
            path="/add-agent"
            element={
              <ProtectedRoute>
                <Layout>
                  <AddAgent />
                </Layout>
              </ProtectedRoute>
            }
          />
          <Route
            path="agent/View-Edit/:id"
            element={
              <ProtectedRoute>
                <Layout>
                  <EditAgent />
                </Layout>
              </ProtectedRoute>
            }
          />
          <Route
            path="/agent/view/:id"
            element={
              <ProtectedRoute>
                <Layout>
                  <ViewAgent />
                </Layout>
              </ProtectedRoute>
            }
          />
          <Route
            path="/coustomers/paymentdetails/:customerId/:schemeType"
            element={
              <ProtectedRoute>
                <Layout>
                  <PaymentDetails />
                </Layout>
              </ProtectedRoute>
            }
          />
          <Route
            path="/coustomers/viewdetails/:id"
            element={
              <ProtectedRoute>
                <Layout>
                  <ViewCoustomer />
                </Layout>
              </ProtectedRoute>
            }
          />
          <Route
            path="/payments"
            element={
              <ProtectedRoute>
                <Layout>
                  <Payments />
                </Layout>
              </ProtectedRoute>
            }
          />
          <Route
            path="/profile"
            element={
              <ProtectedRoute>
                <Layout>
                  <ProfilePage />
                </Layout>
              </ProtectedRoute>
            }
          />
          <Route
            path="/payments/view/:id"
            element={
              <ProtectedRoute>
                <Layout>
                  <PaymentDetails1 />
                </Layout>
              </ProtectedRoute>
            }
          />
        </Routes>
      </Router>
    </>
  )
}

export default App
