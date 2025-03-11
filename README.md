# student-management-system
# Student Management System

## Description
A simple React-based Student Management System that covers key React concepts such as JSX, Components, Props, State (useState), Event Handling, Lists, Forms, and React Router for navigation.

## Features
1. **Student List**
   - Display a list of students with name, age, and grade.
   - Each student has a "View Details" button to navigate to the detailed student page.
2. **Add a New Student**
   - A form with inputs for name, age, and grade.
   - "Submit" button to update the student list.
3. **Student Details Page**
   - Displays the details of a selected student, including additional information such as email, phone number, and address.

## Optional Enhancements
- Delete a Student – Add a delete button to remove students from the list.
- Edit Student Information – Allow users to update details.
- Local Storage Integration – Save data so it persists after a page refresh.
- Styled Components – Use inline styles or CSS modules for better UI.

## Project Structure
student-management ┣ 📂 src ┃ ┣ 📂 components ┃ ┃ ┣ 📄 StudentList.js ┃ ┃ ┣ 📄 StudentForm.js ┃ ┃ ┣ 📄 StudentDetails.js ┃ ┣ 📂 styles ┃ ┃ ┣ 📄 App.css ┃ ┃ ┣ 📄 StudentList.css ┃ ┃ ┣ 📄 StudentForm.css ┃ ┃ ┣ 📄 StudentDetails.css ┃ ┣ 📄 App.js ┃ ┣ 📄 index.js ┣ 📄 package.json ┣ 📄 README.md


## Getting Started

### Prerequisites
- Node.js
- npm (Node Package Manager)

### Installation
1. Clone the repository:
   ```sh
   git clone https://github.com/ashwin-101/student-management-system
2. Install the dependencies:
  npm install

**Running the Application**
1. Start the development server:
   npm start
2. Open your browser and navigate to http://localhost:3000

**Usage**
  - Navigate to the homepage to see the list of students.
  - Click "Add Student" to add a new student to the list.
  - Click "View Details" to see more information about a specific student.
**Technologies Used**
  - React
  - React Router
  - CSS
**License**
This project is licensed under the MIT License.
