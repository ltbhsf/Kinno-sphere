import classes from "./Login.module.css";
import logo from "../../assets/Logo/Logo.png";
import Button from "../UI/Button";
import LoginForm from "./LoginForm";

const Login = () => {
  return (
    <section className={classes.wrapper}>
      <img src={logo} alt="logo"></img>

      <LoginForm />

      <div className={classes['no-account']}>
        <Button>Forgot password?</Button>
        /
        <Button>not a member?</Button>
      </div>
    </section>
  );
};

export default Login;
