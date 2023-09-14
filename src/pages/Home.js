import Header from "../components/Header";
import Footer from "../components/Footer";
import { React, Component } from "react";
export default class Home extends Component {
  render() {
    return (
      <>
        <div className="home text-center text-white py-5">
          <div className="container">
            <img
              src={require("../assets/avatar.svg").default}
              alt="home avatar"
              className="mb-4"
            />
            <h3 class="fs-2 fw-bolder">START FRAMEWORK</h3>
            <div className="line">
              <i class="fa-solid fa-star px-4 py-3"></i>
            </div>
            <p>Graphic Artist - Web Designer - Illustrator</p>
          </div>
        </div>
      </>
    );
  }
}
