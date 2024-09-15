import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Image from 'react-bootstrap/Image';
import NestleLogo from "../icons/NestleLogo.png";
import samlogo from "../icons/samLogo.jpg";
import NavDropdown from 'react-bootstrap/NavDropdown';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import pic from "../icons/pic.jpg";

const About = () => {
  const [showMore, setShowMore] = useState(false);

  const handleViewMore = () => {
    setShowMore(!showMore);
  };

  return (
    <>
      <Navbar style={{ backgroundColor: 'white' }} expand="lg">
  <Container>
    <Image src={samlogo} rounded style={{ width: '250px', height: '110px', backgroundColor: '#d3d3d3' }} />
    <Nav className="justify-content-end">
      <NavDropdown title="About" id="basic-nav-dropdown" className="text-warning">
        <NavDropdown.Item href="#action/3.1">Home</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.1">About us</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">Samarpan Branches</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">Financial Statements</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action/3.4"></NavDropdown.Item>
      </NavDropdown>
      <Nav.Link href="#Category Health">About us</Nav.Link>
      <Nav.Link href="#Competitor Analysis">Samarpan Branches</Nav.Link>
      <Nav.Link href="#Strategy/Scenario">Financial Statements</Nav.Link>
      <Button variant="primary" className="navbar-nav3">LOGIN</Button>
    </Nav>
  </Container>
</Navbar>


      <Container>
        <Row>
          <Col>
            <Card style={{ width: '35rem' }}>
              <Card.Body>
                <Card.Title className="card2">Mr. HARIOM SINGH</Card.Title>
                <Card.Text className="card3">Managing Director and Co-Founder</Card.Text>
                <Card.Text className="card4">
                  <h5>Hariom Singh – Career Graph</h5>
                  <p><strong>2004 - 2011: Cashpor Micro Credit</strong></p>
                  <p><strong>Role:</strong> Senior Operations Manager</p>
                  <p><strong>Key Responsibilities:</strong></p>
                  <ul>
                    <li>Led a team of 50 employees in the operations department, focusing on process improvements and efficiency.</li>
                    <li>Spearheaded the implementation of new inventory management software, reducing stock discrepancies by 30%.</li>
                  </ul>

                  {showMore && (
                    <span>
                      <p><strong>Key Achievements:</strong></p>
                      <ul>
                        <li>Awarded “Employee of the Year” in 2009 for outstanding contribution to operational excellence.</li>
                        <li>Successfully reduced operating costs by 20% through a strategic cost-saving initiative.</li>
                      </ul>
                      <p><strong>2011 - 2017: Utkarsh Small Finance Bank</strong></p>
                      <p><strong>Role:</strong> Head of Operations</p>
                      <p><strong>Key Responsibilities:</strong></p>
                      <ul>
                        <li>Oversaw daily operations for multiple product lines, managing a team of 100+ employees.</li>
                        <li>Developed and implemented operational strategies that aligned with the company’s long-term goals.</li>
                        <li>Played a key role in expanding the company’s distribution network, increasing market reach by 40%.</li>
                        <li>Managed relationships with key stakeholders, including suppliers, distributors, and clients.</li>
                      </ul>
                      <p><strong>Key Achievements:</strong></p>
                      <ul>
                        <li>Led the successful launch of a new product line that contributed 25% to the company’s total revenue in 2015.</li>
                        <li>Increased overall operational efficiency by 18% through process automation and lean management techniques.</li>
                      </ul>
                      <p><strong>2017 - 2018: Ashirvad Microfinance</strong></p>
                      <p><strong>Role:</strong> Director of Operations</p>
                      <p><strong>Key Responsibilities:</strong></p>
                      <ul>
                        <li>Directed all facets of operations, including production, logistics, and supply chain management.</li>
                        <li>Managed a budget of over ₹50 crore for operational expenditures and capital improvements.</li>
                        <li>Implemented quality control procedures that led to a 10% increase in customer satisfaction.</li>
                      </ul>
                      <p><strong>Key Achievements:</strong></p>
                      <ul>
                        <li>Successfully reduced production lead times by 25% through the adoption of Six Sigma methodologies.</li>
                        <li>Increased profitability by 15% by optimizing resource allocation and reducing waste.</li>
                      </ul>
                      <p><strong>2018 - 2023: Sindhuja Microcredit Private Limited</strong></p>
                      <p><strong>Role:</strong> Chief Operating Officer (COO)</p>
                      <p><strong>Key Responsibilities:</strong></p>
                      <ul>
                        <li>Led the company’s operational strategy, reporting directly to the CEO and overseeing all divisions.</li>
                        <li>Managed a team of over 500 employees across various departments, ensuring alignment with the company’s mission.</li>
                        <li>Introduced innovative solutions to streamline manufacturing and supply chain processes.</li>
                        <li>Played a pivotal role in scaling the company’s operations, resulting in 50% revenue growth over five years.</li>
                      </ul>
                      <p><strong>Key Achievements:</strong></p>
                      <ul>
                        <li>Orchestrated the digital transformation of the company’s operations, resulting in a 20% improvement in productivity.</li>
                        <li>Led the opening of two new manufacturing plants, expanding the company’s production capacity by 35%.</li>
                        <li>Recognized as the driving force behind the company’s operational excellence and growth during this period.</li>
                      </ul>
                      <p><strong>April 2023 – Present: Startup Founder </strong></p>
                      <p><strong>Company:</strong> [SAMARPAN MICROCARE FOUNDATION]</p>
                      <p><strong>Industry:</strong> [BANKING]</p>
                      <p><strong>Role:</strong> Founder and CEO</p>
                      <p><strong>Mission:</strong> To innovate and bring disruptive solutions to the [industry] sector by leveraging cutting-edge technology and operational expertise.</p>
                      <p><strong>Key Focus Areas:</strong></p>
                      <ul>
                        <li>Developing a scalable business model focused on sustainability and innovation.</li>
                        <li>Building a strong team and establishing a robust company culture focused on growth and creativity.</li>
                        <li>Driving product development, market entry strategy, and funding acquisition.</li>
                      </ul>
                      <p><strong>Current Achievements:</strong></p>
                      <ul>
                        <li>Successfully raised initial seed funding of ₹3 crore to fuel early-stage growth.</li>
                        <li>Signed partnerships with key industry players, positioning the company for rapid market entry.</li>
                      </ul>
                    </span>
                  )}
                </Card.Text>
                <Button variant="primary" onClick={handleViewMore}>
                  {showMore ? "View Less" : "View More"}
                </Button>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card className="card border-0">
              <Card.Img variant="top" src={pic} style={{ width: '33rem', height: '34rem' }} alt="Profile Picture" />
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default About;
