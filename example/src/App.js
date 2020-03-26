import React from "react";
import { WizardForm, WizardStep } from "react-formik-wizard";
import { StepOne, StepTwo } from "./Steps";

const App = () => {
  return (
    <WizardForm
      initialValues={{
        firstName: "",
        lastName: "",
        age: 18,
        address: ""
      }}
    >
      <WizardStep title="step 1">
        <StepOne />
      </WizardStep>
      <WizardStep title="step 2">
        <StepTwo />
      </WizardStep>
    </WizardForm>
  );
};

export default App;
