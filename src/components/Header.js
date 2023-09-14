import { React, Component } from "react";
import { Link, NavLink } from "react-router-dom";

export default class Header extends Component {
  render() {
    return (
      <>
        <header>
          <nav class="navbar navbar-expand-lg">
            <div class="container">
              <Link class="navbar-brand fs-2 fw-bolder text-white" to="/home">
                START FRAMEWORK
              </Link>
              <button
                class="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarNav"
                aria-controls="navbarNav"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span class="navbar-toggler-icon"></span>
              </button>
              <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav ms-auto">
                  <li class="nav-item">
                    <NavLink
                      class="nav-link active text-white fw-bold text-uppercase"
                      aria-current="page"
                      to="/about"
                    >
                      About
                    </NavLink>
                  </li>
                  <li class="nav-item">
                    <NavLink
                      class="nav-link text-white fw-bolder text-uppercase"
                      to="/portfolio"
                    >
                      Portfolio
                    </NavLink>
                  </li>
                  <li class="nav-item">
                    <NavLink
                      class="nav-link text-white fw-bolder text-uppercase"
                      to="/contact"
                    >
                      Contact
                    </NavLink>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </header>
      </>
    );
  }
}
