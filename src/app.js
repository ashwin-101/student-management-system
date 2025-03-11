import React, { useState } from 'react';
import { Route, Switch } from 'react-router-dom';
import StudentList from './components/StudentList';
import StudentForm from './components/StudentForm';
import StudentDetails from './components/StudentDetails';
import './styles/App.css';  // Import the main CSS file

const App = () => {
  const [students, setStudents] = useState([]);

  return (
    <div className="app-container">
      <Switch>
        <Route exact path="/" render={() => <StudentList students={students} />} />
        <Route path="/add" render={() => <StudentForm setStudents={setStudents} students={students} />} />
        <Route path="/student/:id" render={() => <StudentDetails students={students} />} />
      </Switch>
    </div>
  );
};

export default App;
