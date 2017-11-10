import {directive} from 'lit-html';

export const withForm = (options={}) => {
    const {
        mapPropsToValues,
        onSubmit,
    } = options;
    return component => props => directive(part => {
        const values = {...(mapPropsToValues ? mapPropsToValues(props): props)};
        const update = values => component({
            ...props,
            values,
            handleSubmit(event) {
                event.preventDefault();
                onSubmit(values, {
                    props,
                });
            },
            handleChange({target}) {
                part.setValue(update({
                    ...values,
                    [target.name]: target.value,
                }));
            },
            setFieldValue(field, value) {
                part.setValue(update({
                    ...values,
                    [field]: value,
                }));
            },
            setValues(fields) {
                part.setValue(update(fields));
            },
        });
        return update(values);
    });
};
