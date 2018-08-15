import React, { Component } from 'react';
import { Col, Grid, Row, Pagination, Form, div,  } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Jumbotron from '../components/Jumbotron'
import './Home.css';   
class Home extends Component {
  render() {
    return (
        <div>
            <div>
              <Jumbotron title="Build a better website in less than an hour." subtitle="Unlimited design, integrated marketing and eCommerce tools." />
            </div>
            <Grid className="card-section">
                <Row>
                    <Col sm={3} className="side-bar">
                        <Form>
                                <div className="search-card">
                                   <ul className="nav">
                                    <p>Categories </p>
                                    What's your site about?
                                        <hr />
                                        <input type ="text" placeholder="search categories" className="search-bar"></input>
                                        <li><Link to="/">All Category 1</Link></li>
                                        <li><Link to="/">All Category 2</Link></li>
                                        <li><Link to="/">All Category 3</Link></li>
                                        <li><Link to="/">All Category 4</Link></li>
                                  </ul>
                                </div>
                        </Form>
                    </Col>

                    <Col xs={8} md={8} >
                        <Row>
                            <Col sm={4}>
                                <div className="card-title" src={require('../images/images.jpeg')} alt="card-image">
                                    <h3>An Agent</h3>
                                    <p>Description</p>
                                    <p>
                                    providing you with the best service you could possibly get out there
                                    </p>
                                </div>
                            </Col>

                            <Col sm={4}>
                                <div className="card-title" src={require('../images/images.jpeg')}>
                                    <h3>An Agent</h3>
                                    <p>Description</p>
                                    <p>
                                    providing you with the best service you could possibly get out there
                                    </p>
                                </div>
                            </Col>

                            <Col sm={4}>
                                <div className="card-title" src={require("../images/images.jpeg")}>
                                    <h3>An Agent</h3>
                                    <p>Description</p>
                                    <p>
                                        providing you with the best service you could possibly get out there
                                    </p>
                                </div>
                            </Col>

                            <Col sm={4}>
                                <div className="card-title" src={require("../images/images.jpeg")}>
                                    <h3>An Agent</h3>
                                    <p>Description</p>
                                    <p>
                                        providing you with the best service you could possibly get out there
                                    </p>
                                </div>
                            </Col>

                            <Col sm={4}>
                                <div className="card-title" src={require("../images/images.jpeg")}>
                                    <h3>An Agent</h3>
                                    <p>Description</p>
                                    <p>
                                        providing you with the best service you could possibly get out there
                                    </p>
                                </div>
                            </Col>

                            <Col sm={4}>
                                <div className="card-title" src={require("../images/images.jpeg")}>
                                    <h3>An Agent</h3>
                                    <p>Description</p>
                                    <p>
                                        providing you with the best service you could possibly get out there
                                    </p>
                                </div>
                            </Col>

                            <Pagination className="pagination">
                                <Pagination.Prev />
                                <Pagination.Item disable>{1}</Pagination.Item>
                                <Pagination.Item>{2}</Pagination.Item>
                            </Pagination>
                        </Row>
                    </Col>
                </Row>
            </Grid>
            <div className="service-cards">
            <Grid>
                <Row>
                <h2 className="service-provider">Our Service Providers</h2>
                    <hr />
                    <Col xs={6} md={3}>
                        <img src ={require("../images/images.jpeg")}  className="card-image" className="image" alt ="" />
                    </Col>

                    <Col xs={6} md={3}>
                        <img src ={require("../images/images.jpeg")}  className="card-image" className="image"  alt ="" />
                    </Col>

                    <Col xs={6} md={3}>
                        <img src ={require("../images/images.jpeg")}  className="card-image" className="image" alt ="" />
                    </Col>

                    <Col xs={6} md={3}>
                        <img src ={require("../images/images.jpeg")}  className="card-image" className="image" alt ="" />
                    </Col>

                    <Col xs={6} md={3}>
                        <img src ={require("../images/images.jpeg")}  className="card-image" className="image" alt ="" />
                    </Col>

                    <Col xs={6} md={3}>
                        <img src ={require("../images/images.jpeg")}  className="card-image"className="image" alt ="" />
                    </Col>

                    <Col xs={6} md={3}>
                        <img src ={require("../images/images.jpeg")}  className="card-image" className="image" alt ="" />
                    </Col>

                    <Col xs={6} md={3}>
                        <img src ={require("../images/images.jpeg")}  className="card-image" className="image" alt ="" />
                    </Col>
                </Row>
            </Grid>
            </div>
        </div>    
    );
  }
}

export default Home;