import React, { useEffect } from 'react';
import { ScrollView, View, Text, TouchableNativeFeedback } from 'react-native';
import { Formik, Field } from 'formik';
import * as Yup from 'yup';
import { styles } from './Login.style';
import { navigate } from '../../navigation/RootNavigation';
import CustomInput from '../../components/CustomInput/CustomInput';
import SubmitButton from '../../components/SubmitButton/SubmitButton';
import { useMutation } from '@apollo/client';
import { LOGIN_USER_MUTATION } from '../../gql/mutations';
import { storeLoginUser } from '../../token/tokenStorage';
import BottomInfo from '../../components/BottomInfo/BottomInfo';

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
    <ScrollView
      style={{ flex: 1 }}
      scrollEnabled={true}
      contentContainerStyle={styles.container}
    >
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
              style={{ marginTop: 250 }}
            />

            <BottomInfo
              route="Register"
              question="Don't have an account?"
              linkText="Sign up"
            />
          </View>
        )}
      </Formik>
    </ScrollView>
  );
}
