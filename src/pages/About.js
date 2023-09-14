import Header from "../components/Header";
import Footer from "../components/Footer";
import { React, Component } from "react";
export default class About extends Component {
  render() {
    return (
      <>
        <div className="about text-white text-center py-5">
          <div className="container">
            <h3 className="fs-1 fw-bolder">ABOUT COMPONENT</h3>
            <div className="line">
              <i class="fa-solid fa-star px-4 py-3"></i>
            </div>
            <div>
              <div className="row">
                <div className="col-md-6">
                  <div>
                    <p>
                      Freelancer is a free bootstrap theme created by Route. The
                      download includes the complete source files including
                      HTML, CSS, and JavaScript as well as optional SASS
                      stylesheets for easy customization.
                    </p>
                  </div>
                </div>
                <div className="col-md-6">
                  <div>
                    <p>
                      Freelancer is a free bootstrap theme created by Route. The
                      download includes the complete source files including
                      HTML, CSS, and JavaScript as well as optional SASS
                      stylesheets for easy customization.
                    </p>
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
