import React from "react";

export interface WizardStepProps {
  title: string;
}

const WizardStep: React.FunctionComponent<WizardStepProps> = ({ children }) => {
  return <>{children}</>;
};

export default WizardStep;
