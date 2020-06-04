import React from "react";
import { useLocation } from "react-router-dom";
import { Link } from "../../components/Link";

function Error404() {
  let location = useLocation();

  return (
    <div>
      <h4>this is the 500 page.</h4>
      <h3>
        No match for <code>{location.pathname}</code>
      </h3>
      <Link href="/">back to homepage</Link>
    </div>
  );
}
export default Error404;
