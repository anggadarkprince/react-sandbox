import React from "react";
import { Form, Field } from "react-final-form";

const renderError = ({error, touched}) => {
    if (touched && error) {
        return (
            <div className="ui error message">
                <div className="header">{error}</div>
            </div>
        )
    }
}

const renderInput = ({input, label, placeholder, meta}) => {
    const fieldClass = `field${(meta.touched && meta.error) ? ' error' : ''}`;
    return (
        <div className={fieldClass}>
            <label htmlFor={input.id || input.name}>{label}</label>
            {
                input.type === 'textarea'
                    ? <textarea {...input} id={input.id || input.name} placeholder={placeholder} rows={3}/>
                    : <input type={input.type} {...input} placeholder={placeholder}/>
            }
            {renderError(meta)}
        </div>
    )
}

let StreamForm = (props) => {

    const onSubmit = async (formValues) => {
        await props.onSubmit(formValues);
    }

    const validate = (formValues) => {
        const errors = {};
        if (!formValues.title) {
            errors.title = 'You must enter a title';
        }
        if (!formValues.description) {
            errors.description = 'You must enter a description';
        }
        return errors;
    }

    const renderForm = ({ handleSubmit }) => {
        return (
            <form onSubmit={handleSubmit} className="ui form error">
                <Field name="title" component={renderInput} type="text" label="Stream Title" placeholder="Input title"/>
                <Field name="description" component={renderInput} type="textarea" label="Stream Description"
                       placeholder="Stream description"/>
                <button className="ui button primary">{props.submitTitle || 'Submit'}</button>
            </form>
        )
    }

    return (
        <Form
            initialValues={props.initialValues}
            onSubmit={onSubmit}
            validate={validate}
            render={renderForm}/>
    )
}

export default StreamForm;