import React, { useState, useEffect } from 'react';
import NavbarMain from './NavbarMain';
import { Carousel } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Hospital1 = () => {
  const [formData, setFormData] = useState({
    ownerName: '',
    contactNumber: '',
    email: '',
    petName: '',
    petAge: '',
    petBreed: '',
    category: '',
    appointmentTime: '',
    appointmentDate: '',
    doctorName: ''
  });

  const [categories, setCategories] = useState([]);
  const [doctors, setDoctors] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios.get('http://localhost:8000/api/categories/')
      .then((res) => setCategories(res.data))
      .catch((err) => console.error('Error fetching categories:', err));

    axios.get('http://localhost:8000/api/doctors/')
      .then((res) => setDoctors(res.data))
      .catch((err) => console.error('Error fetching doctors:', err));
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const selectedDoctor = doctors.find(doc => doc.id.toString() === formData.doctorName);
    const selectedCategory = categories.find(cat => cat.id.toString() === formData.category);

    const appointmentWithNames = {
      ...formData,
      doctorName: selectedDoctor?.name || formData.doctorName,
      category: selectedCategory?.name || formData.category
    };

    localStorage.setItem('appointmentData', JSON.stringify(appointmentWithNames));
    navigate('/payment');
  };

  return (
    <>
      <NavbarMain />
      <style>{`
        .carousel-img { height: 400px; object-fit: cover; }
      `}</style>

      <Carousel fade>
        <Carousel.Item>
          <img className="d-block w-100 carousel-img" src="https://cdn.pixabay.com/photo/2018/10/01/09/21/pets-3715733_1280.jpg" alt="Slide 1" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100 carousel-img" src="https://cdn.pixabay.com/photo/2022/01/09/19/53/nail-clipping-6926862_640.jpg" alt="Slide 2" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100 carousel-img" src="https://www.shutterstock.com/image-photo/group-pets-posing-together-dog-260nw-2518087139.jpg" alt="Slide 3" />
        </Carousel.Item>
      </Carousel>

      <div style={{ maxWidth: '600px', margin: '2rem auto', padding: '2rem', border: '1px solid #ccc', borderRadius: '10px' }}>
        <h2>Book an Appointment</h2>
        <form onSubmit={handleSubmit}>
          {[
            { label: 'Owner Name', name: 'ownerName', type: 'text' },
            { label: 'Contact Number', name: 'contactNumber', type: 'tel' },
            { label: 'Email (optional)', name: 'email', type: 'email' },
            { label: 'Pet Name', name: 'petName', type: 'text' },
            { label: 'Pet Age', name: 'petAge', type: 'number' },
            { label: 'Breed', name: 'petBreed', type: 'text' },
            { label: 'Appointment Date', name: 'appointmentDate', type: 'date' }
          ].map((field, idx) => (
            <div className="form-group mb-3" key={idx}>
              <label>{field.label}</label>
              <input type={field.type} name={field.name} className="form-control" value={formData[field.name]} onChange={handleChange} required={field.name !== 'email'} />
            </div>
          ))}

          <div className="form-group mb-3">
            <label>Category</label>
            <select name="category" className="form-control" value={formData.category} onChange={handleChange} required>
              <option value="">-- Select Category --</option>
              {categories.map(cat => (
                <option key={cat.id} value={cat.id}>{cat.name}</option>
              ))}
            </select>
          </div>

          <div className="form-group mb-3">
            <label>Appointment Time</label>
            <select name="appointmentTime" className="form-control" value={formData.appointmentTime} onChange={handleChange} required>
              <option value="">-- Select Time --</option>
              {['09:00 AM','09:30 AM','10:00 AM','10:30 AM','11:00 AM','11:30 AM','12:00 PM','12:30 PM','01:00 PM','01:30 PM','02:00 PM','02:30 PM','03:00 PM','03:30 PM','04:00 PM','04:30 PM','05:00 PM'].map(time => (
                <option key={time} value={time}>{time}</option>
              ))}
            </select>
          </div>

          <div className="form-group mb-3">
            <label>Doctor Name</label>
            <select name="doctorName" className="form-control" value={formData.doctorName} onChange={handleChange} required>
              <option value="">-- Select Doctor --</option>
              {doctors.map(doc => (
                <option key={doc.id} value={doc.id}>{doc.name}</option>
              ))}
            </select>
          </div>

          <button type="submit" className="btn btn-primary">Book Appointment</button>
        </form>
      </div>
    </>
  );
};

export default Hospital1;
