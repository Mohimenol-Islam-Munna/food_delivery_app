import React from "react";
import { useState } from "react";
import { Redirect } from "react-router-dom";
import {
  Button,
  Col,
  Container,
  Form,
  Nav,
  NavLink,
  Modal,
  Row,
  ProgressBar,
} from "react-bootstrap";
import Footer from "../../Footer/Footer";
import logo from "../../../image/Photos and Icons/logo.png";
import { useForm } from "react-hook-form";
import { useSelector, useDispatch } from "react-redux";
import { login, registration } from "../../../store/actions/auth";

const LogInFrom = () => {
  const [show, setShow] = useState(false);
  const [address, setAddress] = useState("");
  const [fromStep, setFromStep] = useState(0);
  const { register, handleSubmit, reset } = useForm();

  const { isAuthenticated, isRegistered, isDishType } = useSelector(
    (state) => state.auth
  );

  // restaurents info
  const restaurents = useSelector((state) => state.restaurents);

  const dispatch = useDispatch();

  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);

  // address handler
  const addressHandler = (e) => {
    setAddress(e.target.value);
  };

  const handleAddress = () => {
    let matchCity = restaurents.find(
      (item) => item.city.toLowerCase() === address.toLowerCase()
    );

    if (matchCity) {
      setFromStep(2);
    } else {
      setFromStep(1);
    }
  };

  const handleCompany = () => {
    setFromStep(2);
  };

  const handleCreateAccount = () => {
    setFromStep(5);
  };

  const handlePhoneNumber = () => {
    setFromStep(4);
  };

  // registration handler
  const registrationHandler = (data) => {
    dispatch(registration(data, setShow));
  };

  // login form handler
  const loginFormHandler = (data) => {
    dispatch(login(data));
  };

  if (isAuthenticated) {
    return <Redirect to="/shop" />;
  }

  return (
    <div>
      <Container>
        <div>
          <Modal show={show}>
            <h1 style={{ textAlign: "center", padding: "20px" }}>Sign in</h1>

            <Container>
              <Form
                style={{ padding: "20px" }}
                onSubmit={handleSubmit(loginFormHandler)}
              >
                <Form.Group className="mb-3" controlId="formGroupEmail">
                  <Form.Label>
                    <h6>User Name</h6>
                  </Form.Label>
                  <Form.Control
                    style={{
                      padding: "12px",
                      border: "2px solid grey",
                      borderRadius: "10px",
                    }}
                    type="text"
                    placeholder="Ex. John Doe"
                    {...register("username")}
                  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formGroupPassword">
                  <Form.Label>
                    <h6>Password</h6>
                  </Form.Label>
                  <Form.Control
                    style={{
                      padding: "12px",
                      border: "2px solid grey",
                      borderRadius: "10px",
                    }}
                    type="password"
                    placeholder="Enter 6 charecter or more"
                    {...register("password")}
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
                  onClick={handleClose}
                  type="submit"
                >
                  CONNEXION
                </Button>

                <p style={{ textAlign: "center" }}>
                  Dont have a peace account?
                </p>
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

        <div>
          <div>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                width: "100%",
                height: 80,
              }}
            >
              <div className="logo" style={{ justifyContent: "flex-end" }}>
                <Nav.Link href="/home">
                  <img src={logo} width="180" alt="" />
                </Nav.Link>
              </div>

              <div
                style={{
                  height: 80,
                  display: "flex",
                  alignItems: "center",
                  borderLeft: "2px solid grey",
                  marginLeft: 80,
                }}
              >
                <button
                  onClick={handleShow}
                  style={{
                    fontWeight: 700,
                    color: "#0cce87",
                    borderColor: "transparent",
                    backgroundColor: "#f8f9fb",
                    marginLeft: "5px",
                  }}
                >
                  Sign in
                </button>
                <Nav style={{}}>
                  <button className="signUp">
                    {" "}
                    sign Up <i class="fas fa-long-arrow-alt-right"></i>
                  </button>
                </Nav>
              </div>
            </div>

            <h4
              style={{
                textAlign: "left",
                marginBottom: "60px",
                marginTop: "40px",
              }}
            >
              SIGN UP
            </h4>

            <div>
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <div>
                  {" "}
                  <h6 style={{ fontWeight: 700 }}>SELECT ADDRESS</h6>
                </div>
                <div>
                  <h6 style={{ fontWeight: 700 }}> CREATE ACCOUNT</h6>
                </div>
                <div>
                  {" "}
                  <h6 style={{ fontWeight: 700 }}>ADD PHONE NUMBER</h6>
                </div>
                <div>
                  <h6 style={{ fontWeight: 700 }}>ADD PAYMENT</h6>
                </div>
              </div>

              {fromStep === 0 && <ProgressBar variant="success" now={0} />}

              {fromStep === 1 && <ProgressBar variant="success" now={33} />}
              {fromStep === 2 && <ProgressBar variant="success" now={66} />}
              {fromStep === 3 && <ProgressBar variant="success" now={66} />}
              {fromStep === 4 && <ProgressBar variant="success" now={66} />}
              {fromStep === 5 && <ProgressBar variant="success" now={95} />}
            </div>
          </div>

          {/* registration handler  */}
          <Form
            style={{ padding: "20px" }}
            onSubmit={handleSubmit(registrationHandler)}
          >
            {fromStep === 0 && (
              <>
                <h3 style={{ fontWeight: "700", marginTop: "80px" }}>
                  {" "}
                  What is your address?
                </h3>
                <p>we use address to locate best place to deliver your meal</p>

                <Form.Group className="mb-3" controlId="formGroupPassword">
                  <Form.Label></Form.Label>
                  <h5 style={{ textAlign: "left", marginTop: 0 }}>ADDRESS</h5>
                  <Form.Control
                    style={{ padding: "12px", border: "2px solid grey" }}
                    type="text"
                    {...register("city")}
                    onChange={(e) => addressHandler(e)}
                  />
                  <p>
                    Don't know your company's address?{" "}
                    <span style={{ color: "#0cce87" }}>
                      search by company name
                    </span>
                  </p>
                </Form.Group>

                <Button
                  onClick={handleAddress}
                  style={{
                    width: 300,
                    height: "70px",
                    backgroundImage:
                      " linear-Gradient( to right, #0cce87, #51b855)",
                    margin: "20px",
                    marginLeft: "40px",
                    marginBottom: "80px",
                  }}
                >
                  CONTINUE
                </Button>

                <hr />
              </>
            )}

            {fromStep === 1 && (
              <div>
                <h4 style={{ marginTop: "70px", fontWeight: "700" }}>
                  We coudn't find any companies at that address
                </h4>
                <p>
                  peach delivers directly to your office,tell us more about your
                  company so we can setup <br /> your building nota a building
                  administrator?Thats alright!Any employee can the first to{" "}
                  <br />
                  Sign-up at their office!
                </p>

                <div style={{ width: "45%", margin: "auto" }}>
                  <Form.Group className="mb-3" controlId="formGroupPassword">
                    <Form.Label></Form.Label>
                    <h6
                      style={{
                        textAlign: "left",
                        marginTop: 0,
                        fontWeight: "700",
                      }}
                    >
                      COMPANY NAME
                    </h6>
                    <Form.Control
                      style={{
                        padding: "12px",
                        border: "2px solid grey",
                        width: "100%",
                        height: 60,
                        margin: "auto",
                      }}
                      type="text"
                      {...register("company_name")}
                    />
                    <h6
                      style={{
                        textAlign: "left",
                        marginTop: 0,
                        fontWeight: 700,
                      }}
                    >
                      EMPLOYEE RANGE(EMPLOYEES WHO WORKS IN YOUR OFFICE)
                    </h6>
                    <Form.Control
                      style={{
                        padding: "12px",
                        border: "2px solid grey",
                        width: "100%",
                        height: 60,
                        marginTop: 20,
                        marginBottom: 20,
                        margin: "20px  auto",
                      }}
                      type="number"
                      {...register("employee_total")}
                    />
                    <h6
                      style={{
                        textAlign: "left",
                        marginTop: 0,
                        fontWeight: 700,
                      }}
                    >
                      ADDRESS
                    </h6>
                    <Form.Control
                      style={{
                        padding: "12px",
                        border: "2px solid grey",
                        width: "100%",
                        height: 60,
                        margin: " auto",
                      }}
                      type="text"
                      {...register("company_city")}
                    />
                    <p>
                      Don't know your company's address?{" "}
                      <span style={{ color: "#0cce87" }}>
                        search by company name
                      </span>
                    </p>
                  </Form.Group>

                  <Button
                    onClick={handleCompany}
                    style={{
                      width: "100%",
                      height: "70px",
                      backgroundImage:
                        " linear-Gradient( to right, #0cce87, #51b855)",
                      margin: "20px",
                    }}
                  >
                    CONTINUE
                  </Button>

                  <div style={{ display: "inline-block", marginTop: "7px" }}>
                    <Nav.Link href="#">
                      {" "}
                      <h6 style={{ color: "red" }}>GO BACK</h6>
                    </Nav.Link>
                    <hr style={{ color: "red" }}></hr>
                  </div>
                </div>

                <hr />
              </div>
            )}

            {fromStep === 2 && (
              <div>
                <h4 style={{ marginTop: "70px", fontWeight: "700" }}>
                  Create Your Account
                </h4>

                <div style={{ width: "45%", margin: "auto" }}>
                  <Form.Group className="mb-3" controlId="formGroupPassword">
                    <Form.Label></Form.Label>
                    <h6
                      style={{
                        textAlign: "left",
                        marginTop: 0,
                        fontWeight: "700",
                      }}
                    >
                      FIRST NAME
                    </h6>
                    <Form.Control
                      style={{
                        padding: "12px",
                        border: "2px solid grey",
                        width: "100%",
                        height: 60,
                        margin: "auto",
                      }}
                      type="text"
                      {...register("first_name")}
                    />
                    <h6
                      style={{
                        textAlign: "left",
                        marginTop: 0,
                        fontWeight: 700,
                      }}
                    >
                      LAST NAME
                    </h6>
                    <Form.Control
                      style={{
                        padding: "12px",
                        border: "2px solid grey",
                        width: "100%",
                        height: 60,
                        marginTop: 20,
                        marginBottom: 20,
                        margin: "20px  auto",
                      }}
                      type="text"
                      {...register("last_name")}
                    />

                    <h6
                      style={{
                        textAlign: "left",
                        marginTop: 0,
                        fontWeight: 700,
                      }}
                    >
                      USER NAME
                    </h6>
                    <Form.Control
                      style={{
                        padding: "12px",
                        border: "2px solid grey",
                        width: "100%",
                        height: 60,
                        marginTop: 20,
                        marginBottom: 20,
                        margin: "20px  auto",
                      }}
                      type="text"
                      {...register("username")}
                    />

                    <h6
                      style={{
                        textAlign: "left",
                        marginTop: 0,
                        fontWeight: 700,
                      }}
                    >
                      EMAIL
                    </h6>
                    <Form.Control
                      style={{
                        padding: "12px",
                        border: "2px solid grey",
                        width: "100%",
                        height: 60,
                        margin: " auto",
                      }}
                      type="text"
                      {...register("email")}
                    />
                    <h6
                      style={{
                        textAlign: "left",
                        marginTop: 0,
                        fontWeight: 700,
                      }}
                    >
                      PASSWORD
                    </h6>
                    <Form.Control
                      style={{
                        padding: "12px",
                        border: "2px solid grey",
                        width: "100%",
                        height: 60,
                        margin: " auto",
                      }}
                      type="text"
                      {...register("password")}
                    />
                    <p>
                      Don't know your company's address?{" "}
                      <span style={{ color: "#0cce87" }}>
                        search by company name
                      </span>
                    </p>
                  </Form.Group>
                  <Form.Check
                    type="checkbox"
                    label="i agree to the terms of service and privacy police"
                  />{" "}
                  <p></p>
                  <Button
                    onClick={handleCreateAccount}
                    style={{
                      width: "60%",
                      height: "70px",
                      backgroundImage:
                        " linear-Gradient( to right, #0cce87, #51b855)",
                      margin: "20px",
                    }}
                  >
                    CONTINUE
                  </Button>
                </div>

                <hr />
              </div>
            )}

            {fromStep === 3 && (
              <div>
                <h4 style={{ marginTop: "70px", fontWeight: "700" }}>
                  Validate Your Phone Number
                </h4>
                <p>
                  To Varivey your number please provide us your validation code
                </p>

                <div style={{ width: "45%", margin: "auto" }}>
                  <Form.Group className="mb-3" controlId="formGroupPassword">
                    <Form.Label></Form.Label>

                    <Form.Control
                      style={{
                        padding: "12px",
                        border: "2px solid grey",
                        width: "100%",
                        height: 60,
                        marginTop: 20,
                        marginBottom: 20,
                        margin: "20px  auto",
                      }}
                      type="text"
                      {...register("validate_number")}
                    />
                  </Form.Group>
                  <Nav.Link href="/#">
                    {" "}
                    <h6
                      style={{
                        color: "#0cce87",
                        borderBottom: "2px solid #0cce87",
                        display: "inline-block",
                      }}
                    >
                      RESEND VALIDATION CODE
                    </h6>
                  </Nav.Link>{" "}
                  <br />
                  <Button
                    onClick={handlePhoneNumber}
                    style={{
                      width: "50%",
                      height: "70px",
                      backgroundImage:
                        " linear-Gradient( to right, #0cce87, #51b855)",
                      marginTop: "20px",
                      marginBottom: "30px",
                    }}
                  >
                    CONTINUE
                  </Button>
                </div>

                <hr />
              </div>
            )}

            {fromStep === 4 && (
              <div>
                <h4 style={{ marginTop: "70px", fontWeight: "700" }}>
                  Enter Your Credit Card below
                </h4>

                <div style={{ width: "70%", margin: "auto" }}>
                  <Form.Group className="mb-3" controlId="formGroupPassword">
                    <Form.Label></Form.Label>
                    <h6
                      style={{
                        textAlign: "left",
                        marginTop: 0,
                        fontWeight: "700",
                      }}
                    >
                      CARD NUMBER
                    </h6>
                    <Form.Control
                      style={{
                        padding: "12px",
                        border: "2px solid grey",
                        width: "100%",
                        height: 60,
                        marginTop: 20,
                        marginBottom: 20,
                        margin: "20px  auto",
                      }}
                      type="text"
                      {...register("card_number")}
                    />

                    <Row className="mb-3">
                      <Form.Group as={Col} controlId="formGridCity">
                        <Form.Label>
                          <h6 style={{ fontWeight: 700 }}>Express</h6>
                        </Form.Label>
                        <Form.Control
                          style={{ height: " 60px", border: "2px solid gray" }}
                          {...register("express")}
                        />
                      </Form.Group>

                      <Form.Group as={Col} controlId="formGridZip">
                        <Form.Label>
                          <h6 style={{ fontWeight: 700 }}>CVV CODE</h6>
                        </Form.Label>
                        <Form.Control
                          style={{ height: " 60px", border: "2px solid gray" }}
                          {...register("cvv_code")}
                        />
                      </Form.Group>

                      <Form.Group as={Col} controlId="formGridZip">
                        <Form.Label>
                          <h6 style={{ fontWeight: 700 }}>ZIP CODE</h6>
                        </Form.Label>
                        <Form.Control
                          style={{ height: " 60px", border: "2px solid gray" }}
                          {...register("zip_code")}
                        />
                      </Form.Group>
                    </Row>
                  </Form.Group>

                  <Button
                    style={{
                      width: "40%",
                      height: "70px",
                      backgroundImage:
                        " linear-Gradient( to right, #0cce87, #51b855)",
                      marginTop: "20px",
                      marginBottom: "100px",
                    }}
                    type="submit"
                  >
                    SAVE
                  </Button>
                </div>

                <hr />
              </div>
            )}

            {fromStep === 5 && (
              <>
                <div style={{ width: "60%", margin: "auto" }}>
                  <Form.Group className="mb-3" controlId="formGroupPassword">
                    <Form.Label></Form.Label>
                    <h4 style={{ fontWeight: 700, marginTop: 40 }}>
                      ENTER YOUR PHONE NUMBER
                    </h4>
                    <p>we use your number to send notification</p>
                    <Form.Control
                      style={{ padding: "12px", border: "2px solid grey" }}
                      type="text"
                      {...register("number")}
                    />

                    <Form.Label style={{ marginTop: "50px", fontWeight: 700 }}>
                      <h3>when would you like to receive texts?</h3>
                    </Form.Label>
                    <Form.Select
                      style={{
                        marginTop: "30px",
                        width: "30%",
                        margin: " 30px auto",
                        height: 50,
                      }}
                      defaultValue="9.00 AM"
                    >
                      <option>9.00 AM</option>
                      <option>10.00 AM</option>
                      <option>11.00 AM</option>
                    </Form.Select>
                    <Form.Check
                      type="checkbox"
                      label="Rewind me 15 minutes beforecutoff time if i go to order"
                    />
                  </Form.Group>

                  <h3
                    style={{
                      marginBottom: "30px",
                      marginTop: "40px",
                      fontWeight: 700,
                    }}
                  >
                    Choose Order Options
                  </h3>

                  <div
                    style={{
                      height: 55,
                      width: "100%",
                      border: "2px solid grey",
                      borderRadius: 10,
                    }}
                  >
                    <>
                      <div
                        style={{
                          float: "left",
                          marginTop: "9px",
                          marginRight: "5px",
                        }}
                      >
                        <Form.Check type="radio" aria-label="radio 1" />
                      </div>

                      <p style={{ float: "left", marginTop: "5px" }}>
                        {" "}
                        i will order by SMS
                      </p>
                    </>
                  </div>
                  <div
                    style={{
                      height: 50,
                      width: "100%",
                      border: "2px solid grey",
                      borderRadius: 12,
                      marginTop: 35,
                    }}
                  >
                    <>
                      <div
                        style={{
                          float: "left",
                          marginTop: "9px",
                          marginRight: "5px",
                        }}
                      >
                        <Form.Check type="radio" aria-label="radio 1" />
                      </div>

                      <p style={{ float: "left", marginTop: "5px" }}>
                        {" "}
                        i will order by website or mobile app
                      </p>
                    </>
                  </div>
                  <p style={{ textAlign: "left" }}>
                    you can change this option later in your profile
                  </p>

                  <Button
                    style={{
                      width: 300,
                      height: "70px",
                      backgroundImage:
                        " linear-Gradient( to right, #0cce87, #51b855)",
                      margin: "20px",
                      marginLeft: "40px",
                      marginBottom: "80px",
                    }}
                    onClick={() => setFromStep(3)}
                  >
                    CONTINUE
                  </Button>
                </div>
                <hr />
              </>
            )}
          </Form>

          <Footer></Footer>
        </div>
      </Container>
    </div>
  );
};

export default LogInFrom;
