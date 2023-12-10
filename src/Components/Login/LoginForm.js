import classes from "./LoginForm.module.css";

import Input from "../UI/Input";
import Button from "../UI/Button";
import { useContext, useEffect, useState } from "react";
import LogOnContext from "../../Context/logon-context";

const isEmailValid = (value) => {
  return value.includes("@");
};
const isPasswordValid = (value) => {
  return value.trim().length > 6;
};

const LoginForm = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [buttonState, setButtonState] = useState(true);
  const ctx = useContext(LogOnContext);
  const loginHandler = (e) => {
    e.preventDefault();
    console.log(ctx.isLoggedIn);
    ctx.onLogIn(email, password);
    setEmail("");
    setPassword("");
    
  };

  useEffect(() => {
    const inforTimeOut = setTimeout(() => {
      if (isEmailValid(email) && isPasswordValid(password)) {
        setButtonState(false);
      } else {
        setButtonState(true);
      }
    }, 500);

    return () => {
      clearTimeout(inforTimeOut);
    };
  }, [email, password]);

  const changeHandler = (value, type) => {
    if (type === "email") {
      setEmail(value);
    } else {
      setPassword(value);
    }
  };

  return (
    <form onSubmit={loginHandler} className={classes["login-form"]}>
      <Input
        type="email"
        placeholder="email"
        style={{ marginBottom: "50px" }}
        onChange={(e) => changeHandler(e.target.value, "email")}
        value={email}
      />
      <Input
        type="password"
        placeholder="password"
        style={{ marginBottom: "70px" }}
        onChange={(e) => changeHandler(e.target.value, "password")}
        value={password}
      />

      <Button type="submit" size="big" color="black" disabled={buttonState}>
        Login
      </Button>
    </form>
  );
};

export default LoginForm;
