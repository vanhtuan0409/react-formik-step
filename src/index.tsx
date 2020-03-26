import React from "react";

export type Props = { text: string };

const WizardForm = ({ text }: Props) => {
  return <div>Example Component: {text}</div>;
};

export default WizardForm;
