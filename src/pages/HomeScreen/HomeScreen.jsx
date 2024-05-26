import Banner from "../../components/Banner/Banner";
import NavBar from "../../components/NavBar/NavBar";
import "./HomeScreen.css";
function HomeScreen() {
  return (
    <div className="HomeScreen">
      {/* nav */}
      <NavBar />

      {/* banner */}
      <Banner />

      {/* row */}
    </div>
  );
}

export default HomeScreen;
