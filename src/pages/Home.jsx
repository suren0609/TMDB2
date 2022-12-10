import React, { useMemo } from "react";
import Card from "../components/Card";
import Loading from "../components/Loading";

const Home = ({
  allMovies,
  searchedName,
  handleSearch,
  searchTheMovie,
  errorMessage,
  isLoading,
}) => {
  let searchedMovies = useMemo(searchTheMovie, [searchedName, allMovies]);

  return (
    <div className="Home">
      <div className="searchForm">
        <input
          className="searchInput"
          type="text"
          value={searchedName}
          onChange={handleSearch}
          onSubmit={() => searchTheMovie()}
          placeholder="Search"
        />
      </div>
      <div className="moviesList">
        {isLoading ? (
          <Loading />
        ) : (
          searchedMovies.map((movie) => <Card key={movie.id} movie={movie} />)
        )}
        {errorMessage && <div className="error">{errorMessage}</div>}
      </div>
    </div>
  );
};

export default Home;
