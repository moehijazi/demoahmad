import * as React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Dashboard from './layouts/dashboard/Dashboard2';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SignIn from './layouts/sign-in/SignIn';
import AuthProvider from './Auth/AuthWrapper';
import PrivateRoute from './routes user';
import AdminRoute from './routes admin';
import UserDashboard from './layouts/user/UserDashboard';
import AdminDashboard from './layouts/admin/AdminDashboard';

export default function App() {
  return (
    <Container >
    <BrowserRouter>
    <AuthProvider>
        <Box sx={{ my: 6 }}>
        
          <Routes>
            <Route path="/login" element={<SignIn/>} />
            <Route path = "/" element={<PrivateRoute />}>
              <Route path="/" element={<Dashboard/>} />
            </Route>
          </Routes> 
        </Box>
      </AuthProvider>
      </BrowserRouter>
    </Container>
  );
}
