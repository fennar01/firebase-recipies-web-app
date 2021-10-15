// eslint-disable-next-line no-unused-vars
import logo from "./logo.svg";
import { useState } from "react";
import FirebaseAuthService from "./FirebaseAuthService";
import "./App.scss";
import LoginForm from "./Components/LoginForm";

function App() {
  const [user, setUser] = useState(null);

  FirebaseAuthService.subscribeToAuthChanges(setUser);

  return (
    <div className="App">
      <div className="title-row">
        <h1 className="title">Firebase Recipies</h1>
        <LoginForm existingUser={user} />
      </div>
    </div>
  );
}

export default App;
