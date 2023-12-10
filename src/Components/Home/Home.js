import { Fragment } from "react";
import classes from "./Home.module.css";

import My from "./My";
import Teams from "../Team/Teams";

const Home = () => {
  return (
    <Fragment>
      <section className={classes.my}>
        <My />
      </section>
      <section className={classes.teams}>
        <Teams />
      </section>
    </Fragment>
  );
};

export default Home;
