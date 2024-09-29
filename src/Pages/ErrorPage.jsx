import React from "react";
import img from "../../public/404.png";
import "./Error.css";
function ErrorPage() {
  return (
    <div>
      <img className="img" src={img} alt="" />
    </div>
  );
}

export default ErrorPage;
