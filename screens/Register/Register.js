import React, { useEffect } from 'react';
import { ScrollView, View, Text, ActivityIndicator } from 'react-native';
import { Formik, Field } from 'formik';
import * as Yup from 'yup';
import { useMutation } from '@apollo/client';
import styles from './Register.style';
import CustomInput from '../../components/CustomInput/CustomInput';
import SubmitButton from '../../components/SubmitButton/SubmitButton';
import BottomInfo from '../../components/BottomInfo/BottomInfo';
import TermsAndPrivacyInfo from '../../components/TermsAndPrivacyInfo/TermsAndPrivacyInfo';
import { REGISTER_USER_MUTATION } from '../../gql/mutations';
import { navigate } from '../../navigation/RootNavigation';

export default function Login() {
  const [registerUser, { data, loading, error }] = useMutation(
    REGISTER_USER_MUTATION,
  );

  const register = async (values) => {
    try {
      await registerUser({
        variables: {
          email: values.email,
          firstName: values.firstName,
          lastName: values.lastName,
          password: values.password,
          passwordConfirmation: values.passwordConfirmation,
        },
      });
    } catch (e) {
      console.error(e);
    }
  };

  useEffect(() => {
    if (!loading && !error && data) {
      navigate('Login');
    }
  }, [data]);

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
        onSubmit={(values, { resetForm }) => {
          register(values);
          resetForm({ values: '' });
        }}
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
      {loading ? (
        <View
          style={{
            position: 'absolute',
            top: 500,
            left: '50%',
          }}
        >
          <ActivityIndicator color="#5603AD" />
        </View>
      ) : null}
    </ScrollView>
  );
}
