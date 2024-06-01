import Row from "../../components/Row/Row";
import Banner from "../../components/Banner/Banner";
import NavBar from "../../components/NavBar/NavBar";
import "./HomeScreen.css";
import { pageInfo } from "../../Data/moviesData";


function HomeScreen() {
  return (
    <div className="HomeScreen">
      {/* nav */}
      <NavBar />

      {/* banner */}
      <Banner />

      {/* row */}
      <div className="row_container">
        {pageInfo.map((info) => {
          return (
            <Row
              key={info.title}
              title={info.title}
              fetchUrl={info.fetchUrl}
              isLargeRow={info.isLargeRow}
            />
          );
        })}
      </div>
    </div>
  );
}

export default HomeScreen;
