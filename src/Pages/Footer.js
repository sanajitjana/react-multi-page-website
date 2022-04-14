import React from "react";
var d = new Date();
var currYear = d.getFullYear();

function Footer() {
  return (
    <div className="footer">
      <footer className="py-3 bg-dark">
        <div className="container">
          <p className="m-0 text-center text-white">
            Copyright &copy; {currYear} Sanajit Jana. All Rights Reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
