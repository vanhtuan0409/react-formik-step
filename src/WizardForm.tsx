import React, { createContext, useState, useContext, Children } from "react";
import { Formik, FormikConfig, FormikHelpers } from "formik";
import { WizardStepProps } from "./WizardStep";

const WizardFormContext = createContext<WizardFormState>({
  steps: [],
  currentStepIndex: 0,
  gotoStep: () => {}
});

export const useWizardContext = () => {
  return useContext(WizardFormContext);
};

export interface WizardFormState {
  steps: Array<WizardStepProps>;
  currentStepIndex: number;
  gotoStep: (step: number) => void;
}

export interface WizardFormProps<T> extends FormikConfig<T> {}

function WizardForm<T>({
  onSubmit,
  children,
  ...formikProps
}: WizardFormProps<T>) {
  const [step, setStep] = useState(0);
  const formSteps = Children.toArray(children) as Array<
    React.ReactElement<WizardStepProps>
  >;
  const activeStep = formSteps[step];

  const gotoStep = (step: number) => {
    let normalized = Math.min(step, formSteps.length - 1);
    normalized = Math.max(step, 0);
    setStep(normalized);
  };

  const metas = formSteps.map(s => s.props);
  const state: WizardFormState = {
    steps: metas,
    currentStepIndex: step,
    gotoStep
  };

  const stepSubmit = (values: T, helpers: FormikHelpers<T>) => {
    const isLastStep = step === formSteps.length - 1;
    if (isLastStep) {
      onSubmit(values, helpers);
    } else {
      helpers.setTouched({});
      helpers.setSubmitting(false);
      gotoStep(step + 1);
    }
  };

  return (
    <Formik {...formikProps} onSubmit={stepSubmit}>
      {({ handleSubmit }) => (
        <WizardFormContext.Provider value={state}>
          <form onSubmit={handleSubmit}>{activeStep}</form>
        </WizardFormContext.Provider>
      )}
    </Formik>
  );
}

export default WizardForm;
