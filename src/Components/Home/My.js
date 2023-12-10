import classes from "./My.module.css";

import Profile from "./Profile/Profile";
import Balance from "./Balance/Balance";
import MyTeams from "../Team/MyTeams";
import Button from "../UI/Button";

const My = () => {
  return (
    <div className={classes.wrapper}>
      <section className={classes['user-related']}>
        <Profile />
        <Balance />
      </section>

      <section className={classes["team-related"]}>
        <MyTeams />
        <Button size="medium" color="black">CREATE</Button>
      </section>

      <Button>settings</Button>
    </div>
  );
};

export default My;
