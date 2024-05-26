import "./Banner.css";

function Banner() {
  const truncate = (string, n) => {
    return string?.length > n ? string.substr(0, n - 1) + " ..." : string;
  };
  return (
    <header
      className="banner"
      style={{
        backgroundImage: `url('https://wallpapers.com/images/hd/netflix-background-ay2odaz7o4zltn0q.jpg')`,
        backgroundSize: "cover",
        backgroundPosition: "center center",
      }}
    >
      <div className="banner_content">
        <h1 className="banner_title">Movie name</h1>
        <div className="banner_buttons">
          <button className="banner_btn">play</button>
          <button className="banner_btn">my list</button>
        </div>
        <h1 className="banner_description">
          {truncate(
            ` this is the descriptionthis is the description this is the description
          this is the description this is the description this is the
          description this is the description this is the description this is
          the description this is the description this is the description this
          is the description this is the description this is the description
          this is the description this is the description this is the
          description this is the description this is the description this is
          the description this is the description this is the description this
          is the description this is the description this is the description
          this is the description this is the description this is the
          description`,
            100
          )}
        </h1>
      </div>

      <div className="banner--fadeBottom" />
    </header>
  );
}

export default Banner;
