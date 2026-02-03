import "./account.css";
import profileImg from "../../assets/images/profile.svg";

const Account = () => {
  const user = JSON.parse(localStorage.getItem("user"));

  return (
    <div className="screen-wrapper">
      <div className="mobile-card">
        <h3>Account Settings</h3>

        <div className="profile">
          <img src={profileImg} alt="Profile" className="avatar-img" />
          

          <div>
            <h4>{user.name}</h4>
            <p>{user.email}</p>
          </div>
        </div>

        <p className="bio">
          Passionate frontend developer with hands-on experience in React,
          focused on clean UI, usability, and scalable code structure.
        </p>
      </div>
    </div>
  );
};

export default Account;
