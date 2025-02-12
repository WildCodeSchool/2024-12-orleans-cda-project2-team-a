import { Link } from "react-router-dom";

import "../style/not-found.scss";

export default function NotFound() {
  return (
    <div className="notFound">
      <h1> ERROR 404</h1>

      <div>
        <img src="\public\pictures\snap3.png" alt="" />
        <h2>“Snap! This page just got dusted.”</h2>{" "}
      </div>

      <div className="Portal">
        <Link to="/">
          {" "}
          <p> “Go Home through this portal !”</p>{" "}
        </Link>
        <Link to="/">
          {" "}
          <img
            className="portal-img"
            src="\public\pictures\portal.png"
            alt=""
          />{" "}
        </Link>
      </div>
    </div>
  );
}
