import React, { Component } from "react";
import About from "../pages/About";
import Contact from "../pages/Contact";
import Portfolio from "../pages/Portfolio";
import Home from "../pages/Home";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";

class MainLayout extends Component {
  constructor(props) {
    super(props);
  }

  state = {};
  render() {
    return (
      <>
        <Header />
        <Outlet />

        <Footer />
      </>
    );
  }
}

export default MainLayout;
