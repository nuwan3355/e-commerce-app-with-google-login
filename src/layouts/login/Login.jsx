import React from "react";
import { GoogleLogin } from "react-google-login";

export default function Login({
  showLoginBtn,
  setShowLoginBtn,
  setShowLogoutBtn,
}) {
  const clientId =
    "386935864580-kpred9k3rvh1n30u3sds2pkv2die71bu.apps.googleusercontent.com";

  const onLoginSucces = (response) => {
    setShowLoginBtn(false);
    setShowLogoutBtn(true);
  };

  const onFailierSuccess = (response) => {
    console.log("failiure" + response);
  };

  return (
    <div style={{ background: "teal", height: "100vh", paddingTop: "100px" }}>
      <div
        style={{
          width: "60%",
          margin: " auto",
          border: "5px solid aqua",
          height: "250px",
          background: "teal",
          paddingTop: "50px",
        }}
      >
        <p style={{ fontSize: "25px", color: "white", textAlign: "center" }}>
          Loggin with your google
        </p>
        {showLoginBtn && (
          <div  style={{ textAlign:"center" }}>
            <GoogleLogin
              theme="dark"
              clientId={clientId}
              buttonText="Login"
              onSuccess={onLoginSucces}
              onFailure={onFailierSuccess}
              cookiePolicy={"single_host_origin"}
             
            />
          </div>
        )}
      </div>
    </div>
  );
}
