import React from "react";
import PropTypes from "prop-types";

function Layout({ children }) {
  return (
    <div className="m-auto w-80">
      <div className="p-10">
        <h1 className="text-xl font-bold">Noughts & Crosses</h1>
      </div>
      <div>{children}</div>
    </div>
  );
}

Layout.propTypes = {
  children: PropTypes.element.isRequired,
};

export default Layout;
