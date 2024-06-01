import { useSelector } from "react-redux";
import NavBar from "../../components/NavBar/NavBar";
import "./Profile.css";
import { selectUser } from "../../features/userSlice";
import { auth } from "../../../firebase";
import { useNavigate } from "react-router-dom";
// @ts-ignore
import PlansScreen from "../../components/PlansScreen/PlansScreen";
function Profile() {
  const user = useSelector(selectUser);
  console.log(user);
  const navigate = useNavigate();
  const logOut = () => {
    auth.signOut();
    navigate("/");
  };
  const planInformation = [
    { title: "premimum", discription: "4k + HDR" },
    { title: "Basic", discription: "720p" },
    { title: "standard", discription: "1080p" },
  ];
  return (
    <div className="profile">
      <NavBar />
      <div className="profile_body">
        <h1>Edit Profile</h1>
        <div className="profile_info">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
            alt=""
          />
          <div className="profile_details">
            <h2>{user?.email}</h2>
            <div className="profile_plans">
              <h3>plans</h3>
              {planInformation.map((info) => {
                return (
                  <PlansScreen
                    title={info.title}
                    discription={info.discription}
                  />
                );
              })}
              <button className="profile_signOut" onClick={logOut}>
                Sign Out
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
