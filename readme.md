# `lit-form`

`lit-form` is high-ordered component for `lit-html` (actually for `lit-extended`) that implement [Formik API](https://github.com/jaredpalmer/formik) for working with HTML forms.

## Example

```js
import {html, render} from 'lit-html/lib/lit-extended';
import {withForm} from 'lit-form';

const newUserFormHtml = withForm({
    mapPropsToValues: ({user}) => user,
    onSubmit: (values, { props }) => props.onAdd(values),
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
            <button>Add</button>
        </form>
    `
);

render(
    html`
        ${ newUserFormHtml({
            user: {
                name: 'New user name',
            },
            onAdd: newUser => {
                console.log(newUser);
            },
        }) }
    `,
    document.body
);
```

## Current progress

* Implemented collecting data from inputs and pass it to `onSubmit`
