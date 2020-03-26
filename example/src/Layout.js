import React from "react";
import FormIndex from "./FormIndex";
import { Divider } from "antd";

const Layout = ({ children }) => {
  return (
    <div>
      <FormIndex />
      <Divider />
      {children}
    </div>
  );
};

export default Layout;
