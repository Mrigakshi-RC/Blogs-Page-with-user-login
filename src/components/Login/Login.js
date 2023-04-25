import React, { useState, useEffect, useReducer } from "react";
import classes from "./Login.module.css";

const emailReducer = (state, action) => {
  if (action.type === "USER_INPUT") {
    return {
      value: action.val,
      isValid: action.val.includes("@") && action.val.includes("."),
    };
  }
  return { value: "", isValid: false };
};

const pwdReducer = (state, action) => {
  if (action.type === "USER_INPUT") {
    return { value: action.val, isValid: action.val.trim().length > 6 };
  }
  return { value: "", isValid: false };
};

const Login = (props) => {

  const [formIsValid, setFormIsValid] = useState(false);

  const [emailState, dispatchEmail] = useReducer(emailReducer, {
    value: "",
    isValid: undefined,
  });

  const [pwdState, dispatchPwd] = useReducer(pwdReducer, {
    value: "",
    isValid: undefined,
  });

  const { isValid: emailIsValid } = emailState;
  const { isValid: pwdIsValid } = pwdState;

  useEffect(() => {
    const identifier = setTimeout(() => {
      setFormIsValid(emailIsValid && pwdIsValid);
    }, 500);

    return () => {
      clearTimeout(identifier);
    };
  }, [emailIsValid, pwdIsValid]);

  const emailChangeHandler = (event) => {
    dispatchEmail({ type: "USER_INPUT", val: event.target.value });
  };

  const passwordChangeHandler = (event) => {
    dispatchPwd({ type: "USER_INPUT", val: event.target.value });
  };

  const submitHandler = (event) => {
    event.preventDefault();
    fetch("https://api-staging-v2.sploot.space/api/v2/auth/signin", {
      method: "POST",
      body: JSON.stringify({
        username: emailState.value,
        password: pwdState.value,
      }),
      headers: { "Content-Type": "application/json" },
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        const authToken = data.data.data.authToken;
        // userCtx.authToken = authToken;
        let response = fetch(
          "https://api-staging-v2.sploot.space/api/v2/user",
          {
            method: "GET",
            headers: { Authorization: `Bearer ${authToken}` },
          }
        );
        return authToken;
      })
      .then((token) => {
        let response = fetch(
          "https://api-staging-v2.sploot.space/api/v2/cms/post-categories",
          {
            method: "GET",
            headers: { Authorization: `Bearer ${token}` },
          }
        );
        return response;
      })
      .then((response) => {
        return response.json();
      })
      .then((data)=>console.log(data.data.data)); //this is the category data

      //like the line below, pass the auth token to the App cmp
      props.onLogin(emailState.value, pwdState.value);
  };

  return (
    <div className={`${classes.login} ${classes.card}`}>
      <form onSubmit={submitHandler}>
        <div
          className={`${classes.control} ${
            emailState.isValid === false ? classes.invalid : ""
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
        {emailState.isValid === false && (
          <p className={classes.error}>Please enter a valid email</p>
        )}
        <div
          className={`${classes.control} ${
            pwdState.isValid === false ? classes.invalid : ""
          }`}
        >
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={pwdState.value}
            onChange={passwordChangeHandler}
          />
        </div>
        {pwdState.isValid === false && (
          <p className={classes.error}>Please enter a valid password</p>
        )}
        <div className={classes.actions}>
          <button
            type="submit"
            className={classes.button}
            disabled={!formIsValid}
          >
            Login
          </button>
        </div>
      </form>
    </div>
  );
};

export default Login;
