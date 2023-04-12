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
        expires={150}
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
          // Handle cookie acceptance
        }}
        onDecline={() => {
          // Handle cookie decline
        }}
      >
        <p>
          We use cookies to personalize content and ads, to provide social media
          features and to analyze our traffic. We also share information about
          your use of our site with our social media, advertising and analytics
          partners who may combine it with other information that you've
          provided to them or that they've collected from your use of their
          services.
        </p>
        <p>
          By clicking "Accept", you consent to our use of cookies. To learn more
          or opt-out of cookies, please see our{" "}
          <a href="/privacy-policy">Privacy Policy</a>.
        </p>
      </CookieConsent>
    </footer>
  );
}

export default CookieFooter;
