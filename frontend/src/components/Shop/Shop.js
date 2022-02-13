import React, { useEffect } from "react";
import { Button, Col, Container, Form, Nav, Row } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import Footer from "../Footer/Footer";
import MainNavbar from "../MainNavbar/MainNavbar";
import { Redirect } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getShopProducts } from "../../store/actions/shop";

const Shop = () => {
  const { isAuthenticated, token } = useSelector((state) => state.auth);
  const shop = useSelector((state) => state.shop);

  const dispatch = useDispatch();

  console.log("shop", shop);

  const shp = [1, 2, 3, 4, 5];

  useEffect(() => {
    dispatch(getShopProducts(token));
  }, []);

  if (!isAuthenticated) {
    return <Redirect to="/login" />;
  }

  return (
    <div>
      <MainNavbar></MainNavbar>
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          border: "2px solid grey",
          marginTop: 50,
        }}
      >
        <div
          style={{
            padding: "20px",
            width: "50%",
            paddingTop: 3,
            paddingBottom: 3,
          }}
        >
          <h1 style={{ fontWeight: 400 }}>February 2nd January</h1>
          <p style={{ color: "lightgreen", fontSize: 30 }}>
            Order Before 10.00am
          </p>
        </div>

        <div
          style={{
            padding: "20px",
            borderLeft: "2px solid #534d4d",
            width: "50%",
            paddingTop: 3,
            paddingBottom: 3,
          }}
        >
          <h1>Your pickup Location</h1>
          <h5 style={{ color: "green", fontWeight: 800 }}>
            Face Foundation | 10505 Sorrento Valley Rd (Suite 175)
          </h5>
        </div>
      </div>

      {/* shop product  */}
      <Container style={{ marginTop: 60 }}>
        <h2
          style={{
            marginTop: 40,
            textAlign: "left",
            fontWeight: 700,
            borderBottom: "2px solid grey",
            paddingBottom: 20,
          }}
        >
          SAN DIEGO BURGER CO
        </h2>

        <div style={{ marginTop: 25 }}>
          <Row>
            {shp.map((product) => (
              <Col style={{ marginBottom: "50px" }} md={4} sm={6}>
                <div>
                  <div style={{ height: 200, backgroundColor: "black" }}></div>

                  <div
                    style={{
                      display: "flex",
                      marginTop: 15,
                      justifyContent: "space-between",
                      marginBottom: 30,
                    }}
                  >
                    <div
                      style={{
                        width: 100,
                        height: 40,
                        backgroundColor: "orange",
                      }}
                    >
                      <h3 style={{ color: "white" }}>MEAT</h3>
                    </div>
                    <div>
                      <Nav.Link href="/home">
                        <h4 style={{ fontWeight: 700, color: "black" }}>
                          Cheeseburger W/ Chips
                        </h4>
                      </Nav.Link>
                    </div>
                  </div>

                  <div
                    style={{
                      display: "flex",
                      alignItems: "end",
                      justifyContent: "space-between",
                    }}
                  >
                    <div style={{ textAlign: "left", width: "45%" }}>
                      <h2 style={{ fontWeight: 700 }}>$11.99</h2>
                      <h5 style={{ color: "grey" }}>+$2 delivery + tax</h5>
                    </div>
                    <div
                      style={{
                        display: "flex",
                        border: "2px solid grey",
                        width: "50%",
                        borderRadius: 9,
                      }}
                    >
                      <div>
                        <Form.Group as={Col} controlId="formGridState">
                          <Form.Select
                            style={{
                              borderRight: "2px solid grey",
                              borderTopLeftRadius: 8,
                              borderBottomLeftRadius: 8,
                            }}
                            defaultValue="Choose..."
                          >
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                          </Form.Select>
                        </Form.Group>
                      </div>
                      <div style={{ margin: "auto" }}>
                        <button
                          style={{
                            backgroundColor: "transparent",
                            border: "transparent",
                          }}
                        >
                          order
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </Col>
            ))}
          </Row>
          <div
            style={{
              border: "3px solid lightGreen",
              width: "60%",
              margin: " 110px auto",
            }}
          >
            <h2 style={{ margin: "30px 15px" }}>
              Regarder le menu du Mercredi 02/02{" "}
            </h2>
          </div>
        </div>
      </Container>
      <div>
        <hr />
        <Footer></Footer>
      </div>
    </div>
  );
};

export default Shop;
