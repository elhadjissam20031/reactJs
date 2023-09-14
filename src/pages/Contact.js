import Header from "../components/Header";
import Footer from "../components/Footer";
import { React, Component } from "react";
export default class Contact extends Component {
  render() {
    return (
      <>
        <div className="contact text-center py-5">
          <div className="container">
            <h3 className="fs-2 fw-bolder">CONTACT SECTION</h3>
            <div className="line line-dark">
              <i class="fa-solid fa-star px-4 py-3"></i>
            </div>
            <form className="w-50 m-auto">
              <div>
                <div className="focus-input">userName:</div>

                <input
                  type="text"
                  placeholder="userName"
                  className="d-block w-100"
                />
              </div>
              <div>
                <div className="focus-input">userAge:</div>

                <input
                  type="text"
                  placeholder="userAge"
                  className="d-block w-100"
                />
              </div>
              <div>
                <div className="focus-input">userEmail:</div>

                <input
                  type="email"
                  placeholder="userEmail"
                  className="d-block w-100"
                />
              </div>
              <div>
                <div className="focus-input">userPassword:</div>

                <input
                  type="password"
                  placeholder="userPassword"
                  className="d-block w-100"
                />
              </div>
              <button
                onClick={function (e) {
                  e.preventDefault();
                }}
                className="btn-send px-3 py-2 fs-6"
              >
                send Message
              </button>
            </form>
          </div>
        </div>
      </>
    );
  }
}
