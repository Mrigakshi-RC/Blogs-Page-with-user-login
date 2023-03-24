import React, { useState, useEffect, useReducer } from 'react';
import classes from './Login.module.css';

const emailReducer = (state,action) => {
  if (action.type === "USER_INPUT"){
    return {value: action.val, isValid:action.val.includes('@') && action.val.includes('.')}
  }
  return { value:"", isValid: false};
};

const Login = () => {
  const [emailState, dispatchEmail] = useReducer(emailReducer, {
    value:"",
    isValid: undefined,
  });


  const emailChangeHandler = (event) => {
    dispatchEmail({type: "USER_INPUT", val: event.target.value});
  }
  
  return (
    <div className={`${classes.login} ${classes.card}`}>
      <form>
        <div
          className={`${classes.control} ${
            emailState.isValid === false ? classes.invalid : ''
          }`}
        >
          <label htmlFor="email">E-Mail</label>
          <input
            type="email"
            id="email"
            value={emailState.value}
            onChange={emailChangeHandler}
          />
        </div>
        <div
          className={classes.control}
        >
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
          />
        </div>
        <div className={classes.actions}>
          <button type="submit" className={classes.button}>
            Login
          </button>
        </div>
      </form>
    </div>
  );
};

export default Login;