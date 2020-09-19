import React, {useState} from "react";
import FormSignup from "../formSignup/FormSignup";
import FormSuccess from "../formSuccess/FormSuccess";
import "../form/Form.css";

export default function Form() {

  const [isSubmited, setIsSubmitted] = useState(false);

  function submitForm() {
    setIsSubmitted(true);
  }

  return (
    <>
      <div className="form-container">
        <span className="close-btn">X</span>
        <div className="form-content-left">
          <img
            src={"https://firebasestorage.googleapis.com/v0/b/isstracker-190613.appspot.com/o/validationImages%2Fimg-2.svg?alt=media&token=c643c251-8f68-4c19-b903-337658a1bd4c"}
            alt={"Rocket"}
            className="form-img"/>
        </div>
        {!isSubmited ? (<FormSignup submitForm={submitForm}/>) : <FormSuccess/>}
      </div>
    </>
  )
}
