# react-formik-step

>

[![NPM](https://img.shields.io/npm/v/react-formik-step.svg)](https://www.npmjs.com/package/react-formik-step) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save react-formik-step
# or
yarn add react-formik-step
```

## Usage

```tsx
import React from "react";
import { StepForm, Step } from "react-formik-step";
import * as Yup from "yup";
import Layout from "./Layout";
import { StepOne, StepTwo } from "./Steps";

const App = () => {
  const onSubmit = values => {
    console.log(values);
  };

  return (
    <StepForm
      initialValues={{
        firstName: "",
        lastName: "",
        age: 18,
        address: ""
      }}
      onSubmit={onSubmit}
    >
      <Step
        title="step 1"
        validationSchema={Yup.object().shape({
          firstName: Yup.string()
            .min(2, "At least 2 char")
            .required("Required"),
          lastName: Yup.string()
            .min(2, "At least 2 char")
            .required("Required")
        })}
      >
        <Layout>
          <StepOne />
        </Layout>
      </Step>
      <Step
        title="step 2"
        validationSchema={Yup.object().shape({
          age: Yup.number()
            .min(16, "Must be older than 16")
            .required("Required")
        })}
      >
        <Layout>
          <StepTwo />
        </Layout>
      </Step>
    </StepForm>
  );
};
```

## Reference

### StepForm

`StepForm` is just a wrapper around `Formik` and interit all [Formik Props](https://github.com/jaredpalmer/formik/blob/master/docs/api/formik.md#props-1)


#### `children: Array<Step>`

Children of `StepForm` must only be `Step` components

Example:

```
<StepForm
  initialValues={{
    firstName: "",
    lastName: "",
    age: 18,
    address: ""
  }}
  onSubmit={onSubmit}
>
  <Step />
  <Step />
  <Step />
  ...
</StepForm>

```

### Step

Represent a single step in multi step form

Example:

```
<Step
  title="Step 1"
  validationSchema={Yup.object().shape({
    firstName: Yup.string()
      .min(2, "At least 2 char")
      .required("Required")
  })}
/>
```

#### `title: string`

Title for this step. Will be included in StepState

Useful for Form's index

#### `validationSchema?: any`

Ref to [Formik validationSchema](https://github.com/jaredpalmer/formik/blob/master/docs/api/formik.md#validationschema-schema----schema)

Serve the purpose of validate fields in current step

#### `validate?: (values: T) => void | object | Promise<FormikErrors<T>>`

Ref to [Formik validate](https://github.com/jaredpalmer/formik/blob/master/docs/api/formik.md#validate-values-values--formikerrorsvalues--promiseany)

Serve the purpose of validate fields in current step

### useStepContext: () => StepState

Custom React Hook to access StepForm state

Can only be used to child components of `StepForm`

### StepState

```
export interface StepState {
  steps: Array<StepProps>;
  currentStepIndex: number;
  gotoStep: (step: number) => void;
}
```

#### `steps: Array<StepProps>`

List of steps compiled from `Step`

#### `currentStepIndex: number`

*Zero-counting* index of current active step

#### `gotoStep: (step: number) => void`

Jump to the specifed `step` index. Input value will always be normalized in range `[0, steps.lenght-1]`

## License

MIT © [vanhtuan0409@gmail.com](https://github.com/vanhtuan0409@gmail.com)
