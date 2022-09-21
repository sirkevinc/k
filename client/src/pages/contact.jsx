import { Layout } from "../components/layout"
import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik"
import { formContainer, formContent, formInput, formTextArea, error, submit } from "./contact.module.css"

export default function Contact() {
    const encode = (data) => {
        return Object.keys(data)
          .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
          .join("&");
    }

    return (
        <Layout>
            <h1>Contact Us</h1>
            <div className={formContainer}>
                <Formik
                    initialValues={{
                        name: '',
                        email: '',
                        message: '',
                    }}
                    onSubmit={(values, actions) => {
                        fetch("/", {
                            method: "POST",
                            headers: { "Content-Type": "application/x-www-form-urlencoded" },
                            body: encode({ "form-name": "contact", ...values }),
                        })
                        .then(() => {
                            alert("Success");
                            actions.resetForm();
                        })
                        .catch(() => {
                            alert("Error");
                        })
                        .finally(() => actions.setSubmitting(false));
                    }}
                    validate={values => {
                        const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
                        const errors = {};
                        if (!values.name) {
                            errors.name = "Name Required"
                        }
                        if (!values.email || !emailRegex.test(values.email)) {
                            errors.email = "Valid Email Required"
                        }
                        if (!values.message) {
                            errors.message = "Message Required"
                        }
                        return errors;
                    }}
                >
                {() => (
                    <Form className={formContent} name="contact" data-netlify={true}>
                        <label htmlFor="name"></label>
                        <Field className={formInput} name="name" placeholder="Name" />
                        <ErrorMessage className={error} name="name" />

                        <label htmlFor="email"></label>
                        <Field className={formInput} name="email" placeholder="Email" />
                        <ErrorMessage className={error} name="email" />

                        <label htmlFor="message"></label>
                        <Field className={formTextArea} name="message" component="textarea" placeholder="Type your comments here"/>
                        <ErrorMessage className={error} name="message" />
                        <button className={submit} type="submit">Submit</button>
                    </Form>
                )}
                </Formik>
            </div>
        </Layout>
        )
}