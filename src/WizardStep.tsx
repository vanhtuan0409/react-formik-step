import React from "react";
import { FormikErrors } from "formik";

export interface WizardStepProps<T = any> {
  title: string;
  validationSchema?: any;
  validate?: (values: T) => void | object | Promise<FormikErrors<T>>;
}

const WizardStep: React.FunctionComponent<WizardStepProps> = ({ children }) => {
  return <>{children}</>;
};

export default WizardStep;
