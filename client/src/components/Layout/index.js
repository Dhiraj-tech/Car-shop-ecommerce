import React, { Fragment } from "react";
import Footer from "../Footer";
import ResponsiveAppBar from "../Navbar";

function Layout({ children }) {
  return (
    <Fragment>
      <ResponsiveAppBar />
      <main>{children}</main>
      <Footer />
    </Fragment>
  );
}

export default Layout;