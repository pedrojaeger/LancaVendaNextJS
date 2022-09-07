import React from "react";
import NavBarApp from "../navbar";

interface Props {
  children: React.ReactNode;
}

const Layout = ({ children }: Props) => {
  return (
  <>
  <NavBarApp />
  {children}
  
  
  </>
  
  );
};

export default Layout
