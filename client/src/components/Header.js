import React, { useEffect, useState } from 'react';
import { jwtDecode } from "jwt-decode";

function Header() {

  const [ user, setUser ] = useState({});

  function handleCallbackResponse(response){
    console.log("Encoded JWT ID token: " + response.credential);
    var userObject = jwtDecode(response.credential);
    setUser(userObject);
    // Hide sign in button after signed in
    //document.getElementById("signInDiv").hidden = true;
  }

  function handleSignOut(e){
    setUser({});
    //document.getElementById("signInDiv").hidden = false;
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
    <header className="App">
    <img src="img/app-logo.png"/>
    <nav>
      {user ? (
        <>
          <button onClick={(e)=> handleSignOut(e)}>Sign out</button>
            <div>
              <img src={user.picture} alt="userPic"></img>
              <h3>{user.name}</h3>
            </div>
        </>
      ) : (
        <div id="signInDiv"></div>
      )}
    </nav>
    </header>
  );
}

export default Header;