# Task Management System - MERN Stack

## Project Overview
This is a basic Task Management Application developed as part of a MERN stack technical assessment. The project allows users to manage their daily tasks through a simple web interface where they can add new tasks, view a list of all existing tasks, mark them as completed, or delete them entirely.

The main focus of this project was to implement a clean CRUD (Create, Read, Update, Delete) architecture and ensure smooth integration between the frontend and backend without using complex authentication like JWT.

## Key Features
* **Task Creation**: Users can add tasks with a title and a short description.
* **Task Overview**: All tasks are pulled from the database and displayed in a structured list.
* **Status Updates**: Tasks can be toggled from "Pending" to "Completed" with an instant UI update.
* **Task Deletion**: Option to permanently remove tasks from both the UI and the database.
* **Theme Toggle**: Includes a Dark Mode and Light Mode switch for a better user experience.

## Tech Stack
* **Frontend**: React.js (using Functional Components and Hooks)
* **Backend**: Node.js and Express.js
* **Database**: MongoDB with Mongoose ODM
* **Styling**: Bootstrap 5 and custom CSS for a responsive layout

## API Endpoints
The backend provides the following RESTful endpoints:
* GET /api/tasks - Retrieves all tasks from the database.
* POST /api/tasks - Creates a new task entry.
* PUT /api/tasks/:id - Updates the status of a specific task.
* DELETE /api/tasks/:id - Deletes a specific task by ID.

## Setup Instructions

### Prerequisites
* Make sure you have Node.js and MongoDB installed on your system.
* MongoDB Compass is recommended for viewing the database locally.

### Backend Setup
1. Open the backend folder in your terminal.
2. Run `npm install` to get the necessary dependencies.
3. Create a .env file in the backend root and add your MONGO_URI and PORT.
4. Start the server using `npm start` or `nodemon server.js`.

### Frontend Setup
1. Open the frontend folder in a new terminal.
2. Run `npm install` to install React and other libraries like Axios and Bootstrap.
3. Start the application using `npm start`.
4. The app should open automatically in your browser at http://localhost:3000.

## Project Structure
The project follows a modular folder structure to separate concerns between models, routes, and controllers.

```text
project-root/
├── backend/
│   ├── config/ (Database connection)
│   ├── controllers/ (Logic for APIs)
│   ├── models/ (Mongoose Schema)
│   ├── routes/ (API Endpoint definitions)
│   └── server.js
├── frontend/
│   ├── src/
│   │   ├── components/ (UI Components)
│   │   ├── services/ (Axios API calls)
│   │   └── App.js
└── README.md
