import React, { useState, useEffect, useReducer } from 'react';
import classes from './Login.module.css';

const Login = () => {
  return (
    <div className={`${classes.login} ${classes.card}`}>
      <form>
        <div
          className={classes.control}
        >
          <label htmlFor="email">E-Mail</label>
          <input
            type="email"
            id="email"
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