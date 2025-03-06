import React, { useState } from "react";
import { Container, Row, Col, Nav } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { FaHome, FaUserMd, FaConciergeBell, FaCalendarCheck, FaUsers } from "react-icons/fa";
import AdmHome from "./AdmHome";
import AdmDoctors from "./AdmDoctors";
import AdmServices from "./AdmServices";
import AdmBookings from "./AdmBookings";
import AdmPatients from "./AdmPatients";


const AdminDashboard = () => {
  const [activeTab, setActiveTab] = useState("home");

  const renderContent = () => {
    switch (activeTab) {
      case "home":
        return <AdmHome />;
      case "doctors":
        return <AdmDoctors/>;
      case "services":
        return <AdmServices/>;
      case "bookings":
        return <AdmBookings/>;
      case "patients":
        return <AdmPatients/>;
      default:
        return <h2>Welcome to Admin Dashboard</h2>;
    }
  };

  return (
    <Container fluid>
      <Row>
        {/* Sidebar */}
        <Col md={3} lg={2} className="bg-dark text-white sidebar vh-100">
          <h3 className="text-center py-3">Admin Panel</h3>
          <Nav className="flex-column p-3">
            <Nav.Link className="text-white d-flex align-items-center" onClick={() => setActiveTab("home")}>
              <FaHome className="me-2" /> Home
            </Nav.Link>
            <Nav.Link className="text-white d-flex align-items-center" onClick={() => setActiveTab("doctors")}>
              <FaUserMd className="me-2" /> Doctors
            </Nav.Link>
            <Nav.Link className="text-white d-flex align-items-center" onClick={() => setActiveTab("services")}>
              <FaConciergeBell className="me-2" /> Services
            </Nav.Link>
            <Nav.Link className="text-white d-flex align-items-center" onClick={() => setActiveTab("bookings")}>
              <FaCalendarCheck className="me-2" /> Bookings
            </Nav.Link>
            <Nav.Link className="text-white d-flex align-items-center" onClick={() => setActiveTab("patients")}>
              <FaUsers className="me-2" /> Patients
            </Nav.Link>
          </Nav>
        </Col>

        {/* Main Content */}
        <Col md={9} lg={10} className="p-4">
          {renderContent()}
        </Col>
      </Row>
    </Container>
  );
};

export default AdminDashboard;
