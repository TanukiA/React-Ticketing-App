import React, { useEffect, useState } from 'react';
import { jwtDecode } from "jwt-decode";
import '../assets/css/Header.css';
import Navigation from './Navigation';

function Header() {

  const [ user, setUser ] = useState({});

  function handleCallbackResponse(response){
    console.log("Encoded JWT ID token: " + response.credential);
    var userObject = jwtDecode(response.credential);
    setUser(userObject);
    document.getElementById("signInDiv").hidden = true;
  }

  function handleSignOut(){
    setUser(null);

    // Reset Google auth state
    google.accounts.id.disableAutoSelect();
    document.getElementById("signInDiv").hidden = false;

  }

  useEffect(() => {
    /* global google */
    google.accounts.id.initialize({
      client_id: "1153563874-mp6t1hdoktqj3b8ggga0ets86uf2ka78.apps.googleusercontent.com",
      callback: handleCallbackResponse
    });

    google.accounts.id.renderButton(
      document.getElementById("signInDiv"),
      { theme: "outline", size: "large"}
    );

    google.accounts.id.prompt();

  }, []);

  return(
    <header className="Head">
      <div className="left-section">
        <Navigation />
      </div>
      <div className="right-section">
        <nav>
        <div id="signInDiv"></div>
        {user && Object.keys(user).length !== 0 && (
          <div id="user-details">
            <button onClick={handleSignOut} className="signout-btn">Sign out</button>
            <p>Signed in as: <br/>{user.name}</p>
          </div>
          ) 
        }
        </nav>
      </div>
    </header>
  );
}

export default Header;