import React from 'react';
import { Link } from 'react-router-dom';
import './StudentList.css';

const StudentList = ({ students }) => {
  return (
    <div className="student-list-container">
      <h1>Student List</h1>
      <ul>
        {students.map((student, index) => (
          <li key={index} className="student-item">
            {student.name} - {student.age} - {student.grade}
            <Link to={`/student/${index}`} className="view-details-button">View Details</Link>
          </li>
        ))}
      </ul>
      <Link to="/add" className="add-student-button">Add Student</Link>
    </div>
  );
};

export default StudentList;