import CookieConsent from "react-cookie-consent";

function CookieFooter() {
  return (
    <footer>
      <CookieConsent
        location="bottom"
        buttonText="Accept"
        cookieName="myCookieConsent"
        expires={0}
        style={{
          background: "#f0f0f0",
          color: "#333",
          fontSize: "16px",
        }}
        buttonStyle={{
          background: "#333",
          color: "#fff",
          fontSize: "16px",
        }}
        contentStyle={{ margin: "0 10px" }}
      >
        This website uses cookies to enhance the user experience.
      </CookieConsent>
    </footer>
  );
}

export { CookieFooter };