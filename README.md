# UnityPages

Welcome to **UnityPages**, a collaborative document editing application that enables real-time collaboration and editing. UnityPages is built using the MERN stack (MongoDB, Express.js, React.js, Node.js) and leverages WebSocket for real-time updates.

## Table of Contents

- [Features](#features)
- [Installation](#installation)
- [Backend Deployment](#backend-deployment)
- [Frontend Deployment](#frontend-deployment)
- [Usage](#usage)
- [Technologies Used](#technologies-used)
- [Contributing](#contributing)
- [License](#license)

## Features

- **Real-Time Collaboration**: Multiple users can edit the document simultaneously with changes reflected in real-time.
- **Rich Text Editing**: Utilizes Quill.js for a feature-rich text editing experience.
- **Document Sharing**: Share documents via unique URLs.
- **User-Friendly Interface**: Intuitive UI built with React and styled with MUI.

## Installation

### Prerequisites

- Node.js and npm installed on your machine.
- MongoDB Atlas account for database hosting.
- Git for version control.

### Clone the Repository

```bash
git clone https://github.com/your-username/unitypages.git
cd unitypages
```

### Backend Setup

1. Navigate to the `server` directory:

    ```bash
    cd server
    ```

2. Install backend dependencies:

    ```bash
    npm install
    ```

3. Create a `.env` file in the `server` directory and add your MongoDB Atlas connection string:

    ```env
    MONGO_URL=mongodb://your-username:your-password@cluster0.mongodb.net/unitypages?retryWrites=true&w=majority
    ```

4. Start the backend server:

    ```bash
    npm start
    ```

### Frontend Setup

1. Navigate to the `client` directory:

    ```bash
    cd client
    ```

2. Install frontend dependencies:

    ```bash
    npm install
    ```

3. Start the frontend development server:

    ```bash
    npm start
    ```

## Backend Deployment


## Frontend Deployment

To deploy the frontend on Vercel:

1. Ensure the frontend project is prepared for deployment.
2. Follow these steps on the Vercel dashboard:
    - Click on “Add New…” and select “Project”.
    - Import your Git repository.
    - Configure the project settings:
        - Project Name: `unitypages-frontend`
        - Framework Preset: `Create-React-App`
        - Root Directory: `client`
    - Add environment variables:
        - `GENERATE_SOURCEMAP`: `false`
    - Deploy the project.

## Usage

1. Open the deployed frontend URL in your browser.
2. The home page will redirect to a new document with a unique ID.
3. Share the document URL with collaborators.
4. Start editing and see changes in real-time.

## Technologies Used

- **Frontend**: React, MUI, Quill.js
- **Backend**: Node.js, Express.js, Socket.IO
- **Database**: MongoDB Atlas
- **Deployment**: Vercel

## Contributing

Contributions are welcome! Please fork the repository and create a pull request with your changes.

## License

This project is licensed under the MIT License.

---

Feel free to customize this README as per your specific needs! If there are any additional details or changes you'd like to include, let me know!
