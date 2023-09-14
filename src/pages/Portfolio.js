import Header from "../components/Header";
import Footer from "../components/Footer";
import { React, Component } from "react";
export default class Portfolio extends Component {
  render() {
    return (
      <>
        <div className="portfolio text-center py-5">
          <div className="container">
            <h3 className="fs-2 fw-bolder">PORTFOLIO COMPONENT</h3>
            <div className="line line-dark">
              <i class="fa-solid fa-star px-4 py-3"></i>
            </div>
            <div className="row g-5">
              <div className="col-md-4">
                <div className="item">
                  <img
                    src={require("../assets/poert1.png")}
                    alt="poert1"
                    className="w-100"
                  />
                  <div className="layer">
                    <div className="layer-content">
                      <i class="fa-solid fa-plus fa-2xl"></i>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="item">
                  <img
                    src={require("../assets/poert2.png")}
                    alt="poert2"
                    className="w-100"
                  />
                  <div className="layer">
                    <div className="layer-content">
                      <i class="fa-solid fa-plus fa-2xl"></i>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="item">
                  <img
                    src={require("../assets/poert3.png")}
                    alt="poert3"
                    className="w-100"
                  />
                  <div className="layer">
                    <div className="layer-content">
                      <i class="fa-solid fa-plus fa-2xl"></i>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="item">
                  <img
                    src={require("../assets/poert1.png")}
                    alt="poert4"
                    className="w-100"
                  />
                  <div className="layer">
                    <div className="layer-content">
                      <i class="fa-solid fa-plus fa-2xl"></i>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="item">
                  <img
                    src={require("../assets/poert2.png")}
                    alt="poert5"
                    className="w-100"
                  />
                  <div className="layer">
                    <div className="layer-content">
                      <i class="fa-solid fa-plus fa-2xl"></i>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="item">
                  <img
                    src={require("../assets/poert3.png")}
                    alt="poert6"
                    className="w-100"
                  />
                  <div className="layer">
                    <div className="layer-content">
                      <i class="fa-solid fa-plus fa-2xl"></i>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}
