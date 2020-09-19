import React from "react";
import useForm from "../../hooks/useForm/useForm";

export default function FormSignup() {
  const {handleChange, values, handleSubmit} = useForm();

  return (
    <div className="form-content-right">
      <form className="form" onSubmit={handleSubmit}>
        <h1>Get Started with us today !
          Create your account by filling information below</h1>
        <div className="form-inputs">
          <label htmlFor="username"
                 className="form-label">
            Username
          </label>
          <input
            id="username"
            type="text"
            name="username"
            className="form-input"
            placeholder="enter your username"
            value={values.username}
            onChange={handleChange}/>
        </div>
        <div className="form-inputs">
          <label htmlFor="email"
                 className="form-label">
            Email
          </label>
          <input
            id="email"
            type="email"
            name="email"
            className="form-input"
            placeholder="enter your email"
            value={values.email}
            onChange={handleChange}/>
        </div>
        <div className="form-inputs">
          <label htmlFor="password"
                 className="form-label">
            Password
          </label>
          <input
            id="password"
            type="password"
            name="password"
            className="form-input"
            placeholder="enter your password"
            value={values.password}
            onChange={handleChange}/>
        </div>
        <div className="form-inputs">
          <label htmlFor="password"
                 className="form-label">
            Confirm Password
          </label>
          <input
            id="password"
            type="password"
            name="confirmPassword"
            className="form-input"
            placeholder="enter your Confirm password"
            value={values.confirmPassword}
            onChange={handleChange}/>
        </div>
        <button className="form-input-btn"
                type={"submit"}>Sign Up
        </button>
        <span className="form-input-login">
          Already have account ? <a href={"#"}>here</a>
        </span>
      </form>
    </div>
  )
}
