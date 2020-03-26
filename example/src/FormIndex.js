import React from "react";
import { Steps } from "antd";

const FormIndex = ({ current, steps }) => {
  return (
    <Steps current={current}>
      {steps.map((s, i) => (
        <Steps.Step key={i} title={s} />
      ))}
    </Steps>
  );
};

export default FormIndex;
