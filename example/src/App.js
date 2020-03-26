import React from "react";
import { WizardForm, WizardStep } from "react-formik-wizard";

const App = () => {
  return (
    <WizardForm>
      <WizardStep title="step 1">Step 1 content</WizardStep>
      <WizardStep title="step 2">Step 2 content</WizardStep>
    </WizardForm>
  );
};

export default App;
