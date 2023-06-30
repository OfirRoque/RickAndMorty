import { useState } from "react"
import { Link, useLocation } from "react-router-dom"
import validation from "./Validation";

export default function Login (props) {

    const [ userData, setUserData ] = useState({
        email: "",
        password: ""
    });
    const [ errors, setErrors ] = useState({});
    const handleChange = (e) => {
        setUserData({
            ...userData, [e.target.name]: e.target.value
        })
        console.log(userData);
        setErrors(validation({
            ...userData, [e.target.name]: e.target.value
    }))
    }

    const { login } = props;

    const handleSubmit = (event) => {
        event.preventDefault();
        login(userData)
    }

    return (
        <>
        <div>
            <form action="">
            <label htmlFor="email">Email<input onChange={handleChange} value={userData.email} name="email" type="text" /></label>
                <p>{errors.email}</p>
            <label htmlFor="pass">Password<input onChange={handleChange} value={userData.password} name="password" type="password" /></label>
                <p>{errors.password}</p>
            <button onClick={handleSubmit}>ingresar</button>
            </form>
        </div>
        </>
    )
}