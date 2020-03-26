import React from "react";
import { useStepContext } from "react-formik-step";
import { Row, Col, Button, Input, Typography } from "antd";
import { Field, ErrorMessage } from "formik";

export const StepOne = () => {
  return (
    <>
      <Row className="form-row">
        <Col span={3} className="form-label">
          <label htmlFor="firstName">First Name</label>
        </Col>
        <Col span={19} offset={1}>
          <Field name="firstName" as={Input} />
          <ErrorMessage
            name="firstName"
            component={Typography.Text}
            type="danger"
          />
        </Col>
      </Row>
      <Row className="form-row">
        <Col span={3} className="form-label">
          <label htmlFor="lastName">Last Name</label>
        </Col>
        <Col span={19} offset={1}>
          <Field name="lastName" as={Input} />
          <ErrorMessage
            name="lastName"
            component={Typography.Text}
            type="danger"
          />
        </Col>
      </Row>
      <Row justify="center">
        <Button type="primary" htmlType="submit">
          Next
        </Button>
      </Row>
    </>
  );
};

export const StepTwo = () => {
  const { currentStepIndex, gotoStep } = useStepContext();
  return (
    <>
      <Row className="form-row">
        <Col span={3} className="form-label">
          <label htmlFor="age">Age</label>
        </Col>
        <Col span={19} offset={1}>
          <Field name="age" as={Input} type="number" />
          <ErrorMessage name="age" component={Typography.Text} type="danger" />
        </Col>
      </Row>
      <Row className="form-row">
        <Col span={3} className="form-label">
          <label htmlFor="address">Address</label>
        </Col>
        <Col span={19} offset={1}>
          <Field name="address" as={Input.TextArea} />
          <ErrorMessage
            name="address"
            component={Typography.Text}
            type="danger"
          />
        </Col>
      </Row>
      <Row justify="center">
        <Button type="default" onClick={() => gotoStep(currentStepIndex - 1)}>
          Back
        </Button>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Row>
    </>
  );
};
