import React from "react";
const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/original";

const MovieCard = ({ movie }) => {
  return (
    <div className="items-center justify-center rounded-2xl">
     <div className="group relative cursor-pointer shadow-md 
        shadow-gray-700 items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30 hover:rounded-2xl">
      <div className="w-[120px] md:w-[200px]">
       
          <img
            src={IMAGE_BASE_URL + movie.poster_path}
            className="rounded-2xl"
          />
        </div>
        <div className="absolute rounded-md inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
        <div className="absolute inset-0 flex flex-col translate-y-[60%] space-y-1 items-center justify-center text-center transition-all duration-500 group-hover:translate-y-0 ">
          <p className="underline-offset-1 text-sm italic  text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
            {movie?.release_date}
          </p>
         
          <h1 className=" px-2 text-sm font-bold flex-wrap opacity-0 text-white group-hover:opacity-100">{movie?.title}</h1>
          <p className="underline-offset-1 text-sm italic  text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
        {movie?.media_type}
      </p>
        </div>
       
     </div>
    </div>
  );
};

export default MovieCard;
