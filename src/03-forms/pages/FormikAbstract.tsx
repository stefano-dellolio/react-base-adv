import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import '../styles/styles.css';

import { MyTextInput, MySelect, MyCheckbox }from '../components';

export const FormikAbstract = () => {

    return (
        <div>
            <h1>Formik Abstract</h1>
            <Formik
                initialValues={{
                    firstName: '',
                    lastName: '',
                    email: '',
                    terms: false,
                    jobType: '',
                }}
                onSubmit={ values => {
                    console.log(values);
                }}
                validationSchema={
                    Yup.object({
                        firstName: Yup.string()
                            .max(15, 'Must be 15 characters or less')
                            .required('Required'),
                        lastName: Yup.string()
                            .max(10, 'Must be 10 characters or less')
                            .required('Required'),
                        email: Yup.string()
                            .email('Invalid email address')
                            .required('Required'),
                        terms: Yup.boolean()
                            .required('Required')
                            .oneOf([true], 'You must accept the terms and conditions.'),
                        jobType: Yup.string()
                            .required('Required')
                            .notOneOf(['it-junior'], 'Invalid Job Type'),
                    })
                }>
                    {
                        ( formik ) => (
                            <Form>
                                <MyTextInput
                                    label="First Name"
                                    name="firstName"
                                    placeholder="First Name"
                                />

                                <MyTextInput
                                    label="Last Name"
                                    name="lastName"
                                    placeholder="Last Name"
                                />

                                <MyTextInput
                                    label="Email"
                                    name="email"
                                    placeholder="Email"
                                    type="email"
                                />

                                <MySelect label="Job Type" name="jobType">
                                    <option value="">Pick something</option>
                                    <option value="developer">Developer</option>
                                    <option value="designer">Designer</option>
                                    <option value="it-senior">IT Senior</option>
                                    <option value="it-junior">IT Junior</option>
                                </MySelect>

                                <MyCheckbox label="Terms & Conditions" name="terms" />

                                <button type="submit">Submit</button>
                            </Form>
                        )
                    }
            </Formik>
        </div>
    )
}
