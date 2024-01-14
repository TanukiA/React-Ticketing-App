import React, { useEffect, useState } from 'react';
import jwt_decode from "jwt-decode";

function App() {

  const [ user, setUser ] = useState({});

  function handleCallbackResponse(response){
    console.log("Encoded JWT ID token: " + response.credential);
    var userObject = jwt_decode(response.credential);
    console.log(userObject);
    setUser(userObject);
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
  }, []);

  return(
    <div className="App">
      <div id="signInDiv"></div>
      {}
    </div>
  );
}

export default App;
