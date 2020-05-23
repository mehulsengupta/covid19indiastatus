import React from "react";

//a footer component with github repo link
export default function Footer() {
  return (
    <>
      <div className="footer">
        <a
          href="https://github.com/mehulsengupta/covid19-india-react"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fab fa-github fa-3x"></i>
        </a>
      </div>

      <footer className="blockquote-footer footer">
        This website has been designed by Mehul Sengupta . &copy;2020 All rights
        reserved.
      </footer>
    </>
  );
}
