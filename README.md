# react-formik-wizard

>

[![NPM](https://img.shields.io/npm/v/react-formik-wizard.svg)](https://www.npmjs.com/package/react-formik-wizard) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save react-formik-wizard
```

## Usage

```tsx
const App = () => {
  const onSubmit = values => {
    console.log(values);
  };

  return (
    <WizardForm
      initialValues={{
        firstName: "",
        lastName: "",
        age: 18,
        address: ""
      }}
      onSubmit={onSubmit}
    >
      <WizardStep
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
      </WizardStep>
      <WizardStep
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
      </WizardStep>
    </WizardForm>
  );
};
```

## License

MIT © [vanhtuan0409@gmail.com](https://github.com/vanhtuan0409@gmail.com)
