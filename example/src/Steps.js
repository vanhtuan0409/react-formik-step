import React from "react";
import FormIndex from "./FormIndex";
import { useWizardContext } from "react-formik-wizard";

export const StepOne = () => {
  const { currentStepIndex, steps } = useWizardContext();
  return (
    <div>
      <FormIndex current={currentStepIndex} steps={steps.map(s => s.title)} />
      Step 1 content
      <br />
      <button type="submit">Next</button>
    </div>
  );
};

export const StepTwo = () => {
  const { currentStepIndex, gotoStep, steps } = useWizardContext();
  return (
    <div>
      <FormIndex current={currentStepIndex} steps={steps.map(s => s.title)} />
      Step 2 content
      <br />
      <button type="button" onClick={() => gotoStep(currentStepIndex - 1)}>
        Back
      </button>
    </div>
  );
};
