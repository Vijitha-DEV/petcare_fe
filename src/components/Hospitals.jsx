import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';
import { Card } from 'react-bootstrap';
import NavbarMain from './NavbarMain';
import { Button } from 'react-bootstrap';

function PetHospital() {
  const { districtId } = useParams();
  const [hospitals, setHospitals] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const accessToken = localStorage.getItem('access');

    if (!accessToken) {
      navigate('/login');
      return;
    }

    

    axios.get(`http://127.0.0.1:8000/api/hospitals/${districtId}/`, {
      headers: {
        Authorization: `Bearer ${accessToken}`
      }
    })
      .then((res) => setHospitals(res.data))
      .catch((err) => console.error('Error fetching hospitals:', err));
  }, [districtId, navigate]);


  const handle_hospital = () => {
    navigate('/hospital1')
  }

  return (
    <>
      <NavbarMain />

      <style>{`
        .hospital-container {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 2rem;
          padding: 2rem;
        }

        .hospital-card {
          width: 18rem;
          border-radius: 15px;
          box-shadow: 0 4px 12px rgba(0,0,0,0.1);
          transition: transform 0.3s ease;
        }

        .hospital-card:hover {
          transform: scale(1.05);
        }

        .hospital-img {
          height: 200px;
          object-fit: cover;
          border-top-left-radius: 15px;
          border-top-right-radius: 15px;
        }

        .card-body {
          padding: 1rem;
        }

        .card-title {
          font-size: 1.2rem;
          font-weight: bold;
        }
      `}</style>

      <div className="hospital-container">
        {hospitals.length > 0 ? (
          hospitals.map((hospital) => (
            <Card key={hospital.id} className="hospital-card">
              {hospital.image && (
                <Card.Img
                  variant="top"
                  src={hospital.image}
                  className="hospital-img"
                  alt={hospital.name}
                />
              )}
              <Card.Body>
                <Card.Title>{hospital.name}</Card.Title>
                <Card.Text><strong>Address:</strong> {hospital.address}</Card.Text>
                <Card.Text><strong>Contact:</strong> {hospital.contact}</Card.Text>
              </Card.Body>
              <Button onClick={handle_hospital} className = "btn btn-success">Go</Button>
            </Card>
          ))
        ) : (
          <p>No hospitals available for this district.</p>
        )}
      </div>
    </>
  );
}

export default PetHospital;
