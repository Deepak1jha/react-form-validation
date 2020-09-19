import React from "react";
import useForm from "../../hooks/useForm/useForm";
import Validate from "../../validation/ValidateInfo";
import "../form/Form.css";

export default function FormSignup({submitForm}) {
  const {handleChange, values, handleSubmit, errors} = useForm(submitForm, Validate);

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
          {errors.username && <p>{errors.username}</p>}
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
          {errors.email && <p> {errors.email} </p>}
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
          {errors.password && <p> {errors.password}</p>}
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
          {errors.confirmPassword && <p>{errors.confirmPassword}</p>}
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
