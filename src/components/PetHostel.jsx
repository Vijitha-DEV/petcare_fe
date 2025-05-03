import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';
import { Card } from 'react-bootstrap';
import NavbarMain from './NavbarMain';

function PetHostel() {
  const { districtId } = useParams();
  const [hostels, setHostels] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const accessToken = localStorage.getItem('access');

    if (!accessToken) {
      navigate('/login');
      return;
    }

    axios.get(`http://127.0.0.1:8000/api/hostels/${districtId}/`, {
      headers: {
        Authorization: `Bearer ${accessToken}`
      }
    })
      .then((res) => setHostels(res.data))
      .catch((err) => console.error('Error fetching hostels:', err));
  }, [districtId, navigate]);

  return (
    <>
      <NavbarMain />

      <style>{`
        .hostel-container {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 2rem;
          padding: 2rem;
        }

        .hostel-card {
          width: 18rem;
          border-radius: 15px;
          box-shadow: 0 4px 12px rgba(0,0,0,0.1);
          transition: transform 0.3s ease;
        }

        .hostel-card:hover {
          transform: scale(1.05);
        }

        .hostel-img {
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

      <div className="hostel-container">
        {hostels.length > 0 ? (
          hostels.map((hostel) => (
            <Card key={hostel.id} className="hostel-card">
              {hostel.image && (
                <Card.Img
                  variant="top"
                  src={hostel.image}
                  className="hostel-img"
                  alt={hostel.name}
                />
              )}
              <Card.Body>
                <Card.Title>{hostel.name}</Card.Title>
                <Card.Text><strong>Address:</strong> {hostel.address}</Card.Text>
                <Card.Text><strong>Contact:</strong> {hostel.contact}</Card.Text>
              </Card.Body>
            </Card>
          ))
        ) : (
          <p>No hostels available for this district.</p>
        )}
      </div>
    </>
  );
}

export default PetHostel;
