import Row from "../../components/Row/Row";
import Banner from "../../components/Banner/Banner";
import NavBar from "../../components/NavBar/NavBar";
import "./HomeScreen.css";
import requests from "../../api/Requests";
function HomeScreen() {
  return (
    <div className="HomeScreen">
      {/* nav */}
      <NavBar />

      {/* banner */}
      <Banner />

      {/* row */}
      <div className="row_container">
        <Row
          title="Netflix Originals"
          fetchUrl={requests.fetchNetflixOriginals}
          isLargeRow={true}
        />
        <Row
          title="ActionMovies"
          fetchUrl={requests.fetchActionMovies}
          isLargeRow={false}
        />
        <Row
          title="ComedyMovies"
          fetchUrl={requests.fetchComedyMovies}
          isLargeRow={false}
        />
        <Row
          title="Documentaries"
          fetchUrl={requests.fetchDocumentaries}
          isLargeRow={false}
        />
        <Row
          title="HorrorMovies"
          fetchUrl={requests.fetchHorrorMovies}
          isLargeRow={false}
        />
        <Row
          title="RomancyMovies"
          fetchUrl={requests.fetchRomancyMovies}
          isLargeRow={false}
        />
        <Row
          title="TopRated"
          fetchUrl={requests.fetchTopRated}
          isLargeRow={false}
        />
        <Row
          title="Trending"
          fetchUrl={requests.fetchTrending}
          isLargeRow={false}
        />
      </div>
    </div>
  );
}

export default HomeScreen;
