import React, { useEffect } from 'react';
import { View, Text, TouchableNativeFeedback } from 'react-native';
import { Formik, Field } from 'formik';
import * as Yup from 'yup';
import { styles } from './Login.style';
import { navigate } from '../../navigation/RootNavigation';
import CustomInput from '../../components/CustomInput/CustomInput';
import SubmitButton from '../../components/SubmitButton/SubmitButton';
import { useMutation } from '@apollo/client';
import { LOGIN_USER_MUTATION } from '../../gql/mutations';
import { storeLoginUser } from '../../token/tokenStorage';

export default function Login() {
  const [loginUser, { data, loading, error }] =
    useMutation(LOGIN_USER_MUTATION);

  const login = async (values) => {
    try {
      await loginUser({
        variables: { email: values.email, password: values.password },
      });
    } catch (e) {
      console.error(e);
    }
  };

  useEffect(() => {
    if (!loading && !error && data) {
      console.log(data);
      storeLoginUser(data);
      navigate('Rooms');
    }
  }, [data]);

  useEffect(() => {
    storeLoginUser(null);
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Welcome back</Text>
      <Text style={styles.description}>
        Log in and stay in touch with everyone!
      </Text>

      <Formik
        initialValues={{ email: '', password: '' }}
        validationSchema={Yup.object().shape({
          email: Yup.string()
            .email('Must be a valid email')
            .max(255)
            .required('Email is required'),
          password: Yup.string().max(255).required('Password is required'),
        })}
        onSubmit={(values) => login(values)}
      >
        {({ handleSubmit, isValid }) => (
          <View style={styles.form}>
            {error ? <Text>Invalid credentials</Text> : null}
            <Field component={CustomInput} name="email" />
            <Field
              component={CustomInput}
              name="password"
              style={{ marginTop: 16 }}
            />
            <SubmitButton
              handleSubmit={handleSubmit}
              isValid={isValid}
              text="Log in"
            />
            <View style={styles.signUp}>
              <Text style={styles.signUpText1}>Don't have an account?</Text>
              <TouchableNativeFeedback
                onPress={() => {
                  navigate('Rooms');
                }}
              >
                <Text style={styles.signUpText2}>Sign up</Text>
              </TouchableNativeFeedback>
            </View>
          </View>
        )}
      </Formik>
    </View>
  );
}
