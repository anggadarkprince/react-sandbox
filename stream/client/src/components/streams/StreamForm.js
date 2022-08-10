import React from "react";
import {Field, reduxForm} from "redux-form";

const renderError = ({error, touched}) => {
    if (touched && error) {
        return (
            <div className="ui error message">
                <div className="header">{error}</div>
            </div>
        )
    }
}

const renderInput = ({input, type, label, placeholder, meta}) => {
    const fieldClass = `field${(meta.touched && meta.error) ? ' error' : ''}`;
    return (
        <div className={fieldClass}>
            <label htmlFor={input.id || input.name}>{label}</label>
            {
                type === 'textarea'
                    ? <textarea {...input} id={input.id || input.name} placeholder={placeholder} rows={3}/>
                    : <input type={type} {...input} placeholder={placeholder}/>
            }
            {renderError(meta)}
        </div>
    )
}

let StreamForm = (props) => {

    const onSubmit = async (formValues) => {
        await props.onSubmit(formValues);
    }

    return (
        <form onSubmit={props.handleSubmit(onSubmit)} className="ui form error">
            <Field name="title" component={renderInput} type="text" label="Stream Title" placeholder="Input title"/>
            <Field name="description" component={renderInput} type="textarea" label="Stream Description"
                   placeholder="Stream description"/>
            <button className="ui button primary">{props.submitTitle || 'Submit'}</button>
        </form>
    )
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

StreamForm = reduxForm({
    form: 'streamForm',
    validate: validate,
    enableReinitialize: true,
    destroyOnUnmount: false,
})(StreamForm);

export default StreamForm;