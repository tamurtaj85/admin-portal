// Importing React Router
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { OffCanvasSidebar } from "../components/Sidebar/offCanvasSidebar";

// Importing all the neccessary routing pages
import { PageAuth } from "../pages/auth/page-auth";
import { PageProduct } from "../pages/product/page-product";

// import { PageUser } from "../pages/user/page-user";
import { PageDisplayUser } from "../pages/user/page-display-user";
import { PageEditUser } from "../pages/user/page-edit-user";

// Setting Up react router setup
export const ReactRouterSetup = () => {
  return (
    <Router>
      <OffCanvasSidebar />
      <Routes>
        <Route path="/" element={<PageAuth />} />
        <Route path="/dashboard" element={<h1>Dashboard</h1>} />
        <Route path="/products" element={<PageProduct />} />

        {/* User Routes */}
        <Route path="/users" element={<PageDisplayUser />} />
        <Route path="/edit-user:id" element={<PageEditUser />} />
      </Routes>
    </Router>
  );
};
