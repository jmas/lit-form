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
        });
        return update(values);
    });
};
