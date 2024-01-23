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

  function handleSignOut(e){
    setUser({});
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
          {user ? (
            <>
              <button onClick={(e)=> handleSignOut(e)}>Sign out</button>
                <div>
                  <img src={user.picture} alt="user pic"></img>
                  <h3>{user.name}</h3>
                </div>
            </>
          ) : (
            <div id="signInDiv"></div>
          )}
        </nav>
      </div>
    </header>
  );
}

export default Header;