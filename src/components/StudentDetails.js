import React from 'react';
import { useParams } from 'react-router-dom';
import './StudentDetails.css';

const StudentDetails = ({ students }) => {
  const { id } = useParams();
  const student = students[id];

  if (!student) {
    return <div>Student not found</div>;
  }

  return (
    <div className="student-details-container">
      <h1>Student Details</h1>
      <p>Name: {student.name}</p>
      <p>Age: {student.age}</p>
      <p>Grade: {student.grade}</p>
      <p>Email: {student.email}</p>
      <p>Phone: {student.phone}</p>
      <p>Address: {student.address}</p>
    </div>
  );
};

export default StudentDetails;