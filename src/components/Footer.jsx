import React from 'react';
import PrivacyPolicy from '../Pages/PrivacyPolicy';


const Footer = () => {
  return (
    <>
      <footer
        id="sticky-footer"
        className="flex-shrink-0 py-4 text-white-50 Footer"
      >
        <div className="container text-center">
          <small>
            <a href="/PrivacyPolicy">privacy policy</a>
          </small>
        </div>
      </footer>
    </>
  );
}

export default Footer