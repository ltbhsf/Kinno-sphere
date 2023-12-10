import classes from "./Profile.module.css";
import profileImage from "../../../assets/dumy/dummy-profile.png";
const Profile = () => {
  return (
    <div className={classes.wrapper}>
      <img className={classes["profile-image"]} src={profileImage}></img>
      <h1 className={classes.user}>user name</h1>
    </div>
  );
};

export default Profile;
