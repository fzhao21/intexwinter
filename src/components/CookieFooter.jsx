import React from "react";
import CookieConsent from "react-cookie-consent";

function CookieFooter() {
  return (
    <footer>
      <CookieConsent
        location="bottom"
        buttonText="Accept"
        declineButtonText="Decline"
        enableDeclineButton
        cookieName="my-cookie-consent"
        expires={0}
        overlay
        overlayOpacity={0.9}
        style={{
          background: "#fff",
          color: "#000",
          fontSize: "16px",
          fontWeight: "normal",
          lineHeight: "24px",
          boxShadow: "0px 0px 20px rgba(0, 0, 0, 0.3)",
          padding: "20px",
        }}
        buttonStyle={{
          background: "#FED100",
          color: "#000",
          fontSize: "16px",
          fontWeight: "bold",
          borderRadius: "4px",
          padding: "10px 24px",
          cursor: "pointer",
        }}
        declineButtonStyle={{
          background: "#fff",
          color: "#000",
          fontSize: "16px",
          fontWeight: "normal",
          borderRadius: "4px",
          padding: "10px 24px",
          cursor: "pointer",
          border: "2px solid #000",
          marginLeft: "10px",
        }}
        onAccept={() => {
          console.log("accepted cookies");
        }}
        onDecline={() => {
          console.log("declined cookies");
        }}
      >
        <p>
          The only cookies on this site are essential to the functioning of the
          site. By continuing on this site, you consent to the use of these
          essential cookies.
        </p>
        <p>
          By clicking "Accept", you consent to our use of a single cookie,
          stating if you accept our cookies. To learn more or opt-out of our
          single cookie, please see our{" "}
          <a href="/PrivacyPolicy">Privacy Policy</a>.
        </p>
      </CookieConsent>
    </footer>
  );
}

export default CookieFooter;
