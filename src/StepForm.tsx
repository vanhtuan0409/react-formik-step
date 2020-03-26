import React, { createContext, useState, useContext, Children } from "react";
import { Formik, FormikConfig, FormikHelpers } from "formik";
import { StepProps } from "./Step";

const FormContext = createContext<StepState>({
  steps: [],
  currentStepIndex: 0,
  gotoStep: () => {}
});
FormContext.displayName = "StepForm";

export const useStepContext = () => {
  return useContext(FormContext);
};

export interface StepState {
  steps: Array<StepProps>;
  currentStepIndex: number;
  gotoStep: (step: number) => void;
}

export interface StepFormProps<T> extends FormikConfig<T> {}

function StepForm<T>({ onSubmit, children, ...formikProps }: StepFormProps<T>) {
  const [step, setStep] = useState(0);
  const formSteps = Children.toArray(children) as Array<
    React.ReactElement<StepProps>
  >;
  const activeStep = formSteps[step];

  const gotoStep = (step: number) => {
    let normalized = Math.min(step, formSteps.length - 1);
    normalized = Math.max(step, 0);
    setStep(normalized);
  };

  const metas = formSteps.map(s => s.props);
  const state: StepState = {
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

  const validate = (values: any) => {
    return activeStep.props.validate ? activeStep.props.validate(values) : {};
  };

  return (
    <Formik
      {...formikProps}
      onSubmit={stepSubmit}
      validate={validate}
      validationSchema={activeStep.props.validationSchema}
    >
      {({ handleSubmit }) => (
        <form onSubmit={handleSubmit}>
          <FormContext.Provider value={state}>
            {activeStep}
          </FormContext.Provider>
        </form>
      )}
    </Formik>
  );
}

export default StepForm;
