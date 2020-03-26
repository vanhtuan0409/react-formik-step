import React from "react";
import { StepForm, Step } from "react-formik-step";
import * as Yup from "yup";
import Layout from "./Layout";
import { StepOne, StepTwo } from "./Steps";

const App = () => {
  const onSubmit = values => {
    console.log(values);
  };

  return (
    <StepForm
      initialValues={{
        firstName: "",
        lastName: "",
        age: 18,
        address: ""
      }}
      onSubmit={onSubmit}
    >
      <Step
        title="step 1"
        validationSchema={Yup.object().shape({
          firstName: Yup.string()
            .min(2, "At least 2 char")
            .required("Required"),
          lastName: Yup.string()
            .min(2, "At least 2 char")
            .required("Required")
        })}
      >
        <Layout>
          <StepOne />
        </Layout>
      </Step>
      <Step
        title="step 2"
        validationSchema={Yup.object().shape({
          age: Yup.number()
            .min(16, "Must be older than 16")
            .required("Required")
        })}
      >
        <Layout>
          <StepTwo />
        </Layout>
      </Step>
    </StepForm>
  );
};

export default App;
