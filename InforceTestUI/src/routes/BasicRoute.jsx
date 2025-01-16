import React from "react";
import { Route, Routes } from "react-router-dom";
import ProtectedRoute from "./ProtectedRoute"; 
import UrlsPage from "../pages/UrlsPage"; 

const BasicRoute = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/error" element={<ErrorPage />} />
        
        <Route
          path="/urls"
          element={
            <ProtectedRoute allowedRoles={['Admin', 'Regular']}>
              <UrlsPage />
            </ProtectedRoute>
          }
        />
        
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
};

export default BasicRoute;
