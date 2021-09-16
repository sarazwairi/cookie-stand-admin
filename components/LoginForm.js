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
                <form onSubmit={submitHandler} className="p-8 flex flex-col mt-24 ml-48 border-4 bg-green-200 text-center w-3/4 uppercase rounded-xl font-bold text-xl">
            <div className="flex-1">
                <label htmlFor="username">User Name</label>
                <input type="text" name="username" id="username" value={values.username} onChange={inputChangeHandler} placeholder="User Name" className="placeholder-gray-400 w-full p-3 mt-4 mb-4"/>
            </div>

            <div className="flex-1">
                <label htmlFor="password">Password</label>
                <input type="password" name="password" id="password" value={values.password} onChange={inputChangeHandler} placeholder="password" className="placeholder-gray-400 w-full p-3 mt-4 mb-4"/>
            </div>

            <button type="submit" className="bg-green-500 w-full uppercase p-3 mt-12 rounded-md h-16">Sign In</button>
        </form>
    

        </div>
    )
}
export default LoginForm;