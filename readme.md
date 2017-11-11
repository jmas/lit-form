# `lit-form`

`lit-form` is high-ordered component for `lit-html` (actually for `lit-extended`) that implement [Formik API](https://github.com/jaredpalmer/formik) for working with HTML forms.

## Example

```js
import {html, render} from 'lit-html/lib/lit-extended';
import {withForm} from 'lit-form';

const userFormView = withForm({
    mapPropsToValues: ({user}) => user,
    onSubmit: (values, {props}) => props.onSave(values),
})(
    ({
        values,
        handleSubmit,
        handleChange,
    }) => html`
        <form onsubmit="${ handleSubmit }">
            <input
                type="text"
                name="name"
                value="${ values.name }"
                onchange="${ handleChange }"
            />
            <button>${ values.id ? 'Update': 'Add' }</button>
        </form>
    `
);

render(
    html`
        ${ userFormView({
            user: {
                id: null,
                name: 'User name',
            },
            onSave: user => {
                console.log(user);
            },
        }) }
    `,
    document.body
);
```
[Live demo](https://codepen.io/alex_maslakov/pen/EbNMrL?editors=1000)

## Current progress

* Implemented collecting data from inputs and pass it to `onSubmit`

## Other related projects

* [`lit-redux`](https://github.com/jmas/lit-redux) - is `react-redux` API implementation for `lit-html` library
* [`lit-todo-example`](https://github.com/jmas/lit-todo-example) - `lit-html` + `lit-redux` + `lit-form`
