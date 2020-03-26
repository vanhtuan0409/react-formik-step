import React from "react";
import { FormikErrors } from "formik";

export interface StepProps<T = any> {
  title: string;
  validationSchema?: any;
  validate?: (values: T) => void | object | Promise<FormikErrors<T>>;
}

const Step: React.FunctionComponent<StepProps> = ({ children }) => {
  return <>{children}</>;
};

export default Step;
