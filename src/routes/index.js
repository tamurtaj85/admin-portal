// Importing React Router
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { OffCanvasSidebar } from "../components/Sidebar/offCanvasSidebar";

// Importing all the neccessary routing pages
import { PageAuth } from "../pages/auth/page-auth";

import { PageDisplayProduct } from "../pages/product/page-display-product";
import { PageAddProduct } from "../pages/product/page-add-product";
import { PageEditProduct } from "../pages/product/page-edit-product";

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

        {/* Product Routes */}
        <Route path="/products" element={<PageDisplayProduct />} />
        <Route path="/add-product" element={<PageAddProduct />} />
        <Route path="/edit-product/:id" element={<PageEditProduct />} />

        {/* User Routes */}
        <Route path="/users" element={<PageDisplayUser />} />
        <Route path="/edit-user/:id" element={<PageEditUser />} />
      </Routes>
    </Router>
  );
};
