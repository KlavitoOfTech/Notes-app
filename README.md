# NotesApp

## Overview
NotesApp is a modern and user-friendly note-taking web application designed to help users organize their thoughts, ideas, and tasks efficiently. It offers seamless authentication, allowing users to sign up, log in, and manage their notes securely.

## Features
- User authentication (Sign Up, Login, Google Authentication)
- Secure Firebase backend for authentication
- Create, edit, and delete notes
- Responsive and clean UI design
- Persistent storage for notes
- Easy navigation between pages

## Tech Stack
- **Frontend:** React.js, React Router
- **Authentication:** Firebase Authentication
- **Styling:** CSS
- **Backend:** Firebase Firestore (for storing user notes in the future)

## Installation
To set up the project locally, follow these steps:

1. **Clone the repository:**
   ```sh
   git clone https://github.com/your-username/notesapp.git
   cd notesapp
   ```

2. **Install dependencies:**
   ```sh
   npm install
   ```

3. **Setup Firebase:**
   - Create a Firebase project at [Firebase Console](https://console.firebase.google.com/)
   - Enable Authentication (Email/Password & Google Sign-In)
   - Create a `firebase.js` file inside the `src` folder and configure it as follows:
     ```js
     import { initializeApp } from "firebase/app";
     import { getAuth, GoogleAuthProvider } from "firebase/auth";
     
     const firebaseConfig = {
       apiKey: "YOUR_API_KEY",
       authDomain: "YOUR_AUTH_DOMAIN",
       projectId: "YOUR_PROJECT_ID",
       storageBucket: "YOUR_STORAGE_BUCKET",
       messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
       appId: "YOUR_APP_ID"
     };
     
     const app = initializeApp(firebaseConfig);
     export const auth = getAuth(app);
     export const googleProvider = new GoogleAuthProvider();
     ```

4. **Start the development server:**
   ```sh
   npm start
   ```
   The app will be available at `http://localhost:3000/`.

## Usage
1. Click **Sign Up** to create a new account or **Login** if you already have one.
2. Use Google Sign-In for quick authentication.
3. After logging in, users will be redirected to the dashboard (to be implemented).
4. Users can create, edit, and manage their notes easily.

## Folder Structure
```
notesapp/
├── src/
│   ├── components/
│   │   ├── AuthPage.js (Signup/Login page)
│   │   ├── Dashboard.js (Future implementation for managing notes)
│   ├── firebase.js (Firebase configuration)
│   ├── styles/
│   │   ├── signup.css (Styling for authentication page)
│   ├── App.js
│   ├── index.js
├── public/
├── README.md
├── package.json
```

## Contributing
Feel free to submit issues or pull requests if you have suggestions for improvements!

## License
This project is licensed under the MIT License.

