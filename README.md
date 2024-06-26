
## Digital Resume Backend API 

This project is an Angular-based web application designed to help users create and manage their resumes digitally. It provides a user-friendly interface for creating, editing, and sharing resumes in various formats. 
The application utilizes Angular, NgRx for state management, and Angular Material for UI components.


## Features


**User Authentication**: Users can sign up and log in securely to access their resumes.

**Resume Creation**: Users can create their resumes by filling out a form with their personal and professional details.

**Resume Templates**: Multiple resume templates are available for users to choose from when creating their resumes.

**Dashboard**: Users can view and manage their resumes from a centralized dashboard.

**Download Resumes**: Users can download their resumes in different formats and templates.

**Share Profiles**: Users can share their profiles digitally with others via email or social media.

**Profile Editing**: Users can edit their personal details, profile picture, and other information easily.


## Tech Stack

  **Node.js**:     A JavaScript runtime built on Chrome's V8 JavaScript engine.

 **Express.js**:   A minimal and flexible Node.js web application framework that provides a robust set of features for web and mobile applications.

 **MongoDB**:     A NoSQL database that uses a document-oriented data model.

 **Mongoose**:     An Object Data Modeling (ODM) library for MongoDB and Node.js, providing a straightforward schema-based solution to model application data.

 **JWT (JSON Web Tokens)**:    A compact, URL-safe means of representing claims to be transferred between two parties. It's commonly used for authentication and authorization.

 **bcryptjs**:     A library to help hash passwords securely.

 **multer**:      Middleware for handling multipart/form-data, primarily used for uploading files.

 **html-pdf**:    A HTML to PDF converter that converts my template html in pdf

 **Nodemailer**:  A module for Node.js applications to allow easy email sending. I am using this for verification of user after signup.

## Installation

Clone this Repository

```bash
  git clone https://github.com/AmTripathiDev/digital-resume-api.git
  cd digital-resume-api
  npm install
  npm start
```
    
## docker set up

you can use docker which will save your time. you don't need to fulfill the requirements

```bash
git clone https://github.com/AmTripathiDev/custom-youtube-video-player.git
cd Digital-Resume-Frontend
docker-compose up  ( It will automatically do everything for you)
open mongodb compass
Paste this connection string -> mongodb://localhost:27017

```

## Contributing

Contributions are welcome! Feel free to submit issues or pull requests to help improve the project.
