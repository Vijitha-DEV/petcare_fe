import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Button, Form, Carousel, Container } from 'react-bootstrap';
import NavbarMain from './NavbarMain';

function Home1() {
  const navigate = useNavigate();
  const [districts, setDistricts] = useState([]);
  const [selectedDistrict, setSelectedDistrict] = useState("");

  useEffect(() => {
    const accessToken = localStorage.getItem('access');
    if (!accessToken) {
      navigate('/login');
    } else {
      axios.get('http://127.0.0.1:8000/api/districts/', {
        headers: {
          Authorization: `Bearer ${accessToken}`
        }
      })
      .then(response => {
        setDistricts(response.data);
      })
      .catch(error => {
        console.error('Error fetching districts:', error);
      });
    }
  }, [navigate]);

  const handleDistrictChange = (event) => {
    setSelectedDistrict(event.target.value);
  };

  const handleSubmit = () => {
    const accessToken = localStorage.getItem('access');
    if (!accessToken) {
      alert("You're not logged in.");
      navigate('/login');
      return;
    }

    if (selectedDistrict) {
      axios.post(
        'http://127.0.0.1:8000/api/select-district/',
        { district: selectedDistrict },
        {
          headers: {
            Authorization: `Bearer ${accessToken}`
          }
        }
      )
      .then(response => {
        alert(response.data.message);
        navigate(`/hostels/${selectedDistrict}`);
      })
      .catch(error => {
        console.error('Error submitting district:', error);
        alert('Error submitting district. Please try again.');
      });
    } else {
      alert("Please select a district first.");
    }
  };

  return (
    <div>
      <NavbarMain />

      {/* Inline styles for quick customization */}
      <style>{`
        .form-section {
          background: linear-gradient(to right, #ffe3e3, #ffc6c6);
          min-height: calc(100vh - 400px);
          display: flex;
          justify-content: center;
          align-items: center;
          padding: 40px 0;
        }

        .form-box {
          background-color: #ffffff;
          padding: 30px;
          border-radius: 12px;
          width: 100%;
          max-width: 400px;
          box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1);
        }

        .form-box h2 {
          font-weight: 600;
          color: #333;
        }

        .form-box select,
        .form-box button {
          border-radius: 20px;
        }

        .carousel-img {
          height: 400px;
          object-fit: cover;
        }
      `}</style>

      {/* Carousel Section using React Bootstrap */}
      <Carousel fade>
        <Carousel.Item>
          <img
            className="d-block w-100 carousel-img"
            src="https://cdn.pixabay.com/photo/2018/10/01/09/21/pets-3715733_1280.jpg"
            alt="Slide 1"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 carousel-img"
            src="https://cdn.pixabay.com/photo/2022/01/09/19/53/nail-clipping-6926862_640.jpg"
            alt="Slide 2"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 carousel-img"
            src="https://cdn.pixabay.com/photo/2017/05/16/11/53/dog-2312031_1280.jpg"
            alt="Slide 3"
          />
        </Carousel.Item>
      </Carousel>

      {/* District Selection Form */}
      <div className="form-section">
        <div className="form-box">
          <h2 className="text-center mb-4">Select Your District</h2>
          <Form.Select
            value={selectedDistrict}
            onChange={handleDistrictChange}
            className="mb-3"
          >
            <option value="">-- Choose a district --</option>
            {districts.map((d) => (
              <option key={d.id} value={d.id}>
                {d.name}
              </option>
            ))}
          </Form.Select>
          <Button
            className="w-100"
            variant="success"
            onClick={handleSubmit}
          >
            Submit
          </Button>
        
        </div>
      </div>
    </div>
  );
}

export default Home1;
