import React, { useEffect, useState } from 'react';
import { jwtDecode } from "jwt-decode";

function App() {

  const [ user, setUser ] = useState({});

  function handleCallbackResponse(response){
    console.log("Encoded JWT ID token: " + response.credential);
    var userObject = jwtDecode(response.credential);
    console.log(userObject);
    setUser(userObject);
    // Hide sign in button after signed in
    document.getElementById("signInDiv").hidden = true;
  }

  function handleSignOut(event){
    setUser({});
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
    <div className="App">
      <div id="signInDiv"></div>
      {
        Object.keys(user).length !== 0 &&
        <button onClick={(e)=> handleSignOut(e)}>Sign out</button>
      }
      {user &&
        <div>
          <img src={user.picture} alt="userIcon"></img>
          <h3>{user.name}</h3>
        </div>
      }
    </div>
  );
}

export default App;
