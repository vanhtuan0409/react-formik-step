import React from "react";
import { Steps } from "antd";
import { useWizardContext } from "react-formik-wizard";

const FormIndex = () => {
  const { currentStepIndex, steps } = useWizardContext();
  return (
    <Steps current={currentStepIndex}>
      {steps.map((s, i) => (
        <Steps.Step key={i} title={s.title} />
      ))}
    </Steps>
  );
};

export default FormIndex;
