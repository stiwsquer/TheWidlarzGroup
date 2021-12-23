import React from 'react';
import { ScrollView, View, Text } from 'react-native';
import { Formik, Field } from 'formik';
import * as Yup from 'yup';
import { styles } from './Register.style';
import CustomInput from '../../components/CustomInput/CustomInput';
import SubmitButton from '../../components/SubmitButton/SubmitButton';
import BottomInfo from '../../components/BottomInfo/BottomInfo';
import TermsAndPrivacyInfo from '../../components/TermsAndPrivacyInfo/TermsAndPrivacyInfo';

export default function Login() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.heading}>Create account</Text>

      <Formik
        initialValues={{ email: '', password: '' }}
        validationSchema={Yup.object().shape({
          email: Yup.string()
            .email('Must be a valid email')
            .max(255)
            .required('Email is required'),
          firstName: Yup.string().max(255).required('First name is required'),
          lastName: Yup.string().max(255).required('Last name is required'),
          password: Yup.string().max(255).required('Password is required'),
          passwordConfirmation: Yup.string()
            .max(255)
            .oneOf([Yup.ref('password'), null], 'Passwords must match'),
        })}
        onSubmit={(values) => login(values)}
      >
        {({ handleSubmit, isValid }) => (
          <View style={styles.form}>
            <Field component={CustomInput} name="email" />
            <Field
              component={CustomInput}
              name="firstName"
              style={styles.field}
            />
            <Field
              component={CustomInput}
              name="lastName"
              style={styles.field}
            />
            <Field
              component={CustomInput}
              name="password"
              style={styles.field}
            />
            <Field
              component={CustomInput}
              name="passwordConfirmation"
              style={styles.field}
            />
            <SubmitButton
              handleSubmit={handleSubmit}
              isValid={isValid}
              text="Sign up"
            />
            <TermsAndPrivacyInfo />
            <BottomInfo
              route="Login"
              question="Already have an account?"
              linkText="Log in"
            />
          </View>
        )}
      </Formik>
    </ScrollView>
  );
}
