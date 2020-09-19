import React from "react";

export default function FormSignup() {
  return (
    <div className="form-content-right">
      <form className="form">
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
            placeholder="enter your username"/>
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
            placeholder="enter your email"/>
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
            placeholder="enter your password"/>
        </div>
        <div className="form-inputs">
          <label htmlFor="password"
                 className="form-label">
            Confirm Password
          </label>
          <input
            id="password"
            type="password"
            name="password"
            className="form-input"
            placeholder="enter your Confirm password"/>
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
