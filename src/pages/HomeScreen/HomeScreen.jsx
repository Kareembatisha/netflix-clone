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
      <Row
        title="Netflix_Originals"
        fetchUrl={requests.fetchNetflixOriginals}
        isLargeRow
      />
      <Row
        title="ActionMovies"
        fetchUrl={requests.fetchActionMovies}
        isLargeRow
      />
      <Row
        title="ComedyMovies"
        fetchUrl={requests.fetchComedyMovies}
        isLargeRow
      />
      <Row
        title="Documentaries"
        fetchUrl={requests.fetchDocumentaries}
        isLargeRow
      />
      <Row
        title="HorrorMovies"
        fetchUrl={requests.fetchHorrorMovies}
        isLargeRow
      />
      <Row
        title="RomancyMovies"
        fetchUrl={requests.fetchRomancyMovies}
        isLargeRow
      />
      <Row title="TopRated" fetchUrl={requests.fetchTopRated} isLargeRow />
      <Row title="Trending" fetchUrl={requests.fetchTrending} isLargeRow />
    </div>
  );
}

export default HomeScreen;
