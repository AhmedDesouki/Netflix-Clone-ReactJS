import React from "react";
import instance from "./axios";
// import YouTube from "react-youtube";
// import movieTrailer from "movie-trailer";
function Row({ title, fetchUrl, isLargeRow }) {
  const [movies, setMovies] = React.useState([]);
  const [trailerUrl, setTrailerUrl] = React.useState("");
  // still struggle from useEffect !!!!!!!!!!!!!!!!
  React.useEffect(() => {
    async function fetchData() {
      const request = await instance.get(fetchUrl);
      setMovies(request.data.results);

      return request;
    }

    fetchData();
  }, [fetchUrl]); // why this second parameter ??????????????????

  console.table(movies);
  // const opts = {
  //   height: "360",
  //   width: "100%",
  //   playervars: {
  //     autoplay: 1,
  //   },
  // };
  //Bugggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggg
  // const handleClick = (movie) => {
  //   if (trailerUrl) {
  //     setTrailerUrl("");
  //   } else {
  //     movieTrailer(movie?.name || movie?.title || movie?.original_title || "")
  //       .then((url) => {
  //         const urlParams = new URLSearchParams(new URL(url).search);
  //         setTrailerUrl(urlParams.get("v"));
  //       })
  //       .catch((error) => console.log(error));
  //   }
  // };
  return (
    <div className="row">
      <h2>{title}</h2>

      <div className="row-posters">
        {movies.map((movie) => (
          <img
            key={movie.id}
            // onClick={() => handleClick(movie)}
            className={`row-poster ${isLargeRow && "row-posterLarge"}`}
            src={`${"https://image.tmdb.org/t/p/original/"}${
              isLargeRow ? movie.poster_path : movie.backdrop_path
            }`}
            alt={movie.name}
          />
        ))}
      </div>
      {/* {trailerUrl && <YouTube videoId={trailerUrl} opts={opts} />} */}
    </div>
  );
}

export default Row;
