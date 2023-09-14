import "./App.css";
import React, { Component } from "react";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Portfolio from "./pages/Portfolio";
// import Home from "./pages/Home";
import Header from "./components/Header";
import Footer from "./components/Footer";
import MainLayout from "./Layouts/MainLayout";
import { RouterProvider, createBrowserRouter, createHashRouter } from "react-router-dom";
import Home from "./pages/Home";
// import { BrowserRoute, Routes, Route } from "react-router-dom";

class App extends Component {
  constructor(props) {
    super(props);
  }
  routes = createHashRouter([
    {
      path: "/",
      element: <MainLayout />,
      children: [
        { path: "home", element: <Home /> },
        { path: "about", element: <About /> },
        { path: "portfolio", element: <Portfolio /> },
        { path: "contact", element: <Contact /> },
      ],
    },
  ]);
  state = {};
  render() {
    return (
      <>
        <RouterProvider router={this.routes} />
      </>
    );
  }
}

export default App;
