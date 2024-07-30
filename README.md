Todo MERN App

 Overview
Todo MERN App is a task management application built using the MERN (MongoDB, Express.js, React, Node.js) stack. The app allows users to manage their daily tasks effectively by providing features like adding, editing, deleting, and marking tasks as completed. It also includes functionalities such as speech synthesis for task content and tooltips for button actions.

 Features
- Add new tasks
- Edit existing tasks
- Delete tasks
- Mark tasks as completed
- View all tasks in a user-friendly interface
- Speech synthesis for task content
- Tooltips for button actions
- Real-time updates using React-Redux

 Technologies Used
- Frontend: React, Redux, React-Bootstrap, CSS, Bootstrap 
- Backend: Node.js, Express.js, MongoDB
- Other: Speech Synthesis, Tooltips

 Getting Started

# Prerequisites
- Node.js (v14 or higher)
- MongoDB (local or cloud instance)

# Installation

1. Clone the repository
   bash
   git clone https://github.com/shrutitagade/todo-mern-app.git
   cd todo-mern-app
   

2. Install dependencies for both frontend and backend
   bash
   cd backend
   npm install

   cd ../frontend
   npm install
   

3. Create a `.env` file in the `backend` folder with the following content:
   
   MONGO_URL=your_mongodb_connection_string
   PORT=5000
   

4. Start the backend server
   cd backend
   npm start
   

5. Start the frontend development server
   cd frontend
   npm start

6. Open your browser and navigate to `http://localhost:3000`

 Project Structure

todo-mern-app/
├── backend/
│   ├── controllers/
│   │   └── todoController.js
│   ├── models/
│   │   └── Todo.js
│   ├── routes/
│   │   └── todoRoutes.js
│   ├── .env
│   ├── index.js
│   └── package.json
└── frontend/
    ├── public/
    ├── src/
    │   ├── components/
    │   │   ├── TodoItem.js
    │   │   └── TodoList.js
    │   ├── redux/
    │   │   ├── store.js
    │   │   └── todoSlice.js
    │   ├── utils/
    │   │   └── speak.js
    │   ├── App.js
    │   ├── index.js
    │   └── index.css
    ├── .env
    ├── package.json
    └── README.md

 Usage

1. Add tasks by typing in the task description and clicking the "Add" button.
2. Edit tasks by clicking the "Edit" button, modifying the task description, and saving changes.
3. Delete tasks by clicking the "Delete" button.
4. Mark tasks as completed by clicking the "Complete" button.
5. Click the "Speak" button to hear the task description read aloud.
6. Tooltips will show descriptions of button actions when hovered over.

 Contributing
 
Contributions are welcome! Please fork the repository and submit a pull request for any enhancements, bug fixes, or new features.




