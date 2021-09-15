import { useState } from "react";

function LoginForm(props){
    const initialValues = {
        username: '',
        password: '',
    }

    const [values, setValues] = useState(initialValues);

    function submitHandler(event) {
        event.preventDefault();
        props.onSubmit(values);
        setValues(initialValues)
    }

    function inputChangeHandler(event) {
        let {name, value} = event.target;
        setValues({...values, [name]: value});
    }
    return(
        <div>
            <form onSubmit={submitHandler}>
                <label>username</label>
                <input name="username" onChange={inputChangeHandler}></input>

                <label>password</label>
                <input name="password" onChange={inputChangeHandler}></input>

                <button>login</button>
            </form>
        </div>
    )
}
export default LoginForm;