import React from 'react';
import { useNavigate } from 'react-router-dom';

const Payment = () => {
  const appointmentData = JSON.parse(localStorage.getItem('appointmentData'));
  const navigate = useNavigate();

  const handleConfirmPayment = () => {
    // In real app, you'd integrate Razorpay or Stripe here
    alert('Payment successful!');
    
    // Example: Send to backend (you can use axios.post)
    console.log('Submitting appointment to backend:', appointmentData);

    localStorage.removeItem('appointmentData');
    navigate('/success'); // Navigate to success page or dashboard
  };

  if (!appointmentData) return <p>No appointment data found.</p>;

  return (
    <div style={{ maxWidth: '600px', margin: '2rem auto' }}>
      <h2>Confirm Your Payment</h2>
      <p><strong>Owner:</strong> {appointmentData.ownerName}</p>
      <p><strong>Pet:</strong> {appointmentData.petName}</p>
      <p><strong>Category:</strong> {appointmentData.category}</p>
      <p><strong>Doctor:</strong> {appointmentData.doctorName}</p>
      <p><strong>Date:</strong> {appointmentData.appointmentDate}</p>
      <p><strong>Time:</strong> {appointmentData.appointmentTime}</p>

      <button className="btn btn-success" onClick={handleConfirmPayment}>
        Pay ₹500
      </button>
    </div>
  );
};

export default Payment;
