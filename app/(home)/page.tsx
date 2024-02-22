
import Movie from "../../components/movie";
import styles from '../../styles/home.module.css'
import {API_URL} from "../constants"

export const metadata = {
  title: "Home",
};



async function getMovies() {
  // await new Promise((resolve) => setTimeout(resolve, 1000));
  const response = await fetch(API_URL);
  const json = await response.json();
  return json;
}
export default async function HomePage() {
  const movies = await getMovies();

  return (
    <>
      <div className={styles.container}>
        {movies.map((movie) => (
          <Movie
            key={movie.id}
            id={movie.id}
            poster_path={movie.poster_path}
            title={movie.title}
          />
        ))}
      </div>
    </>
  );
}

/* 기존 코드 */
/* 'use client'

import { useEffect, useState } from "react";

export default function Page() {
  const [isLoading, setIsLoading] = useState(true);
  const [movies, setMovies] = useState([])
  const getMovies = async () => {
    const response = await fetch("https://nomad-movies.nomadcoders.workers.dev/movies")
    const json = await response.json()
    setMovies(json);
    setIsLoading(false);
  }
  useEffect(() => {
    getMovies()
  }, [])
  return (
    <>
      <div>{isLoading ? "Loading..." : JSON.stringify(movies)}</div>
    </>
  );
}
  */
