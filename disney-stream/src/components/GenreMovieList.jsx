import React from "react";
import GenresList from "../constant/GenresList.jsx";
import MovieList from "../components/MovieList.jsx";
const GenreMovieList = () => {
  return (
    <div className="mb-25">
      {GenresList.genere.map(
        (item, index) =>
          index <= 6 && (
            <div className="p-2 md:p-8 px-8 md:px-16">
              <h2
                className="text-[20px] text-white 
            font-bold"
              >
                {item.name}
              </h2>
              <MovieList genreId={item.id} index_={index} />
            </div>
          )
      )}
    </div>
  );
};

export default GenreMovieList;
