import classes from "./Team.module.css";
import Card from "../UI/Card";
import Thumbnail from "../../assets/dumy/dummy-profile.png";
import Button from "../UI/Button";

const Team = () => {
  return (
    <Card>
      <img className={classes.thumbnail} src={Thumbnail} />
      <h1>userName</h1>
      <p>Team_description : Pellentesque habitant morbi </p>

      <span>N projects</span>
      <span>N associates</span>

      <Button size="big" color="black">Join</Button>
    </Card>
  );
};
export default Team;
