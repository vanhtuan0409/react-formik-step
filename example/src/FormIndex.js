import React from "react";
import { Steps } from "antd";
import { useStepContext } from "react-formik-step";

const FormIndex = () => {
  const { currentStepIndex, steps } = useStepContext();
  return (
    <Steps current={currentStepIndex}>
      {steps.map((s, i) => (
        <Steps.Step key={i} title={s.title} />
      ))}
    </Steps>
  );
};

export default FormIndex;
