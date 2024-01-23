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
  }

  function handleSignOut(){
    setUser(null);
    // re-render sign in button
    renderSignInButton();
  }

  function renderSignInButton(){
    google.accounts.id.renderButton(
      document.getElementById("signInDiv"),
      { theme: "outline", size: "large"}
    );

    google.accounts.id.prompt();
  }

  useEffect(() => {
    /* global google */
    google.accounts.id.initialize({
      client_id: "1153563874-mp6t1hdoktqj3b8ggga0ets86uf2ka78.apps.googleusercontent.com",
      callback: handleCallbackResponse
    });

    renderSignInButton();
  }, []);

  return(
    <header className="Head">
      <div className="left-section">
        <Navigation />
      </div>
      <div className="right-section">
        <nav>
          {user && user.name ? (
            <>
              <button onClick={handleSignOut}>Sign out</button>
                <div>
                  <p>Signed in with: <br/>{user.name}</p>
                </div>
            </>
          ) : (
            <>
              <div id="signInDiv"></div>
            </>
          )}
        </nav>
      </div>
    </header>
  );
}

export default Header;