import CookieConsent from "react-cookie-consent";

export default function Navbar() {
  return (
    <footer>
      <CookieConsent
        location="bottom"
        buttonText="Accept"
        style={{ background: "#2B373B" }}
        buttonStyle={{ color: "#4e503b", fontSize: "13px" }}
        // onAccept={(acceptedByScrolling) => {
        //   if (acceptedByScrolling) {
        //     // triggered if user scrolls past threshold
        //     alert("Accept was triggered by user scrolling");
        //   } else {
        //     alert("Accept was triggered by clicking the Accept button");
        //   }
        // }}
      >
        This website uses cookies to enhance the user experience.{" "}
        <span style={{ fontSize: "10px" }}>This bit of text is smaller :O</span>
      </CookieConsent>
    </footer>
  );
}
