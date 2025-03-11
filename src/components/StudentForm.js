import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import './StudentForm.css';

const StudentForm = ({ setStudents, students }) => {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [grade, setGrade] = useState('');
  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name.trim() && age.trim() && grade.trim()) {
      setStudents([...students, { name, age, grade }]);
      history.push('/');
    }
  };

  return (
    <div className="student-form-container">
      <h1>Add New Student</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} />
        <input type="text" placeholder="Age" value={age} onChange={(e) => setAge(e.target.value)} />
        <input type="text" placeholder="Grade" value={grade} onChange={(e) => setGrade(e.target.value)} />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default StudentForm;