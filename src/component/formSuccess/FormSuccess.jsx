import React from 'react';
import '../form/Form.css';

const FormSuccess = () => {
  return (
    <div className='form-content-right'>
      <h1 className='form-success'>We have received your request!</h1>
      <img className='form-img-2'
           src='https://firebasestorage.googleapis.com/v0/b/isstracker-190613.appspot.com/o/validationImages%2Fimg-1.svg?alt=media&token=588120e4-ea40-4efd-8d20-da7dc9f79676'
           alt='success-image'/>
    </div>
  );
};

export default FormSuccess;
