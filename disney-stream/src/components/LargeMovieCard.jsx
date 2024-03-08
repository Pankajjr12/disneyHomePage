import React from "react";
const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/original";
const LargeMovieCard = ({ movie }) => {
  return (
    <div className="items-center justify-center ">
      <div className="group relative cursor-pointer items-center shadow-md 
        shadow-gray-700 border-zinc-400 justify-center overflow-hidden transition-shadow hover:shadow-xl rounded-xl hover:shadow-black/30 hover:rounded-xl">
        <div
          className="w-[120px] md:w-[260px] rounded-xl"
        >
          <img
            src={IMAGE_BASE_URL + movie.backdrop_path}
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
        <div className="absolute inset-0 flex flex-col translate-y-[60%] space-y-1 items-center justify-center text-center transition-all duration-500 group-hover:translate-y-0 ">
          <p className="text-[10px] md:text-sm font-semibold opacity-0 text-cyan-700">Release Date</p>
          <p className="text-[10px] md:text-sm line-clamp-3 underline-offset-1  italic  text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
            {movie?.release_date}
          </p>

          <h1 className="text-[10px] md:text-sm font-bold flex-wrap opacity-0 text-white group-hover:opacity-100">
            {movie?.title}
          </h1>
        </div>
      </div>
    </div>
  );
};

export default LargeMovieCard;
