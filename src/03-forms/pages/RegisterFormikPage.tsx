import '../styles/styles.css';
import { Form, Formik } from 'formik';
import * as Yup from 'yup';
import { MyTextInput } from '../components';

export const RegisterFormikPage = () => {

    return (
        <div>
            <h1>Register Formik Page</h1>
            <Formik
                initialValues={{
                    name: '',
                    email: '',
                    password1: '',
                    password2: '',
                }}
                onSubmit={ values => {
                    console.log(values);
                }}
                validationSchema={
                    Yup.object({
                        name: Yup.string()
                            .min(2, 'The name should be 3 characters or more')
                            .max(15, 'Must be 15 characters or less')
                            .required('Required'),
                        email: Yup.string()
                            .email('Invalid email address')
                            .required('Required'),
                        password1: Yup.string()
                            .required('Required')
                            .min(6, 'Must be 6 characters or more'),
                        password2: Yup.string()
                            .required('Required')
                            .oneOf([Yup.ref('password1')], 'Passwords must match'),
                    })
                }>
                    {
                        ( { handleReset } ) => (
                            <Form>
                                <MyTextInput
                                    label="Name"
                                    name="name"
                                    placeholder="Name"
                                />

                                <MyTextInput
                                    label="Email"
                                    name="email"
                                    placeholder="Email"
                                    type="email"
                                />

                                <MyTextInput
                                    label="Password"
                                    name="password1"
                                    placeholder="******"
                                    type="password"
                                />

                                <MyTextInput
                                    label="Confirm Password"
                                    name="password2"
                                    placeholder="******"
                                    type="password"
                                />

                                <button type="submit">Create</button>
                                <button
                                    type="button"
                                    onClick={ handleReset }
                                >
                                    Reset Form
                                </button>
                            </Form>
                        )
                    }
                </Formik>
        </div>
    )
}
