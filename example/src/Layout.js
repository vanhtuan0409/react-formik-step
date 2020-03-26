import React from "react";
import FormIndex from "./FormIndex";
import { Divider, Row, Col } from "antd";

const Layout = ({ children }) => {
  return (
    <div>
      <Row justify="center">
        <Col span={12}>
          <FormIndex />
        </Col>
      </Row>
      <Divider />
      {children}
    </div>
  );
};

export default Layout;
