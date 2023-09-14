import { React, Component } from "react";

export default class Footer extends Component {
  render() {
    return (
      <>
        <footer>
          <div className="footer-one text-white text-center py-5">
            <div className="row container m-auto gy-4">
              <div className="col-md-4">
                <div className="item">
                  <h3 className="text-uppercase">Location</h3>
                  <p>2215 John Daniel Drive</p>
                  <p>Clark, MO 65243</p>
                </div>
              </div>
              <div className="col-md-4">
                <div className="item">
                  <h3 className="text-uppercase">Around the web</h3>
                  <div className="socials d-flex justify-content-center">
                    <div className="social p-2 me-2">
                      <i class="fa-brands fa-facebook"></i>
                    </div>
                    <div className="social p-2 me-2">
                      <i class="fa-brands fa-twitter"></i>
                    </div>
                    <div className="social p-2 me-2">
                      <i class="fa-brands fa-linkedin-in"></i>
                    </div>
                    <div className="social p-2 me-2">
                      <i class="fa-solid fa-globe"></i>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="item">
                  <h3 className="text-uppercase">About freelancer</h3>
                  <p>
                    Freelance is a free to use, licensed Bootstrap theme created
                    by Route
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="footer-two text-white text-center py-3">
            <p>Copyright © Your Website 2021</p>
          </div>
        </footer>
      </>
    );
  }
}

{
  /* <div className="item">
<h3>Around the web</h3>
<div className="socials">
  <div className="social"></div>
  <div className="social"></div>
  <div className="social"></div>
  <div className="social"></div>
</div>
</div>
<div className="item">
<h3>About freelancer</h3>
<p>
  Freelance is a free to use, licensed Bootstrap theme created
  by Route
</p>
</div> */
}
