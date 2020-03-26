import React from "react";
import { useWizardContext } from "react-formik-wizard";
import { Button, Input } from "antd";
import { Field, ErrorMessage } from "formik";

export const StepOne = () => {
  return (
    <div>
      <Field name="firstName" as={Input} />
      <ErrorMessage name="firstName" />
      <Button type="primary" htmlType="submit">
        Next
      </Button>
    </div>
  );
};

export const StepTwo = () => {
  const { currentStepIndex, gotoStep } = useWizardContext();
  return (
    <div>
      Step 2 content
      <br />
      <Button type="default" onClick={() => gotoStep(currentStepIndex - 1)}>
        Back
      </Button>
      <Button type="primary" htmlType="submit">
        Submit
      </Button>
    </div>
  );
};
