import React, {useState} from "react";

const useForm = () => {
  const [values, setValues] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: ""
  });

  const [errors, setErrors] = useState({});

  const handleChange = e => {
    const {name, value} = e.target;
    setValues({
      ...values,
      [name]: value
    })
  }
  return {handleChange, values}
};
export default useForm;
