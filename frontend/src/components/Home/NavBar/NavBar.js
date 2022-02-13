import React, { useRef, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./NavBar.css";
import logo from "../../../image/Photos and Icons/logo.png";
import { useSelector } from "react-redux";

import {
  Button,
  Col,
  Container,
  Form,
  FormControl,
  Modal,
  Nav,
  Navbar,
  NavDropdown,
  NavLink,
} from "react-bootstrap";

const NavBar = () => {
  const [singnUpEmail, setSignUpEmil] = useState({});
  const [singnUpPassWord, setSignUpPassWord] = useState("");

  const emailRef = useRef("");
  const passwordfRef = useRef("");

  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);

  const [show, setShow] = useState(false);
  const handleShow = () => setShow(true);

  const handleClose = () => {
    setShow(false);
  };

  // get restaurent
  const restaurents = useSelector((state) => state.restaurents);

  const submitForm = (e) => {
    const email = emailRef.current.value;
    let newEmail = { ...singnUpEmail };
    newEmail.email = email;
    console.log(email);
    setSignUpEmil(newEmail);
    console.log(singnUpEmail);
    const password = passwordfRef.current.value;
    setSignUpPassWord(password);
    // console.log(singnUpPassWord);
  };

  const Klick = (e) => {
    submitForm();
    handleClose();
  };

  return (
    <div>
      {/* modal */}

      <div>
        <Modal show={show}>
          <h1 style={{ textAlign: "center", padding: "20px" }}>Sign in</h1>

          <Container>
            <Form style={{ padding: "20px" }}>
              <Form.Group className="mb-3" controlId="formGroupEmail">
                <Form.Label>
                  <h6>Email or phone Number</h6>
                </Form.Label>
                <Form.Control
                  ref={emailRef}
                  style={{
                    padding: "12px",
                    border: "2px solid grey",
                    borderRadius: "10px",
                  }}
                  type="email"
                  placeholder="you@example.com"
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formGroupPassword">
                <Form.Label>
                  <h6>Password</h6>
                </Form.Label>
                <Form.Control
                  ref={passwordfRef}
                  style={{
                    padding: "12px",
                    border: "2px solid grey",
                    borderRadius: "10px",
                  }}
                  type="password"
                  placeholder="Enter 6 charecter or more"
                />
              </Form.Group>
              <NavLink href="/passwordreset">
                {" "}
                <h6 style={{ color: "red" }}>ForgetPasword?</h6>
              </NavLink>
              <Form.Check type="checkbox" label="Rembember me" />

              <Button
                style={{
                  width: "80%",
                  backgroundImage:
                    " linear-Gradient( to right, #0cce87, #51b855)",
                  margin: "20px",
                  marginLeft: "40px",
                }}
                onClick={Klick}
              >
                CONNEXION
              </Button>

              <p style={{ textAlign: "center" }}>Dont have a peace account?</p>
              <h6
                style={{
                  textAlign: "center",
                  marginTop: -10,
                  paddingBottom: 10,
                  color: "red ",
                }}
              >
                Sign Up Here
              </h6>
            </Form>
          </Container>
        </Modal>
      </div>

      <nav className="navbar">
        <div className="nav-container">
          <Nav.Link href="/home" className="nav-logo">
            <img
              style={{}}
              src={logo}
              width="200"
              height="90"
              alt=""
              srcset=""
            />
          </Nav.Link>

          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="li1" style={{ marginTop: "20px" }}>
              {" "}
              <div style={{ backgroundColor: "white", width: 40, height: 100 }}>
                {" "}
                <h2>
                  {" "}
                  <i
                    style={{ color: "#0cce87", marginTop: 34 }}
                    class="fas fa-map-marker-alt"
                  ></i>
                </h2>
              </div>
            </li>

            <li className="li1" style={{ marginTop: 20 }}>
              <div style={{}}>
                <Form.Select
                  style={{
                    width: "200px",
                    height: 100,
                    fontWeight: 550,
                    borderColor: "transparent",
                    fontSize: 20,
                    backgroundColor: "white",
                  }}
                  defaultValue="Choose..."
                >
                  {restaurents.map((restaurent) => (
                    <option value={restaurent.city}>{restaurent.city}</option>
                  ))}
                </Form.Select>
              </div>
            </li>

            <li className="li1">
              <h3
                style={{
                  backgroundColor: "white",
                  marginTop: 46,
                  marginLeft: "10px",
                }}
              >
                {" "}
                <i style={{ color: "#0cce87" }} class="fas fa-search"></i>
              </h3>
            </li>

            <li className="li1" style={{ marginTop: 10 }}>
              <Form
                style={{ borderRight: "2px solid grey", marginTop: "0px" }}
                className="d-flex"
              >
                <FormControl
                  style={{
                    borderColor: "transparent",
                    height: "100px",
                    width: 200,
                  }}
                  type="search"
                  placeholder="your company"
                  className="me-2"
                  aria-label="Search"
                />
              </Form>
            </li>
            <li>
              <div
                style={{ display: "flex", alignItems: "center", marginTop: 40 }}
              >
                <button
                  onClick={handleShow}
                  style={{
                    width: 114,
                    fontWeight: 700,
                    height: "40px",
                    borderRadius: 10,
                    color: "#0cce87",
                    borderColor: "transparent",
                    backgroundColor: "white",
                  }}
                  className="signIn"
                >
                  SIGN IN
                </button>

                <Nav.Link href="/login">
                  <button className="signUp" style={{ width: 120 }}>
                    SIGN UP <i class="fas fa-long-arrow-alt-right"></i>
                  </button>
                </Nav.Link>
              </div>
            </li>
          </ul>
          <div className="nav-icon" onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"}></i>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
