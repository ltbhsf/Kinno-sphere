import classes from "./Teams.module.css";
import Button from "../UI/Button";
import Team from "./Team";
import Search from "../Home/Search/Search";

const Teams = () => {
  return (
    <>
      <h1>new & hot</h1>
      <ul>
        {/* <li></li> */}
        <Team />
        <Button size="right" />
        <Button size="left" />
      </ul>

      <Search />
    </>
  );
};

export default Teams;
