import React, { useState, Children } from "react";
import { Formik, FormikConfig, FormikHelpers } from "formik";

export interface WizardFormProps<T> extends FormikConfig<T> {}

function WizardForm<T>({
  onSubmit,
  children,
  ...formikProps
}: WizardFormProps<T>) {
  const [step, setStep] = useState(0);
  const formSteps = Children.toArray(children);

  const gotoStep = (step: number) => {
    let normalized = Math.min(step, formSteps.length - 1);
    normalized = Math.max(step, 0);
    setStep(normalized);
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
      {({ handleSubmit }) => <form onSubmit={handleSubmit}>hello</form>}
    </Formik>
  );
}

export default WizardForm;
