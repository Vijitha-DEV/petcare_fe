import React from "react";
import { Card, Button } from "react-bootstrap";
import NavbarMain from "./NavbarMain";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const Navigate = useNavigate();
  const handledistrict = () => {
    Navigate("/home1");
  };

  return (
    <>
      <NavbarMain />

      {/* Internal CSS */}
      <style>{`
        body {
          background-color: #f0f4f7;
        }
        .dashboard-container {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 2rem;
          padding: 2rem;
        }
        .custom-card {
          width: 18rem;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          border-radius: 15px;
          overflow: hidden;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }
        .custom-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
        }
        .card-img-top {
          height: 180px;
          object-fit: cover;
        }
        .card-body {
          display: flex;
          flex-direction: column;
          flex-grow: 1;
        }
        .card-text {
          flex-grow: 1;
        }
        .custom-btn {
          margin-top: 1rem;
          width: 100%;
          font-weight: bold;
          border-radius: 25px;
        }
        .card-title {
          font-size: 1.3rem;
          font-weight: 600;
        }
      `}</style>

      <div className="dashboard-container">
        {/* Appointment */}
        <Card className="custom-card">
          <Card.Img
            variant="top"
            className="card-img-top"
            src="https://png.pngtree.com/thumb_back/fh260/background/20220817/pngtree-vet-clinic-visit-a-golden-retriever-dog-being-examined-by-a-veterinarian-photo-image_33270348.jpg"
          />
          <Card.Body className="card-body">
            <Card.Title>APPOINTMENT</Card.Title>
            <Card.Text className="card-text">
              Easily schedule appointments for your pet's vet visits, checkups, or other health needs. Our online system ensures quick booking and convenient reminders.
            </Card.Text>
            <Button variant="success" className="custom-btn" onClick={handledistrict}>
              GO
            </Button>
          </Card.Body>
        </Card>

        {/* Pet Hostel */}
        <Card className="custom-card">
          <Card.Img
            variant="top"
            className="card-img-top"
            src="https://png.pngtree.com/png-clipart/20230928/original/pngtree-a-dog-house-png-image_13163908.png"
          />
          <Card.Body className="card-body">
            <Card.Title>PET HOSTEL</Card.Title>
            <Card.Text className="card-text">
              Going away? Leave your pet in safe hands at our cozy and caring pet hostel. We provide a home-like environment, daily activities, and attentive care while you're away.
            </Card.Text>
            <Button variant="success" className="custom-btn" onClick={handledistrict}>
              GO
            </Button>
          </Card.Body>
        </Card>

        {/* Pet Supplies */}
        <Card className="custom-card">
          <Card.Img
            variant="top"
            className="card-img-top"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrnvY74mygjzqOungTUBhti4On-Tlv6wCsaw&s"
          />
          <Card.Body className="card-body">
            <Card.Title>PET SUPPLIES</Card.Title>
            <Card.Text className="card-text">
              Find everything your pet needs—from nutritious food and treats to toys and accessories. We offer a wide range of quality products for cats, dogs, and other animals.
            </Card.Text>
            <Button variant="success" className="custom-btn" onClick={handledistrict}>
              GO
            </Button>
          </Card.Body>
        </Card>

        {/* Pet Grooming */}
        <Card className="custom-card">
          <Card.Img
            variant="top"
            className="card-img-top"
            src="https://png.pngtree.com/png-clipart/20221013/ourmid/pngtree-pet-grooming-and-medical-shaving-pets-png-image_6153119.png"
          />
          <Card.Body className="card-body">
            <Card.Title>PET GROOMING</Card.Title>
            <Card.Text className="card-text">
              Keep your pet looking and feeling their best. Our grooming services include bathing, trimming, nail care, and more. Professional care in a calm, safe environment.
            </Card.Text>
            <Button variant="success" className="custom-btn" onClick={handledistrict}>
              GO
            </Button>
          </Card.Body>
        </Card>
      </div>
    </>
  );
};

export default Dashboard;
